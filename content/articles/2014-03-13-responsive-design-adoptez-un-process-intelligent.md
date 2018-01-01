---
date: 2014-03-13T00:00:00Z
description: Cet article s'attarde sur les problèmes que certains processes classiques
  en webdesign peuvent poser en responsive design.
tags:
- rwd
title: 'Responsive design : adoptez un process intelligent !'
url: "/articles/responsive-design-adoptez-un-process-intelligent"
---

Ce n'est plus vraiment une nouveauté&nbsp;: le responsive design est la tendance _hype_ du moment. De plus en plus d'acteurs du web ont réalisé qu'il devenait incontournable dans un contexte où les supports numériques se multiplient de manière phénoménale. Mais pour que sa mise en place soit effective, il faut pouvoir adapter nos processes à ses exigences. Malheureusement ça n'est pas toujours le cas.

---

<p class="info">Les processes décrits ci-dessous interviennent entre la définition des besoins client et de la stratégie (contenu, architecture etc.) et les phases de test/déploiement (tests cross-browsers, UAT, etc.).</p>

---

## Responsive&nbsp;: the wrong way

Je vais partir d'un modèle que j'ai hélas rencontré fréquemment par le passé, dans le cadre d'une relation agence/client.

1. L'équipe créative propose des maquettes en version _desktop_ au client.
2. Le client fait ses retours, les maquettes sont validées.
3. Les versions "petit écran" sont maquettées.
4. Les maquettes sont transmises pour intégration / développement.
5. Les problèmes commencent.

**Qu'est ce qui cloche avec cette façon de faire&nbsp;?** Le problème saute d'emblée aux yeux, l'équipe technique est intégrée en fin de boucle. Pour comprendre pourquoi cela est un gros souci, il est nécessaire de bien saisir la nuance entre responsive design et adaptive design. Rien de mieux qu'un schéma pour ça&nbsp;:

<figure>
  <img src="/assets/img/responsive-iceberg.jpg" alt="Responsive Iceberg">
  <figcaption>Responsive Iceberg, &copy; Brad Frost</figcaption>
</figure>

Le responsive design n'est en réalité qu'une partie de ce qu'on appelle l'adaptive design. Celui-ci ajoute une forte touche de complexité qui ne doit pas être prise à la légère&nbsp;: gestion des performances, des médias (notamment images), primauté du contenu sur le contenant, chargement conditionnel, amélioration progressive etc.

Les deux notions sont indissociables si l'on veut pouvoir fournir une bonne expérience aux utilisateurs. L'équipe technique doit donc se trouver au centre des processes, sinon on court droit à la catastrophe. En partant directement d'une version _desktop_, on occulte les petits écrans et toutes les contraintes qui y sont liées.

## Responsive&nbsp;: the good way

En prenant en compte ces informations, le schéma de création d'un site devrait être le suivant, ou au moins s'en approcher&nbsp;:

1. Création de wireframes grossiers faisant intervenir l'équipe créa, l'équipe technique et idéalement l'équipe UX; le tout dans une démarche _mobile first_.
2. Créations de prototypes HTML afin d'identifier les interactions intervenant de manière responsive.
3. Mise en place du design visuel, création de guides de styles.
4. Création des différents blocs réutilisables à travers toutes les pages.
5. Intégration et développement.

Cette façon de faire apporte une flexibilité vitale à la réalisation d'un site adaptable au plus large nombre de supports.

## Conclusion

Le responsive design doit être réfléchi en amont pour pouvoir être efficient. Il est impératif que nos processes s'adaptent à cette nouvelle façon de réfléchir, **et non l'inverse**. Dans le cas contraire, on se retrouvera avec des sites plus lourds que nécessaires, difficilement modifiables, fonctionnant grâce à des bidouillages bancals.

Pour une description complète d'un process responsive, je vous invite à consulter [responsiveprocess.com](http://responsiveprocess.com/).
