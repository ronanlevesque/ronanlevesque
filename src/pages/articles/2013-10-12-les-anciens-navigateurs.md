---
title: 'Les anciens navigateurs'
description: 'Support des anciens navigateurs grâce à différentes méthodes.'
date: 2013-10-12T00:00:00Z
path: '/articles/les-anciens-navigateurs/'
archive: true
---

La vie serait beaucoup plus simple si on n’avait plus à assurer le support des antiquités que sont IE6, 7 et 8. Malheureusement au quotidien ça n’est pas toujours possible; on se retrouve souvent contraints de réaliser le grand écart entre moderne et vieux. Si l’on souhaite se tourner vers une conception moderne en responsive design, comment s’assurer du meilleur support possible ?

<p class="info">Cet article s’attardera uniquement sur la gestion des media queries en responsive design; je ne parlerai pas ici d’autres propriétés CSS3 non supportés par certains de ces navigateurs, par exemple flexbox, border-box etc.</p>

J’ai identifié ci-dessous différentes approches qui permettent de partir d’un modèle de design _mobile first_ pour s’assurer que notre site ressemble quand même à quelque chose sur les vieux dinosaures du web.

## Ne rien faire

Approche la plus simple, puisqu’elle ne demande quasiment aucun effort de notre part. Les _media queries_ n’étant pas compris par IE&lt;9, le navigateur affichera la version mobile du site. Pour rendre tout ça un peu moins moche, rien n’empêche de limiter la largeur maximum du contenu à coups de `max-width` et de [commentaires conditionnels](http://briangelhaus.com/blog/target-ie-in-css/).

A priori, cette approche n’est pas idéale, puisque les utilisateurs risquent d’être un peu perturbés par le fait de naviguer sur une version mobile. Ceci dit c’est toujours mieux qu’un site sur lequel il est impossible de naviguer.

## Cibler IE<9 en CSS

Grâce aux [commentaires conditionnels](http://briangelhaus.com/blog/target-ie-in-css/) dont je parlais ci-dessus, il est assez facile de créer des classes spécifiques, par exemple :

```css
.ie8 .header {
  // bla bla bla
}
```

Cette approche est toutefois assez fastidieuse, elle nécessite en effet de réecrire toutes les propriétés css comprises dans les _media queries_ qui se situent autour des dimensions "habituelles" de ces navigateurs (1000-1200 px). Niveau maintenance, ça n’est pas non plus idéal puisque l’on doit mettre à jour le CSS spécifique à IE en même temps que le CSS global.

## Cibler IE&lt;9 avec Sass

Une technique très intéressante, [démontrée ici](http://jakearchibald.github.io/sass-ie/) par [Jake Archibald](http://jakearchibald.com/) (Google Chrome). Elle tire parti de la puissance de Sass et de ses `@mixin` pour créer une feuille de styles spécifique à IE&lt;9.

Il est ainsi facile de définir les _media queries_ que l’on souhaite intégrer dans celle-ci, par exemple toutes celles qui sont inférieures à 1200px. La feuille de style ajoutera ensuite tous les styles des _media queries_ jusqu’à 1200px.

Cette méthode implique en revanche d’écrire des _media queries_ propres à chaque élément, par exemple :

```css
.element {
  color: red;

  @media screen and (min-width: 1100px) {
    color: blue;
  }
}
```

Un "inconvénient" quasiment négligeable si vous prenez soin de minifier et gzipper vos CSS, sans compter un gros gain en maintenabilité.

## Respond.js

Contrairement aux techniques ci-dessus, ce polyfill très léger (3ko) assure le support des _media queries_ pour `max-width` et `min-width`. On n’a donc plus à se soucier de créer une feuille de styles spécifique puisque le script se chargera de tout. Le fichier devra être intégré dans le `<head>` de la page pour qu’il soit exécuté le plus tôt possible.

[Voir Respond.js sur Github](https://github.com/scottjehl/Respond)

Le seul bémol que je vois à son utilisation est qu’il doit être hébergé sur le même serveur que la page; si ça n’est pas le cas il faudra uploader une page proxy pour permettre la communication cross-domain (cf. l’exemple sur Github).

<p class="info">Mise à jour (29/10/2015) : étant donné que ces navigateurs ne sont plus maintenus, cet article peut être considéré comme obsolète :)</p>
