---
date: 2014-07-21T00:00:00Z
description: Cet article montre les possibilités offertes par Snap.svg pour animer
  sans prise de tête vos SVG de manière convaincante (avec des exemples à l'appui).
tags:
- svg
- tutoriels
title: Animer ses SVG avec Snap.svg
url: "/articles/animer-ses-svg-avec-snap-svg"
---

Ces derniers temps, j'ai un peu expérimenté l'animation de SVG. Mon premier essai a été cet [oiseau](http://codepen.io/eskiiss/full/kFphn), dont les différents éléments sont animés avec des keyframes. Mais ça reste limité en termes de possibilités&nbsp;: si je veux pouvoir modifier le tracé même de mon SVG de manière fluide, la meilleure solution que j'ai trouvée est [Snap.svg](http://snapsvg.io/). Je vais vous expliquer le processus en détails.

---

<p class="info">Attention, pour bien saisir ce tutoriel il est préférable d'être à l'aise sur le mode de fonctionnement des SVG.</p>

---

## L'idée de départ

Je suis parti sur une idée relativement simple&nbsp;: je crée des smileys sous Sketch, chacun avec deux états différents, et je fais en sorte de les faire changer d'état au clic.

<style>
  .smileys {
    width: 64px;
    height: 64px;
    display: inline-block;
  }

  .smileys:hover {
    cursor: pointer;
  }

  @media screen and (min-width:50em) {
    .smileys {
      width: 110px;
      height: 110px;
    }
  }

  @media screen and (min-width:81.25em) {
    .smileys {
      width: 150px;
      height: 150px;
    }
  }
</style>

<figure>
  <svg class="smileys" width="390px" height="390px" viewBox="0 0 390 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="smiley">
    <defs>
      <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1">
        <feOffset dx="-30" dy="-30" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
        <feGaussianBlur stdDeviation="0" in="shadowOffsetInner1" result="shadowBlurInner1"></feGaussianBlur>
        <feComposite in="shadowBlurInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.21 0" in="shadowInnerInner1" type="matrix" result="shadowMatrixInner1"></feColorMatrix>
        <feMerge>
          <feMergeNode in="SourceGraphic"></feMergeNode>
          <feMergeNode in="shadowMatrixInner1"></feMergeNode>
        </feMerge>
      </filter>
      <rect id="path-2" x="45" y="45" width="300" height="300" rx="70"></rect>
    </defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g filter="url(#filter-1)">
        <use stroke="#33639B" stroke-width="16" fill="#69A4E9" fill-rule="evenodd" xlink:href="#path-2" id="smiley__body"></use>
        <use stroke="none" fill="none" xlink:href="#path-2"></use>
      </g>
      <path d="M164,219 C172.836556,219 180,210.941125 180,201 C180,191.058875 172.836556,183 164,183 C155.163444,183 148,191.058875 148,201 C148,210.941125 155.163444,219 164,219 Z" id="smiley__left-eye" fill="#33639B"></path>
      <ellipse id="smiley__right-eye" fill="#33639B" cx="227.5" cy="199.5" rx="20.5" ry="25.5"></ellipse>
      <polygon id="smiley__left-eyebrow" fill="#33639B" transform="translate(155.000000, 159.500000) translate(-155.000000, -159.500000) " points="170.921875 151.863281 178 167 132 167 "></polygon>
      <path d="M206.778449,154.125766 L215.978379,135.080539 L262.460072,173.170994 L206.778449,154.125766 Z" id="smiley__right-eyebrow" fill="#33639B" transform="translate(234.474884, 154.269042) rotate(-17.000000) translate(-234.474884, -154.269042) "></path>
      <path d="M122.5,268.5 L268.5,268.5" id="smiley__mouth" stroke="#33639B" stroke-width="15" stroke-linecap="square"></path>
    </g>
  </svg>
  <svg class="smileys" id="smiley-angry" width="390px" height="390px" viewBox="0 0 390 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1">
        <feOffset dx="-30" dy="-30" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
        <feGaussianBlur stdDeviation="0" in="shadowOffsetInner1" result="shadowBlurInner1"></feGaussianBlur>
        <feComposite in="shadowBlurInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.21 0" in="shadowInnerInner1" type="matrix" result="shadowMatrixInner1"></feColorMatrix>
        <feMerge>
          <feMergeNode in="SourceGraphic"></feMergeNode>
          <feMergeNode in="shadowMatrixInner1"></feMergeNode>
        </feMerge>
      </filter>
      <rect id="path-2" x="45" y="45" width="300" height="300" rx="70"></rect>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g filter="url(#filter-1)">
        <use stroke="#33639B" stroke-width="16" fill="#69A4E9" fill-rule="evenodd" xlink:href="#path-2" id="smiley-angry__body"></use>
        <use stroke="none" fill="none" xlink:href="#path-2"></use>
      </g>
      <path d="M164,230 C178.359403,230 190,217.911688 190,203 C190,188.088312 178.359403,176 164,176 C149.640597,176 138,188.088312 138,203 C138,217.911688 149.640597,230 164,230 Z" id="smiley-angry__left-eye" fill="#33639B"></path>
      <ellipse id="smiley-angry__right-eye" fill="#33639B" cx="224" cy="208.5" rx="23" ry="25.5"></ellipse>
      <polygon id="smiley-angry__left-eyebrow" fill="#33639B" transform="translate(154.637117, 149.601532) rotate(23.000000) translate(-154.637117, -149.601532) " points="177.637117 140.514229 177.637117 158.891193 131.637117 155.601532 "></polygon>
      <path d="M204.076423,160.168344 L211.200827,136.552495 L253.534648,162.326529 L204.076423,160.168344 Z" id="smiley-angry__right-eyebrow" fill="#33639B" transform="translate(229.049460, 149.424577) rotate(-32.000000) translate(-229.049460, -149.424577) "></path>
      <path d="M179.5,281.5 L211.5,281.5" id="smiley-angry__mouth" stroke="#33639B" stroke-width="15" stroke-linecap="square"></path>
    </g>
  </svg>
  <svg class="smileys" id="smiley-sad" width="390px" height="390px" viewBox="0 0 390 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1">
        <feOffset dx="-30" dy="-30" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
        <feGaussianBlur stdDeviation="0" in="shadowOffsetInner1" result="shadowBlurInner1"></feGaussianBlur>
        <feComposite in="shadowBlurInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.21 0" in="shadowInnerInner1" type="matrix" result="shadowMatrixInner1"></feColorMatrix>
        <feMerge>
          <feMergeNode in="SourceGraphic"></feMergeNode>
          <feMergeNode in="shadowMatrixInner1"></feMergeNode>
        </feMerge>
      </filter>
      <rect id="path-2" x="45" y="45" width="300" height="300" rx="70"></rect>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g>
        <g filter="url(#filter-1)">
          <use stroke="#33639B" stroke-width="16" fill="#69A4E9" fill-rule="evenodd" xlink:href="#path-2" id="smiley-sad__body"></use>
          <use stroke="none" fill="none" xlink:href="#path-2"></use>
        </g>
        <polygon id="smiley-sad__left-eyebrow" fill="#33639B" transform="translate(139.489906, 148.445197) rotate(-22.000000) translate(-139.489906, -148.445197) " points="155.702015 135.633087 161.177979 161.445197 117.940234 161.445197 "></polygon>
        <path d="M156,236 C170.359403,236 182,223.911688 182,209 C182,194.088312 170.359403,182 156,182 C141.640597,182 130,194.088312 130,209 C130,223.911688 141.640597,236 156,236 Z" id="smiley-sad__left-eye" fill="#33639B"></path>
        <ellipse id="smiley-sad__right-eye" fill="#33639B" cx="234" cy="207.5" rx="32" ry="31.5"></ellipse>
        <path d="M213.076423,146.168344 L220.200827,122.552495 L262.534648,148.326529 L213.076423,146.168344 Z" id="smiley-sad__right-eyebrow" fill="#33639B" transform="translate(238.049460, 135.424577) rotate(17.000000) translate(-238.049460, -135.424577) "></path>
        <path d="M156.3125,283.484375 C183.857004,258.058436 201.207184,257.26089 233.867188,278.996094" id="smiley-sad__mouth" stroke="#33639B" stroke-width="15"></path>
      </g>
    </g>
  </svg>
<figcaption>Cliquez pour tester...</figcaption>
</figure>

Pour se faciliter la vie, l'idée est de pouvoir animer chacune des parties du smiley indépendamment. La façon de faire est assez simple; on applique une ID à la section de notre SVG en question, et on la lie à Snap.Svg. Par exemple&nbsp;:

<pre><code class="js">var smiley = Snap.select('#smiley'),
    smileyBody = Snap.select('#smiley__body'),
    smileyMouth = Snap.select('#smiley__mouth');
</code></pre>

Libre à nous de les animer ensuite comme l'on souhaite. Pour toggle les changements d'état, on applique un callback au `smiley.click` pour utiliser la fonction souhaitée (ici, `smileyDef()` et `smileyToggle`).

<pre><code class="js">toggle1 = false;
smiley.click(function() {
  if(toggle1) {
    smileyDef();
    toggle1 = false;
  }
  else {
    smileyToggle();
    toggle1 = true;
  }
});
</code></pre>

## Animation du corps

Les modifications apportées au corps sont assez simples&nbsp;: on change uniquement la couleur du fond et de la bordure. Cela se fait de la manière suivante&nbsp;:

<pre><code class="js">function smileyToggle() {
  smileyBody.animate({fill: '#A4DA69', stroke: '#5B9020'}, 150, mina.ease);
}
</code></pre>

`150` représente la durée de l'animation et `mina.ease` le type d'easing souhaité.

## Animation de la bouche

Il va s'agir de modifier le `path` de la bouche pour faire arborer à notre smiley un gros sourire. Cela se fait d'une manière identique à l'animation des couleurs du body&nbsp;:

<pre><code class="js">function smileyToggle() {
  smileyMouth.animate({d: 'M90.7207031,217.580078 C129.926268,287.516842 285.592097,293.239314 300.232422,205.320312', stroke: '#5B9020'}, 150, mina.ease);
}
</code></pre>

## Animation des sourcils

Sketch a un peu compliqué les choses sur cette partie, puisque pour certains de mes soucils il a utilisé des `path` et pour d'autres des `polygon`. J'ai décidé de garder cette structure afin de me familiariser un peu plus avec les fonctionnalités de base de Snap.svg.

Pour les `path`, j'ai comme pour ma bouche simplement modifié mon attribut `d`. Pour les `polygon`, j'ai dû appliquer des transformations pour que le sourcil en question se déplace à l'endroit voulu.

<pre><code class="js">function smileyToggle() {
  smileyLeftEyebrow.animate({transform: 't0,-30', fill: '#5B9020'}, 150, mina.ease);
}
</code></pre>

Les transformations sur Snap.svg ont une syntaxe assez spéciale. Ainsi, `t0,-30` désigne une translation des valeurs x et y à 0 et -30 dans l'espace. Pour plus d'infos sur le sujet, je vous conseille de lire cet [article&nbsp;<sup>EN</sup>](http://stackoverflow.com/questions/20302801/how-do-i-understand-transform-properties-in-snap-svg) sur Stackoverflow.

## Quelques précisions pour finir

Puisque mes animations sont basée sur un retour à l'état initial, il est nécessaire de prévoir une fonction qui réinitialisera les valeurs par défaut du SVG. (D'où la fonction `smileyDef()`).

Le détail de mon code est disponible ci-dessous, mais gardez en tête que ça n'est qu'une démo et que je n'ai pas vraiment cherché à l'optimiser. J'imagine qu'il sera plus facile à lire ainsi.

<script src="/demos/snapsvg.min.js"></script>

<p class="demo"><a href="http://codepen.io/eskiiss/full/gxqsr">Voir la démo</a></p>
