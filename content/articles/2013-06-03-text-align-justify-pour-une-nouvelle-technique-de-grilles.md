---
date: 2013-06-03T00:00:00Z
description: Une nouvelle technique CSS pour facilement créer des grilles
tags:
- css
title: 'Text-align: justify pour une nouvelle technique de grilles'
---

Je suis tombé sur une nouvelle technique publiée par l'agence new-yorkaise <a href="http://www.barrelny.com/">Barrel</a> pour créer des grilles qui évitent ENFIN les prises de têtes que sont les marges horizontales. Je la partage aujourd'hui en français et surtout je la conseille vivement comme méthode de remplacement des techniques traditionnelles.

---

<h2>Les techniques habituelles</h2>

En fait quand je crée des grilles, par exemple de listings produits (le plus souvent responsive), j'utilise une des deux techniques suivantes&nbsp;:

<ol>
<li>Je fais flotter tous mes blocs à gauche à coups de <code>float:left</code> puis j'applique une méthode de <a href="http://nicolasgallagher.com/micro-clearfix-hack/">clearfix</a> au bloc conteneur pour éviter les effets annexes liés à l'utilisation de mes <code>floats</code>.</li>
<li>Ou j'utilise le pseudo-sélecteur <code>nth-child</code> pour cibler chaque premier élément de ma ligne de produits et supprimer sa marge gauche.</li>
</ol>

Le problème de la première méthode, c'est qu'elle oblige à recourir à du clearfix, dont je ne suis pas forcément fan. Elle rajoute aussi une marge (invisible) à droite, qui risque donc de créer du scolling horizontal sur des petites résolutions.

Le problème de la deuxième méthode, c'est qu'elle est plutôt pénible à gérer de manière responsive, car il faut recalculer tous les <code>nth-child</code> à chaque changement de nombre d'items affichés par ligne. Sans compter que <code>nth-child</code> n'est pas compris par IE8-.

<h2>Text-align: justify</h2>

La technique proposée par Barrel est la suivante&nbsp;: appliquer la propriété <code>text-align:justify</code> (fonctionnant avec <code>inline</code> ET <code>inline-block</code>) au conteneur pour laisser le navigateur gérer tout seul les marges horizontales entre chacun des éléments d'une même ligne. Par contre, le comportement par défaut de <code>text-align:justify</code> opère sur toutes les lignes d'un texte sauf la dernière. Si il y a une seule ligne, celle-ci sera aussi considérée comme la dernière. Pour que la magie opère il faut donc créer une "ligne" invisible située en-dessous de la ligne concernée (visible en bleu ci-dessous)&nbsp;:

<img src="/assets/img/justify-1.jpg" alt="Justify 1" class="imgb" />

Pour reprendre l'exemple de Barrel il faudrait donc avoir le code suivant&nbsp;:

<pre><code class="html">&lt;ul class="grid"&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li class="break"&gt;&lt;/li&gt;
&lt;ul&gt;
</code></pre>

<pre><code class="css">.grid {
  text-align: justify;
  font-size: 0.1px; /* supprimer l'espace entre les différents éléments */
}

.grid li {
  display: inline-block;
  width: 23%;
}

.grid .break {
  width: 100%;
  height: 0;
}
</code></pre>

Ou, pour une sémantique plus propre, se passer de l'élément <code>.break</code> et ajouter un <code>:after</code> au conteneur&nbsp;:

<pre><code class="css">.grid:after {
  content: '';
  display: inline-block;
  width: 100%;
}
</code></pre>

Un autre souci à contourner, c'est le nombre d'éléments par ligne. Mettons qu'on ait 4 éléments par ligne et que la dernière ligne n'en affiche que 2. Les 2 éléments vont se justifier sur la longueur de la ligne, donnant un résultat plutôt indésirable&nbsp;:

<img src="/assets/img/justify-2.jpg" alt="Justify 2" class="imgb" />

Pour éviter ce problème il faudra rajouter des "placeholders" invisibles qui permettront de rétablir l'équilibre. Dans cet exemple il en faudra donc 2 pour obtenir le résultat suivant&nbsp;:

<img src="/assets/img/justify-3.jpg" alt="Justify 3" class="imgb" />

Le code ressemblera donc à&nbsp;:

<pre><code class="html">&lt;ul class="grid"&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li&gt;&lt;/li&gt;
    &lt;li class="placeholder"&gt;&lt;/li&gt;
    &lt;li class="placeholder"&gt;&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

La formule à appliquer pour connaitre le nombre de placeholders à utiliser, et ce quelque soit le nombre d'items présents sur la dernière ligne, est la suivante&nbsp;:

<pre><code class="nohighlight">nombre de placeholders = nombre maximum d'éléments par ligne - 2</code></pre>

Pourquoi 2&nbsp;? Parce que si un seul produit s'affiche sur la dernière ligne, il s'affichera de toute façon tout à gauche.

<h2>Justify & Responsive design</h2>

L'énorme avantage de cette technique, c'est qu'elle est très facilement adaptable au responsive design, par exemple&nbsp;:

<pre><code class="css">.grid li {
  width: 100%;
  margin-bottom: 5%;
}

@media (min-width: 400px) {
  .grid li {
    width: 48%;
    margin-bottom: 4%;
  }
}

@media (min-width: 600px) {
  .grid li {
    width: 31%;
    margin-bottom: 3%;
  }
}

@media (min-width: 800px) {
  .grid li {
    width: 23%;
    margin-bottom: 2.5%;
  }
}
</code></pre>

Beaucoup plus simple et moins casse-tête que les <code>nth-child</code>&nbsp;:) Par contre les marges horizontales sont calculées automatiquement, il faut donc un peu tâtonner pour trouver les valeurs exactes à appliquer aux <code>width</code> de nos éléments...

<h2>Le support</h2>

Voilà le gros avantage de cette méthode&nbsp;: en plus d'être simple à intégrer, elle est compatible à partir de IE7 (même si pour celui-ci, il faudra recourir à quelques astuces). Je l'ai déjà implémentée avec succès sur un projet en cours, et j'y aurai sans doute de plus en plus recours avec le temps.

---

<p class="info">Cet article a été adapté de <a href="http://www.barrelny.com/blog/text-align-justify-and-rwd/">l'article&nbsp;<sup>EN</sup></a> originalement publié par <a href="http://www.barrelny.com/">Barrel</a>. Un exemple est disponible sur <a href="http://codepen.io/patrickkunka/pen/GECBF">Codepen</a>.</p>
