---
date: 2012-08-15T00:00:00Z
description: Présentation d'une propriété CSS maintenant devenue incontournable
tags:
- css
title: 'Les atouts de box-sizing: border-box'
---

Par défaut, la largeur totale d'une boîte sera égale à la largeur qui lui a été attribuée + son padding (`box-sizing: content-box`). Par exemple, si l'on veut avoir une boîte d'une largeur de 100px, avec un padding de 10px, il faudra spécifier dans le css une <code>width:80px</code> pour celle-ci (80px + 10 px + 10px). Pas vraiment pratique, surtout lorsqu'on veut utiliser des boîtes de taille fluide avec des paddings fixes...

---

Heureusement, La valeur <code>border-box</code> de la propriété CSS <code>box-sizing</code>, apparemment peu connue et peu utilisée jusqu'à assez récemment, présente des atouts considérables dans la gestion des <code>width</code> et <code>padding</code>. Le <a href="https://developer.mozilla.org/fr/docs/CSS/-moz-box-sizing">journal des développeurs</a> de Mozilla en donne la définition suivante&nbsp;:

> Les propriétés de largeur et de hauteur incluent la taille du padding et la bordure, en excluant la marge. C'est le modèle de boîte utilisé par Internet Explorer lorsque le document n'est pas en mode de compatibilité des standards.

Ainsi, si l'on reprend le premier exemple, une boîte à qui on a attribué cette propriété fera toujours une largeur de 100px, quelque soit le padding et la bordure qu'on lui attribue. Même chose pour une boîte de largeur fluide, par exemple de 100%&nbsp;: si on lui attribue un padding de 5px, elle ne débordera pas de sa taille d'origine.

Je me suis mis à récemment utiliser <code>box-sizing: border-box</code> pour un projet sur lequel je travaille. C'est peu dire qu'elle a complètement changé mon mode de fonctionnement, et je vous invite aussi à tester ça au plus vite.

<h2>Utilisation</h2>

<a href="http://paulirish.com">Paul Irish</a>, dans son <a href="http://paulirish.com/2012/box-sizing-border-box-ftw/">article&nbsp;<sup>EN</sup></a> vantant les mérites de <code>box-sizing: border-box</code>, préconise d'utiliser le CSS suivant&nbsp;:

<pre><code class="css">* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }</code></pre>

De cette manière, tous les éléments seront concernés par ce changement, et vous n'aurez plus besoin de vous casser la tête pour calculer leurs tailles.

<h2>Support par les navigateurs</h2>

Les navigateurs récents, IE8 compris, supportent ce mode de fonctionnement. Pour IE 6/7, on pourra avoir recours au <a href="https://github.com/Schepp/box-sizing-polyfill">box-sizing polyfill</a> pour contourner le problème. Je l'ai personnellement testé avec succès sur IE7.

Pour résumer, à mes yeux cette méthode est à utiliser sans aucun risque. Elle présente énormément d'atouts, et aucun bug à ma connaissance (il existait un bug avec jQuery mais celui-ci <a href="http://bugs.jquery.com/ticket/11004">semble avoir été corrigé&nbsp;<sup>EN</sup></a> depuis). Je ne peux donc que vous recommander de passer à <code>box-sizing: border-box</code> pour vos futurs projets&nbsp;:)
