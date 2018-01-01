---
date: 2017-08-10T00:00:00Z
description: Comment contourner la complexité engendrée par la gestion des breakpoints
  en CSS fonctionnel (ou atomique)
tags:
- css
- rwd
title: CSS « fonctionnel » et responsive design
url: /articles/css-fonctionnel-et-responsive-design/
---

J'ai lu aujourd'hui un [article](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) très intéressant qui soulignait les bénéfices du CSS dit « fonctionnel » (on entend par fonctionnel l'utilisation généralisée de classes utilitaires à but unique). Le hic, c'est qu'il néglige également de parler d'un inconvénient majeur et de la manière de le traiter.

---

## Un exemple pour commencer...

Avant de rentrer dans le vif du sujet il peut être utile de faire un rappel de ce qu'est le CSS fonctionnel, cf. cette définition tirée de [CSS-Tricks](https://css-tricks.com/lets-define-exactly-atomic-css/)&nbsp;:

> Le CSS atomique (fonctionnel) est l'approche, en architecture CSS, qui favorise les petites classes à but unique avec des noms basés sur leurs fonctions visuelles.

Voici un exemple simple, mais **volontairement verbeux** pour plus de clarté&nbsp;:

<p data-height="265" data-theme-id="light" data-slug-hash="GvmOzV" data-default-tab="html,css" data-user="eskiiss" data-embed-version="2" data-pen-title="GvmOzV" class="codepen">See the Pen <a href="https://codepen.io/eskiiss/pen/GvmOzV/">GvmOzV</a> by Ronan Levesque (<a href="https://codepen.io/eskiiss">@eskiiss</a>) on <a href="https://codepen.io">CodePen</a>.</p>

L'avantage saute immédiatement aux yeux; cette manière de faire permet de gagner en maintenabilité et en temps de développement. Cependant l'article élude un sujet capital et auquel la plupart des frameworks CSS qui suivent cette méthode peinent à offrir une solution pertinente&nbsp;: la **transformabilité** des dites classes.

J'entends par là, la capacité d'une classe à faire évoluer ses styles (via _media queries_).

Reprenons l'exemple ci-dessus&nbsp;: nos classes utilitaires vont très bien marcher pour une taille d'écran standard, mais qu'en est-il si on souhaite ajuster le bloc pour des petits / grands écrans ? Si on décide de maintenir une valeur par classe, alors on se retrouve avec un code assez horrible&nbsp;:

<p data-height="265" data-theme-id="light" data-slug-hash="BdRYyJ" data-default-tab="html,css" data-user="eskiiss" data-embed-version="2" data-pen-title="BdRYyJ" class="codepen">See the Pen <a href="https://codepen.io/eskiiss/pen/BdRYyJ/">BdRYyJ</a> by Ronan Levesque (<a href="https://codepen.io/eskiiss">@eskiiss</a>) on <a href="https://codepen.io">CodePen</a>.</p>

Dans cet exemple, il n'y a que 3 _breakpoints_. Mais on imagine aisément l'usine à gaz que cela va devenir si on doit en gérer 5, voire plus (cas fréquents lorsque l'on fait du _responsive design_).

---

Pour avoir expérimenté le CSS fonctionnel dans le passé, je vois les avantages qu'on peut tirer de cette méthodologie. Mais je reste mitigé car elle risque d'induire un niveau de complexité supplémentaire dans la gestion des classes. En inspectant le code de [Tailwind CSS](https://tailwindcss.com/), créé par [Adam Wathan](https://twitter.com/adamwathan) (auteur de l'article), je me trouve par exemple face à ce genre de chose&nbsp;:

    <h1 class="text-2xl sm:text-3xl text-thin text-dark-soft constrain-sm mx-auto leading-tight mb-8">A Utility-First CSS Framework for Rapid UI Development</h1>

Et j'ai du mal à voir en quoi ça serait plus maintenable ou lisible que&nbsp;:

    <h1 class="main-title">A Utility-First CSS Framework for Rapid UI Development</h1>

Ou alors, il faut envisager une approche différente.

## Utilitaires + media queries

À la lumière de ces différents exemples, on comprendra sans peine pourquoi il est sans doute préférable de traiter d'une autre manière les utilitaires contenant une valeur susceptible de changer selon les _breakpoints_ (`margin`, `padding`, `font-size` etc.)...

Reprenons notre exemple de _random block_. On sait que les valeurs de `padding` et de `font-size` doivent évoluer d'un _breakpoint_ à un autre. Mais on veut garder cette notion de classe utilitaire, réutilisable ailleurs. On peut alors imaginer une approche identique à ceci&nbsp;:

<p data-height="265" data-theme-id="light" data-slug-hash="ZJXyMY" data-default-tab="html,css" data-user="eskiiss" data-embed-version="2" data-pen-title="vJmdzp" class="codepen">See the Pen <a href="https://codepen.io/eskiiss/pen/ZJXyMY/">ZJXyMY</a> by Ronan Levesque (<a href="https://codepen.io/eskiiss">@eskiiss</a>) on <a href="https://codepen.io">CodePen</a>.</p>

Rien ne nous empêche par la suite de créer des classes telles que `padding-small` et `padding-large`, `text-small` et `text-large` etc., qui seront toutes en charge de traiter leurs propres _breakpoints_.

Ainsi, on abstrait les notions de transformabilité au sein de la classe utilitaire, qui garde son côté réutilisable. Cela permet également de renforcer la consistance de nos styles.

## CSS fonctionnel et composants

Adam précise dans son article qu'il n'est pas en faveur d'une approche 100% fonctionnelle car selon lui certains cas nécessitent d'utiliser des composants; il prend notamment un exemple tiré de [Tachyons](http://tachyons.io/) utilisé pour créer un bouton et démontre qu'il serait plus simple d'en faire un composant réutilisable.

En fait, toute la difficulté de l'exercice revient à savoir quand utiliser un utilitaire et quand utiliser un composant.

D'ailleurs, on pourrait même arriver à la conclusion qu'un utilitaire est en fait simplement un composant à but unique. 🤔

<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
