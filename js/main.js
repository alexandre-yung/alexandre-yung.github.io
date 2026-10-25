/* Rendu commun : langue, profil, page d'accueil.
   Le contenu (textes, projets) se modifie dans js/content.js, pas ici. */

(function () {
  const DATA = window.PORTFOLIO;

  const UI = {
    fr: {
      "nav.projects": "Projets",
      "nav.about": "À propos",
      "nav.skills": "Compétences",
      "nav.contact": "Contact",
      "hero.seeProjects": "Voir les projets",
      "hero.cv": "Télécharger le CV",
      "filters.all": "Tous",
      "card.model": "Modèle 3D",
      "contact.lead": "Une question sur un projet, une offre de stage ? Écrivez-moi, je réponds rapidement.",
      "contact.email": "Email",
      "contact.cvLabel": "CV",
      "footer.made": "Conçu sous SolidWorks · visualisation three.js",
      "project.back": "Tous les projets",
      "project.specs": "Fiche technique",
      "project.gallery": "Galerie",
      "project.prev": "Projet précédent",
      "project.next": "Projet suivant",
      "project.notFound": "Projet introuvable.",
      "viewer.load": "Afficher le modèle 3D",
      "viewer.loading": "Chargement du modèle…",
      "viewer.converting": "Conversion du fichier STEP… (quelques secondes)",
      "viewer.error": "Impossible de charger le modèle 3D.",
      "viewer.none": "Modèle 3D bientôt disponible",
      "viewer.reset": "Recentrer la vue",
      "viewer.edges": "Afficher les arêtes",
      "viewer.rotate": "Rotation automatique",
      "viewer.fullscreen": "Plein écran",
      "viewer.controls": "Clic gauche : tourner · Clic droit : déplacer · Molette : zoomer",
      "viewer.size": "Fichier de {size}"
    },
    en: {
      "nav.projects": "Projects",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "hero.seeProjects": "View projects",
      "hero.cv": "Download resume",
      "filters.all": "All",
      "card.model": "3D model",
      "contact.lead": "A question about a project or an internship offer? Drop me a line, I reply quickly.",
      "contact.email": "Email",
      "contact.cvLabel": "Resume",
      "footer.made": "Designed in SolidWorks · rendered with three.js",
      "project.back": "All projects",
      "project.specs": "Specifications",
      "project.gallery": "Gallery",
      "project.prev": "Previous project",
      "project.next": "Next project",
      "project.notFound": "Project not found.",
      "viewer.load": "Show 3D model",
      "viewer.loading": "Loading model…",
      "viewer.converting": "Converting STEP file… (a few seconds)",
      "viewer.error": "Could not load the 3D model.",
      "viewer.none": "3D model coming soon",
      "viewer.reset": "Reset view",
      "viewer.edges": "Show edges",
      "viewer.rotate": "Auto-rotate",
      "viewer.fullscreen": "Fullscreen",
      "viewer.controls": "Left click: rotate · Right click: pan · Scroll: zoom",
      "viewer.size": "{size} file"
    }
  };

  function readLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl === "fr" || fromUrl === "en") return fromUrl;
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fr" || saved === "en") return saved;
    } catch (e) { /* stockage indisponible */ }
    return (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  let lang = readLang();

  // Un texte peut être une simple chaîne ou un objet { fr, en }.
  function tr(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[lang] || value.fr || value.en || "";
  }
  function ui(key) { return (UI[lang] && UI[lang][key]) || key; }

  function get(path) {
    return path.split(".").reduce((o, k) => (o ? o[k] : undefined), DATA);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // Paragraphes séparés par une ligne vide ; lignes commençant par "- " → liste.
  function richText(text) {
    return tr(text).trim().split(/\n\s*\n/).map(block => {
      const lines = block.split("\n");
      if (lines.every(l => l.trim().startsWith("- "))) {
        return "<ul>" + lines.map(l => "<li>" + esc(l.trim().slice(2)) + "</li>").join("") + "</ul>";
      }
      return "<p>" + esc(block).replace(/\n/g, "<br>") + "</p>";
    }).join("");
  }

  // Modèle 3D : celui indiqué dans content.js, sinon models/<id>.step ou models/<id>.glb s'il existe.
  const MODEL_EXTS = ["step", "glb"];
  const modelCache = {};
  function findModel(p) {
    if (!modelCache[p.id]) {
      const candidates = p.model ? [p.model] : MODEL_EXTS.map(e => `models/${p.id}.${e}`);
      modelCache[p.id] = (async () => {
        for (const url of candidates) {
          try {
            const res = await fetch(url, { method: "HEAD", cache: "no-store" });
            if (res.ok) return { url, bytes: +res.headers.get("content-length") || 0 };
          } catch (e) { /* hors ligne ou file:// */ }
        }
        return null;
      })();
    }
    return modelCache[p.id];
  }
  function formatSize(bytes) {
    if (!bytes) return "";
    const mb = bytes / 1048576;
    return mb >= 1 ? mb.toFixed(mb >= 10 ? 0 : 1).replace(".", lang === "fr" ? "," : ".") + (lang === "fr" ? " Mo" : " MB")
                   : Math.round(bytes / 1024) + (lang === "fr" ? " ko" : " KB");
  }

  function placeholderSVG() {
    return '<div class="placeholder"><svg viewBox="0 0 100 70"><rect x="10" y="20" width="80" height="34" rx="2"/>' +
      '<circle cx="28" cy="37" r="9"/><circle cx="72" cy="37" r="9"/><path d="M10 12h80M10 9v6M90 9v6M50 20v-8"/>' +
      '<circle cx="28" cy="37" r="2.5"/><circle cx="72" cy="37" r="2.5"/></svg></div>';
  }

  function applyCommon() {
    document.documentElement.lang = lang;
    const p = DATA.profile;
    p.emailHref = p.email ? "mailto:" + p.email : "";
    p.linkedinLabel = (p.linkedin || "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = ui(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-title]").forEach(el => { el.title = ui(el.dataset.i18nTitle); });
    document.querySelectorAll("[data-bind]").forEach(el => { el.textContent = tr(get(el.dataset.bind)); });
    document.querySelectorAll("[data-href]").forEach(el => {
      const href = tr(get(el.dataset.href));
      if (href) { el.href = href; el.hidden = false; } else { el.hidden = true; }
    });
    document.querySelectorAll("[data-show]").forEach(el => { el.hidden = !tr(get(el.dataset.show)); });
    document.querySelectorAll(".lang-toggle").forEach(btn => { btn.textContent = lang === "fr" ? "EN" : "FR"; });
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------- Page d'accueil ---------- */
  let activeTag = null;

  function renderHome() {
    const grid = document.getElementById("project-grid");
    if (!grid) return;
    document.title = tr(DATA.profile.name) + " — Portfolio";

    const tagsOf = p => (p.tags || []).map(tr);
    const allTags = [...new Set(DATA.projects.flatMap(tagsOf))];
    const filters = document.getElementById("filters");
    filters.innerHTML = allTags.length > 1
      ? [`<button class="chip${activeTag ? "" : " active"}" data-tag="">${ui("filters.all")}</button>`]
          .concat(allTags.map(t => `<button class="chip${t === activeTag ? " active" : ""}" data-tag="${esc(t)}">${esc(t)}</button>`)).join("")
      : "";

    const q = lang === "fr" ? "" : "&lang=en";
    grid.innerHTML = DATA.projects
      .filter(p => !activeTag || tagsOf(p).includes(activeTag))
      .map(p => `
        <a class="card" data-id="${esc(p.id)}" href="project.html?id=${encodeURIComponent(p.id)}${q}">
          <div class="card-media">
            ${p.cover ? `<img src="${esc(p.cover)}" alt="${esc(tr(p.title))}" loading="lazy">` : placeholderSVG()}
          </div>
          <div class="card-body">
            <div class="card-meta"><span>P-${esc(p.number || "")}</span><span>${esc(p.year || "")}</span></div>
            <h3>${esc(tr(p.title))}</h3>
            <p>${esc(tr(p.summary))}</p>
            <div class="tags">${tagsOf(p).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          </div>
        </a>`).join("");

    // Badge "Modèle 3D" sur les cartes dont le fichier existe
    DATA.projects.forEach(p => findModel(p).then(m => {
      const media = m && grid.querySelector(`.card[data-id="${p.id}"] .card-media`);
      if (media && !media.querySelector(".badge3d")) media.insertAdjacentHTML("beforeend", `<span class="badge3d">${ui("card.model")}</span>`);
    }));

    document.getElementById("about-text").innerHTML = richText(DATA.about.text);
    document.getElementById("facts").innerHTML = (DATA.about.facts || [])
      .map(f => `<div><dt>${esc(tr(f.label))}</dt><dd>${esc(tr(f.value))}</dd></div>`).join("");

    document.getElementById("skills").innerHTML = DATA.skills.map(g => `
      <div class="skill-group">
        <h3>${esc(tr(g.group))}</h3>
        <ul>${g.items.map(s => `
          <li><span>${esc(tr(s.name))}</span>${s.level ? `<span class="skill-level" title="${s.level}/5">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= s.level ? "on" : ""}"></i>`).join("")}</span>` : ""}</li>`).join("")}
        </ul>
      </div>`).join("");
  }

  function render() {
    applyCommon();
    renderHome();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  document.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (chip) { activeTag = chip.dataset.tag || null; renderHome(); return; }
    if (e.target.closest(".lang-toggle")) {
      activeTag = null;
      lang = lang === "fr" ? "en" : "fr";
      try { localStorage.setItem("lang", lang); } catch (err) { /* ignoré */ }
      const url = new URL(location.href);
      if (lang === "en") url.searchParams.set("lang", "en"); else url.searchParams.delete("lang");
      history.replaceState(null, "", url);
      render();
    }
  });

  // Exposé pour project.js
  window.Portfolio = { tr, ui, esc, richText, placeholderSVG, findModel, formatSize, get lang() { return lang; } };

  render();
})();
