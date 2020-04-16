---
title: 'Une gestion responsable des webfonts'
description: 'Une solution mise en place pour éviter l’apparition d’un FOIT avec les webfonts.'
date: 2015-06-25T00:00:00Z
path: '/articles/une-gestion-responsable-des-webfonts'
archive: true
---

Jusqu’à très récemment, j’avais tendance à gérer mes webfonts de manière basique en les appelant directement dans mon CSS, que ce soit via CDN (Google webfonts) ou en hébergement personnel. Mais cette manière de faire est propice à l’apparition du FOIT, qui peut être très pénalisant selon les navigateurs. Voici une solution que j’ai mise en place dernièrement, et dont je suis pleinement satisfait.

## Quelques précisions

La notion de _FOIT_ ne parlant pas à tout le monde, commençons par une petite explication : tant que votre navigateur n’a pas téléchargé les _webfonts_ de votre site, le texte ainsi stylé reste invisible pendant un certain temps avant que le navigateur décide d’afficher les polices que vous avez définies par défaut. C’est ce qu’on appelle le _FOIT_, pour _Flash Of Invisible Text_.

Le problème, c’est que ce temps varie selon les navigateurs; et s’il reste raisonnable sur Chrome ou Firefox (de l’ordre de 3 secondes), il peut aller jusqu’à 30 secondes pour Safari iOS par exemple.

<figure>
  <img src="../../images/webfonts-invision.png" alt="Exemple de site avec FOIT">
  <figcaption>Exemple de FOIT : sur ce site, il m’a fallu une dizaine de secondes pour pouvoir accéder au contenu – malgré ma connexion en WiFi.</figcaption>
</figure>

Si l’on considère en outre qu’un site doit en moyenne se charger en 1 seconde avec une connexion rapide, ne pas pouvoir accéder au contenu du site avant 3 secondes n’est de toute façon pas l’idéal.

## La solution au problème

[Plusieurs](http://crocodillon.com/blog/non-blocking-web-fonts-using-localstorage) [techniques](http://jaicab.com/localFont/) ont émergé récemment, mais celle qui a retenu mon attention est celle mise en place par [filament group](https://www.filamentgroup.com/lab/font-events.html).

L’idée est d’utiliser par défaut les polices _websafe_ (cf. [CSS Font Stack](http://www.cssfontstack.com/)) et de prévoir une classe contenant les _webfonts_, par exemple :

```css
body {
  font-family: Sans-serif;
}

.font-loaded {
  font-family: 'Open Sans', Sans-serif;
}
```

On utilise ensuite le loader JS [Font Face Observer](https://github.com/bramstein/fontfaceobserver) créé par [Bram Stein](https://twitter.com/bram_stein) pour détecter le moment où toutes les _webfonts_ seront loadées, et une fois que c’est fait on ajoute notre classe `font-loaded` :

```js
(function(w) {
  if (w.document.documentElement.className.indexOf('fonts-loaded') > -1) {
    return;
  }
  var fontA = new w.FontFaceObserver('Open Sans', {
    weight: 300,
  });
  var fontB = new w.FontFaceObserver('Open Sans', {
    weight: 300,
    style: 'italic',
  });
  w.Promise.all([fontA.check(), fontB.check()]).then(function() {
    w.document.documentElement.className += ' fonts-loaded';
    localStorage.setItem('fontsLoaded', true);
  });
})(this);
```

L’approche de filament group privilégie l’utilisation de cookies, mais quant à moi j’ai préféré me rabattre sur _localStorage_. On crée avec celui-ci un item `fontsLoaded` grâce auquel on pourra ajouter dans notre `<head>` la classe `fonts-loaded` à notre html, comme ceci :

```html
<script>
  if (localStorage.getItem('fontsLoaded')) {
    document.documentElement.className += ' fonts-loaded';
  }
</script>
```

Ainsi, tant que cet item sera encore présent dans notre _localStorage_, la classe en question sera appliquée avant le rendu de la page.

## Une future alternative

L’approche décrite ici me paraît pour l’instant la plus efficace, en attendant une meilleure solution… Celle-ci pourrait bien venir de la proposition _CSS font-rendering_ dont le but est de contrôler directement via CSS le comportement d’affichage de nos _webfonts_. Je vous invite à consulter son [repo Github](https://github.com/KenjiBaheux/css-font-rendering) pour de plus amples informations.
