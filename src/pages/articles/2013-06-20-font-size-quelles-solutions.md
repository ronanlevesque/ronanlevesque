---
title: 'Font-size : quelles solutions ?'
description: 'Comment gérer les tailles de police de votre site au mieux.'
date: 2013-06-20T00:00:00Z
path: '/articles/font-size-quelles-solutions/'
archive: true
---

Le choix est large quand on s’intéresse à la propriété CSS `font-size` : on peut tout aussi bien lui attribuer des valeurs prédéfinies (`small`, `medium` etc.) que des valeurs absolues (`pt`, `cm`, `mm` etc.) ou encore des valeurs relatives (`px`, `em`, `%`, etc.). Le but de mon article est de faire un point sur les unités `em` et `rem` et leurs usages.

## Em et Rem : un rappel

Ces unités sont parfois un peu dures à appréhender car leur définition reste plutôt abstraite. Pour reprendre celle du site de [w3.org](http://www.w3.org/Style/Examples/007/units) :

> L’unité `em` dépend de la police de caractères et peut être différente pour chaque élément du document […] Exprimer des tailles, comme les margins et les paddings, en `em` signifie qu’elles sont relatives à la taille de la police, et si l’utilisateur a une large police de caractères (sur un grand écran par exemple) ou au contraire une petite police (sur un smartphone par exemple), les tailles seront en proportion.

De mon point de vue, il est préférable d’utiliser des `em` afin de permettre que le texte soit redimensionnable afin de mieux s’adapter aux différentes résolutions (pour info les navigateurs modernes redimensionnent automatiquement les dimensions en `px`).

## 62.5% : le nombre magique ?

Afin de simplifier les calculs de taille de police en utilisant les `em`, une solution souvent utilisée est de définir le code suivant :

```text
body {font-size: 62.5%}
```

Sachant que la taille de police par défaut des navigateurs modernes est ([presque ?](http://isitrwd.com/rfs/)) tout le temps `16px` pour `1em`, la conversion est donc beaucoup plus simple suite à ce calcul et donnera le résultat suivant :

```text
10 px = 1 em
```

L’inconvénient de cette méthode, c’est que suite à ce changement la taille par défaut du texte sera de `10px` à part si on ne le précise pas ailleurs. Utilisé en production, je trouve ça plutôt pénible et potentiellement source d’erreurs.

Du coup je ne touche du coup plus à la `font-size` de mon body et je la laisse par défaut. Je l’avais déjà lu chez [Filament Group](http://filamentgroup.com/lab/how_we_learned_to_leave_body_font_size_alone/), mais je fais ça depuis un petit moment et je trouve ça plus simple à gérer.

## Rem : Sass to the rescue !

`Em` est donc une unité intéressante à utiliser, à un détail près : sa base variera selon la taille de la police, pouvant engendrer des différences de mise en page parfois pénibles (par exemple sur les margins et paddings d’un texte d’une certaine taille).

Cet inconvénient est toutefois corrigé par l’unité `rem` (pour _root em_). Celle-ci fonctionne sur le même principe que les `em`, à la différence près qu’elle utilise comme base de départ la racine html. Elle est donc moins source d’erreurs de calcul. Par contre elle n’est pas supportée par IE8- (mais un [polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill) existe).

Si on ne souhaite pas utiliser de polyfill, on se retrouve donc face à un casse-tête à chaque fois qu’on utilise des `rem`, car il faudra également prévoir et calculer un fallback en `px` pour les navigateurs ne reconnaissant pas cette unité…

Et c’est précisément là que Sass intervient : il va faire le calcul à notre place grâce à un `@mixin`. Celui que j’utilise est le suivant :

```scss
@mixin fs($fontsize: 16, $fontbase: 16) {
  font-size: $fontsize + px;
  font-size: ($fontsize / $fontbase) * 1rem;
}
```

Il suffit ainsi d’écrire `@include fs(16)` pour que nos `rem` soient convertis en l’équivalent de `16px`, avec le fallback en `px` pour les vieux navigateurs.

## Et le responsive design ?

L’avantage du responsive design, c’est que si l’on utilise `em` ou `rem` pour nos tailles de police, un changement de taille du `body` grâce aux `@media queries` permet d’impacter l’ensemble de nos éléments.

On peut ainsi définir dès le départ une taille pour chacun de nos éléments, et puis changer leur tailles à différents _breakpoints_.

L’inconvénient de cette méthode, c’est que si on utilise un fallback en `px`, les éléments calculés de cette manière ne seront pas affectés par le changement de `font-size` du `body`, ce qui signifie qu’ils devront être redéfinis ensuite.

## D’autres solutions pour l’avenir

il existe d’autres unités de mesure, instituées par CSS3 : `vh`, `vw` `vmin` et `vmax`. Elles sont calculées par rapport à la taille actuelle du viewport. Le support est plutôt correct, mais ceci dit sur très grand écran (ou tout petit) le résultat peut vite s’avérer bizarre…

## En conclusion

Il existe plusieurs méthodes de gérer `font-size`; de mon côté j’ai abandonné la méthode des 62.5% et je m’appuie sur le `@mixin` ci-dessus pour configurer mes différentes polices. J’aimerais un peu creuser le retour aux `em` pour plus de simplicité dans la gestion des différentes tailles de police. Un article intitulé [Font sizing with rem could be avoided](http://csswizardry.com/2011/05/font-sizing-with-rem-could-be-avoided/) a d’ailleurs été écrit sur ce sujet par [Harry Roberts](http://csswizardry.com/).

<p class="info">Mise à jour (29/08/2015) : je suis finalement revenu à du 62.5% + <code>rem</code> pour la gestion de mes tailles de police; plus simple pour les calculs et le support est maintenant <a href="http://caniuse.com/#search=rem">très bon</a>.
