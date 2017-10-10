---
date: 2012-09-24T00:00:00Z
description: Ajout de nouveaux templates pour mon framework, FOX CSS
tags:
- css
- rwd
title: Un template complexe pour le responsive design
---

J'ai intégré un template pour approche "mobile first" dans FOX CSS, le framework que j'ai créé (cf. mon article précédent). Par exemple, un élément de type bloc s'étant vu attribuer la classe .r50 occupera 100% de la largeur de son parent jusqu'à 640px de largeur, puis il passera à 50% au-dessus. C'est un bon début, mais comment faire si on veut plus de possibilités sur des résolutions supérieures&nbsp;?

---

Ainsi, avec cette classe <code>.r50</code>, on n'aura jamais que la possibilité d'avoir deux colonnes au dessus de 640px. Si on souhaite avoir 4 colonnes sur des résolutions plus hautes, on pourrait utiliser la classe <code>.r25</code> mais on se heurte à un autre problème&nbsp;: sur des résolutions plus faibles, 4 colonnes côte-à-côte ça n'est pas vraiment l'idéal...

La solution, c'est de mettre en place un système intermédiaire qui va offrir plus de flexibilité. Prenons l'exemple suivant&nbsp;:

<pre><code class="css">@media screen and (min-width: 40.0625em) {

  .r50-25 {
    width: 50%;
    display: inline-block;
  }

}

@media screen and (min-width: 60em) {

  .r50-25 {width: 25%;}

}
</code></pre>

A 640px et en-dessous&nbsp;: une colonne. Entre 641px et 959px&nbsp;: deux colonnes. Au dessus&nbsp;: 4 colonnes. Un exemple est disponible <a href="http://fox-css.com/demo">ici</a> (bas de page). Bon, ça n'a rien de très sorcier mais ça a le mérite d'offrir plus de solutions en termes de mise en page. J'ai également ajouté une autre possibilité, qui utilise les classes <code>.r66-33</code>, <code>.r33.33</code> et <code>r100-33</code>. En gros c'est toujours la même chose&nbsp;: le premier nombre indique la largeur de la classe entre 641 et 959px, le deuxième indique sa largeur au-dessus. On pourrait ensuite imaginer des templates plus complexes, mais je vais déjà tester ça en production, on verra si ça s'avère utile&nbsp;:)

---

<p class="info">Mise à jour (08/10/2012)&nbsp;: j'ai rajouté une nouvelle classe, <code>r.50-33</code>, fonctionnant toujours sur le même principe. Elle est visible directement sur la nouvelle version de <a href="/fox-css/">FOX CSS</a>.</p>
