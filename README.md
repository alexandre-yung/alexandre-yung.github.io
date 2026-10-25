# Portfolio CAO — Alexandre Yung

Site statique (HTML/CSS/JS, aucune installation) avec visualiseur 3D intégré qui lit directement les fichiers **STEP** exportés de SolidWorks.

```
portfolio/
├── index.html          page d'accueil (projets, à propos, compétences, contact)
├── project.html        page d'un projet (project.html?id=crash-box)
├── js/content.js       ← TOUS les textes et la liste des projets : c'est le seul fichier à modifier
├── models/             ← tes fichiers .step / .stp (ou .glb / .stl)
├── images/             ← tes images (une image de couverture par projet, captures, plans…)
└── cv/                 ← ton CV en PDF
```

## Ajouter un modèle 3D (STEP)

1. Dans SolidWorks : **Fichier → Enregistrer sous → STEP AP214 (*.step)**. L'AP214 garde les couleurs.
2. Nomme le fichier exactement comme l'identifiant du projet et place-le dans `models/` :

   | Projet | Nom du fichier |
   |---|---|
   | Crash box | `models/crash-box.step` |
   | Carter de pompe à eau | `models/water-pump-housing.step` |
   | Échappement T3 | `models/t3-exhaust.step` |
   | Durite filtre → turbo | `models/air-intake-pipe.step` |
   | Rim check tool | `models/rim-check-tool.step` |

3. C'est tout : le site détecte le fichier tout seul. Le badge « Modèle 3D » apparaît sur la carte, et sur la page du projet le modèle se charge dès qu'il est visible à l'écran. Le visiteur peut le faire tourner, zoomer, afficher les arêtes ou passer en plein écran.

Un fichier `.glb` portant le même nom est détecté aussi. Pour un autre nom ou une autre extension (`.stp`, `.stl`), renseigne `model: "models/mon-fichier.stp"` dans `js/content.js`.

**Conseils**
- Vise **moins de 20 Mo** par fichier : la conversion prend quelques secondes au-delà. GitHub refuse les fichiers de plus de 100 Mo.
- Pour un gros assemblage, supprime la visserie et les pièces du commerce avant l'export, ou exporte en **.glb**, qui est plus léger et s'affiche instantanément.
- Il n'y a pas de bouton de téléchargement, mais un fichier publié sur un site reste techniquement récupérable.
- **Attention au nom** : sur Mac, le Finder cache souvent l'extension. Si tu tapes `crash-box.step` alors que SolidWorks a déjà ajouté `.STEP`, le fichier devient `crash-box.step.STEP` et n'est pas détecté. Sur GitHub, vérifie que le nom se termine par un seul `.step`.
- **Modèle mal orienté** (debout, couché ou à l'envers) : ajoute `modelUp: "z"` ou `modelUp: "-y"` au projet dans `js/content.js`.

## Ajouter des images

1. Crée un dossier par projet, par exemple `images/crash-box/`.
2. Dans `js/content.js` :
   ```js
   cover: "images/crash-box/cover.jpg",   // image de la carte sur la page d'accueil
   gallery: [
     { src: "images/crash-box/fea.png",  caption: { fr: "Contraintes de Von Mises", en: "Von Mises stress" } },
     { src: "images/crash-box/plan.png", caption: { fr: "Mise en plan", en: "Drawing" } }
   ]
   ```
   Format conseillé : JPG ou PNG, 1600 px de large maximum. Pour la couverture, un rendu SolidWorks sur fond blanc s'accorde bien au style du site.

## Modifier les textes

Tout est dans `js/content.js`. Chaque texte s'écrit `{ fr: "...", en: "..." }`. Dans les paragraphes (`body`), une ligne vide crée un nouveau paragraphe et les lignes commençant par `- ` forment une liste.

## Voir le site sur ton ordinateur

Le visualiseur 3D ne marche pas en double-cliquant sur `index.html` : il faut un petit serveur local. Dans le Terminal, depuis le dossier `portfolio` :

```bash
python3 -m http.server 8000
```

Puis ouvre http://localhost:8000

## Mettre en ligne avec GitHub Pages (gratuit)

1. Crée un compte sur https://github.com si tu n'en as pas.
2. Crée un nouveau dépôt **public** nommé `<ton-pseudo>.github.io`, par exemple `alexandreyung.github.io`. Avec ce nom exact, l'adresse du site sera `https://alexandreyung.github.io`.
3. Sur la page du dépôt : **Add file → Upload files**, puis glisse **le contenu** du dossier `portfolio` (pas le dossier lui-même) et clique **Commit changes**.
4. Va dans **Settings → Pages**, et sous *Branch* choisis `main` et `/ (root)`, puis **Save**.
5. Une ou deux minutes plus tard, le site est en ligne. Ajoute le lien sur LinkedIn (**Profil → Coordonnées → Site web**, ou dans la section *Sélection*).

Pour une mise à jour (nouveau STEP, texte modifié), refais **Add file → Upload files** avec les fichiers modifiés : le site se met à jour tout seul.
