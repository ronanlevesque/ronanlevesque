---
date: 2012-09-14T00:00:00Z
description: Présentation de mon projet de framework CSS light, FOX CSS
tags:
- css
- rwd
title: 'FOX CSS : un framework CSS light'
url: "/articles/fox-css-un-framework-css-light"
---

J'ai bossé ces dernières semaines sur la création d'un framework CSS adapté à mes besoins. L'idée m'est venue quand le framework KNACSS a été publié. Avant cela, j'utilisais un simple reset, celui d'Eric Meyer. Mais le fait de repartir à zéro, et de manière aussi extrême, n'était pas la solution la plus satisfaisante à mes yeux. A l'opposé, utiliser des frameworks complexes, comme Twitter Bootstrap, ne répondait pas non plus à mes besoins.

---

L'approche de <a href="http://knacss.com">KNACSS</a> est à mes yeux l'idéal&nbsp;: on a une base solide mais simple, pas trop contraignante, et légère. Elle est facilement modulable, bref elle n'a que des avantages. J'ai donc suivi ce modèle pour créer mon framework. En l'écrivant, j'ai voulu qu'il réponde aux impératifs suivants:

<ul>
	<li>un framework facilement adaptable selon les contraintes</li>
	<li>des resets légers, réduits au minimum</li>
	<li>la correction de quelques inconsistances entre les différents navigateurs</li>
	<li>l'intégration de HTML5</li>
	<li>le passage à <code>border-box</code> pour se simplifier la vie</li>
	<li>différentes possibilités de mise en page (<code>float</code>, <code>inline-block</code>, colonnes en % et px...)</li>
	<li>un template "mobile-first" pour le RWD</li>
	<li>l'ajout de styles basiques pour couleurs / boutons</li>
	<li>le support de IE, à partir de IE7 (c'est une volonté personnelle de mon côté de complètement abandonner IE6 dans mes projets)</li>
</ul>

<p class="link"><a href="/fox-css/">Voir le Framework FOX CSS</a></p>

Je l'étofferai sans doute dans un futur plus ou moins proche. J'aimerais notamment rajouter plus d'éléments pour le responsive design. Voilà, si jamais vous en avez envie, n'hésitez pas à l'utiliser, en espérant qu'il vous sera aussi utile qu'à moi !

---

<p class="info">Je vous invite fortement à aller consulter <a href="http://knacss.com">KNACSS</a>, l'exemple sur lequel je me suis appuyé pour la base de FOX CSS, et <a href="http://necolas.github.com/normalize.css/">Normalize</a>, dont le but est d'uniformiser les comportements entre différents navigateurs.</p>
