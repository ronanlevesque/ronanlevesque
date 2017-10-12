---
date: 2012-06-30T00:00:00Z
description: Petite astuce pour facilement styler des formulaires sur iPhone, iPad etc
tags:
- css
title: Styler les formulaires sur iPhone
---

J'ai monté ce site dans l'optique d'en faire un site accessible aussi bien par les ordinateurs que les machines nomades (téléphones, tablettes)... Pour plus d'infos sur le sujet vous pouvez consulter l'article sur le responsive design que j'ai publié sur ce blog. L'idée est que le contenu reste le même quel que soit le support, mais que la façon dont il s'affiche s'ajuste d'elle-même.

---

Etant possesseur d'un iPhone, j'ai beaucoup testé mon site sur celui-ci pendant son développement. Un aspect qui m'a beaucoup frustré était le fait qu'il ne prenait pas en compte les styles que j'appliquais  aux <code>input</code> des formulaires, que ce soit les éléments de type <code>submit</code>, <code>text</code>, ou autres <code>field</code>.

Voilà par exemple les styles appliqués au bouton "Go" de la barre de recherche du blog&nbsp;:

    #submit {
      background: #333;
      -moz-border-radius: 0px 8px 8px 0px;
      border-radius: 0px 8px 8px 0px;
      border: 1px solid #333;
      height: 35px;
      margin: 0;
      padding: 0;
      width: 35px;
      cursor: pointer;
      font: bold 13px "Gudea", Arial, Sans-serif;
      color: #fff;
    }

Le résultat est plutôt décevant&nbsp;:

![Formulaire iPhone](/assets/img/formulaire-iphone.png)

Il suffit pourtant de rajouter une simple ligne au style concerné pour contourner le problème. Cela permet de réinitialiser les styles par défaut pour l'iPhone (à confirmer si cela fonctionne également sur iPad...). Voici la ligne en question&nbsp;:

    -webkit-appearance: none;

Simple, non&nbsp;? Voilà, j'espère que cela vous sera aussi utile qu'à moi&nbsp;:)
