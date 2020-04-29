---
title: 'Dans l’enfer de @font-face'
description: 'Gérer les fontes n’a vraiment rien de simple, surtout si on supporte IE8.'
date: 2014-01-30T00:00:00Z
path: '/articles/dans-l-enfer-de-font-face/'
archive: true
---

L’utilisation de fontes personnalisées a explosé ces dernières années sur le web grâce à la déclaration CSS `@font-face`, dont l’utilisation a été rendue simple par des sites tels que [FontSquirrel](http://www.fontsquirrel.com/) et son désormais célèbre webfont generator. Pourtant, la méthode proposée ne me paraît pas idéale.

Si l’on reprend l’exemple de FontSquirrel, le code généré par le kit téléchargé est le suivant :

```css
@font-face {
  font-family: 'merriweather';
  src: url('merriweather.eot');
  src: url('merriweather.eot?#iefix') format('embedded-opentype'), url('merriweather.woff')
      format('woff'), url('merriweather.ttf') format('truetype'), url('merriweather.svg#merriweatherheavy')
      format('svg');
  font-weight: normal;
  font-style: normal;
}
```

Lorsque l’on veut définir différents types de cette police, on spécifie une `@font-face` propre à chacun (merriweather-italic, merriweather-bold etc.). Puis dans notre CSS, par exemple :

```css
strong {
  font-family: merriweather-bold, Serif;
  font-weight: normal;
}
```

Le hic avec cette façon de faire, c’est qu’en cas d’impossibilité pour le navigateur d’afficher les fontes personnalisées, la police de _fallback_ s’affichera sans italique ou sans gras.

## Une autre solution ?

En fouillant un peu, j’ai trouvé cette [solution](http://www.metaltoad.com/blog/how-use-font-face-avoid-faux-italic-and-bold-browser-styles), bien plus intéressante car elle évitera la suppression ou le passage en _faux_ (c’est-à-dire simulé par le navigateur) des styles italiques et gras :

```css
@font-face {
  font-family: 'Whatever';
  src: url('whatever.eot');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Whatever';
  src: url('whatever-italic.eot');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Whatever';
  src: url('whatever-bold.eot');
  font-weight: bold;
  font-style: normal;
}
```

On utilise un seul nom unique de `font-family` pour toutes nos `@font-face`, puis on y applique nos `font-weight` et `font-style` désirés. Problème réglé… Du moins sur la plupart des navigateurs.

## IE, l’éternel vilain petit canard

Comme d’habitude, là où ça coince, c’est avec Internet Explorer (du moins jusqu’à la version 8). La raison, c’est que ce cher IE ne prend pas en compte `font-style` et `font-weight` dans la déclaration `@font-face` ([source](http://itsravenous.com/blog/banishing-faux-italic-and-faux-bold--on-css3-fonts-in-IE-8-and-below)).

Pour contourner le problème, il va falloir avoir recours aux commentaires conditionnels et une feuille de styles séparés pour IE. C’est dans celle-ci qu’on intégrera les polices sur le format proposé par FontSquirrel, avec un nom de `font-family` par type de police. _Problem solved_ !
