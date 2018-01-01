---
date: 2012-10-15T00:00:00Z
description: Retour d'expérience sur ma première expérience approfondie de Sass
tags:
- css
- sass
title: Le jour où j'ai testé Sass
---

J'ai lu récemment pas mal de débats sur l'intérêt d'intégrer ou non les préprocesseurs CSS dans nos workflows. Certains pour, d'autres contre, bref, les avis semblaient vraiment partagés sur le sujet. D'après ce que j'avais pu en lire, ils pouvaient pourtant présenter un réel intérêt dans certains cas, notamment sur de gros projets. Curieux d'en savoir un peu plus sur le sujet, j'ai récemment plongé mon nez dans Sass, qui semblait le plus populaire des différents préprocesseurs.

---

## Sass en quelques mots

[Sass](http://sass-lang.com/) est, dixit son site officiel, une extension de CSS3 qui permet d'introduire de nouveaux concepts au sein de CSS&nbsp;: variables, imbrication d'éléments, héritage de sélecteurs etc. La syntaxe utilisée est le SCSS (pour Sassy CSS), qui permet de créer des fichiers .scss facilement convertibles en fichiers .css au moyen de l'outil de commande en ligne ou par le biais d'apps.

## Comment l'installer&nbsp;?

Le site officiel préconise d'utiliser Ruby (installé par défaut sous Mac, à [installer](http://rubyinstaller.org/downloads/) sous Windows). On installe ensuite Sass avec la commande `gem install sass`. On crée un fichier SCSS, par exemple `style.scss` et on le "surveille" avec `sass --watch style.scss:style.css`.

Ou sinon, pour les paresseux (dont je fais partie) on installe un logiciel qui fait automatiquement le boulot; en voici une petite liste&nbsp;:

* [Codekit](http://incident57.com/codekit/) (Mac, payant)
* [Prepros](http://alphapixels.com/prepros/) (Windows, gratuit)
* [Compass.app](http://compass.handlino.com/) (Windows, payant)

## Les avantages de Sass

La page d'accueil de Sass en dénombre 4. Il suffit en effet de les mettre en pratique pour rapidement comprendre la puissance de l'outil, et son énorme potentiel lors de la réalisation de projets complexes... Regardons ça un peu plus en détails&nbsp;:

### Nesting

Le nesting, qu'on pourrait plus ou moins traduire par imbrication, permet de regrouper ensemble plusieurs sélecteurs en les imbriquant pour plus de clarté. Par exemple, prenons le SCSS suivant&nbsp;:

    ul {
      padding: 2em;
      a { color: white; }
    }

Il se traduira en CSS par&nbsp;:

    ul {
      padding: 2em;
    }

    ul a {
      color: white;
    }

Le nesting est donc un bon moyen d'organiser clairement ses informations. Par ailleurs, il marche non seulement avec les sélecteurs mais également avec leurs propriétés.

### Variables

Sass permet d'intégrer la notion de variables en CSS, variables qui peuvent être couplées avec certaines opérations mathématiques ou fonctions&nbsp;: on peut ainsi définir une variable `$couleur`, qui correspondra par exemple à la couleur principale de notre site, puis styler certains éléments à partir de celle-ci en les rendant légèrement plus clairs&nbsp;: `lighten($couleur, 10%)`. Il suffit ensuite de changer la valeur de notre variable `$couleur` pour qu'automatiquement les autres propriétés dépendant de celle-ci se mettent à jour.

### Les @mixins

Ils permettent de réutiliser une partie de notre CSS n'importe où grâce à la fonction `@include`. Ainsi le SCSS suivant&nbsp;:

    @mixin list-padd {
      ul { padding: 2em; }
      li { padding: 1em; }
    }

    nav {
      @include list-padd;
    }

Sera traduit en CSS par&nbsp;:

    nav ul {
      padding: 2em;
    }

    nav li {
      padding: 1em;
    }

Simple non&nbsp;?&nbsp;:)

### Héritage de sélecteurs

Fonctionnant un peu sur le même principe que les `@mixins`, la fonction `@extend` permet d'étendre les styles d'un sélecteur à un autre. Par exemple, le SCSS suivant&nbsp;:

    .red {
      color: white;
      background: red;
    }

    .button {
      padding: 2em;
      @extend .red;
    }

donnera ce CSS&nbsp;:

    .red, .button {
      color: white;
      background: red;
    }

    .button {
      padding: 2em;
    }

Une fonction pratique donc, qui permet d'éviter d'avoir à copier/coller 20 fois le même code au moindre changement.

## En conclusion...

... L'essayer, c'est l'adopter&nbsp;:) Plus sérieusement, après quelques temps d'utilisation, Sass m’apparaît comme un outil indispensable lors de la réalisation de projets complexes. Les outils qu'il intègre permettent à mon sens de rationaliser et optimiser très fortement notre workflow. Il présente en revanche peut-être moins d'intérêt sur des projets plus petits, quoique...

Par ailleurs, je n'ai cité qu'une partie de ses possibilités, pour plus d'informations sur son potentiel je vous invite à consulter son très riche [fichier de référence](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html).

---

Pour terminer sur les préprocesseurs, sachez qu'il en existe d'autres, et notamment [LESS](http://lesscss.org/), que je n'ai pas eu l'occasion de tester. [Chris Coyier](http://chriscoyier.net/) a d'ailleurs rédigé un [comparatif sur le sujet](http://css-tricks.com/sass-vs-less/), désignant plus ou moins Sass comme la version gagnante par rapport à LESS...

Enfin, si vous voulez peser le pour et le contre de l'utilisation des préprocesseurs, je vous invite à lire ces deux articles &nbsp;: [Préprocesseurs CSS&nbsp;: renoncer par choix, ou par ignorance&nbsp;?](http://blog.kaelig.fr/post/24877648508/preprocesseurs-css-renoncer-par-choix-ou-par), et [Why I'm still against Sass/LESS](http://www.amberweinberg.com/why-im-still-against-sass-less/).
