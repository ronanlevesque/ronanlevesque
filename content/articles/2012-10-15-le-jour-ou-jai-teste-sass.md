---
date: 2012-10-15T00:00:00Z
description: Retour d'expérience sur ma première expérience approfondie de Sass
tags:
- css
- sass
title: Le jour où j'ai testé Sass
---

J'ai lu récemment pas mal de débats sur l'intérêt d'intégrer ou non les préprocesseurs CSS dans nos workflows. Certains  pour, d'autres contre, bref, les avis semblaient vraiment partagés sur le sujet. D'après ce que j'avais pu en lire, ils pouvaient pourtant présenter un réel intérêt dans certains cas, notamment sur de gros projets. Curieux d'en savoir un peu plus sur le sujet, j'ai récemment plongé mon nez dans Sass, qui semblait le plus populaire des différents préprocesseurs.

---

<h2>Sass en quelques mots</h2>

<a href="http://sass-lang.com/">Sass</a> est, dixit son site officiel, une extension de CSS3 qui permet d'introduire de nouveaux concepts au sein de CSS&nbsp;: variables, imbrication d'éléments, héritage de sélecteurs etc. La syntaxe utilisée est le SCSS (pour Sassy CSS), qui permet de créer des fichiers .scss facilement convertibles en fichiers .css au moyen de l'outil de commande en ligne ou par le biais d'apps.

<h2>Comment l'installer&nbsp;?</h2>

Le site officiel préconise d'utiliser Ruby (installé par défaut sous Mac, à <a href="http://rubyinstaller.org/downloads/">installer</a> sous Windows). On installe ensuite Sass avec la commande <code>gem install sass</code>. On crée un fichier SCSS, par exemple <code>style.scss</code> et on le "surveille" avec <code>sass --watch style.scss:style.css</code>.

Ou sinon, pour les paresseux (dont je fais partie) on installe un logiciel qui fait automatiquement le boulot; en voici une petite liste&nbsp;:

<ul>
<li><a href="http://incident57.com/codekit/">Codekit</a> (Mac, payant)</li>
<li><a href="http://alphapixels.com/prepros/">Prepros</a> (Windows, gratuit)</li>
<li><a href="http://compass.handlino.com/">Compass.app</a> (Windows, payant)</li>
</ul>

<h2>Les avantages de Sass</h2>

La page d'accueil de Sass en dénombre 4. Il suffit en effet de les mettre en pratique pour rapidement comprendre la puissance de l'outil, et son énorme potentiel lors de la réalisation de projets complexes... Regardons ça un peu plus en détails&nbsp;:

<h3>Nesting</h3>

Le nesting, qu'on pourrait plus ou moins traduire par imbrication, permet de regrouper ensemble plusieurs sélecteurs en les imbriquant pour plus de clarté. Par exemple, prenons le SCSS suivant&nbsp;:

<pre><code class="scss">ul {
  padding: 2em;
  a {color: white;}
}
</code></pre>

Il se traduira en CSS par&nbsp;:

<pre><code class="css">ul {
  padding: 2em;
}

ul a {
  color: white;
}
</code></pre>

Le nesting est donc un bon moyen d'organiser clairement ses informations. Par ailleurs, il marche non seulement avec les sélecteurs mais également avec leurs propriétés.

<h3>Variables</h3>

Sass permet d'intégrer la notion de variables en CSS, variables qui peuvent être couplées avec certaines opérations mathématiques ou fonctions&nbsp;: on peut ainsi définir une variable <code>$couleur</code>, qui correspondra par exemple à la couleur principale de notre site, puis styler certains éléments à partir de celle-ci en les rendant légèrement plus clairs&nbsp;: <code>lighten($couleur, 10%)</code>. Il suffit ensuite de changer la valeur de notre variable <code>$couleur</code> pour qu'automatiquement les autres propriétés dépendant de celle-ci se mettent à jour.

<h3>Les @mixins</h3>

Ils permettent de réutiliser une partie de notre CSS n'importe où grâce à la fonction <code>@include</code>. Ainsi le SCSS suivant&nbsp;:

<pre><code class="scss">@mixin list-padd {
  ul {padding: 2em;}
  li {padding: 1em;}
}

nav {
  @include list-padd;
}
</code></pre>

Sera traduit en CSS par&nbsp;:

<pre><code class="css">nav ul {
  padding: 2em;
}

nav li {
  padding: 1em;
}
</code></pre>

Simple non&nbsp;?&nbsp;:)

<h3>Héritage de sélecteurs</h3>

Fonctionnant un peu sur le même principe que les <code>@mixins</code>, la fonction <code>@extend</code> permet d'étendre les styles d'un sélecteur à un autre. Par exemple, le SCSS suivant&nbsp;:

<pre><code class="scss">.red {
  color: white;
  background: red;
}

.button {
  padding: 2em;
  @extend .red;
}
</code></pre>

donnera ce CSS&nbsp;:

<pre><code class="css">.red, .button {
  color: white;
  background: red;
}

.button {
  padding: 2em;
}
</code></pre>

Une fonction pratique donc, qui permet d'éviter d'avoir à copier/coller 20 fois le même code au moindre changement.

<h2>En conclusion...</h2>

... L'essayer, c'est l'adopter&nbsp;:) Plus sérieusement, après quelques temps d'utilisation, Sass m’apparaît comme un outil indispensable lors de la réalisation de projets complexes. Les outils qu'il intègre permettent à mon sens de rationaliser et optimiser très fortement notre workflow. Il présente en revanche peut-être moins d'intérêt sur des projets plus petits, quoique...

Par ailleurs, je n'ai cité qu'une partie de ses possibilités, pour plus d'informations sur son potentiel je vous invite à consulter son très riche <a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html">fichier de référence&nbsp;<sup>EN</sup></a>.

---

Pour terminer sur les préprocesseurs, sachez qu'il en existe d'autres, et notamment <a href="http://lesscss.org/">LESS</a>, que je n'ai pas eu l'occasion de tester. <a href="http://chriscoyier.net/">Chris Coyier</a> a d'ailleurs rédigé un <a href="http://css-tricks.com/sass-vs-less/">comparatif sur le sujet&nbsp;<sup>EN</sup></a>, désignant plus ou moins Sass comme la version gagnante par rapport à LESS...

Enfin, si vous voulez peser le pour et le contre de l'utilisation des préprocesseurs, je vous invite à lire ces deux articles &nbsp;: <a href="http://blog.kaelig.fr/post/24877648508/preprocesseurs-css-renoncer-par-choix-ou-par">Préprocesseurs CSS&nbsp;: renoncer par choix, ou par ignorance&nbsp;?</a>, et <a href="http://www.amberweinberg.com/why-im-still-against-sass-less/">Why I'm still against Sass/LESS&nbsp;<sup>EN</sup></a>.
