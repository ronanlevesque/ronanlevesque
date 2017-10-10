---
date: 2015-04-02T00:00:00Z
description: Un article sur les problèmes de synchronisation que j'ai pu rencontrer
  par le passé en utilisant Gulp et ses node_module sur Dropbox
tags:
- outils
title: Dropbox et node_modules
url: "/articles/dropbox-et-node-modules"
---

J'utilise très souvent Dropbox pour garder mes différents projets synchronisés quelle que soit la machine que j'utilise. J'ai cependant rencontré il y a quelques temps un souci en voulant utiliser Gulp et son volumineux `node_modules`&nbsp;: ce dernier a tendance à se compter en milliers de fichiers, ce qui n'est pas idéal pour la synchronisation de Dropbox.

---

Heureusement il est possible d'ignorer ces fichiers; je vais vous montrer dans cet article comment faire.

Mettons que ayez un projet Gulp avec son `package.json`. Une simple commande `npm install` permettra d'installer tous les modules contenus dans `package.json`. Mais avant cela, rendez-vous dans le dossier du projet, là où se situe le fichier en question, et créez-y un dossier `node_modules` vide.

Ensuite, dans les préférences de Dropdox, direction `Compte > Synchronisation sélective` et décochez le dossier `node_modules`&nbsp;:

<img src="/assets/img/screen-dropbox-1.png" alt="Préférences Dropbox" style="border: none;">

Celui-ci va être supprimé du dossier dans lequel il se trouvait. Il ne vous reste plus qu'à lancer votre `npm install`; lorsque ceci est fait, le dossier node_modules apparaîtra comme ignoré par Dropbox&nbsp;:

<img src="/assets/img/screen-node-modules.png" alt="Dossier node_modules" style="border: none;">

La démarche peut sembler un brin fastidieuse, mais c'est à ma connaissance la seule solution pour éviter d'avoir à synchroniser à chaque fois vos `node_modules`.
