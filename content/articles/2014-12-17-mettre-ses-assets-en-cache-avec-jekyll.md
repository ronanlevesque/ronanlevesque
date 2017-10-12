---
date: 2014-12-17T00:00:00Z
description: Cet article montre une astuce toute simple que j'utilise pour contourner
  les problèmes de cache que l'on peut rencontrer sur Jekyll avec différents assets.
tags:
- divers
- outils
- jekyll
title: Mettre ses assets en cache avec Jekyll
---

Je partage aujourd'hui une solution assez simple que l'on peut mettre en place avec Jekyll pour générer une unique ID utilisable sur nos assets pour contourner les éventuels problèmes de cache, et ainsi faire en sorte que les différents assets que l'on utilise soient correctement mis à jour.

---

<p class="info">Mise à jour (01/07/2015) : depuis l'écriture de cette article, j'ai mis en place un système bien plus pertinent que je détaille ci-dessous.</p>

---

## L'ancienne solution

Celle-ci se base sur les formats date du système de templating <a href="http://liquidmarkup.org/">liquid</a> pour générer une ID. Ainsi, au lieu de :

    <link rel="stylesheet" href="/css/myawesomestylesheet.css"&>

Il nous suffira d'utiliser :

    <link rel="stylesheet" href="/css/myawesomestylesheet.css?v={{ site.time | date: '%y%m%d%k%M%S' }}">

Ce qui générera, dans l'ordre : l'année, le mois, le jour, et l'heure avec minutes et secondes. Ainsi le résultat obtenu sera de ce type :

    <link rel="stylesheet" href="/css/myawesomestylesheet.css?v=141217192112">

De cette manière, on est sûr d'avoir une ID *presque* unique puisqu'à chaque seconde passée elle sera différente.

## Les limites de cette solution

En appliquant cette façon de faire, tous les fichiers HTML seront mis à jour avec une nouvelle version du CSS, même si celui-ci n'a pas changé. La mise en cache perd un peu de son intérêt... Autre argument, Google [conseille](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching) d'éviter les *query parameters* au profit des *fingerprints*.

## Un autre système

Je suis allé chercher du côté des plugins Jekyll et j'ai déniché [Jekyll-minibundle](https://github.com/tkareine/jekyll-minibundle), qui fait exactement ce que je cherche. Une fois le plugin installé, les *fingerprints* s'ajoutent de cette manière :

    <link href="{% ministamp /_assets/css/fox.css /assets/css/fox.css %}" rel="stylesheet">

Le premier lien est le fichier source, le deuxième est le fichier de destination. Le code généré donne ça :

    <link href="/assets/css/fox-86e4c5e39ca8a41719996d783a87c702.css" rel="stylesheet">
