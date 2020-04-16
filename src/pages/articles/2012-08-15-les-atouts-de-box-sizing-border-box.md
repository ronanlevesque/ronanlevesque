---
title: 'Les atouts de box-sizing: border-box'
description: 'Présentation d’une propriété CSS maintenant devenue incontournable.'
date: 2012-08-15T00:00:00Z
path: '/articles/les-atouts-de-box-sizing-border-box'
archive: true
---

Par défaut, la largeur totale d’une boîte sera égale à la largeur qui lui a été attribuée + son padding (`box-sizing: content-box`). Par exemple, si l’on veut avoir une boîte d’une largeur de 100px, avec un padding de 10px, il faudra spécifier dans le css une `width:80px` pour celle-ci (80px + 10 px + 10px). Pas vraiment pratique, surtout lorsqu’on veut utiliser des boîtes de taille fluide avec des paddings fixes…

Heureusement, La valeur `border-box` de la propriété CSS `box-sizing`, apparemment peu connue et peu utilisée jusqu’à assez récemment, présente des atouts considérables dans la gestion des `width` et `padding`. Le [journal des développeurs](https://developer.mozilla.org/fr/docs/CSS/-moz-box-sizing) de Mozilla en donne la définition suivante :

> Les propriétés de largeur et de hauteur incluent la taille du padding et la bordure, en excluant la marge. C’est le modèle de boîte utilisé par Internet Explorer lorsque le document n’est pas en mode de compatibilité des standards.

Ainsi, si l’on reprend le premier exemple, une boîte à qui on a attribué cette propriété fera toujours une largeur de 100px, quelque soit le padding et la bordure qu’on lui attribue. Même chose pour une boîte de largeur fluide, par exemple de 100% : si on lui attribue un padding de 5px, elle ne débordera pas de sa taille d’origine.

Je me suis mis à récemment utiliser `box-sizing: border-box` pour un projet sur lequel je travaille. C’est peu dire qu’elle a complètement changé mon mode de fonctionnement, et je vous invite aussi à tester ça au plus vite.

## Utilisation

[Paul Irish](http://paulirish.com), dans son [article](http://paulirish.com/2012/box-sizing-border-box-ftw/) vantant les mérites de `box-sizing: border-box`, préconise d’utiliser le CSS suivant :

```css
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
```

De cette manière, tous les éléments seront concernés par ce changement, et vous n’aurez plus besoin de vous casser la tête pour calculer leurs tailles.

## Support par les navigateurs

Les navigateurs récents, IE8 compris, supportent ce mode de fonctionnement. Pour IE 6/7, on pourra avoir recours au [box-sizing polyfill](https://github.com/Schepp/box-sizing-polyfill) pour contourner le problème. Je l’ai personnellement testé avec succès sur IE7.

Pour résumer, à mes yeux cette méthode est à utiliser sans aucun risque. Elle présente énormément d’atouts, et aucun bug à ma connaissance (il existait un bug avec jQuery mais celui-ci [semble avoir été corrigé](http://bugs.jquery.com/ticket/11004) depuis). Je ne peux donc que vous recommander de passer à `box-sizing: border-box` pour vos futurs projets :)
