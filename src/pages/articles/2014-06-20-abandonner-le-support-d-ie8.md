---
title: 'Abandonner le support d’IE8'
date: 2014-06-20T00:00:00Z
path: '/articles/abandonner-le-support-d-ie8'
archive: true
---

La décision de Microsoft [de ne plus assurer le support d’XP](http://windows.microsoft.com/fr-fr/windows/end-support-help) a eu pour conséquence de sonner le glas définitif d’Internet Explorer 8. En effet, sans mises à jour, il deviendra de plus en plus exposé à d’éventuels virus ou failles, ce qui forcera ses utilisateurs à migrer vers d’autres navigateurs. Pour nous, webdesigners et développeurs, c’est un vrai soulagement et surtout un gros pas en avant…

## En intro : quelques statistiques

Concrètement, si on décide d’arrêter tout support pour IE8, on se prive en moyenne de [3% de nos visiteurs](http://gs.statcounter.com/#desktop-browser_version_partially_combined-FR-monthly-201404-201406-bar) (données France). Un chiffre que je considère comme raisonnable, surtout si l’on garde en tête que l’on peut décider de proposer à nos visiteurs des navigateurs plus fiables pour mieux protéger leur machine.

## Ce que ça implique

En faisant le choix d’exclure IE8 de la liste des navigateurs supportés, de nombreux avantages immédiats vont pouvoir s’offrir à nous; en voici les principaux à mes yeux.

- **Eléments HTML5 :** on peut mettre de côté les [shiv HTML5](https://code.google.com/p/html5shiv/) puisque ces éléments sont supportés nativement par IE9. Les navigateurs gèrent également très bien les éléments `<audio>` et `<video>` par eux-même, plus besoin de plugins flash !
- **JavaScript :** manipuler le DOM devient plus facile grâce à `getElementsByClassName` et `addEventListener` entre autres. ECMAScript 5, qui introduit de nouvelles méthodes, bénéficie d’un meilleur support.
- **Un meilleur support de CSS3 :** Plus de possibilités en termes de layouts : transformations, utilisation de `calc`. D’autres propriétés et pseudo-classes utilisables sans risques : `opacity`, `nth-child`, `last-child`… Enfin, On peut abandonner l’utilisation des `em` au profit des `rem`.
- **Responsive design :** finies les prises de tête pour [décider comment gérer](/articles/les-anciens-navigateurs/) les media queries, on peut maintenant faire de l’intégration mobile-first sans aucun risque.
- **SVG :** le format vectoriel du SVG en fait un format parfait pour les écrans HD et Retina. Plus besoin de prévoir des fallbacks en PNG !

## Comment gérer nos visiteurs sur IE8 ?

Faire le choix d’utiliser les features citées ci-dessus, c’est décider d’abandonner tout support d’IE8 par opposé à une simple dégradation de l’expérience. Les avocats de l’accessibilité pourraient sans doute y trouver à redire, mais je pars du principe qu’il faut parfois forcer la main des utilisateurs pour assurer leur sécurité.

A mes yeux, la méthode la plus "propre" pour ce faire est de détecter IE8 (via JS ou par un commentaire conditionnel) et d’appliquer un overlay couvrant la totalité de l’écran, informant le visiteur des raisons de ce non-support et proposant une liste de navigateurs plus fiables et sécurisés.

## Le mot de la fin

Pour conclure sur une petite touche ironique, sachez que mon site supporte malgré tout IE8 :) Mais il y a de fortes chances pour que ça ne soit plus le cas si je décide de le refondre un de ces jours… et je vous conseille d’en faire autant.

<p class="info">Mise à jour (17/10/2015) : depuis j’ai non seulement abandonné le support d’IE8, mais aussi celui d’IE9…</p>
