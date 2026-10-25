/* ==========================================================================
   CONTENU DU PORTFOLIO — c'est le seul fichier à modifier pour changer les textes.

   - Chaque texte peut être { fr: "...", en: "..." } ou une simple chaîne (même texte dans les deux langues).
   - Dans les "body" : une ligne vide = nouveau paragraphe ; des lignes commençant par "- " = liste à puces.
   - Ajouter un modèle 3D : déposer le fichier dans le dossier models/ puis renseigner
       model: "models/mon-fichier.step"   (formats acceptés : .step .stp .glb .gltf .stl)
   - Ajouter des images : les déposer dans images/<id-du-projet>/ puis renseigner cover et gallery.
   ========================================================================== */

window.PORTFOLIO = {
  profile: {
    name: "Alexandre Yung",
    title: {
      fr: "Élève-ingénieur en mécanique numérique · Conception mécanique & calcul de structures",
      en: "Computational mechanics engineering student · Mechanical design & structural analysis"
    },
    lookingFor: {
      fr: "Recherche un stage de fin d'études de 6 mois · dès février 2027",
      en: "Seeking a 6-month final-year internship · from February 2027"
    },
    pitch: {
      fr: "Cinq mois en bureau d'études chez South Racing (Dakar, W2RC) à concevoir, dimensionner et produire plus de 45 pièces de rallye-raid selon la réglementation FIA. Je veux maintenant mettre cette rigueur au service de la défense et de l'aéronautique.",
      en: "Five months in the design office at South Racing (Dakar, W2RC), designing, sizing and releasing 45+ rally-raid parts to FIA regulations. I now want to bring that rigour to the defence and aerospace industries."
    },
    email: "alexandre.yung@edu.devinci.fr",
    linkedin: "https://www.linkedin.com/in/alexandre-yung",
    cv: "cv/CV_Alexandre_YUNG.pdf"
  },

  about: {
    text: {
      fr: `Élève-ingénieur à l'ESILV en Master Modélisation & Mécanique Numérique, je m'intéresse à tout le cycle d'une pièce : lire le cahier des charges et le règlement, concevoir sous SolidWorks, dimensionner, simuler, mettre en plan, puis voir la pièce validée sur le véhicule.

De avril à août 2026, j'ai été stagiaire ingénieur bureau d'études chez South Racing à Lisbonne, sur le programme Can-Am T3/T4 engagé au Dakar et en W2RC. J'y ai mené 2 à 4 projets en parallèle, de la refonte d'une crash box validée par éléments finis jusqu'à la rétro-ingénierie complète de lignes d'échappement, dans un environnement 100 % anglophone.

En parallèle, je suis Directeur Technique de l'équipe Formula Student Vinci Eco Drive : 30 étudiants en liaison au sol et aérodynamique, des décisions d'architecture et un planning à tenir.

Je recherche un stage de fin d'études de 6 mois à partir de février 2027, en conception mécanique et calcul de structures, dans la défense ou l'aéronautique.`,
      en: `I'm an engineering student at ESILV (Paris) in a Master's in Modelling & Computational Mechanics. What I enjoy is the full life of a part: reading the spec and the regulations, designing it in SolidWorks, sizing and simulating it, producing the drawings, and seeing it validated on the vehicle.

From April to August 2026 I was a design office engineering intern at South Racing in Lisbon, on the Can-Am T3/T4 programme racing the Dakar and the W2RC. I ran 2 to 4 projects in parallel, from an FEA-validated crash box redesign to full reverse engineering of exhaust lines, working entirely in English.

I'm also Technical Director of the Vinci Eco Drive Formula Student team: 30 students across suspension and aerodynamics, architecture decisions and a schedule to hold.

I'm looking for a 6-month final-year internship starting February 2027, in mechanical design and structural analysis, in the defence or aerospace sector.`
    },
    facts: [
      { label: { fr: "Formation", en: "Education" }, value: { fr: "ESILV · Master Modélisation & Mécanique Numérique (2024–2027)", en: "ESILV · MSc Modelling & Computational Mechanics (2024–2027)" } },
      { label: { fr: "Expérience", en: "Experience" }, value: { fr: "South Racing, Lisbonne · Stagiaire ingénieur BE (04–08/2026)", en: "South Racing, Lisbon · Design engineering intern (04–08/2026)" } },
      { label: "Formula Student", value: { fr: "Directeur Technique · Vinci Eco Drive (30 membres)", en: "Technical Director · Vinci Eco Drive (30 members)" } },
      { label: { fr: "Langues", en: "Languages" }, value: { fr: "Français · Anglais B2+ · Allemand B1", en: "French · English B2+ · German B1" } },
      { label: { fr: "Disponible", en: "Available" }, value: { fr: "Février 2027 · 6 mois", en: "February 2027 · 6 months" } },
      { label: { fr: "Basé à", en: "Based in" }, value: "Paris – La Défense" }
    ]
  },

  skills: [
    { group: { fr: "CAO / DAO", en: "CAD" }, items: [
      { name: { fr: "SolidWorks : paramétrique, Design Tables, assemblages", en: "SolidWorks: parametric, Design Tables, assemblies" } },
      { name: { fr: "Mises en plan cotées avec GD&T", en: "Toleranced drawings with GD&T" } },
      { name: "CATIA V5" }
    ]},
    { group: "Simulation", items: [
      { name: { fr: "Éléments finis : SolidWorks Simulation, Abaqus", en: "FEA: SolidWorks Simulation, Abaqus" } },
      { name: "CFD : Ansys Workbench" },
      { name: { fr: "Calcul analytique de structures", en: "Analytical structural sizing" } }
    ]},
    { group: { fr: "Méthodes", en: "Methods" }, items: [
      { name: { fr: "Rétro-ingénierie et benchmark", en: "Reverse engineering & benchmarking" } },
      { name: { fr: "Sélection de matériaux", en: "Material selection" } },
      { name: { fr: "Gestion de projet, ingénierie système, PLM", en: "Project management, systems engineering, PLM" } }
    ]},
    { group: { fr: "Fabrication", en: "Manufacturing" }, items: [
      { name: { fr: "Impression 3D FDM (PLA, carbone-PLA)", en: "FDM 3D printing (PLA, carbon-PLA)" } },
      { name: { fr: "Conception pour la fabrication (DFM)", en: "Design for manufacturing (DFM)" } },
      { name: { fr: "Usinage, soudage (notions)", en: "Machining, welding (basics)" } }
    ]},
    { group: { fr: "Programmation", en: "Programming" }, items: [
      { name: "Python, MATLAB" },
      { name: "C, C#, SQL" }
    ]}
  ],

  projects: [
    {
      id: "crash-box",
      number: "01",
      year: "2026",
      context: "South Racing · Can-Am T3/T4",
      title: { fr: "Crash box avant (V2)", en: "Front crash box (V2)" },
      summary: {
        fr: "Refonte d'une pièce de sécurité à absorption d'énergie après rupture en rallye : −38 % de masse, validée par éléments finis et en service en course.",
        en: "Redesign of an energy-absorbing safety part after it failed in a rally: 38% lighter, FEA-validated and now racing."
      },
      tags: ["SolidWorks", "FEA", "GD&T"],
      cover: "images/crash-box/cover.jpg",
      model: "",
      specs: [
        { label: { fr: "Rôle", en: "Role" }, value: { fr: "Calcul, conception, mise en plan", en: "Analysis, design, drawings" } },
        { label: { fr: "Outils", en: "Tools" }, value: "SolidWorks Simulation · Abaqus" },
        { label: { fr: "Matériau", en: "Material" }, value: { fr: "Acier DOMEX", en: "DOMEX steel" } },
        { label: { fr: "Cas de charge", en: "Load case" }, value: { fr: "8 000 N", en: "8,000 N" } },
        { label: { fr: "Masse", en: "Mass" }, value: { fr: "5,28 → 3,27 kg (−38 %)", en: "5.28 → 3.27 kg (−38%)" } },
        { label: { fr: "Ensemble", en: "Assembly" }, value: { fr: "Platine, 2 flancs, 2 renforts", en: "Plate, 2 sides, 2 reinforcements" } },
        { label: { fr: "Statut", en: "Status" }, value: { fr: "En production · Rallye du Maroc", en: "In production · Rallye du Maroc" } }
      ],
      sections: [
        { title: { fr: "Le problème", en: "The problem" }, body: {
          fr: "La crash box d'origine du pare-chocs avant des Can-Am T3/T4 a rompu au Maroc. Cette pièce encaisse les chocs frontaux et reprend aussi l'effort de la biellette de barre anti-roulis. Il fallait comprendre la rupture, puis reconcevoir l'ensemble pour qu'il soit à la fois plus léger et plus résistant.",
          en: "The original front bumper crash box on the Can-Am T3/T4 cars failed in Morocco. The part absorbs frontal impacts and also carries the load from the front anti-roll bar link. The job was to understand the failure, then redesign the assembly to be both lighter and stronger."
        }},
        { title: { fr: "Dimensionnement analytique", en: "Analytical sizing" }, body: {
          fr: "Le cas de charge dimensionnant vient de la barre anti-roulis, modélisée comme une barre de torsion :\n\n- Barre Ø 18 mm, longueur en torsion 370 mm, bras de levier efficace r ≈ 105,3 mm (rayon R60 et bras incliné à 70°)\n- Moment polaire J = πd⁴/32 = 10 306 mm⁴, acier G = 80 000 MPa\n- Raideur K = G·J / (L·r²) = 200,96 N/mm\n- Pour 40 mm de débattement en bout de biellette : F = 200,96 × 40 ≈ 8 000 N",
          en: "The sizing load case comes from the anti-roll bar, modelled as a torsion bar:\n\n- Ø18 mm bar, 370 mm torsion length, effective lever arm r ≈ 105.3 mm (R60 bend and 70° arm)\n- Polar moment J = πd⁴/32 = 10,306 mm⁴, steel G = 80,000 MPa\n- Stiffness K = G·J / (L·r²) = 200.96 N/mm\n- For 40 mm of travel at the link: F = 200.96 × 40 ≈ 8,000 N"
        }},
        { title: { fr: "Itérations par éléments finis", en: "FEA iterations" }, body: {
          fr: "Chaque variante a été comparée en simulation à la pièce d'origine, d'abord à 1 000 N puis au cas réel de 8 000 N :\n\n- V1 d'origine, telle que testée au Maroc\n- V2 avec bras de 2 mm puis de 3 mm\n- V3 avec bras de 2 mm et platine triangulée, à 90° puis à 70°\n- Référence : la pièce standard à 8 000 N\n\nLa solution retenue combine une platine modifiée et des renforts en L soudés.",
          en: "Each variant was compared in simulation with the original part, first at 1,000 N and then at the real 8,000 N load case:\n\n- Original V1, as tested in Morocco\n- V2 with 2 mm, then 3 mm arms\n- V3 with 2 mm arms and a triangulated plate, at 90° then at 70°\n- Baseline: the standard part at 8,000 N\n\nThe chosen solution combines a modified plate with welded L-shaped reinforcements."
        }},
        { title: { fr: "Retour du prototype", en: "Prototype feedback" }, body: {
          fr: "Après réception de la V2, trois ajustements :\n\n- Décalage de 2,5 mm pour centrer la bride\n- Angle passé de 90° à 70°, partie intérieure supprimée\n- Ajout des perçages pour le châssis T4, pour une pièce commune aux deux véhicules",
          en: "After receiving the V2 prototype, three adjustments:\n\n- 2.5 mm offset to centre the flange\n- Angle changed from 90° to 70°, inner section removed\n- Holes added for the T4 chassis, so one part fits both vehicles"
        }},
        { title: { fr: "Résultat", en: "Outcome" }, body: {
          fr: "L'ensemble passe de 5,28 kg (pièce standard soudée) à 3,27 kg avant soudure, soit −38 % (3,40 kg une fois soudé). Les plans cotés en GD&T ont été lancés en production en acier DOMEX. La pièce roule sur un véhicule client au Rallye du Maroc.",
          en: "The assembly went from 5.28 kg (standard welded part) to 3.27 kg before welding, a 38% reduction (3.40 kg once welded). The GD&T drawings were released to production in DOMEX steel. The part is racing on a customer car at the Rallye du Maroc."
        }}
      ],
      gallery: [
        { src: "images/crash-box/cover.jpg", caption: { fr: "Crash box V2 montée sur le châssis", en: "V2 crash box fitted to the chassis" } },
        { src: "images/crash-box/cad.jpg", caption: { fr: "Assemblage CAO, renforts en L en bleu", en: "CAD assembly, L-shaped reinforcements in blue" } },
        { src: "images/crash-box/arb-sketch.jpg", caption: { fr: "Esquisse de la barre anti-roulis pour le calcul de raideur", en: "Anti-roll bar sketch used for the stiffness calculation" } },
        { src: "images/crash-box/fea-standard.jpg", caption: { fr: "Pièce standard à 8 000 N (contraintes de Von Mises)", en: "Standard part at 8,000 N (Von Mises stress)" } },
        { src: "images/crash-box/fea-v1.jpg", caption: { fr: "V1 à 1 000 N", en: "V1 at 1,000 N" } },
        { src: "images/crash-box/fea-v2.jpg", caption: { fr: "V2 retenue (contraintes de Von Mises)", en: "Selected V2 (Von Mises stress)" } },
        { src: "images/crash-box/v2-70deg.jpg", caption: { fr: "Retouche après prototype : angle passé à 70°", en: "Post-prototype change: angle set to 70°" } }
      ]
    },
    {
      id: "water-pump-housing",
      number: "02",
      year: "2026",
      context: "South Racing · Can-Am Maverick R T3",
      title: { fr: "Carter de pompe à eau et raccord Dash 16", en: "Water pump housing & Dash 16 fitting" },
      summary: {
        fr: "Carter de pompe à eau du moteur Maverick R et raccord Dash 16 – M32×1,5 conçu en interne : coût divisé par deux face à l'adaptateur du commerce.",
        en: "Water pump housing for the Maverick R engine, plus an in-house Dash 16 – M32×1.5 fitting that halves the cost of the off-the-shelf adapter."
      },
      tags: ["SolidWorks", { fr: "Réduction de coût", en: "Cost reduction" }, "DFM"],
      cover: "images/water-pump-housing/cover.jpg",
      model: "",
      specs: [
        { label: { fr: "Rôle", en: "Role" }, value: { fr: "Benchmark, CAO, mise en plan", en: "Benchmark, CAD, drawings" } },
        { label: { fr: "Outils", en: "Tools" }, value: "SolidWorks" },
        { label: { fr: "Interface", en: "Interface" }, value: { fr: "AN16 (Dash 16) · taraudage M32×1,5", en: "AN16 (Dash 16) · M32×1.5 thread" } },
        { label: { fr: "Coût du raccord", en: "Fitting cost" }, value: { fr: "60 € → 30 € (−50 %)", en: "€60 → €30 (−50%)" } },
        { label: { fr: "Série", en: "Batch" }, value: { fr: "8 pièces, fabrication sous-traitée", en: "8 parts, outsourced manufacturing" } }
      ],
      sections: [
        { title: { fr: "Le besoin", en: "The need" }, body: {
          fr: "Le moteur du Can-Am Maverick R utilisé en T3 avait besoin d'un nouveau carter de pompe à eau, avec une sortie AN16 sur un taraudage M32×1,5 pour se raccorder au circuit de refroidissement de course.",
          en: "The Can-Am Maverick R engine used in T3 needed a new water pump housing with an AN16 outlet on an M32×1.5 thread, to connect to the race cooling circuit."
        }},
        { title: { fr: "Benchmark", en: "Benchmark" }, body: {
          fr: "- Étude d'un couvercle de pompe du commerce pour Maverick R\n- Recherche d'un adaptateur Dash 16 – M32×1,5 dans les catalogues : référence trouvée à 60 €, en inox, matériau peu adapté à l'usage\n- Décision : concevoir notre propre raccord et le faire fabriquer",
          en: "- Review of an aftermarket Maverick R pump cover\n- Search for a Dash 16 – M32×1.5 adapter in supplier catalogues: one found at €60, in stainless steel, a poor material choice for this use\n- Decision: design our own fitting and have it manufactured"
        }},
        { title: { fr: "Conception et résultat", en: "Design & outcome" }, body: {
          fr: "Modélisation du carter de pompe et du raccord Dash 16 – M32×1,5, mise en plan pour la fabrication, logo de l'équipe gravé, puis consultation de plusieurs fournisseurs. Le raccord est produit à 30 € pièce sur une série de 8, soit deux fois moins cher que l'adaptateur du commerce.",
          en: "Modelled the pump housing and the Dash 16 – M32×1.5 fitting, produced the manufacturing drawings, added the team logo and requested quotes from several suppliers. The fitting is made for €30 each in a batch of 8, half the price of the off-the-shelf adapter."
        }}
      ],
      gallery: [
        { src: "images/water-pump-housing/cover.jpg", caption: { fr: "Carter de pompe à eau, modèle CAO", en: "Water pump housing, CAD model" } },
        { src: "images/water-pump-housing/section.jpg", caption: { fr: "Coupe : sortie taraudée M32×1,5", en: "Section view: M32×1.5 threaded outlet" } }
      ]
    },
    {
      id: "t3-exhaust",
      number: "03",
      year: "2026",
      context: "South Racing · Can-Am T3",
      title: { fr: "Ligne d'échappement T3", en: "T3 exhaust line" },
      summary: {
        fr: "Rétro-ingénierie complète de la ligne d'échappement du T3 : 5 tubes cintrés, flexible, silencieux et supports, transformés en CAO prête pour la production.",
        en: "Full reverse engineering of the T3 exhaust line: 5 bent tubes, flex section, silencer and mounts, turned into production-ready CAD."
      },
      tags: ["SolidWorks", { fr: "Rétro-ingénierie", en: "Reverse engineering" }],
      cover: "images/t3-exhaust/cover.jpg",
      model: "",
      specs: [
        { label: { fr: "Rôle", en: "Role" }, value: { fr: "Relevé, CAO, documentation", en: "Survey, CAD, documentation" } },
        { label: { fr: "Outils", en: "Tools" }, value: "SolidWorks" },
        { label: { fr: "Tube", en: "Tube" }, value: { fr: "Inox Ø 2,5\" (63,5 mm), cintrage sur mandrin 1,5D", en: "Stainless Ø2.5\" (63.5 mm), 1.5D mandrel bends" } },
        { label: { fr: "Rayon de cintrage", en: "Bend radius" }, value: { fr: "95,25 mm", en: "95.25 mm" } },
        { label: { fr: "Coudes", en: "Bends" }, value: "45° · 45° · 60° · 70° · 15°" },
        { label: { fr: "Ensemble", en: "Assembly" }, value: { fr: "5 tubes, flexible, silencieux, sonde lambda, support", en: "5 tubes, flex, silencer, lambda boss, mount" } }
      ],
      sections: [
        { title: { fr: "Le besoin", en: "The need" }, body: {
          fr: "La ligne d'échappement du T3 n'existait pas en CAO : impossible de la refabriquer à l'identique ou de la faire évoluer. L'objectif était de la numériser entièrement pour disposer d'un modèle de référence prêt pour la production.",
          en: "The T3 exhaust line had no CAD model, so it could not be rebuilt identically or improved. The goal was to digitise it completely and get a production-ready reference model."
        }},
        { title: { fr: "La démarche", en: "Approach" }, body: {
          fr: "- Relevé à la main de la ligne existante : longueurs droites 70 – 100 – 270 – 200 – 280 – 40 mm\n- Identification des coudes du commerce : inox 2,5\" (63,5 mm), cintrage 1,5D, soit un rayon de 1,5 × 63,5 = 95,25 mm\n- Reconstruction des 5 tubes en CAO avec leurs angles réels (45°, 45°, 60°, 70°, 15°)\n- Adaptation des longueurs pour intégrer les coudes : 55 – 90 – 205 – 155 – 270 – 40 mm\n- Ajout du silencieux, du flexible, du bossage de sonde lambda et du support caoutchouc",
          en: "- Hand survey of the existing line: straight lengths 70 – 100 – 270 – 200 – 280 – 40 mm\n- Identification of the off-the-shelf bends: 2.5\" (63.5 mm) stainless, 1.5D, giving a 1.5 × 63.5 = 95.25 mm radius\n- Rebuild of the 5 tubes in CAD with their real angles (45°, 45°, 60°, 70°, 15°)\n- Lengths adjusted to account for the bends: 55 – 90 – 205 – 155 – 270 – 40 mm\n- Added the silencer, flex section, lambda sensor boss and rubber mount"
        }},
        { title: { fr: "Résultat", en: "Outcome" }, body: {
          fr: "Un assemblage complet et documenté tube par tube, qui sert de référence pour la fabrication et pour les évolutions de la ligne.",
          en: "A complete assembly documented tube by tube, now the reference for manufacturing and for future revisions of the line."
        }}
      ],
      gallery: [
        { src: "images/t3-exhaust/cover.jpg", caption: { fr: "Ligne montée sur le véhicule", en: "Line fitted to the vehicle" } },
        { src: "images/t3-exhaust/cad.jpg", caption: { fr: "Assemblage CAO : tubes, flexible et silencieux", en: "CAD assembly: tubes, flex section and silencer" } }
      ]
    },
    {
      id: "air-intake-pipe",
      number: "04",
      year: "2026",
      context: "South Racing · Can-Am T3",
      title: { fr: "Durite filtre à air → turbo", en: "Air filter to turbo pipe" },
      summary: {
        fr: "Étude CFD du conduit d'admission entre le filtre à air et la bride du turbo, recalée sur des mesures réelles, pour savoir si un nouveau design valait l'effort.",
        en: "CFD study of the intake duct between the air filter and the turbo restrictor, calibrated on real measurements, to find out whether a new design was worth it."
      },
      tags: ["SolidWorks", "CFD"],
      cover: "images/air-intake-pipe/cover.jpg",
      model: "",
      specs: [
        { label: { fr: "Rôle", en: "Role" }, value: { fr: "Modélisation, simulation CFD", en: "Modelling, CFD simulation" } },
        { label: { fr: "Outils", en: "Tools" }, value: "SolidWorks · Ansys Fluent" },
        { label: { fr: "Bride", en: "Restrictor" }, value: { fr: "Ø 28,5 mm", en: "Ø28.5 mm" } },
        { label: { fr: "Débits simulés", en: "Simulated mass flow" }, value: { fr: "0,125 et 0,141 kg/s", en: "0.125 and 0.141 kg/s" } },
        { label: { fr: "Perte de charge", en: "Pressure drop" }, value: { fr: "≈ 67 Pa (pression totale)", en: "≈ 67 Pa (total pressure)" } }
      ],
      sections: [
        { title: { fr: "La question", en: "The question" }, body: {
          fr: "En T3, l'air passe par une bride de 28,5 mm imposée par le règlement avant d'entrer dans le turbo. La durite entre le filtre et la bride crée-t-elle une perte de charge suffisante pour justifier une nouvelle pièce ?",
          en: "In T3, the air goes through a 28.5 mm restrictor required by the regulations before entering the turbo. Does the duct between the filter and the restrictor cause enough pressure loss to justify a new part?"
        }},
        { title: { fr: "Première approche", en: "First approach" }, body: {
          fr: "Premier modèle Ansys Fluent : entrée en pression atmosphérique, sortie en débit massique. Le débit était estimé à partir du moteur (2,0 L, 7 000 tr/min, rendement volumétrique 0,9, rapport de pression 4), soit environ 0,46 kg/s.",
          en: "First Ansys Fluent model: atmospheric pressure inlet, mass-flow outlet. The flow was estimated from the engine (2.0 L, 7,000 rpm, 0.9 volumetric efficiency, pressure ratio 4), giving about 0.46 kg/s."
        }},
        { title: { fr: "Recalage sur mesures réelles", en: "Calibration on real data" }, body: {
          fr: "Un ingénieur partenaire nous a transmis des mesures de banc (débit et perte de charge de la bride, seule et avec la durite d'origine). Ces mesures ont montré que le premier débit était surestimé. La simulation a donc été corrigée :\n\n- Débit en régime de course : 450 kg/h, soit 0,125 kg/s\n- Débit maximal, bride saturée : 510 kg/h, soit 0,141 kg/s\n- L'écoulement atteint Mach 1 dans la bride, donc l'air est modélisé en gaz parfait compressible",
          en: "A partner engineer shared bench measurements (mass flow and pressure drop of the restrictor alone and with the stock hose). They showed the first estimate was too high, so the simulation was corrected:\n\n- Race regime flow: 450 kg/h, i.e. 0.125 kg/s\n- Maximum flow, choked restrictor: 510 kg/h, i.e. 0.141 kg/s\n- The flow reaches Mach 1 in the restrictor, so the air is modelled as a compressible ideal gas"
        }},
        { title: { fr: "Conclusion", en: "Conclusion" }, body: {
          fr: "La perte de pression totale moyenne dans la durite est d'environ 67 Pa, faible devant celle du filtre et de la bride. Redessiner la durite n'apporterait presque rien : garder l'air d'admission le plus frais possible a bien plus d'effet sur la performance moteur. L'étude a évité de lancer une pièce inutile.",
          en: "The average total pressure loss in the duct is about 67 Pa, small compared with the filter and the restrictor. Redesigning the duct would gain almost nothing; keeping intake air as cool as possible matters far more for engine performance. The study avoided launching an unnecessary part."
        }}
      ],
      gallery: [
        { src: "images/air-intake-pipe/cover.jpg", caption: { fr: "Lignes de courant et pression statique (Ansys Fluent)", en: "Pathlines and static pressure (Ansys Fluent)" } }
      ]
    },
    {
      id: "rim-check-tool",
      number: "05",
      year: "2026",
      context: "South Racing · Can-Am T3/T4",
      title: { fr: "Outil de contrôle des jantes", en: "Rim check tool" },
      summary: {
        fr: "Outil de mesure en 3 pièces imprimé en FDM pour détecter la déformation radiale des jantes, mis au point par itérations de tolérances et utilisé en atelier.",
        en: "3-piece FDM-printed gauge that detects radial rim deformation, refined through tolerance iterations and used in the workshop."
      },
      tags: ["SolidWorks", { fr: "Impression 3D", en: "3D printing" }, { fr: "Tolérancement", en: "Tolerancing" }],
      cover: "images/rim-check-tool/cover.jpg",
      model: "",
      specs: [
        { label: { fr: "Rôle", en: "Role" }, value: { fr: "Conception, prototypage, déploiement", en: "Design, prototyping, deployment" } },
        { label: { fr: "Outils", en: "Tools" }, value: "SolidWorks" },
        { label: { fr: "Fabrication", en: "Manufacturing" }, value: { fr: "Impression FDM (Bambu Lab H2S)", en: "FDM printing (Bambu Lab H2S)" } },
        { label: { fr: "Ensemble", en: "Assembly" }, value: { fr: "Moyeu, support centré, bras de mesure", en: "Hub, centred support, measuring arm" } },
        { label: { fr: "Statut", en: "Status" }, value: { fr: "En service · bibliothèque outillage", en: "In use · tooling library" } }
      ],
      sections: [
        { title: { fr: "Le besoin", en: "The need" }, body: {
          fr: "Les étapes de rallye-raid peuvent déformer les jantes. L'atelier avait besoin d'un moyen simple et rapide pour détecter une déformation radiale, sans équipement coûteux.",
          en: "Rally-raid stages can deform rims. The workshop needed a quick, simple way to detect radial deformation without expensive equipment."
        }},
        { title: { fr: "La solution", en: "The solution" }, body: {
          fr: "Un outil en 3 pièces, conçu pour l'impression FDM et le volume d'impression de la machine (340 × 320 × 340 mm) :\n\n- Un support centré sur l'alésage de la jante\n- Un moyeu monté sur un emmanchement hexagonal\n- Un bras qui suit la ligne de la jante en tournant autour du moyeu",
          en: "A 3-piece tool designed for FDM printing and the printer's build volume (340 × 320 × 340 mm):\n\n- A support centred on the rim bore\n- A hub on a hexagonal fit\n- An arm that follows the rim line as it rotates around the hub"
        }},
        { title: { fr: "Mise au point après impression", en: "Tuning after printing" }, body: {
          fr: "Le premier tirage a servi à recaler les jeux, propres à l'impression FDM :\n\n- Diamètre intérieur du support : 77 → 77,5 mm\n- Hauteur du support : 65 → 62 mm\n- Hexagone : 35 → 35,75 mm dans son logement de 36 mm, pour supprimer le jeu\n- Bras : 3 mm de jeu prévus, c'était trop, d'où une longueur passée de 179 à 180,5 mm\n\nValidé en atelier, l'outil a été ajouté à la bibliothèque CAO d'outillage de l'équipe.",
          en: "The first print was used to calibrate clearances, which are specific to FDM printing:\n\n- Support inner diameter: 77 → 77.5 mm\n- Support height: 65 → 62 mm\n- Hexagon: 35 → 35.75 mm in its 36 mm socket, removing play\n- Arm: 3 mm of clearance had been allowed, which was too much, so the length went from 179 to 180.5 mm\n\nValidated in the workshop, the tool was added to the team's special-tools CAD library."
        }}
      ],
      gallery: [
        { src: "images/rim-check-tool/cover.jpg", caption: { fr: "Outil imprimé en place sur une jante", en: "Printed tool in place on a rim" } },
        { src: "images/rim-check-tool/drawing.jpg", caption: { fr: "Mise en plan du bras de mesure", en: "Drawing of the measuring arm" } }
      ]
    }
  ]
};
