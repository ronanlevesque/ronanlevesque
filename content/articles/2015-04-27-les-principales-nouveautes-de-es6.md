---
date: 2015-04-27T00:00:00Z
description: Petit tour d'horizon des principales nouveautés d'ES6
tags:
- javascript
title: Les principales nouveautés de ES6
---

JavaScript s'apprête à vivre une petite révolution avec l'arrivée d'ES6, la prochaine version du standard ECMAScript. Et pour cause&nbsp;: c'est une grosse mise à jour du langage (la dernière datant de 2009 avec ES5). ES6 est à ce jour en [cours d'implémentation](http://kangax.github.io/compat-table/es6/) dans les différents moteurs JS.

---

Si vous êtes comme moi du genre impatient, il existe de nombreux _transpilers_ qui permettent à l'heure actuelle d'écrire de l'ES6 qui sera compilé en ES5... Une très bonne raison, à mes yeux, de tester cette nouvelle syntaxe dès aujourd'hui. Voici ci-dessous quelques-unes de ses principales nouveautés.

## Arrows

Une nouvelle manière, plus simple et plus rapide, d'écrire les fonctions&nbsp;:

    // ES5
    link.addEventlistener('click', function(e) {
      e.preventDefault();
    })

    // ES6
    link.addEventListener('click', e => { e.preventDefault(); });

Attention&nbsp;: contrairement aux fonctions traditionnelles la valeur de `this` est liée de façon lexicale (permet par exemple d'éviter les `var self = this;`).

## Let et const

`Let` et `const` sont les nouveaux `var`, à la différence qu'ils restent scopés au bloc le plus proche.

    function whatever() {
      if (true) {
        let a = 2;
      }
      console.log(a); // Erreur, a n'est pas défini
    }

`Const` est immuable. Il n'est accessible qu'en lecture seule.

    const a = 1;
    a++; // Erreur

## Templates

Les templates fournissent une manière plus simple de construire les strings (avec le caractère <kbd>`</kbd>) en permettant de l'interpolation.

    let fruit = {name: 'banana', color: 'yellow'};
    let describe = `This ${fruit.name} is ${fruit.color}`;
    console.log(describe); // Log 'This banana is yellow'

Par ailleurs, <kbd>`</kbd> permet d'écrire des strings multilignes.

## Objets littéraux

Ceux-ci bénéficient de quelques nouveautés&nbsp;: définition du prototype à la construction, raccourcis pour les assignements de type `prop: prop`, noms de propriétés dynamiques, possibilité de définir des méthodes directement...

    var myObj = {
      // Définition du protoype
      __proto__: protoObj,
      // Equivalent à prop: prop
      prop,
      // Nom de propriété dynamique
      &#91;'foo' + 'bar'&#93;: 1,
      // Méthode
      myMethod() {}
    };

## Classes

ES6 fournit une manière de gérer des classes via `class` et `extend`. Cette nouvelle syntaxe est du sucre syntaxique (sic) par-dessus les prototypes. En voici un petit exemple&nbsp;:

    class Car {
      constructor(speed) {
        this.speed = `${speed}km/h`;
        this.color = 'gray';
      }
      describe() {
        console.log(`This car is ${this.color}`);
      }
    }

    class Ferrari extends Car {
      constructor(maxSpeed) {
        super(maxSpeed);
        this.color = 'red';
      }
      get newStats() {
        return `Max speed&nbsp;: ${this.speed}`;
      }
    }

    let f430 = new Ferrari(250);
    f430.describe(); // Log 'This car is red'
    console.log(f430.newStats); // Log 'Max speed: 250km/h'

## Paramètres par défaut

On peut dorénavant spécifier des paramètres par défaut dans nos fonctions&nbsp;:

    function car(color='red') {
      console.log(`This car is ${color}.`);
    }

    car(); // Log 'This car is red.'

## Paramètres rest

Ils permettent de représenter un nombre illimité de paramètres, sous forme d'array.

    function fn(...args) {
      console.log(args.length);
    }

    fn(); // Log 0
    fn(1, 2, 3, 4, 5); // Log 5
    fn(...&#91;1, 2, 3, 4, 5&#93;); // Log 5 également

## Déstructuration

Celle-ci permet de lier des données (arrays et objets sont supportés). Si la valeur n'est pas trouvée, `undefined` sera retourné.

    let [foo, baz, bar] = [1, , 3];
    console.log(foo); // Log 1
    console.log(baz); // Log undefined
    console.log(bar); // Log 3

## For...of

Cette déclaration crée une boucle sur des objets pouvant être itérés (array, map, paramètres etc.). La syntaxe est simple&nbsp;:

    let arr = ['red', 'yellow', 'blue'];
    for (let n of arr) {
      console.log(n); // Log chaque valeur de l'array successivement
    }

## Générateurs

Leur syntaxe est particulière&nbsp;: On déclare une nouvelle instance générateur avec la syntaxe `function*`. A l'intérieur de celle-ci, `yield` définit la valeur retournée. On peut appeler chaque valeur qui suit avec `next()`.

    function* fn() {
      yield 'blue';
      yield 'red';
      yield 'green';
    }

    var a = fn();
    console.log(a.next()); // Log 'blue'
    console.log(a.next()); // Log 'red'
    console.log(a.next()); // Log 'green'

## Modules

Ils permettent de démocratiser les solutions mises en place avec CommonJS ou AMD. Ces nouveaux modules fonctionnent sur un modèle asynchrone&nbsp;: le code n'est pas exécuté tant que les modules requis n'ont pas été exécutés.

    // Dans un fichier 'utils.js'&nbsp;:
    export function addOne(x) {
      return x + 1;
    };

    // Dans un autre fichier&nbsp;:
    import addOne from 'utils';
    addOne(4);

    // Importation de tout le fichier&nbsp;:
    import * as utils from 'utils';
    utils.addOne(4);

## Autres

J'ai couvert ici les nouveautés qui paraissaient importantes à mes yeux, mais il en existe d'autres&nbsp;: promises, symboles, WeakMaps et WeakSets... Pour une liste exhaustive de tous les ajouts, je vous invite à consulter [es6-features](https://github.com/lukehoban/es6features) sur Github.
