/* ==========================================================================
   CONTENU DU PORTFOLIO — c'est le seul fichier à modifier pour changer les textes.

   - Chaque texte peut être { fr: "...", en: "..." } ou une simple chaîne (même texte dans les deux langues).
   - Dans les "body" : une ligne vide = nouveau paragraphe ; des lignes commençant par "- " = liste à puces.
   - Ajouter un modèle 3D : déposer le fichier dans le dossier models/ puis renseigner
       model: "models/mon-fichier.step"   (formats acceptés : .step .stp .glb .gltf .stl)
   - Bannière en haut de la page projet : banner: "images/..." (photo réelle de préférence).
     Pour un rendu CAO sur fond clair, ajouter  bannerStyle: "light"  (image entière à droite, texte sombre).
   - Modèle mal orienté ? Ajouter au projet  modelUp: "z"  (couché/debout, Z vers le haut) ou  modelUp: "-y"  (à l'envers).
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
      fr: "Directeur Technique de l'équipe Formula Student de l'ESILV, où je pilote 30 étudiants, et cinq mois en bureau d'études chez South Racing (Dakar, W2RC), avec plus de 45 pièces de rallye-raid conçues et produites selon la réglementation FIA. J'y ai construit un socle complet : conception sous SolidWorks, calcul de structures par éléments finis, simulation CFD, rétro-ingénierie et management d'équipe. Je veux maintenant mettre ces compétences au service de la défense et de l'aéronautique.",
      en: "Technical Director of ESILV's Formula Student team, leading 30 students, and five months in the design office at South Racing (Dakar, W2RC), where I designed and released 45+ rally-raid parts to FIA regulations. Along the way I built a well-rounded skill set: SolidWorks design, finite element structural analysis, CFD, reverse engineering and team management. I now want to put these skills to work in the defence and aerospace industries."
    },
    email: "alexandre.yung@edu.devinci.fr",
    linkedin: "https://www.linkedin.com/in/alexandre-yung",
    cv: "cv/CV_Alexandre_YUNG.pdf",
    photo: "images/profile.jpg"
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

  // Parcours professionnel, du plus récent au plus ancien.
  // "bullets" : liste de missions ; "steps" : frise d'évolution au sein d'une même structure.
  experience: [
    {
      org: "Vinci Eco Drive · Formula Student",
      role: { fr: "Membre liaison au sol → chef d'équipe → Directeur Technique", en: "Suspension member → team lead → Technical Director" },
      period: { fr: "Sept. 2024 – aujourd'hui", en: "Sep 2024 – present" },
      place: { fr: "ESILV, Paris – La Défense", en: "ESILV, Paris – La Défense" },
      intro: {
        fr: "Association Formula Student de l'ESILV : une équipe d'étudiants qui conçoit, fabrique et fait rouler une monoplace électrique à monocoque carbone pour la compétition internationale. En un an et demi, je suis passé de membre de l'équipe Liaison au sol à Directeur Technique de toute la partie mécanique.",
        en: "ESILV's Formula Student association: a student team designing, building and racing an electric single-seater with a carbon monocoque for the international competition. In a year and a half, I went from suspension team member to Technical Director of the whole mechanical side."
      },
      steps: [
        { when: { fr: "Sept. – déc. 2024", en: "Sep – Dec 2024" }, title: { fr: "Membre de l'équipe Liaison au sol", en: "Suspension team member" }, text: {
          fr: "Conception et fabrication de la suspension, de la transmission et de la direction : modélisation CAO, mises en plan, FAO et usinage.",
          en: "Design and manufacturing of the suspension, drivetrain and steering: CAD modelling, drawings, CAM and machining." } },
        { when: { fr: "Déc. 2024 – mars 2025", en: "Dec 2024 – Mar 2025" }, title: { fr: "Chef d'équipe Liaison au sol", en: "Suspension team lead" }, text: {
          fr: "Encadrement de 11 membres : supervision technique, planification, choix stratégiques sur l'évolution de la monoplace, scan 3D de la monocoque carbone.",
          en: "Leading 11 members: technical supervision, planning, strategic choices on the car's development, 3D scan of the carbon monocoque." } },
        { when: { fr: "Mars 2025 – aujourd'hui", en: "Mar 2025 – present" }, title: { fr: "Directeur Technique", en: "Technical Director" }, text: {
          fr: "Management de 30 membres en liaison au sol et aérodynamique : décisions d'architecture, recrutement, répartition des tâches, planning Gantt, budget et coordination avec la fabrication et les systèmes embarqués.",
          en: "Managing 30 members across suspension and aerodynamics: architecture decisions, recruitment, task allocation, Gantt planning, budget and coordination with manufacturing and embedded systems." } }
      ],
      tags: [{ fr: "Management", en: "Management" }, { fr: "Liaison au sol", en: "Vehicle dynamics" }, "CATIA", { fr: "Gestion de projet", en: "Project management" }]
    },
    {
      org: "South Racing",
      role: { fr: "Stagiaire ingénieur mécanique, bureau d'études", en: "Mechanical engineering intern, design office" },
      period: { fr: "Avr. – août 2026 · 5 mois", en: "Apr – Aug 2026 · 5 months" },
      place: { fr: "Lisbonne, Portugal", en: "Lisbon, Portugal" },
      intro: {
        fr: "Écurie de rallye-raid engagée au Dakar et au championnat du monde FIA W2RC, sur le programme Can-Am T3/T4. Plus de 45 pièces conçues et produites, en anglais au quotidien.",
        en: "Rally-raid team racing the Dakar and the FIA W2RC world championship, on the Can-Am T3/T4 programme. 45+ parts designed and produced, working in English every day."
      },
      bullets: [
        { fr: "Conception sous SolidWorks et production de pièces structurelles, mécaniques et aérodynamiques, aujourd'hui en service sur le championnat du monde FIA W2RC.",
          en: "SolidWorks design and production of structural, mechanical and aerodynamic parts, now in service in the FIA W2RC world championship." },
        { fr: "Optimisation structurelle : masse de la crash box réduite de 38 % grâce au calcul analytique et à la simulation par éléments finis.",
          en: "Structural optimisation: crash box mass cut by 38% through analytical sizing and finite element simulation." },
        { fr: "Rétro-ingénierie et R&D : ligne d'échappement, carter de pompe à eau, protections de jantes, spoilers, entrées d'air, conduit d'admission et outillages d'atelier imprimés en 3D.",
          en: "Reverse engineering and R&D: exhaust line, water pump housing, rim protection, spoilers, air intakes, intake duct and 3D-printed workshop tooling." },
        { fr: "Données et gestion : traitement de 69 problèmes techniques (Python), analyse du règlement FIA, livrables tenus dans les délais du calendrier de course, 100 % en anglais.",
          en: "Data and management: processing of 69 technical issues (Python), FIA regulation analysis, deliverables met under race-calendar deadlines, entirely in English." }
      ],
      tags: ["SolidWorks", "FEA", "CFD", { fr: "Rétro-ingénierie", en: "Reverse engineering" }, { fr: "Règlement FIA", en: "FIA regulations" }]
    },
    {
      org: "Mercedes · de Willermin VI",
      role: { fr: "Stagiaire technicien mécanicien poids lourds", en: "Heavy truck mechanic intern" },
      period: { fr: "Juin – juil. 2025 · 2 mois", en: "Jun – Jul 2025 · 2 months" },
      place: { fr: "Vitrolles, France", en: "Vitrolles, France" },
      intro: {
        fr: "Diagnostic, maintenance et réparation de poids lourds en atelier : vidanges, embrayages, freins, boîtes de vitesses et systèmes électroniques. Une expérience concrète du terrain, au contact des pièces que l'on conçoit ensuite en bureau d'études.",
        en: "Diagnosis, maintenance and repair of heavy trucks in the workshop: oil changes, clutches, brakes, gearboxes and electronic systems. Hands-on experience with the kind of parts later designed in a design office."
      },
      tags: [{ fr: "Diagnostic", en: "Diagnostics" }, { fr: "Maintenance", en: "Maintenance" }]
    },
    {
      org: "SYT Technologies",
      role: { fr: "Stage technique en optronique", en: "Optronics technical internship" },
      period: { fr: "Juin – juil. 2018 · 2 mois", en: "Jun – Jul 2018 · 2 months" },
      place: { fr: "Avignon, France", en: "Avignon, France" },
      intro: {
        fr: "Découverte de l'industrie optronique et participation à la conception d'une caméra longue portée, notamment sur les opérations de soudure.",
        en: "Introduction to the optronics industry and contribution to the design of a long-range camera, notably on soldering work."
      },
      tags: [{ fr: "Optronique", en: "Optronics" }]
    }
  ],

  education: [
    { school: "ESILV · École Supérieure d'Ingénieurs Léonard de Vinci", degree: { fr: "Cycle ingénieur · Master Modélisation & Mécanique Numérique", en: "Engineering degree · MSc Modelling & Computational Mechanics" }, period: "2024 – 2027", detail: {
      fr: "Structures numériques, composites et endommagement, rupture, aéroélasticité, dynamique des véhicules.",
      en: "Computational structures, composites and damage, fracture, aeroelasticity, vehicle dynamics." } },
    { school: { fr: "Lycée Thiers, Marseille", en: "Lycée Thiers, Marseille" }, degree: { fr: "Classe préparatoire MPI (maths, physique, informatique)", en: "Preparatory classes, MPI track (maths, physics, computer science)" }, period: "2021 – 2024" },
    { school: { fr: "Lycée de Provence, Marseille", en: "Lycée de Provence, Marseille" }, degree: { fr: "Baccalauréat maths-physique, option maths expertes · mention Bien", en: "French Baccalauréat, maths & physics, advanced maths · with honours" }, period: "2021" }
  ],

  // Engagement et loisirs
  beyond: [
    { icon: "heart", title: { fr: "Dunes d'Espoir", en: "Dunes d'Espoir" }, sub: { fr: "Bénévole · 2016 – 2021", en: "Volunteer · 2016 – 2021" }, text: {
      fr: "Participation à des courses en tirant des joëlettes, pour permettre à des enfants en situation de handicap de vivre pleinement l'émotion d'une course. Une expérience humaine intense, faite de partage et de dépassement de soi.",
      en: "Running races while pulling joëlettes (all-terrain wheelchairs) so that children with disabilities can fully live the thrill of a race. An intense human experience built on sharing and pushing beyond one's limits." } },
    { icon: "bike", title: { fr: "Vélo de route", en: "Road cycling" }, sub: { fr: "Animateur de camp sportif d'été", en: "Summer sports camp leader" }, text: {
      fr: "Encadrement d'un camp d'été de deux semaines, très exigeant physiquement : des sorties de 80 à 100 km par jour, deux jours sur trois, en gérant la sécurité et le rythme du groupe.",
      en: "Leading a physically demanding two-week summer camp: 80 to 100 km rides a day, two days out of three, while managing the group's safety and pace." } },
    { icon: "ball", title: { fr: "Football", en: "Football" }, sub: { fr: "Sport collectif", en: "Team sport" }, text: {
      fr: "Le goût du collectif et de l'engagement pour l'équipe, que je retrouve aujourd'hui dans le travail d'ingénierie en groupe.",
      en: "A taste for teamwork and commitment to the group, which I find again today in engineering team work." } },
    { icon: "music", title: { fr: "Piano", en: "Piano" }, sub: { fr: "Depuis l'enfance · classique et jazz", en: "Since childhood · classical and jazz" }, text: {
      fr: "Des années de pratique entre la rigueur du classique et la liberté du jazz : de la patience, de la régularité et de l'écoute.",
      en: "Years of practice between the rigour of classical music and the freedom of jazz: patience, consistency and listening." } }
  ],
  beyondNote: { fr: "Aussi : surf et ski.", en: "Also: surfing and skiing." },

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
      modelUp: "z",
      number: "01",
      year: "2026",
      context: "South Racing · Can-Am T3/T4",
      title: { fr: "Crash box avant (V2)", en: "Front crash box (V2)" },
      summary: {
        fr: "Refonte d'une pièce de sécurité à absorption d'énergie après rupture en rallye : −38 % de masse, validée par éléments finis et en service en course.",
        en: "Redesign of an energy-absorbing safety part after it failed in a rally: 38% lighter, FEA-validated and now racing."
      },
      tags: ["SolidWorks", "FEA", "GD&T"],
      banner: "images/crash-box/cover.jpg",
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
      title: { fr: "Carter de pompe à eau : sortie latérale", en: "Water pump housing: side outlet redesign" },
      summary: {
        fr: "Rétro-ingénierie du carter de pompe à eau du moteur Maverick R pour faire passer la sortie d'eau de verticale à latérale, puis du raccord Dash 16 associé, fabriqué par le partenaire d'usinage de l'équipe pour deux fois moins cher.",
        en: "Reverse engineering of the Maverick R engine water pump housing to move the coolant outlet from vertical to side-exiting, then of the matching Dash 16 fitting, machined by the team's CNC partner for half the price."
      },
      tags: ["SolidWorks", { fr: "Rétro-ingénierie", en: "Reverse engineering" }, { fr: "Réduction de coût", en: "Cost reduction" }],
      banner: "images/water-pump-housing/cover.jpg",
      bannerStyle: "light",
      cover: "images/water-pump-housing/cover.jpg",
      model: "",
      specs: [
        { label: { fr: "Rôle", en: "Role" }, value: { fr: "Rétro-ingénierie, CAO, mise en plan", en: "Reverse engineering, CAD, drawings" } },
        { label: { fr: "Outils", en: "Tools" }, value: "SolidWorks" },
        { label: { fr: "Sortie d'eau", en: "Coolant outlet" }, value: { fr: "Verticale → latérale, coude intégré", en: "Vertical → side, integrated bend" } },
        { label: { fr: "Interface", en: "Interface" }, value: { fr: "AN16 (Dash 16) · taraudage M32×1,5", en: "AN16 (Dash 16) · M32×1.5 thread" } },
        { label: { fr: "Raccord", en: "Fitting" }, value: { fr: "60 € → 30 € (−50 %), série de 8", en: "€60 → €30 (−50%), batch of 8" } },
        { label: { fr: "Fabrication", en: "Manufacturing" }, value: { fr: "Usinage CNC, partenaire de l'équipe", en: "CNC machining, team partner" } }
      ],
      sections: [
        { title: { fr: "L'objectif", en: "The goal" }, body: {
          fr: "Sur le moteur du Can-Am Maverick R engagé en T3, le carter de pompe à eau d'origine fait sortir le liquide de refroidissement à la verticale. Pour l'adapter au circuit de refroidissement de la voiture de course, il fallait que la sortie fasse un virage et sorte sur le côté, sans rien changer au reste de la pompe.",
          en: "On the Can-Am Maverick R engine racing in T3, the stock water pump housing sends coolant out vertically. To suit the race car's cooling circuit, the outlet had to turn and exit sideways, without changing anything else on the pump."
        }},
        { title: { fr: "Rétro-ingénierie du carter", en: "Reverse engineering the housing" }, body: {
          fr: "Le carter est la pièce maîtresse du projet : il ferme la pompe et le liquide circule à l'intérieur avec des écoulements complexes. Il demande donc une grande précision.\n\n- Relevé et reproduction de toutes les interfaces de la pièce d'origine : points de fixation, plan de joint et logement de la turbine, pour un montage direct sur le moteur\n- Reconception du canal de sortie : la sortie verticale devient un coude intégré qui débouche sur le côté, avec une section continue pour ne pas perturber l'écoulement\n- Sortie taraudée M32×1,5 pour recevoir un raccord AN16 (Dash 16)\n- Logo de l'équipe intégré au carter",
          en: "The housing is the core of the project: it closes the pump and coolant flows through it with complex hydraulic paths, so it demands high precision.\n\n- Survey and reproduction of every interface of the original part: mounting points, sealing face and impeller cavity, so it bolts straight onto the engine\n- Redesign of the outlet channel: the vertical outlet becomes an integrated bend exiting sideways, with a continuous cross-section so the flow is not disturbed\n- M32×1.5 threaded outlet to take an AN16 (Dash 16) fitting\n- Team logo built into the housing"
        }},
        { title: { fr: "Le raccord Dash 16 – M32×1,5", en: "The Dash 16 – M32×1.5 fitting" }, body: {
          fr: "Pour raccorder la nouvelle sortie, l'adaptateur du commerce coûtait 60 € pièce, en inox. J'ai fait la rétro-ingénierie de ce raccord et l'ai mis en plan pour le faire usiner par le partenaire CNC de South Racing : 30 € pièce sur une série de 8, soit deux fois moins cher.",
          en: "To connect the new outlet, the off-the-shelf adapter cost €60 each, in stainless steel. I reverse engineered the fitting and drew it up so South Racing's CNC partner could machine it: €30 each in a batch of 8, half the price."
        }},
        { title: { fr: "Résultat", en: "Outcome" }, body: {
          fr: "Un carter à sortie latérale qui se monte directement à la place de la pièce d'origine, avec ses plans de fabrication, et un raccord produit en interne pour deux fois moins cher que l'équivalent du commerce.",
          en: "A side-outlet housing that fits directly in place of the original part, with its manufacturing drawings, and a fitting made in-house for half the price of the off-the-shelf equivalent."
        }}
      ],
      gallery: [
        { src: "images/water-pump-housing/cover.jpg", caption: { fr: "Carter à sortie latérale, modèle CAO", en: "Side-outlet housing, CAD model" } },
        { src: "images/water-pump-housing/section.jpg", caption: { fr: "Coupe du canal de sortie : coude et taraudage M32×1,5", en: "Outlet channel section: bend and M32×1.5 thread" } },
        { src: "images/water-pump-housing/dash16.jpg", caption: { fr: "Raccord Dash 16 – M32×1,5 usiné", en: "Machined Dash 16 – M32×1.5 fitting" } }
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
      banner: "images/t3-exhaust/cover.jpg",
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
      title: { fr: "Durite filtre à air → turbo : étude CFD", en: "Air filter to turbo pipe: CFD study" },
      summary: {
        fr: "Simulation de mécanique des fluides sous Ansys Fluent du conduit d'admission du T3 : trois géométries comparées, puis un modèle recalé sur des mesures de banc pour décider si une nouvelle pièce valait l'effort.",
        en: "Ansys Fluent CFD study of the T3 intake duct: three geometries compared, then a model calibrated on bench measurements to decide whether a new part was worth it."
      },
      tags: ["CFD", "SolidWorks"],
      banner: "images/air-intake-pipe/banner.jpg",
      cover: "images/air-intake-pipe/cover.jpg",
      model: "",
      specs: [
        { label: { fr: "Rôle", en: "Role" }, value: { fr: "Modélisation, simulation CFD, analyse", en: "Modelling, CFD simulation, analysis" } },
        { label: { fr: "Outils", en: "Tools" }, value: "SolidWorks · Ansys Fluent" },
        { label: { fr: "Bride", en: "Restrictor" }, value: { fr: "Ø 28,5 mm (règlement T3)", en: "Ø28.5 mm (T3 regulations)" } },
        { label: { fr: "Maillage", en: "Mesh" }, value: { fr: "Éléments de 5 mm", en: "5 mm elements" } },
        { label: { fr: "Géométries", en: "Geometries" }, value: { fr: "3 versions comparées", en: "3 versions compared" } },
        { label: { fr: "Débits simulés", en: "Simulated mass flow" }, value: { fr: "0,125 et 0,141 kg/s", en: "0.125 and 0.141 kg/s" } },
        { label: { fr: "Perte de charge", en: "Pressure drop" }, value: { fr: "≈ 67 Pa (pression totale)", en: "≈ 67 Pa (total pressure)" } }
      ],
      sections: [
        { title: { fr: "La question", en: "The question" }, body: {
          fr: "En catégorie T3, tout l'air du moteur passe par une bride de 28,5 mm imposée par le règlement avant d'entrer dans le turbo. Entre le filtre à air et cette bride, la durite d'origine fait un coude serré. La question posée : ce coude crée-t-il assez de perte de charge et de turbulence pour justifier une nouvelle pièce ?",
          en: "In the T3 class, all the engine's air goes through a 28.5 mm restrictor required by the regulations before entering the turbo. Between the air filter and that restrictor, the stock hose makes a tight bend. The question: does that bend cause enough pressure loss and turbulence to justify a new part?"
        }},
        { title: { fr: "Mise en place de la simulation", en: "Simulation set-up" }, body: {
          fr: "- Volume fluide extrait de la CAO du conduit (filtre → bride)\n- Maillage du domaine avec des éléments de 5 mm\n- Entrée en pression atmosphérique (pression totale relative de 0 Pa), côté filtre\n- Sortie en débit massique imposé, côté turbo\n- Post-traitement : lignes de courant, champ de pression, profil de vitesse et énergie cinétique turbulente dans la section de sortie",
          en: "- Fluid volume extracted from the duct CAD (filter → restrictor)\n- Domain meshed with 5 mm elements\n- Atmospheric pressure inlet (0 Pa gauge total pressure) on the filter side\n- Imposed mass-flow outlet on the turbo side\n- Post-processing: pathlines, pressure field, velocity profile and turbulent kinetic energy across the outlet section"
        }},
        { title: { fr: "Trois géométries comparées", en: "Three geometries compared" }, body: {
          fr: "Trois versions du conduit ont été simulées dans les mêmes conditions : le modèle de départ, puis deux variantes (V2 et V3) qui modifient le tracé du coude.\n\nPour chacune, j'ai comparé les lignes de courant (zones d'accélération et de décollement dans le coude), la répartition de pression le long du conduit, et surtout ce qui arrive au turbo : l'homogénéité du profil de vitesse et le niveau de turbulence dans la section de sortie. Les vitesses maximales atteignent environ 22 m/s dans le coude.",
          en: "Three versions of the duct were simulated under the same conditions: the starting model, then two variants (V2 and V3) changing the bend's path.\n\nFor each one I compared the pathlines (acceleration and separation zones in the bend), the pressure distribution along the duct, and above all what reaches the turbo: how uniform the velocity profile is and how much turbulence there is across the outlet section. Peak velocities reach about 22 m/s in the bend."
        }},
        { title: { fr: "Remettre en cause l'hypothèse de débit", en: "Challenging the mass-flow assumption" }, body: {
          fr: "Le débit de départ venait d'un calcul théorique sur le moteur (2,0 L, 7 000 tr/min, rendement volumétrique 0,9, rapport de pression 4), soit environ 0,46 kg/s. Un ingénieur partenaire nous a transmis des mesures de banc : débit et perte de charge de la bride, seule puis avec la durite d'origine. Elles ont montré que ce débit était largement surestimé, car la bride limite le débit bien avant. La simulation a donc été corrigée :\n\n- Débit en régime de course : 450 kg/h, soit 0,125 kg/s\n- Débit maximal, bride saturée : 510 kg/h, soit 0,141 kg/s\n- L'écoulement atteint Mach 1 dans la bride : l'air n'est plus modélisé à densité constante mais en gaz parfait compressible",
          en: "The starting mass flow came from a theoretical engine calculation (2.0 L, 7,000 rpm, 0.9 volumetric efficiency, pressure ratio 4), about 0.46 kg/s. A partner engineer shared bench measurements: mass flow and pressure drop of the restrictor alone, then with the stock hose. They showed this flow was heavily overestimated, because the restrictor caps the flow long before. The simulation was corrected:\n\n- Race regime flow: 450 kg/h, i.e. 0.125 kg/s\n- Maximum flow, choked restrictor: 510 kg/h, i.e. 0.141 kg/s\n- The flow reaches Mach 1 in the restrictor, so air is no longer modelled at constant density but as a compressible ideal gas"
        }},
        { title: { fr: "Conclusion", en: "Conclusion" }, body: {
          fr: "Avec les débits réels, la perte de pression totale moyenne dans la durite est d'environ 67 Pa, faible devant celle du filtre et de la bride. Le gain possible en redessinant la durite est donc limité : garder l'air d'admission le plus frais possible a bien plus d'effet sur la performance moteur. L'étude a permis de prendre cette décision sur des chiffres plutôt que sur une intuition.",
          en: "With the real flow rates, the average total pressure loss in the duct is about 67 Pa, small compared with the filter and the restrictor. The possible gain from redesigning the duct is therefore limited; keeping intake air as cool as possible matters far more for engine performance. The study let the team make that call on numbers rather than gut feeling."
        }}
      ],
      gallery: [
        { src: "images/air-intake-pipe/cover.jpg", caption: { fr: "Lignes de courant et pression statique", en: "Pathlines and static pressure" } },
        { src: "images/air-intake-pipe/v1-velocity.jpg", caption: { fr: "Modèle de départ : vitesse le long des lignes de courant", en: "Starting model: velocity along pathlines" } },
        { src: "images/air-intake-pipe/v3-velocity.jpg", caption: { fr: "Version 3 : vitesse le long des lignes de courant", en: "Version 3: velocity along pathlines" } },
        { src: "images/air-intake-pipe/outlet-velocity.jpg", caption: { fr: "Profil de vitesse dans la section de sortie", en: "Velocity profile across the outlet" } },
        { src: "images/air-intake-pipe/outlet-turbulence.jpg", caption: { fr: "Énergie cinétique turbulente en sortie", en: "Turbulent kinetic energy at the outlet" } }
      ]
    },
    {
      id: "rim-check-tool",
      modelUp: "-y",
      number: "05",
      year: "2026",
      context: "South Racing · Can-Am T3/T4",
      title: { fr: "Outil de contrôle des jantes", en: "Rim check tool" },
      summary: {
        fr: "Outil de mesure en 3 pièces imprimé en FDM pour détecter la déformation radiale des jantes, mis au point par itérations de tolérances et utilisé en atelier.",
        en: "3-piece FDM-printed gauge that detects radial rim deformation, refined through tolerance iterations and used in the workshop."
      },
      tags: ["SolidWorks", { fr: "Impression 3D", en: "3D printing" }, { fr: "Tolérancement", en: "Tolerancing" }],
      banner: "images/rim-check-tool/cover.jpg",
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
    },
    {
      id: "rim-scraper",
      number: "06",
      year: "2026",
      context: "South Racing · Can-Am Maverick R",
      title: { fr: "Rim scraper : protection des porte-moyeux", en: "Rim scraper: upright protection" },
      summary: {
        fr: "Racleur qui évacue les cailloux coincés dans la jante avant qu'ils n'abîment le porte-moyeu et l'étrier. Conçu en partant d'une page blanche : benchmark, deux versions, un ensemble de 7 pièces adapté à trois types de jantes.",
        en: "Scraper that clears rocks trapped inside the rim before they damage the upright and caliper. Designed from a blank page: benchmark, two versions, a 7-part assembly adapted to three rim types."
      },
      tags: ["SolidWorks", "Benchmark"],
      banner: "images/rim-scraper/cad-wheel.jpg",
      bannerStyle: "light",
      cover: "images/rim-scraper/cad-wheel.jpg",
      model: "",
      specs: [
        { label: { fr: "Rôle", en: "Role" }, value: { fr: "R&D, benchmark, conception, prototype", en: "R&D, benchmark, design, prototype" } },
        { label: { fr: "Outils", en: "Tools" }, value: "SolidWorks" },
        { label: { fr: "Ensemble", en: "Assembly" }, value: { fr: "7 pièces : corps gauche/droit, renfort, fixation, 3 lames", en: "7 parts: left/right bodies, reinforcement, fixer, 3 blades" } },
        { label: { fr: "Lame d'usure", en: "Wear blade" }, value: { fr: "PEHD, une variante par jante", en: "HDPE, one variant per rim" } },
        { label: { fr: "Jantes couvertes", en: "Rims covered" }, value: "Braid · Evo Corse · Raceline" },
        { label: { fr: "Statut", en: "Status" }, value: { fr: "Monté sur véhicule", en: "Fitted to the car" } }
      ],
      sections: [
        { title: { fr: "Le problème", en: "The problem" }, body: {
          fr: "En rallye-raid, cailloux et boue s'accumulent à l'intérieur de la jante. Coincés entre la jante et le porte-moyeu, ils usent ou cassent l'étrier, le porte-moyeu et la jante elle-même. Le cahier des charges : concevoir un racleur et une protection de jante au moins aussi efficaces que les meilleures solutions existantes, produire un prototype, le tester, l'ajuster puis lancer la production.",
          en: "In rally-raid, rocks and mud build up inside the rim. Trapped between the rim and the upright, they wear or break the caliper, the upright and the rim itself. The brief: design a scraper and rim protection at least as effective as the best existing solutions, build a prototype, test it, adjust it, then release it to production."
        }},
        { title: { fr: "Partir d'une page blanche : le benchmark", en: "Starting from a blank page: benchmark" }, body: {
          fr: "Aucune pièce n'existait dans l'équipe. J'ai d'abord étudié les solutions du marché sur SSV et voitures de rallye, pour en tirer des principes de conception :\n\n- Un racleur fixé sur un point existant (étrier ou porte-moyeu), 100 % boulonné, sans modifier le véhicule\n- Une forme inclinée qui éjecte les débris hors de la jante, plutôt qu'une plaque perpendiculaire où la boue s'accumule jusqu'à la casse\n- Des bords arrondis pour laisser s'échapper les petits cailloux\n- Une pièce d'usure sacrificielle en polyéthylène (PEHD) au contact de la jante, la structure restant en acier\n- Un jeu qui dépend du modèle de jante : la pièce d'usure doit s'adapter à chacune",
          en: "The team had no such part. I first studied the solutions on the market for SSVs and rally cars, to extract design principles:\n\n- A scraper mounted on an existing point (caliper or upright), fully bolt-on, with no change to the vehicle\n- An angled shape that ejects debris out of the rim, instead of a perpendicular plate where mud builds up until it breaks\n- Rounded edges so small rocks can escape\n- A sacrificial polyethylene (HDPE) wear part in contact with the rim, with a steel structure behind it\n- A clearance that depends on the rim model, so the wear part has to be adapted to each one"
        }},
        { title: { fr: "Conception et itérations", en: "Design and iterations" }, body: {
          fr: "- V1 : corps fixé sur le porte-moyeu, avec un jeu de 26,75 mm côté intérieur et 19,07 mm côté extérieur par rapport à la jante\n- V2 : angle d'attaque porté de 110° à 130° pour mieux éjecter les débris, et renfort soudé ajouté\n- Ensemble final de 7 pièces : corps gauche et droit, renfort, fixation de la lame, et trois lames PEHD\n- Une lame par type de jante : la version de base convient à la jante Braid, une lame plus longue côté extérieur pour l'Evo Corse, une autre adaptée à la Raceline",
          en: "- V1: body mounted on the upright, with 26.75 mm of clearance on the inside and 19.07 mm on the outside relative to the rim\n- V2: attack angle increased from 110° to 130° to eject debris better, and a welded reinforcement added\n- Final 7-part assembly: left and right bodies, reinforcement, blade fixer, and three HDPE blades\n- One blade per rim type: the base version fits the Braid rim, a longer outer blade for the Evo Corse, another adapted to the Raceline"
        }},
        { title: { fr: "Résultat", en: "Outcome" }, body: {
          fr: "La dernière version est montée sur le véhicule. La lame PEHD s'use à la place de la jante et du porte-moyeu et se remplace facilement, et une même structure couvre les trois modèles de jantes utilisés par l'équipe.",
          en: "The latest version is fitted to the car. The HDPE blade wears instead of the rim and upright and is easy to replace, and a single structure covers the three rim models used by the team."
        }}
      ],
      gallery: [
        { src: "images/rim-scraper/installed.jpg", caption: { fr: "Racleur en place derrière la jante", en: "Scraper in place behind the rim" } },
        { src: "images/rim-scraper/cad-latest.jpg", caption: { fr: "Dernière version : corps acier et lame PEHD", en: "Latest version: steel body and HDPE blade" } },
        { src: "images/rim-scraper/cad-wheel.jpg", caption: { fr: "Intégration dans la roue et le porte-moyeu", en: "Integration in the wheel and upright" } },
        { src: "images/rim-scraper/cad-v2.jpg", caption: { fr: "V2 : angle porté à 130°", en: "V2: angle increased to 130°" } },
        { src: "images/rim-scraper/cad-v1.jpg", caption: { fr: "V1 sur le porte-moyeu", en: "V1 on the upright" } }
      ]
    }
  ]
};
