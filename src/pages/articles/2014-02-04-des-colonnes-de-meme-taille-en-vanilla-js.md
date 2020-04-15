---
title: 'Des colonnes de même taille en Vanilla JS'
date: 2014-02-04T00:00:00Z
path: '/articles/des-colonnes-de-meme-taille-en-vanilla-js'
archive: true
---

CSS3 a apporté son lot de nouveautés, parmi lesquelles `flexbox`, un modèle qui propose de [nombreuses solutions](http://philipwalton.github.io/solved-by-flexbox/) de mise en page dont celle qui nous intéresse aujourd’hui : la création de colonnes de hauteur égale. Malheureusement l’utilisation de `flexbox` en production est encore [mitigée](http://caniuse.com/flexbox). Du coup, la meilleure alternative reste pour l’instant le recours au JavaScript.

Quelques lignes de jQuery suffisent pour appliquer à plusieurs colonnes la même hauteur. L’idée que j’avais en tête était de basculer cette façon de faire en Vanilla JS et pousser le concept un peu plus loin en mixant ma mise en page à du responsive design. Pour résumer le principe : En dessous d’une certaine résolution, les blocs sont positionnés les uns en dessous des autres. Au-dessus, ils sont alignés côte-à-côte et prennent la même hauteur. Je vais disséquer ici le code créé pour l’occasion.

On commence par sélectionner toutes nos div possédant la classe `.column` :

```js
var column = document.querySelectorAll('.column');
```

Puis on crée la fonction qui va récupérer la taille maximum de `.column` et on applique cette taille à toutes les autres (on boucle à travers toutes nos `.column` grâce à `for`) :

```js
function sameHeight(el) {
  var maxHeight = 0;
  for (var i = 0; i < el.length; i++) {
    thisHeight = el[i].clientHeight;
    if (thisHeight > maxHeight) {
      maxHeight = thisHeight;
    }
  }
  for (var i = 0; i < el.length; i++) {
    el[i].style.height = maxHeight + 'px';
  }
}
```

La fonction n’est appelée qu’au dessus d’une certaine résolution :

```js
if (window.matchMedia('(min-width: 30em)').matches) {
  sameHeight(column);
}
```

Histoire de garder tout ça propre, on applique une fonction au resize de la fenêtre, tout en continuant de prendre en compte nos media queries :

```js
window.addEventListener(
  'resize',
  function() {
    if (window.matchMedia('(min-width: 30em)').matches) {
      for (var i = 0; i < column.length; i++) {
        column[i].style.height = 'auto';
      }
      sameHeight(column);
    } else {
      for (var i = 0; i < column.length; i++) {
        column[i].style.height = 'auto';
      }
    }
  },
  false
);
```

Et pour finir, dans notre CSS on définit nos `.column` de la manière suivante :

```css
.column {
  border: 1px solid red;
}

@media screen and (min-width: 30em) {
  .column {
    display: inline-block;
    width: 32%;
    vertical-align: top;
  }
}
```

[Voir l’exemple sur JSFiddle](http://jsfiddle.net/JFLQu/1/)

<p class="info">Mise à jour (29/10/2015) : le support de flexbox ayant beaucoup <a href="http://caniuse.com/#search=flexbox">évolué</a>, plus besoin de recourir à du JS pour ça.</p>
