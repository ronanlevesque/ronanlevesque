---
date: 2013-09-28T00:00:00Z
description: Pourquoi j'ai abandonné WordPress au profit d'une solution plus adaptée
  à mes besoins
tags:
- divers
- outils
- jekyll
title: Goodbye WordPress, hello Jekyll
---

Cela fait un moment que je vois de plus en plus de bloggeurs tech se tourner vers [Jekyll](http://jekyllrb.com/) comme solution de blogging et abandonner leur ancienne plateforme pour l'occasion (souvent Tumblr ou WordPress). Mon site ayant besoin d'un sacré rafraîchissement au niveau de son code, j'en ai donc profité pour faire d'un pierre deux coups et le basculer sous Jekyll. Je listerai ici tous les avantages que j'y ai trouvé a par rapport à mon ancien CMS.

---

## Présentation

Avant toute chose une petite explication&nbsp;: Jekyll est un script Ruby qui permet de générer un site statique à partir de fichiers sources et thèmes. Contrairement à des CMS tels que WordPress, Tumblr ou Drupal, le HTML sera généré avant d'être déployé sur le serveur. Avec Jekyll, il n'y a aucune interface d'administration.

## Pour qui&nbsp;?

Jekyll est plutôt réservé aux personnes qui ont un minimum de connaissances en Frontend. En revanche, aucune connaissance particulière de Ruby n'est requise.

Il n'a en tout cas certainement pas vocation à remplacer les grosses plateformes comme WordPress, qui permettent de développer des sites très complexes. Mais pour un petit site comme le mien, c'est l'outil de blogging idéal.

## Les avantages

### La rapidité

Premier avantage, mais surtout raison n°1 de mon passage à Jekyll. Le fait qu'il soit un site statique lui procure d'excellentes performances en termes de temps de chargement, puisque contrairement aux différents CMS, le HTML n'est pas généré à chaque requête web.

Sur WordPress, malgré l'utilisation d'outils de cache, j'observais entre chaque chargement une latence d'une petite seconde, ce qui est assez frustrant alors que j'avais fait en sorte d'optimiser le site au maximum.

### L'interface

Ou plutôt, l'absence d'interface. Les interfaces nécessitent tout le temps un petit temps d'apprentissage, et certaines peuvent parfois s'avérer plutôt complexes à gérer. Avec Jekyll, on gère ses thèmes, ses ressources (CSS, JS etc.) et ses différents articles, et c'est tout.

### Mises à jour

Qui dit absence d'interface, dit donc absence de mises à jour. Avec WordPress, on doit par exemple s'assurer que les extensions sont régulièrement mises à jour, sous peine que parfois celles-ci ne marchent plus du tout.

### Sécurité

Un autre point fort de Jekyll&nbsp;: il est plus sécurisé. Son absence d'administration est sa force. Un site sous Jekyll sera du coup immunisé à la très grosse majorité des attaques web.

### Hébergement

Jekyll peut être hébergé sur n'importe quel serveur qui peut servir des fichiers statiques, ce qui lui donne une grande flexibilité.

### Format d'écriture

Dernier point fort de Jekyll, mais non pas le moindre&nbsp;: outre le format HTML, les articles ou pages peuvent être rédigés au format [Markdown](http://daringfireball.net/projects/markdown/syntax) ou [Textile](http://fr.wikipedia.org/wiki/Textile_(langage)). Jekyll s'occupera tout seul de les convertir en fichiers HTML.

## En conclusion

En fait, après avoir basculé de WordPress à Jekyll, la seule question que je me pose est la suivante&nbsp;: "Pourquoi ne pas l'avoir fait plus tôt&nbsp;?!". Il évite la complexité inhérente à pas mal d'outils de blogging, il offre un contrôle total sur ses fichiers et il permet de fournir des performances excellentes.

Donc si vous êtes tentés, foncez.&nbsp;:)
