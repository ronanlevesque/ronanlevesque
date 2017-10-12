---
date: 2012-12-21T00:00:00Z
description: Explication, tutoriel à l'appui, des principes de base des animations
  en CSS3
tags:
- css
- tutoriels
title: Les animations en CSS
---

Pendant longtemps, les animations d'un site ont été faites en flash ou via des gifs animés, mais tout cela est en passe d'être remplacé grâce à deux nouveaux modules introduits par CSS3, animation et transition. Dans cet article je me concentrerai sur le premier pour vous montrer comment, grâce à une syntaxe claire est simple, il est dorénavant facile de mettre un peu de mouvement sur vos pages...

---

## Le principe

La déclaration de l'animation dans le CSS se fait en 2 étapes&nbsp;:

* On définit au minimum les choses suivantes&nbsp;: le nom que l'on souhaite donner à notre animation (`animation-name`), la durée de l'animation (`animation-duration`) et le nombre de boucles (`animation-iteration-count`). [D'autres propriétés](https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_animations) sont également disponibles, mais nous allons commencer simplement...
* On crée une règle `@keyframes` identifiée par le nom de notre animation, et au sein de laquelle on précisera les changements que l'on souhaite appliquer, ainsi que le moment on souhaite les appliquer.

## Syntaxe et valeurs de @keyframes

La syntaxe est la suivante&nbsp;:

    @keyframes <identifiant>;  {
      [ [ from | to | <pourcentage>; ] [, from | to | <pourcentage&>; ]* bloc ]*
    }

Regardons ça en détails&nbsp;:

* &lt;identifiant&gt;&nbsp;: le nom que vous avez donné à votre animation
* from&nbsp;: le point de départ, équivalent à 0%
* to&nbsp;: le point d'arrivée, équivalent à 100%
* &lt;pourcentage&gt;&nbsp;: pourcentage du temps de l'animation auquel la keyframe commence

## Un exemple

Puisque rien n'est plus parlant qu'un exemple concret, voyons donc un cas pratique. Mettons que nous ayons un logo intitulé "BigBlue", et que l'on souhaite pour une raison quelconque en animer la deuxième partie, "Blue", afin de lui ajouter un effet flottant et un changement de couleur.

<p class="info">Les <code>@keyframes</code> ne sont pour l'instant supportées que par certains navigateurs&nbsp;: Chrome (et Android), Firefox 5.0+, Opera 12+, Safari 4.0+ et IE 10+ (<a href="https://developer.mozilla.org/fr/docs/CSS/@keyframes">source</a>). Pour profiter de ce tutoriel, assurez-vous d'utiliser un de ces navigateurs&nbsp;:-)</p>

On cible d'abord en HTML l'élément que l'on souhaite animer&nbsp;:

    <h1>Big<span class="blue">Blue</span></h1>

On définit ensuite dans notre CSS les valeurs d'animation: nom de l'animation, durée et boucle souhaitée (de 1, valeur par défaut, à infinite). Ici j'ai regroupé ensemble les 3 propriétés sous la propriété `animation`.

    .blue {
      display: inline-block; /* nécessaire dans cet exemple pour l'animation mouvement */
      animation: bluemove 3s infinite;
    }

Puis on définit notre `@keyframes`, avec l'état de départ, l'état que l'on souhaite à la moitié de l'animation et l'état de fin (identique à l'état de départ afin de boucler la boucle proprement)&nbsp;:

    @keyframes bluemove {
      from {transform: translateY(-5px); color: black;}
      50% {transform: translateY(5px); color: #1785BF;}
      to {transform: translateY(-5px); color: black;}
    }

<p class="demo"><a href="/demos/animations-css3.html">Voir le résultat</a></p>

Attention, dans cet exemple je n'ai volontairement rien préfixé, mais pensez bien à rajouter les préfixes nécessaires de votre côté pour que cela fonctionne (`@-webkit-keyframes`, `@-moz-keyframes` etc).

## En conclusion

Les animations en CSS sont promises à un bel avenir. Elles sont déjà globalement bien supportées (à part quelques mauvais élèves, dont IE9-) et permettent d'obtenir des effets parfois vraiment sympathiques. Attention en revanche à ne pas en user et abuser au risque de perturber la navigation de vos visiteurs !
