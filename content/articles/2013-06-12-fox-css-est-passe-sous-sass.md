---
date: 2013-06-12T00:00:00Z
description&nbsp;: Passage de mon framework CSS, FOX CSS, sous Sass
tags:
- css
- sass
- rwd
title: FOX CSS est passé sous Sass
---

J'ai lancé depuis quelques mois mon petit "framework" CSS perso, [/fox-css/](FOX CSS), et après l'avoir utilisé pour la création de sites allant de sites d'une page à des projets bien plus complexes, je le trouve parfaitement viable par rapport à mes besoins. En parallèle, j'ai aussi passé tous mes projets sous Sass; la suite logique était donc de mixer FOX CSS et Sass.

---

Ce que je considère comme le point fort de ce framework, c'est sa modularité. En fait il était à la base divisé en plusieurs sections, que j'ai légèrement modifiées pour finalement arriver au résultat suivant&nbsp;:

* resets
* formatage
* layouts
* responsive layouts
* support IE

J'ai déjà chanté haut et fort [toute](/articles/le-jour-ou-jai-teste-sass/) [l'estime](/articles/un-mixin-sass-simple-pour-les-media-queries/) que je porte à Sass, je ne vais pas revenir dessus mais une chose est sûre&nbsp;: Sass est idéal pour concrétiser la modularité que je cherchais à intégrer dans FOX CSS.

Celle-ci prend la forme de fichiers partiels, identifiés par un <kbd>\_</kbd> devant leur nom, qui sont ensuite tous appelés dans le fichier SCSS principal. En gros, si un des modules ci-dessus ne nous intéresse pas, on supprime son appel dans le fichier SCSS.

J'ai également intégré un fichier mixin regroupant certains mixins faits maison ou récupérés à gauche à droite afin de compléter le projet.

<p class="link"><a href="https://github.com/eskiiss/FOX-CSS">Voir le projet sur Github</a></p>
