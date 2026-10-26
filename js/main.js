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
      "nav.experience": "Parcours",
      "nav.beyond": "Engagement",
      "experience.education": "Formation",
      "beyond.title": "Au-delà de l'ingénierie",
      "beyond.lead": "Ce qui m'anime en dehors du bureau d'études : l'engagement associatif, l'endurance et la musique.",
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
      "nav.experience": "Experience",
      "nav.beyond": "Beyond work",
      "experience.education": "Education",
      "beyond.title": "Beyond engineering",
      "beyond.lead": "What drives me outside the design office: volunteering, endurance sport and music.",
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
    document.querySelectorAll("[data-src]").forEach(el => { const v = tr(get(el.dataset.src)); if (v) { el.src = v; el.alt = tr(p.name); } });
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

    renderExperience();

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

  const ICONS = {
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    bike: '<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l4-7h5l3 7M10 9l2 7h-6M14 6h2.5"/>',
    ball: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5l3.8 2.8-1.5 4.5H9.7l-1.5-4.5zM12 3.5v4M20.2 9.6l-4.4.7M16.9 19.2l-2.6-4.4M7.1 19.2l2.6-4.4M3.8 9.6l4.4.7"/>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>'
  };

  function tagList(tags) {
    return (tags || []).length ? `<div class="tags">${tags.map(t => `<span class="tag">${esc(tr(t))}</span>`).join("")}</div>` : "";
  }

  function renderExperience() {
    const exp = document.getElementById("experience");
    if (exp) exp.innerHTML = (DATA.experience || []).map(e => `
      <article class="exp">
        <div class="exp-meta mono"><span>${esc(tr(e.period))}</span><span>${esc(tr(e.place))}</span></div>
        <div class="exp-body">
          <div class="exp-head">
            ${e.logo ? `<img class="org-logo" src="${esc(e.logo)}" alt="${esc(tr(e.org))}" loading="lazy">` : ""}
            <div>
              <h3>${esc(tr(e.org))}</h3>
              <p class="exp-role">${esc(tr(e.role))}</p>
            </div>
          </div>
          ${e.intro ? `<p class="exp-intro">${esc(tr(e.intro))}</p>` : ""}
          ${e.bullets ? `<ul class="exp-bullets">${e.bullets.map(bl => `<li>${esc(tr(bl))}</li>`).join("")}</ul>` : ""}
          ${e.steps ? `<ol class="steps">${e.steps.map(st => `
            <li><span class="step-when mono">${esc(tr(st.when))}</span><strong>${esc(tr(st.title))}</strong><p>${esc(tr(st.text))}</p></li>`).join("")}
          </ol>` : ""}
          ${tagList(e.tags)}
        </div>
      </article>`).join("");

    const edu = document.getElementById("education");
    if (edu) edu.innerHTML = (DATA.education || []).map(ed => `
      <div class="edu">
        ${ed.logo ? `<img class="org-logo org-logo-sm" src="${esc(ed.logo)}" alt="${esc(tr(ed.school))}" loading="lazy">` : ""}
        <span class="edu-period mono">${esc(tr(ed.period))}</span>
        <strong>${esc(tr(ed.degree))}</strong>
        <span class="edu-school">${esc(tr(ed.school))}</span>
        ${ed.detail ? `<p>${esc(tr(ed.detail))}</p>` : ""}
      </div>`).join("");

    const bey = document.getElementById("beyond");
    if (bey) bey.innerHTML = (DATA.beyond || []).map(b => `
      <article class="beyond-card">
        ${b.logo ? `<img class="org-logo beyond-logo" src="${esc(b.logo)}" alt="${esc(tr(b.title))}" loading="lazy">`
                 : `<span class="beyond-icon"><svg viewBox="0 0 24 24">${ICONS[b.icon] || ""}</svg></span>`}
        <h3>${esc(tr(b.title))}</h3>
        <p class="beyond-sub mono">${esc(tr(b.sub))}</p>
        <p>${esc(tr(b.text))}</p>
      </article>`).join("");
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
