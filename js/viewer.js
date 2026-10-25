/* Visualiseur 3D : STEP / STP (converti dans le navigateur), GLB / GLTF, STL. */

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { STLLoader } from "three/addons/loaders/STLLoader.js";

const OCCT_BASE = "https://cdn.jsdelivr.net/npm/occt-import-js@0.0.22/dist/";
const DEFAULT_COLOR = 0xb9c0ca;

let occtPromise = null;
function loadOcct() {
  if (!occtPromise) {
    occtPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = OCCT_BASE + "occt-import-js.js";
      s.onload = () => window.occtimportjs({ locateFile: name => OCCT_BASE + name }).then(resolve, reject);
      s.onerror = () => reject(new Error("occt-import-js"));
      document.head.appendChild(s);
    });
  }
  return occtPromise;
}

function cadMaterial(color) {
  return new THREE.MeshStandardMaterial({
    color, metalness: 0.15, roughness: 0.55,
    polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1
  });
}

async function parseStep(buffer, onStatus) {
  onStatus("converting");
  const occt = await loadOcct();
  const result = occt.ReadStepFile(new Uint8Array(buffer), {
    linearUnit: "millimeter",
    linearDeflectionType: "bounding_box_ratio",
    linearDeflection: 0.001,
    angularDeflection: 0.5
  });
  if (!result.success || !result.meshes.length) throw new Error("STEP vide ou illisible");

  const group = new THREE.Group();
  for (const m of result.meshes) {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(m.attributes.position.array, 3));
    if (m.attributes.normal) geom.setAttribute("normal", new THREE.Float32BufferAttribute(m.attributes.normal.array, 3));
    geom.setIndex(new THREE.Uint32BufferAttribute(Uint32Array.from(m.index.array), 1));
    if (!m.attributes.normal) geom.computeVertexNormals();

    const base = m.color ? new THREE.Color(m.color[0], m.color[1], m.color[2]) : new THREE.Color(DEFAULT_COLOR);
    let material = cadMaterial(base);

    // Couleurs par face exportées depuis SolidWorks
    const faces = m.brep_faces || [];
    if (faces.some(f => f.color)) {
      const mats = [cadMaterial(base)];
      const byColor = new Map();
      for (const f of faces) {
        let idx = 0;
        if (f.color) {
          const key = f.color.join(",");
          if (!byColor.has(key)) {
            byColor.set(key, mats.length);
            mats.push(cadMaterial(new THREE.Color(f.color[0], f.color[1], f.color[2])));
          }
          idx = byColor.get(key);
        }
        geom.addGroup(f.first * 3, (f.last - f.first + 1) * 3, idx);
      }
      material = mats;
    }
    const mesh = new THREE.Mesh(geom, material);
    mesh.name = m.name || "";
    group.add(mesh);
  }
  return group;
}

async function parseGltf(buffer) {
  const gltf = await new GLTFLoader().parseAsync(buffer, "");
  return gltf.scene;
}

function parseStl(buffer) {
  const geom = new STLLoader().parse(buffer);
  geom.computeVertexNormals();
  return new THREE.Mesh(geom, cadMaterial(new THREE.Color(DEFAULT_COLOR)));
}

/**
 * Monte le visualiseur dans `container` et charge `url`.
 * onStatus(state) : "downloading" | "converting" | "ready"
 */
export async function mountViewer(container, url, onStatus = () => {}) {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100000);

  // Éclairage studio neutre
  scene.add(new THREE.HemisphereLight(0xffffff, 0xd9dcd8, 1.4));
  const key = new THREE.DirectionalLight(0xffffff, 2.0);
  const fill = new THREE.DirectionalLight(0xffffff, 0.7);
  const rim = new THREE.DirectionalLight(0xffffff, 0.6);
  scene.add(key, fill, rim);

  onStatus("downloading");
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status + " — " + url);
  const buffer = await res.arrayBuffer();

  const ext = url.split("?")[0].split(".").pop().toLowerCase();
  let model;
  if (ext === "step" || ext === "stp") model = await parseStep(buffer, onStatus);
  else if (ext === "glb" || ext === "gltf") model = await parseGltf(buffer);
  else if (ext === "stl") model = parseStl(buffer);
  else throw new Error("Format non pris en charge : ." + ext);

  // Centre le modèle et le pose sur la grille
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(new THREE.Vector3(center.x, box.min.y, center.z));
  scene.add(model);

  const radius = Math.max(size.x, size.y, size.z) * 0.5 || 1;
  const grid = new THREE.GridHelper(radius * 6, 30, 0xc9cdd3, 0xe3e5e8);
  grid.material.transparent = true;
  grid.material.opacity = 0.7;
  scene.add(grid);

  key.position.set(radius * 3, radius * 5, radius * 4);
  fill.position.set(-radius * 4, radius * 2, -radius * 1);
  rim.position.set(0, radius * 3, -radius * 5);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.autoRotateSpeed = 1.2;
  const target = new THREE.Vector3(0, size.y / 2, 0);

  camera.near = radius / 100;
  camera.far = radius * 200;
  camera.updateProjectionMatrix();

  function resetView() {
    const dist = radius / Math.sin(THREE.MathUtils.degToRad(camera.fov / 2)) * 1.15;
    const dir = new THREE.Vector3(1, 0.7, 1.2).normalize();
    camera.position.copy(target).addScaledVector(dir, dist);
    controls.target.copy(target);
    controls.minDistance = radius * 0.3;
    controls.maxDistance = dist * 4;
    controls.update();
  }
  resetView();

  // Arêtes (calculées à la demande)
  let edges = null;
  function toggleEdges() {
    if (!edges) {
      edges = new THREE.Group();
      model.updateMatrixWorld(true);
      model.traverse(o => {
        if (!o.isMesh) return;
        const line = new THREE.LineSegments(
          new THREE.EdgesGeometry(o.geometry, 30),
          new THREE.LineBasicMaterial({ color: 0x2a2f38, transparent: true, opacity: 0.55 })
        );
        line.applyMatrix4(o.matrixWorld);
        edges.add(line);
      });
      edges.visible = false;
      scene.add(edges);
    }
    edges.visible = !edges.visible;
    return edges.visible;
  }

  container.appendChild(renderer.domElement);
  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(container);
  resize();

  renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
  });

  onStatus("ready");

  return {
    resetView,
    toggleEdges,
    toggleRotate() { controls.autoRotate = !controls.autoRotate; return controls.autoRotate; },
    fullscreen() {
      if (document.fullscreenElement) document.exitFullscreen();
      else container.requestFullscreen && container.requestFullscreen();
    }
  };
}
