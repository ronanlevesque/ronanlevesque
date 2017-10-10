---
date: 2013-05-07T00:00:00Z
description: Exemple d'animation d'une bannière grâce à CSS3
tags:
- css
- tutoriels
title: 'Animations en CSS : un cas pratique'
url: "/articles/animations-en-css-un-cas-pratique"
---

J'avais posté il y a quelques temps un bref <a href="http://ronanlevesque.fr/les-animations-en-css/">tutoriel</a> sur les animations en CSS. Depuis je n'avais pas vraiment creusé la question, mais en refaisant le site récemment j'ai décidé d'ajouter un peu de vie dans la bannière, en faisant bouger quelques-uns des éléments du paysage (nuage, fumée de l'usine, drapeau et montgolfière). L'idée ici est de montrer comment ça fonctionne, concrètement.

---

Attention, comme pour le tuto précédent, dans les exemples qui suivent je n'ai rien préfixé pour plus de simplicité.

<p class="info">Mise à jour (04/06/2013)&nbsp;: j'ai changé le header de mon site depuis, mais j'ai laissé un <a href="/old/old5/page.html">exemple</a> en ligne.</p>

<h2>Les animations en détail</h2>

<h3>Les nuages</h3>

La première des animations sur laquelle j'ai travaillé était de faire bouger les nuages comme si ils étaient mûs par un vent d'ouest (de gauche). Il existe deux méthodes pour faire bouger des éléments&nbsp;:

<ol>
<li>Avec les propriétés <code>translate()</code>, <code>translateX()</code> et <code>translateY()</code></li>
<li>En utilisant <code>position:absolute</code> et <code>left</code>, <code>right</code>, <code>top</code>, <code>bottom</code>.</li>
</ol>

Il semblerait que la première solution soit celle à privilégier pour des <a href="http://paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/">soucis de performance&nbsp;<sup>EN</sup></a>. Le hic, c'est que <code>translate()</code> ne bouge l'élément que par rapport à sa position originale. Ça me posait un souci car dans ce cas, impossible d'avoir un contrôle précis de la position de l'élément par rapport à la fenêtre du navigateur. J'ai donc eu recours à la deuxième solution, en utilisant le <code>@keyframes</code> suivant&nbsp;:

<pre><code class="css">@keyframes nuage1 {
  from {left: -200px;}
  to {left: 100%;}
}</code></pre>

De cette façon, mon nuage apparaîtra à chaque fois à 200px du bord gauche de ma fenêtre et se repositionnera bien après être arrivé à 100%. J'ai ensuite attribué plusieurs vitesses à chacun de mes nuages pour leur donner un effet plus réaliste, par exemple&nbsp;:

<pre><code class="css">.nuage1 {
  animation: nuage1 32s linear infinite;
}</code></pre>

Les animations des nuages saccadent légèrement sur Chrome, mais sur Firefox et IE10 c'est plutôt fluide, d'après ce que j'ai testé.

<p class="info">Mise à jour (11/05/2013)&nbsp;: en testant le site sur iPad je me suis rendu compte que l'animation ne marchait pas du tout&nbsp;: les nuages restent collés à 100% de leur position, sans bouger. Je creuserai la question plus tard, en attendant j'ai désactivé leurs animations.</p>

<h3>La montgolfière</h3>

Là, contrairement aux nuages, la montgolfière ne bouge que par rapport à sa position d'origine, l'idée étant de lui donner un léger effet "flottant" de haut en bas. J'ai donc pu utiliser <code>translateY()</code> pour arriver à ce résultat&nbsp;:

<pre><code class="css">@keyframes montgolfiere {
  50% {transform: translateY(10px);}
}</code></pre>

A noter qu'un simple ligne revient ici au même résultat que si l'on avait défini trois étapes à 0, 50 et 100% de notre <code>@keyframes</code>, l'idée étant de faire revenir l'élément à sa position de départ.

<h3>La fumée</h3>

Ici, même principe que pour l'animation de la montgolfière&nbsp;: la fumée se déplacera à chaque fois par rapport à sa position initiale. J'ai également ajouté un effet d'opacité, pour la rendre un peu plus réaliste. Le code est le suivant&nbsp;:

<pre><code class="css">@keyframes fumee {
  from {transform: translate(0px, 0px); opacity: 0;}
  50% {transform: translate(7px, -7px); opacity: 1;}
  to {transform: translate(20px, -20px); opacity: 0;}
}</code></pre>

Arrivée à 100% de l'animation, la fumée repartira de son point de départ.

<h3>Le drapeau</h3>

Pour donner l'impression que le drapeau flotte au vent, c'est plutôt simple&nbsp;: il suffit de changer sa <code>width</code> dans le temps, de la manière suivante&nbsp;:

<pre><code class="css">@keyframes flag {
  50% {width: 4px;}
}</code></pre>

Le drapeau passera de 7 à 4px en boucle, donnant ainsi l'impression qu'il bouge.

<h2>Problèmes rencontrés</h2>

Les animations n'ont rien de sorcier, elles sont simples à utiliser une fois qu'on a saisi le concept de départ. J'ai juste rencontré deux problèmes lors de leur conception...

Tout d'abord, sur Firefox et IE10, les animations de la fumée et de la montgolfière sont légèrement saccadées, contrairement à Chrome. En fait ce dernier semble lisser les animations d'un pixel à un autre, ce qui rend l'image légèrement floue mais donne un meilleur rendu final. Les deux autres navigateurs déplacent l'image pixel par pixel, le rendu est légèrement moins esthétique à mon goût... Mais à ma connaissance on ne peut malheureusement pas y faire grand chose.

Ensuite, après avoir bouclé mes animations, j'ai testé tout ça sur Firefox (niquel), puis sur Chrome (niquel), et arrivé sur IE10&nbsp;: rien ne se passe. Un peu bizarre, IE10 gère normalement très bien les animations, et ce sans avoir besoin de les préfixer. Après avoir vérifié et revérifié la syntaxe, fait quelques tests supplémentaires, et m'être arraché un ou deux cheveux, j'ai trouvé la solution&nbsp;: en fait j'ai créé deux feuilles de styles pour mon site, style.css et expand.css. La deuxième utilise un <code>media</code> avec une <code>(min-width: 35em)</code>. Mes <code>@keyframes</code> étaient situées dans expand.css&nbsp;: dès que je les ai déplacés dans style.css, les animations se sont remises à marcher. Je n'ai aucune idée de la raison pour laquelle IE10 bloque les animations lorsque celles-ci sont contenues dans une feuille de style d'une taille spécifique, mais au moins je sais comment corriger ça maintenant&nbsp;:)

<h2>Fallbacks possibles</h2>

J'ai utilisé un fallback simple pour que le rendu reste agréable sur les navigateurs ne supportant pas les <code>@keyframes</code>&nbsp;: les nuages, fumée et montgolfière sont définis dès le départ en position absolue. Ils seront simplement fixes.
