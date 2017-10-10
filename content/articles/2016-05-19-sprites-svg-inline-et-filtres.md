---
date: 2016-05-19T00:00:00Z
description: Comment fixer un bug généré par l'utilisation des sprites SVG inline
  avec des filtres
tags:
- svg
title: Sprites SVG inline et filtres
---

Je me suis récemment arraché quelques cheveux sur un bug qui me semblait assez incompréhensible lorsque j'essayais d'utiliser des sprites SVG inline (directement intégrés dans mes pages) et que ceux-ci utilisaient des filtres&nbsp;: le sprite appelé ne s'affichait tout simplement pas. Ayant réussi à trouver d'où le problème venait, je le partage donc; ça peut toujours aider.

---

<p class="info">Les exemples suivants font usage de <code>symbol</code> et <code>use</code> pour afficher les icônes. Si vous n'êtes pas à l'aise avec le sujet, je vous invite à lire en amont cet <a href="https://css-tricks.com/svg-symbol-good-choice-icons/">article de CSS-Tricks</a>.</p>

Prenons un cas basique d'utilisation d'un sprite SVG&nbsp;:

    // J'appelle mon sprite et je le masque
    <svg style="display:none;" xmlns="http://www.w3.org/2000/svg">
      <symbol id="close" viewBox="0 0 64 64"><path d="M32 1C16.537 1 4 13.537 4 29s12.537 28 28 28 28-12.537 28-28S47.463 1 32 1zm9.686 41.867l-9.667-9.57L22.41 43l-4.277-4.277 9.576-9.7-9.71-9.61 4.277-4.278 9.695 9.572L41.552 15l4.315 4.314-9.567 9.663 9.7 9.576-4.314 4.314z" fill="#fff" fill-rule="evenodd"/></symbol>
    </svg>

    // J'utilise le sprite "close"
    <svg class="mainNav-icon" aria-hidden="true">
      <use xlink:href="#close"></use>
    </svg>

Le code ci-dessous permettra d'afficher le symbole `#close` n'importe où sur votre page via la balise `use`.

<div class="example" style="padding:50px;">
  <svg style="position:absolute;visibility:hidden;left:-9999px;top:-9999px;" xmlns="http://www.w3.org/2000/svg">
    <symbol id="close" viewBox="0 0 64 64"><path d="M32 1C16.537 1 4 13.537 4 29s12.537 28 28 28 28-12.537 28-28S47.463 1 32 1zm9.686 41.867l-9.667-9.57L22.41 43l-4.277-4.277 9.576-9.7-9.71-9.61 4.277-4.278 9.695 9.572L41.552 15l4.315 4.314-9.567 9.663 9.7 9.576-4.314 4.314z" fill="#fff" fill-rule="evenodd"/></symbol>
  </svg>

  <svg class="mainNav-icon" aria-hidden="true" style="margin:auto;display:block;width:70px;height:70px;">
    <use xlink:href="#close"></use>
  </svg>
</div>

Là où ça coince, avec le code donné ci-dessus, c'est lorsque vous souhaitez rajouter des filtres. En laissant le sprite SVG en `display: none;`, vos icônes ne s'afficheront plus.

Heureusement, la solution est assez simple&nbsp;: il suffit de masquer le SVG un peu différemment pour que les icônes s'affichent à nouveau. Voici un nouvel exemple qui inclut cette fois des filtres&nbsp;:

    // J'appelle mon sprite SVG et je le masque d'une manière différente
    <svg style="position:absolute;visibility:hidden;left:-9999px;top:-9999px;" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="a"><feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      // J'applique un filtre
      <symbol id="close" viewBox="0 0 64 64"><path d="M32 1C16.537 1 4 13.537 4 29s12.537 28 28 28 28-12.537 28-28S47.463 1 32 1zm9.686 41.867l-9.667-9.57L22.41 43l-4.277-4.277 9.576-9.7-9.71-9.61 4.277-4.278 9.695 9.572L41.552 15l4.315 4.314-9.567 9.663 9.7 9.576-4.314 4.314z" fill="#fff" fill-rule="evenodd" filter="url(#a)"/></symbol>
    </svg>

    // J'utilise le sprite "close"
    <svg class="mainNav-icon" aria-hidden="true">
      <use xlink:href="#close"></use>
    </svg>

Et voilà le résultat&nbsp;:

<svg style="position:absolute;visibility:hidden;left:-9999px;top:-9999px;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="a"><feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <symbol id="close2" viewBox="0 0 64 64"><path d="M32 1C16.537 1 4 13.537 4 29s12.537 28 28 28 28-12.537 28-28S47.463 1 32 1zm9.686 41.867l-9.667-9.57L22.41 43l-4.277-4.277 9.576-9.7-9.71-9.61 4.277-4.278 9.695 9.572L41.552 15l4.315 4.314-9.567 9.663 9.7 9.576-4.314 4.314z" fill="#fff" fill-rule="evenodd" filter="url(#a)"/></symbol>
</svg>

<div class="example" style="padding:50px;">
  <svg class="mainNav-icon" aria-hidden="true" style="margin:auto;display:block;width:70px;height:70px;">
    <use xlink:href="#close2"></use>
  </svg>
</div>

Pour information, j'ai pu observer ce bug sur des versions récentes de Chrome, Firefox et Opéra. Si jamais vous en savez plus sur le sujet, n'hésitez pas à m'en parler sur [Twitter](https://twitter.com/ronanlevesque).
