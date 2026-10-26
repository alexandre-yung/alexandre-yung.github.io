/* Page projet : textes, fiche technique, galerie, visualiseur 3D. */

const { tr, ui, esc, richText } = window.Portfolio;
const DATA = window.PORTFOLIO;

const id = new URLSearchParams(location.search).get("id");
const index = DATA.projects.findIndex(p => p.id === id);
const project = DATA.projects[index];

let viewer = null;
let viewerState = "idle"; // idle | downloading | converting | ready | error

function render() {
  if (!project) {
    document.getElementById("project-root").innerHTML =
      `<div class="wrap not-found"><p>${ui("project.notFound")}</p><a class="btn" href="index.html">${ui("project.back")}</a></div>`;
    return;
  }
  const q = window.Portfolio.lang === "fr" ? "" : "&lang=en";
  document.title = tr(project.title) + " — " + tr(DATA.profile.name);

  const banner = project.banner || project.cover;
  const bannerEl = document.getElementById("p-banner");
  // URL absolue : dans une variable CSS, un chemin relatif serait résolu depuis css/
  bannerEl.style.setProperty("--banner", banner ? `url("${new URL(banner, location.href).href}")` : "none");
  bannerEl.style.backgroundPosition = project.bannerPosition || "";
  bannerEl.classList.toggle("banner-light", project.bannerStyle === "light");
  document.getElementById("p-num").textContent = `P-${project.number || ""} · ${project.year || ""}${project.context ? " · " + tr(project.context) : ""}`;
  document.getElementById("p-title").textContent = tr(project.title);
  document.getElementById("p-summary").textContent = tr(project.summary);
  document.getElementById("p-tags").innerHTML = (project.tags || []).map(t => `<span class="tag">${esc(tr(t))}</span>`).join("");

  document.getElementById("p-sections").innerHTML = (project.sections || [])
    .map(s => `<section><h2>${esc(tr(s.title))}</h2>${richText(s.body)}</section>`).join("");

  document.getElementById("p-specs").innerHTML = (project.specs || [])
    .map(s => `<div><dt>${esc(tr(s.label))}</dt><dd>${esc(tr(s.value))}</dd></div>`).join("");

  const gallery = project.gallery || [];
  document.getElementById("gallery-block").hidden = !gallery.length;
  document.getElementById("p-gallery").innerHTML = gallery
    .map((g, i) => `<figure data-i="${i}"><img src="${esc(g.src)}" alt="${esc(tr(g.caption))}" loading="lazy">${g.caption ? `<figcaption>${esc(tr(g.caption))}</figcaption>` : ""}</figure>`).join("");

  const prev = DATA.projects[index - 1], next = DATA.projects[index + 1];
  document.getElementById("p-nav").innerHTML =
    (prev ? `<a href="project.html?id=${encodeURIComponent(prev.id)}${q}"><span class="dir">← ${ui("project.prev")}</span><strong>${esc(tr(prev.title))}</strong></a>` : "") +
    (next ? `<a class="next" href="project.html?id=${encodeURIComponent(next.id)}${q}"><span class="dir">${ui("project.next")} →</span><strong>${esc(tr(next.title))}</strong></a>` : "");

  renderViewerChrome();
}

// null = détection en cours, false = pas de modèle, sinon { url, bytes }
let model = null;

function renderViewerChrome() {
  const poster = document.getElementById("viewer-poster");
  const btn = document.getElementById("load-model");
  const hint = document.getElementById("viewer-hint");
  const cover = project.poster || project.cover;

  // La visionneuse n'apparaît que si un fichier 3D existe
  document.getElementById("viewer-block").hidden = !model;
  if (!model) return;

  if (cover) { poster.style.backgroundImage = `url("${cover}")`; poster.classList.add("has-image"); }
  btn.textContent = ui("viewer.load");
  const ext = model.url.split(".").pop().toUpperCase();
  const size = window.Portfolio.formatSize(model.bytes);
  hint.textContent = ext + (size ? " · " + ui("viewer.size").replace("{size}", size) : "");

  const status = document.getElementById("viewer-status");
  if (viewerState === "downloading") status.textContent = ui("viewer.loading");
  if (viewerState === "converting") status.textContent = ui("viewer.converting");
  if (viewerState === "error") status.textContent = ui("viewer.error");
}

async function loadModel() {
  if (!model || viewerState !== "idle") return;
  viewerState = "downloading";
  const el = document.getElementById("viewer");
  const overlay = document.getElementById("viewer-overlay");
  document.getElementById("viewer-poster").hidden = true;
  overlay.hidden = false;
  renderViewerChrome();
  try {
    const { mountViewer } = await import("./viewer.js?v=20261026b");
    viewer = await mountViewer(el, model.url, state => { viewerState = state; renderViewerChrome(); }, { up: project.modelUp });
    overlay.hidden = true;
    document.getElementById("viewer-tools").hidden = false;
  } catch (err) {
    console.error(err);
    viewerState = "error";
    overlay.classList.add("error");
    renderViewerChrome();
  }
}

// Le modèle se charge tout seul dès que la visionneuse est visible à l'écran
async function detectModel() {
  if (!project) return;
  model = (await window.Portfolio.findModel(project)) || false;
  renderViewerChrome();
  if (!model) return;
  const el = document.getElementById("viewer");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { io.disconnect(); loadModel(); }
    }, { threshold: 0.25 });
    io.observe(el);
  } else {
    loadModel();
  }
}

document.addEventListener("click", e => {
  if (e.target.closest("#load-model")) { loadModel(); return; }

  const tool = e.target.closest(".viewer-tools button");
  if (tool && viewer) {
    const a = tool.dataset.action;
    if (a === "reset") viewer.resetView();
    if (a === "edges") tool.classList.toggle("active", viewer.toggleEdges());
    if (a === "rotate") tool.classList.toggle("active", viewer.toggleRotate());
    if (a === "fullscreen") viewer.fullscreen();
    return;
  }

  const fig = e.target.closest(".gallery figure");
  if (fig) {
    const g = project.gallery[+fig.dataset.i];
    const lb = document.getElementById("lightbox");
    lb.querySelector("img").src = g.src;
    lb.querySelector(".lightbox-caption").textContent = tr(g.caption);
    lb.hidden = false;
    return;
  }
  if (e.target.closest(".lightbox")) document.getElementById("lightbox").hidden = true;
});
document.addEventListener("keydown", e => { if (e.key === "Escape") document.getElementById("lightbox").hidden = true; });

// Pas de menu "Enregistrer sous" sur le modèle 3D (affichage seulement)
document.getElementById("viewer").addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("langchange", render);
render();
detectModel();
