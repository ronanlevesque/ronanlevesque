---
title: 'Animer ses SVG avec Snap.svg'
date: 2014-07-21T00:00:00Z
path: '/articles/animer-ses-svg-avec-snap-svg'
archive: true
---

Ces derniers temps, j’ai un peu expérimenté l’animation de SVG. Mon premier essai a été cet [oiseau](http://codepen.io/eskiiss/full/kFphn), dont les différents éléments sont animés avec des keyframes. Mais ça reste limité en termes de possibilités : si je veux pouvoir modifier le tracé même de mon SVG de manière fluide, la meilleure solution que j’ai trouvée est [Snap.svg](http://snapsvg.io/). Je vais vous expliquer le processus en détails.

<p class="info">Attention, pour bien saisir ce tutoriel il est préférable d’être à l’aise sur le mode de fonctionnement des SVG.</p>

## L’idée de départ

Je suis parti sur une idée relativement simple : je crée des smileys sous Sketch, chacun avec deux états différents, et je fais en sorte de les faire changer d’état au clic.

[Voir la démo](http://codepen.io/eskiiss/full/gxqsr)

Pour se faciliter la vie, l’idée est de pouvoir animer chacune des parties du smiley indépendamment. La façon de faire est assez simple; on applique une ID à la section de notre SVG en question, et on la lie à Snap.Svg. Par exemple :

    var smiley = Snap.select('#smiley'),
        smileyBody = Snap.select('#smiley__body'),
        smileyMouth = Snap.select('#smiley__mouth');

Libre à nous de les animer ensuite comme l’on souhaite. Pour toggle les changements d’état, on applique un callback au `smiley.click` pour utiliser la fonction souhaitée (ici, `smileyDef()` et `smileyToggle`).

    toggle1 = false;
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

## Animation du corps

Les modifications apportées au corps sont assez simples : on change uniquement la couleur du fond et de la bordure. Cela se fait de la manière suivante :

    function smileyToggle() {
      smileyBody.animate({fill: '#A4DA69', stroke: '#5B9020'}, 150, mina.ease);
    }

`150` représente la durée de l’animation et `mina.ease` le type d’easing souhaité.

## Animation de la bouche

Il va s’agir de modifier le `path` de la bouche pour faire arborer à notre smiley un gros sourire. Cela se fait d’une manière identique à l’animation des couleurs du body :

    function smileyToggle() {
      smileyMouth.animate({d: 'M90.7207031,217.580078 C129.926268,287.516842 285.592097,293.239314 300.232422,205.320312', stroke: '#5B9020'}, 150, mina.ease);
    }

## Animation des sourcils

Sketch a un peu compliqué les choses sur cette partie, puisque pour certains de mes soucils il a utilisé des `path` et pour d’autres des `polygon`. J’ai décidé de garder cette structure afin de me familiariser un peu plus avec les fonctionnalités de base de Snap.svg.

Pour les `path`, j’ai comme pour ma bouche simplement modifié mon attribut `d`. Pour les `polygon`, j’ai dû appliquer des transformations pour que le sourcil en question se déplace à l’endroit voulu.

    function smileyToggle() {
      smileyLeftEyebrow.animate({transform: 't0,-30', fill: '#5B9020'}, 150, mina.ease);
    }

Les transformations sur Snap.svg ont une syntaxe assez spéciale. Ainsi, `t0,-30` désigne une translation des valeurs x et y à 0 et -30 dans l’espace. Pour plus d’infos sur le sujet, je vous conseille de lire cet [article](http://stackoverflow.com/questions/20302801/how-do-i-understand-transform-properties-in-snap-svg) sur Stackoverflow.

## Quelques précisions pour finir

Puisque mes animations sont basée sur un retour à l’état initial, il est nécessaire de prévoir une fonction qui réinitialisera les valeurs par défaut du SVG. (D’où la fonction `smileyDef()`).

Le détail de mon code est disponible ci-dessous, mais gardez en tête que ça n’est qu’une démo et que je n’ai pas vraiment cherché à l’optimiser. J’imagine qu’il sera plus facile à lire ainsi.
