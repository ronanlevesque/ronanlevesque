---
date: 2013-05-27T00:00:00Z
description: Comment facilement gérer ses media queries avec Sass et un @mixin
tags:
- sass
- rwd
title: Un @mixin Sass simple pour les media queries
---

J'avais <a href="http://ronanlevesque.fr/le-jour-ou-jai-teste-sass/">chanté les louanges</a> du préprocesseur Sass il y a quelques mois, convaincu de l'intérêt de cet outil. Depuis je l'ai intégré en production sur quelques projets, et son intérêt ne se dément vraiment pas. Combiné à les logiciels simples (je vous conseille vivement <a href="http://alphapixels.com/prepros/">Prepros</a> sur Windows) c'est un bonheur à utiliser.

---

Les <code>@mixins</code> sont un vrai plus de Sass. Pour rappel ils permettent de réutiliser grâce à <code>@include</code> une partie de notre CSS, qu'on peut par exemple combiner avec des variables. J'ai pu en récupérer quelques-uns assez utiles à droite et à gauche, que je partagerai prochainement ici.

Je suis notamment tombé sur un <code>@mixin</code> assez intéressant pour gérer les media queries, publié dans un article de <a href="http://web-design-weekly.com/2013/05/12/handy-sass-mixins/">Web Design Weekly</a>. Le <code>@mixin</code> utilisé est le suivant&nbsp;:

<pre><code class="scss">@mixin breakpoint($point) {
  @if $point == large {
    @media (min-width: 64.375em) { @content; }
  }
  @else if $point == medium {
    @media (min-width: 50em) { @content; }
  }
  @else if $point == small {
    @media (min-width: 37.5em)  { @content; }
  }
}
</code></pre>

Il permet donc d'ajouter facilement des breakpoints à un design responsive. Ainsi pour reprendre l'exemple de l'article, le SCSS suivant&nbsp;:

<pre><code class="scss">.page-wrap {
  width: 75%;
  @include breakpoint(large) { width: 60%; }
}
</code></pre>

Se transformera en&nbsp;:

<pre><code class="css">.page-wrap {
  width: 75%;
}
@media (min-width: 64.375em) {
  .page-wrap {
    width: 60%;
  }
}
</code></pre>

C'est un <code>@mixin</code> très utile mais je voulais le simplifier et le rendre un peu plus flexible, histoire de l'adapter sur mesure à différents media queries. Je l'ai donc transformé en ceci&nbsp;:

<pre><code class="scss">@mixin bp($point) {
  @media screen and (min-width: $point / 16 + em) { @content; }
}
</code></pre>

Il suffit ensuite simplement de remplacer la variable <code>$point</code> par la taille que l'on souhaite pour notre media queries (query&nbsp;?) en pixels, et celle-ci sera automatiquement convertie en <code>em</code>.
