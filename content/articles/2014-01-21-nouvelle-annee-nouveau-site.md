---
date: 2014-01-21T00:00:00Z
description: Nouvelle refonte pour mon site, avec un regard en arrière sur les différentes
  formes qu'il a pu prendre par le passé.
tags:
- divers
title: Nouvelle année, nouveau site
---

2014 est un bon prétexte pour mettre en place une énième refonte de mon site. Cette fois-ci, le but était de tester l'intégration de polices enfin lissées sous Chrome ainsi que le passage au Vanilla JS. Je vais aussi profiter de l'occasion pour revenir sur les différents designs que le site a connu (avec plus ou moins de réussite je dois dire&nbsp;:))

---

## L'aspect technique

### 1er point&nbsp;: le lissage des polices

Chrome accuse un retard catastrophique sur ce point par rapport à Firefox ou IE. En pixelisant les polices en-dessous d'une certaine taille, il dégrade vraiment leur rendu final. Chrome 32 était supposé régler ce problème mais le résultat reste mitigé à mes yeux. Ceci dit, il est possible de traiter les polices une par une afin de les lisser. Cela se fait de la façon suivante&nbsp;:

1. Posséder la police au format OTF (la convertir depuis TTF le cas échéant)
2. Créer sa webfont de manière classique sur [Fontsquirrel](http://www.fontsquirrel.com/tools/webfont-generator)
3. De ce kit, ne garder que les EOT et SVG
4. Utiliser [sfnt2woff](http://people.mozilla.org/~jkew/woff/) pour obtenir le WOFF à partir de l'OTF.

### 2ème point&nbsp;: Vanilla JS

Exit jQuery, le JS de ce site ne sera plus que du Vanilla histoire de mettre en place de bonnes pratiques. A vrai dire, pour cette première version le JS du site est assez réduit. Entre autres détails, j'ai notamment appliqué à ma navigation sur mobile le principe de _toggle_ d'un état en JS via l'attribut HTML5 `data-*`, comme recommandé dans cet excellent [article](http://toddmotto.com/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states/) de Todd Motto.

## Regard vers le passé

J'ai créé ce site il y a maintenant près de deux ans; le moment semble bon pour revenir sur ses différents habillages. Et avec le recul certaines versions n'étaient pas des plus réussies...

### Version 1

![Site v1](/assets/img/site-v1.jpg)

### Version 2

![Site v2](/assets/img/site-v2.jpg)

### Version 3

![Site v3](/assets/img/site-v3.jpg)

### Version 4

![Site v4](/assets/img/site-v4.jpg)

### Version 5

![Site v5](/assets/img/site-v5.jpg)

### Version 6

![Site v6](/assets/img/site-v6.jpg)

### Version 7

![Site v7](/assets/img/site-v7.jpg)

---

<p class="info">Mise à jour (11/01/2015)&nbsp;: le site a connu plusieurs refontes depuis l'écriture de cet article.</p>
