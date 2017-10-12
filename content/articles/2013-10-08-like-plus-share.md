---
date: 2013-10-08T00:00:00Z
description: Le poids et l'impact des boutons de partage sociaux sur un site
tags:
- divers
- ux
title: Like, Plus, Share...
url: "/articles/like-plus-share"
---

J'ai récemment lu un article intitulé *[Sweep the Sleaze](http://ia.net/blog/sweep-the-sleaze/)* (balayer les ordures), écrit par Oliver Reichenstein de chez [iA](http://ia.net/). Dans cet article, Oliver tire à boulets rouges sur les boutons de partage qui ont envahi nos pages depuis quelques temps. Et je dois dire que je partage en effet la plupart de ses réticences.

---

<figure>
  <img src="/assets/img/boutons-sociaux.jpg" alt="Boutons sociaux" class="imgb">
  <figcaption>Un aperçu désormais incontournable...</figcaption>
</figure>

Il est aujourd'hui rare de voir un site qui n'est pas affublé de la ribambelles de boutons de partage en tout genre&nbsp;: Twitter, Facebook, Google+, Pinterest, voire des réseaux moins connus... ceux-ci paraissent être rentrés dans nos moeurs, mais sont-ils réellement indispensables&nbsp;? Et si c'est le cas, n'existe-t-il pas de solution alternative aux solutions natives&nbsp;?

## De nombreux désavantages

Pour reprendre l'article d'iA, les boutons de partage présentent pas mal de défauts dont voici un résumé&nbsp;:

* Risque d'espionnage, par exemple avec le [bouton "Like"](http://theweek.com/article/index/215546/is-facebooks-like-button-spying-on-you) de Facebook.
* Temps de chargement [plus lents](http://zurb.com/article/883/small-painful-buttons-why-social-media-bu).
* Peu de partages ou like = risque d'impact négatif sur la crédibilité de la page concernée.
* Ces boutons rajoutent du "bruit" non nécessaire au contenu.

A ceci, je rajoute mon impression personnelle&nbsp;:

* Ces liens sont plus un coup de pub pour les réseaux sociaux qu'autre chose, et en ont-ils franchement besoin&nbsp;?
* Si quelqu'un veut à tout prix partager un lien, copier/coller l'URL n'est quand même pas sorcier. Si la personne utilise les réseaux sociaux, cette manipulation ne devrait pas lui être inconnue.

## Des KPI difficiles à évaluer

De mon expérience professionnelle passée en website management de site e-commerce, j'ai retiré le sentiment que les KPI (indicateurs clés de performance) de ces boutons étaient toujours compliqués à évaluer, et leur impact sur le chiffre d'affaires pour le moins flou.

Dans ces conditions, il est assez difficile d'adopter une position tranchée sur le sort qu'il faut leur réserver. Leur utilisation n'est en effet pas forcément négligeable; je pense par exemple au bouton +1 de Google, qui semble avoir un réel impact sur nos recherches...

Ceci dit, il existe d'autres pistes à étudier si l'on souhaite à tout prix intégrer ces boutons sur un site.

## Les solutions alternatives

### Chargement asynchrone

Cette solution doit en fait être systématiquement utilisée si on utilise le code fourni par les réseaux sociaux. Même si il est optimisé, il reste [très lourd](http://zurb.com/article/883/small-painful-buttons-why-social-media-bu) et a donc un réel impact sur les performances d'une page. Une solution d'affichage asynchrone que j'utilise en intégration est [Socialite.js](http://socialitejs.com/), par [David Bushell](http://dbushell.com/) et [Tom Morton](http://twmorton.com/).

Ce plugin JS permet de chargement les boutons de partage au survol ou au scroll de la page.

### Une solution maison

Les liens de partage peuvent être réalisés de manière beaucoup plus simple et sans aucun ajout de script externe.
J'ai réalisé une démo (avec la librairie CSS [I hate U flat !](/projets/ihateuflat/)) pour expliquer l'idée&nbsp;:

<p class="demo"><a href="/demos/boutons-partage.html">Voir la démo</a></p>

Le principe est simple, on se base sur les liens de partage direct pour chaque réseau social (cf. le code de la démo) et on ouvre tout ça en popup avec un peu de JavaScript.
