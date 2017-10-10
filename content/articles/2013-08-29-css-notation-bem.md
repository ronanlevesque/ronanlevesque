---
date: 2013-08-29T00:00:00Z
description: Décryptage de la méthode d'écriture BEM en CSS
tags:
- css
- outils
title: CSS et notation BEM
---

Un des gros points noirs du CSS est la complexité que sa maintenance peut parfois engendrer. Cela s'avère surtout vrai pour de gros sites, pour lesquels éditer un simple style peut vite tourner au cauchemar, au risque de casser entièrement votre mise en page. C'est là que des concepts tels que BEM interviennent...

---

<h2>Le principe</h2>

<a href="http://bem.info/method/">BEM</a> est une méthodologie mise au point par <a href="http://www.yandex.com/">Yandex</a>. "BEM" signifie <em>Block, Element, Modifier</em>. l'idée derrière cette méthodologie est de faciliter la lecture (et la ré-usabilité) du code par d'autres développeurs. BEM met l'accent sur la relation qui existe entre différents blocs et éléments. La convention de nommage que j'utilise est la suivante&nbsp;:

<pre><code class="css">.block{}
.block__element{}
.block--modifier{}
</code></pre>

La notation originale proposée par Yandex était différente, mais je préfère celle-ci (utilisée par <a href="http://csswizardry.com/">Harry Roberts</a>)&nbsp;:

<ul>
<li><code>.block</code> sera le niveau le plus haut d'un composant ou d'un module</li>
<li><code>.block__element</code> sera un élément appartenant à <code>.block</code></li>
<li><code>.block--modifier</code> sera une version différente de <code>.block</code></li>
</ul>

Comme je le disais, l'idée est de concrétiser la relation qui va exister entre différents éléments. Prenons l'exemple d'un bloc d'informations contenant un titre, une image présentant différentes variations de style et un paragraphe de texte. Avec BEM, cela va donner&nbsp;:

<pre><code class="css">.bloc-infos
.bloc-infos__titre
.bloc-infos__img
.bloc-infos__img--var-1
.bloc-infos__img--var-2
.bloc-infos__texte
</code></pre>

<p>Ici il est facile d'interpréter que <code>.bloc-infos__titre</code>, <code>.bloc-infos__img</code> et <code>.bloc-infos__texte</code> sont des éléments descendants de <code>.bloc-infos</code> et que <code>.bloc-infos__img--var-1</code> et <code>.bloc-infos__img--var-2</code> sont des variations de <code>.bloc-infos__img</code>. Rien qu'en changeant le nommage des classes, les relations entre les différents éléments sont maintenant évidentes.</p>

<h2>Les éventuelles limites de BEM </h2>

<h3>Un code "moche"</h3>

Un argument récurrent semble être qu'utiliser cette notation va produire un code inesthétique. Mais comme le dit très justement Harry Roberts dans son <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">article explicatif&nbsp;<sup>EN</sup></a>&nbsp;:

> J'affirme que que si vous fuyez le code basé simplement sur son apparence, alors vous ratez souvent l'essentiel.

En effet, le code produit sera plus bizarre que d'habitude, mais cela parait négligeable au vu des bénéfices qu'il apporte.

<h3>Une complexité inutile</h3>

Il peut paraître bien fastidieux de nommer l'ensemble de nos éléments HTML selon cette méthode, créant ainsi une complexité qui n'est pas forcément nécessaire. En fait, c'est à chaque personne d'ajuster sa notation en fonction de sa propre logique. Par exemple, certains éléments appartenant à un bloc n'en seront pas dépendants, la notation BEM ne sera donc pas nécessaire pour eux.

<h2>Conclusion</h2>

BEM est un outil de notation extrêmement utile, favorisant la ré-usabilité et la clarté du code, avec peu ou pas d'inconvénients. Pour l'instant, je ne l'ai testé que sur de petits projets, mais il ne fait aucun doute qu'il montrera tout son potentiel sur un projet de grande envergure.

---

<p class="info">Cet article a été fortement influencé par l'article de Harry Roberts intitulé <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">MindBEMding – getting your head 'round BEM syntax&nbsp;<sup>EN</sup></a>, si vous êtes un peu anglophone je conseille vivement sa lecture.</p>
