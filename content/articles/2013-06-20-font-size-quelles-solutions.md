---
date: 2013-06-20T00:00:00Z
description: Comment gérer les tailles de police de votre site au mieux
tags:
- css
- sass
title: 'Font-size : quelles solutions ?'
url: '/articles/font-size-quelles-solutions'
---

Le choix est large quand on s'intéresse à la propriété CSS <code>font-size</code>&nbsp;: on peut tout aussi bien lui attribuer des valeurs prédéfinies (<code>small</code>, <code>medium</code> etc.) que des valeurs absolues (<code>pt</code>, <code>cm</code>, <code>mm</code> etc.) ou encore des valeurs relatives (<code>px</code>, <code>em</code>, <code>%</code>, etc.). Le but de mon article est de faire un point sur les unités <code>em</code> et <code>rem</code> et leurs usages.

---

<h2>Em et Rem&nbsp;: un rappel</h2>

Ces unités sont parfois un peu dures à appréhender car leur définition reste plutôt abstraite. Pour reprendre celle du site de <a href="http://www.w3.org/Style/Examples/007/units">w3.org</a>&nbsp;:

> L'unité <code>em</code> dépend de la police de caractères et peut être différente pour chaque élément du document [...] Exprimer des tailles, comme les margins et les paddings, en <code>em</code> signifie qu'elles sont relatives à la taille de la police, et si l'utilisateur a une large police de caractères (sur un grand écran par exemple) ou au contraire une petite police (sur un smartphone par exemple), les tailles seront en proportion.

De mon point de vue, il est préférable d'utiliser des <code>em</code> afin de permettre que le texte soit redimensionnable afin de mieux s'adapter aux différentes résolutions (pour info les navigateurs modernes redimensionnent automatiquement les dimensions en `px`).

<h2>62.5%&nbsp;: le nombre magique&nbsp;?</h2>

Afin de simplifier les calculs de taille de police en utilisant les <code>em</code>, une solution souvent utilisée est de définir le code suivant&nbsp;:

<pre><code class="css">body {font-size: 62.5%}</code></pre>

Sachant que la taille de police par défaut des navigateurs modernes est (<a href="http://isitrwd.com/rfs/">presque&nbsp;?</a>) tout le temps <code>16px</code> pour <code>1em</code>, la conversion est donc beaucoup plus simple suite à ce calcul et donnera le résultat suivant&nbsp;:

<pre><code class="nohighlight">10 px = 1 em</code></pre>

L'inconvénient de cette méthode, c'est que suite à ce changement la taille par défaut du texte sera de <code>10px</code> à part si on ne le précise pas ailleurs. Utilisé en production, je trouve ça plutôt pénible et potentiellement source d'erreurs.

Du coup je ne touche du coup plus à la <code>font-size</code> de mon body et je la laisse par défaut. Je l'avais déjà lu chez <a href="http://filamentgroup.com/lab/how_we_learned_to_leave_body_font_size_alone/">Filament Group</a>, mais je fais ça depuis un petit moment et je trouve ça plus simple à gérer.

<h2>Rem&nbsp;: Sass to the rescue !</h2>

<code>Em</code> est donc une unité intéressante à utiliser, à un détail près&nbsp;: sa base variera selon la taille de la police, pouvant engendrer des différences de mise en page parfois pénibles (par exemple sur les margins et paddings d'un texte d'une certaine taille).

Cet inconvénient est toutefois corrigé par l'unité <code>rem</code> (pour <em>root em</em>). Celle-ci fonctionne sur le même principe que les <code>em</code>, à la différence près qu'elle utilise comme base de départ la racine html. Elle est donc moins source d'erreurs de calcul. Par contre elle n'est pas supportée par IE8- (mais un <a href="https://github.com/chuckcarpenter/REM-unit-polyfill">polyfill</a> existe).

Si on ne souhaite pas utiliser de polyfill, on se retrouve donc face à un casse-tête à chaque fois qu'on utilise des <code>rem</code>, car il faudra également prévoir et calculer un fallback en <code>px</code> pour les navigateurs ne reconnaissant pas cette unité...

Et c'est précisément là que Sass intervient&nbsp;: il va faire le calcul à notre place grâce à un <code>@mixin</code>. Celui que j'utilise est le suivant&nbsp;:

<pre><code class="scss">@mixin fs($fontsize: 16, $fontbase: 16) {
  font-size: $fontsize + px;
  font-size: ($fontsize / $fontbase) * 1rem;
}
</code></pre>

Il suffit ainsi d'écrire <code>@include fs(16)</code> pour que nos <code>rem</code> soient convertis en l'équivalent de <code>16px</code>, avec le fallback en <code>px</code> pour les vieux navigateurs.

<h2>Et le responsive design&nbsp;?</h2>

L'avantage du responsive design, c'est que si l'on utilise <code>em</code> ou <code>rem</code> pour nos tailles de police, un changement de taille du <code>body</code> grâce aux <code>@media queries</code> permet d'impacter l'ensemble de nos éléments.

On peut ainsi définir dès le départ une taille pour chacun de nos éléments, et puis changer leur tailles à différents <em>breakpoints</em>.

L'inconvénient de cette méthode, c'est que si on utilise un fallback en <code>px</code>, les éléments calculés de cette manière ne seront pas affectés par le changement de <code>font-size</code> du <code>body</code>, ce qui signifie qu'ils devront être redéfinis ensuite.

<h2>D'autres solutions pour l'avenir</h2>

il existe d'autres unités de mesure, instituées par CSS3&nbsp;: <code>vh</code>, <code>vw</code> <code>vmin</code> et <code>vmax</code>. Elles sont calculées par rapport à la taille actuelle du viewport. Le support est plutôt correct, mais ceci dit sur très grand écran (ou tout petit) le résultat peut vite s'avérer bizarre...

<h2>En conclusion</h2>

Il existe plusieurs méthodes de gérer <code>font-size</code>; de mon côté j'ai abandonné la méthode des 62.5% et je m'appuie sur le <code>@mixin</code> ci-dessus pour configurer mes différentes polices. J'aimerais un peu creuser le retour aux <code>em</code> pour plus de simplicité dans la gestion des différentes tailles de police. Un article intitulé <a href="http://csswizardry.com/2011/05/font-sizing-with-rem-could-be-avoided/">Font sizing with rem could be avoided&nbsp;<sup>EN</sup></a> a d'ailleurs été écrit sur ce sujet par <a href="http://csswizardry.com/">Harry Roberts</a>.

---

<p class="info">Mise à jour (29/08/2015) : je suis finalement revenu à du 62.5% + rem pour la gestion de mes tailles de police; plus simple pour les calculs et le support est maintenant [très bon](http://caniuse.com/#search=rem).
