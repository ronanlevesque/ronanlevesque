---
date: 2013-06-03T00:00:00Z
description: Une nouvelle technique CSS pour facilement créer des grilles
tags:
- css
title: 'Text-align: justify pour une nouvelle technique de grilles'
---

Je suis tombé sur une nouvelle technique publiée par l'agence new-yorkaise [Barrel](http://www.barrelny.com/) pour créer des grilles qui évitent ENFIN les prises de têtes que sont les marges horizontales. Je la partage aujourd'hui en français et surtout je la conseille vivement comme méthode de remplacement des techniques traditionnelles.

---

## Les techniques habituelles

En fait quand je crée des grilles, par exemple de listings produits (le plus souvent responsive), j'utilise une des deux techniques suivantes&nbsp;:

1. Je fais flotter tous mes blocs à gauche à coups de `float:left` puis j'applique une méthode de [clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) au bloc conteneur pour éviter les effets annexes liés à l'utilisation de mes `floats`.
2. Ou j'utilise le pseudo-sélecteur `nth-child` pour cibler chaque premier élément de ma ligne de produits et supprimer sa marge gauche.

Le problème de la première méthode, c'est qu'elle oblige à recourir à du clearfix, dont je ne suis pas forcément fan. Elle rajoute aussi une marge (invisible) à droite, qui risque donc de créer du scolling horizontal sur des petites résolutions.

Le problème de la deuxième méthode, c'est qu'elle est plutôt pénible à gérer de manière responsive, car il faut recalculer tous les `nth-child` à chaque changement de nombre d'items affichés par ligne. Sans compter que `nth-child` n'est pas compris par IE8-.

## Text-align: justify

La technique proposée par Barrel est la suivante&nbsp;: appliquer la propriété `text-align:justify` (fonctionnant avec `inline` ET `inline-block`) au conteneur pour laisser le navigateur gérer tout seul les marges horizontales entre chacun des éléments d'une même ligne. Par contre, le comportement par défaut de `text-align:justify` opère sur toutes les lignes d'un texte sauf la dernière. Si il y a une seule ligne, celle-ci sera aussi considérée comme la dernière. Pour que la magie opère il faut donc créer une "ligne" invisible située en-dessous de la ligne concernée (visible en bleu ci-dessous)&nbsp;:

![Justify 1](/assets/img/justify-1.jpg)

Pour reprendre l'exemple de Barrel il faudrait donc avoir le code suivant&nbsp;:

    <ul class="grid">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li class="break"></li>
    <ul>

<p></p>

    .grid {
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

Ou, pour une sémantique plus propre, se passer de l'élément `.break` et ajouter un `:after` au conteneur&nbsp;:

    .grid:after {
      content: '';
      display: inline-block;
      width: 100%;
    }

Un autre souci à contourner, c'est le nombre d'éléments par ligne. Mettons qu'on ait 4 éléments par ligne et que la dernière ligne n'en affiche que 2. Les 2 éléments vont se justifier sur la longueur de la ligne, donnant un résultat plutôt indésirable&nbsp;:

![Justify 2](/assets/img/justify-2.jpg)

Pour éviter ce problème il faudra rajouter des "placeholders" invisibles qui permettront de rétablir l'équilibre. Dans cet exemple il en faudra donc 2 pour obtenir le résultat suivant&nbsp;:

![Justify 3](/assets/img/justify-3.jpg)

Le code ressemblera donc à&nbsp;:

    <ul class="grid">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li class="placeholder"></li>
        <li class="placeholder"></li>
    </ul>

La formule à appliquer pour connaitre le nombre de placeholders à utiliser, et ce quelque soit le nombre d'items présents sur la dernière ligne, est la suivante&nbsp;:

<pre><code class="nohighlight">nombre de placeholders = nombre maximum d'éléments par ligne - 2</code></pre>

Pourquoi 2&nbsp;? Parce que si un seul produit s'affiche sur la dernière ligne, il s'affichera de toute façon tout à gauche.

## Justify & Responsive design

L'énorme avantage de cette technique, c'est qu'elle est très facilement adaptable au responsive design, par exemple&nbsp;:

    .grid li {
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

Beaucoup plus simple et moins casse-tête que les `nth-child`&nbsp;:) Par contre les marges horizontales sont calculées automatiquement, il faut donc un peu tâtonner pour trouver les valeurs exactes à appliquer aux `width` de nos éléments...

## Le support

Voilà le gros avantage de cette méthode&nbsp;: en plus d'être simple à intégrer, elle est compatible à partir de IE7 (même si pour celui-ci, il faudra recourir à quelques astuces). Je l'ai déjà implémentée avec succès sur un projet en cours, et j'y aurai sans doute de plus en plus recours avec le temps.

---

<p class="info">Cet article a été adapté de <a href="http://www.barrelny.com/blog/text-align-justify-and-rwd/">l'article</a> originalement publié par <a href="http://www.barrelny.com/">Barrel</a>. Un exemple est disponible sur <a href="http://codepen.io/patrickkunka/pen/GECBF">Codepen</a>.</p>
