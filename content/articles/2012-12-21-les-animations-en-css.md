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

<h2>Le principe</h2>

La déclaration de l'animation dans le CSS se fait en 2 étapes&nbsp;:

<ul>
	<li>On définit au minimum les choses suivantes&nbsp;: le nom que l'on souhaite donner à notre animation (<code>animation-name</code>), la durée de l'animation (<code>animation-duration</code>) et le nombre de boucles (<code>animation-iteration-count</code>). <a href="https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_animations">D'autres propriétés&nbsp;<sup>EN</sup></a> sont également disponibles, mais nous allons commencer simplement...</li>
	<li>On crée une règle <code>@keyframes</code> identifiée par le nom de notre animation, et au sein de laquelle on précisera les changements que l'on souhaite appliquer, ainsi que le moment on souhaite les appliquer.</li>
</ul>

<h2>Syntaxe et valeurs de @keyframes</h2>

La syntaxe est la suivante&nbsp;:

<pre><code class="css">@keyframes &lt;identifiant&gt;  {
  [ [ from | to | &lt;pourcentage&gt; ] [, from | to | &lt;pourcentage&gt; ]* bloc ]*
}
</code></pre>

Regardons ça en détails&nbsp;:

<ul>
<li>&lt;identifiant&gt;&nbsp;: le nom que vous avez donné à votre animation</li>
<li>from&nbsp;: le point de départ, équivalent à 0%</li>
<li>to&nbsp;: le point d'arrivée, équivalent à 100%</li>
<li>&lt;pourcentage&gt;&nbsp;: pourcentage du temps de l'animation auquel la keyframe commence</li>
</ul>

<h2>Un exemple</h2>

Puisque rien n'est plus parlant qu'un exemple concret, voyons donc un cas pratique. Mettons que nous ayons un logo intitulé "BigBlue", et que l'on souhaite pour une raison quelconque en animer la deuxième partie, "Blue", afin de lui ajouter un effet flottant et un changement de couleur.

<p class="info">Les <code>@keyframes</code> ne sont pour l'instant supportées que par certains navigateurs&nbsp;: Chrome (et Android), Firefox 5.0+, Opera 12+, Safari 4.0+ et IE 10+ (<a href="https://developer.mozilla.org/fr/docs/CSS/@keyframes">source&nbsp;<sup>EN</sup></a>). Pour profiter de ce tutoriel, assurez-vous d'utiliser un de ces navigateurs&nbsp;:-)</p>

On cible d'abord en HTML l'élément que l'on souhaite animer&nbsp;:

<pre><code class="html">&lt;h1&gt;Big&lt;span class="blue"&gt;Blue&lt;/span&gt;&lt;/h1&gt;</code></pre>

On définit ensuite dans notre CSS les valeurs d'animation: nom de l'animation, durée et boucle souhaitée (de 1, valeur par défaut, à infinite). Ici j'ai regroupé ensemble les 3 propriétés sous la propriété <code>animation</code>.

<pre><code class="css">.blue {
  display: inline-block; /* nécessaire dans cet exemple pour l'animation mouvement */
  animation: bluemove 3s infinite;
}
</code></pre>

Puis on définit notre <code>@keyframes</code>, avec l'état de départ, l'état que l'on souhaite à la moitié de l'animation et l'état de fin (identique à l'état de départ afin de boucler la boucle proprement)&nbsp;:

<pre><code class="css">@keyframes bluemove {
  from {transform: translateY(-5px); color: black;}
  50% {transform: translateY(5px); color: #1785BF;}
  to {transform: translateY(-5px); color: black;}
}
</code></pre>

<p class="demo"><a href="/demos/animations-css3.html">Voir le résultat</a></p>

Attention, dans cet exemple je n'ai volontairement rien préfixé, mais pensez bien à rajouter les préfixes nécessaires de votre côté pour que cela fonctionne (<code>@-webkit-keyframes</code>, <code>@-moz-keyframes</code> etc).

<h2>En conclusion</h2>

Les animations en CSS sont promises à un bel avenir. Elles sont déjà globalement bien supportées (à part quelques mauvais élèves, dont IE9-) et permettent d'obtenir des effets parfois vraiment sympathiques. Attention en revanche à ne pas en user et abuser au risque de perturber la navigation de vos visiteurs !
