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

## Table des matières

* [Arrows](#arrows)
* [Let et const](#let-et-const)
* [Templates](#templates)
* [Objets littéraux](#objets-litteraux)
* [Classes](#classes)
* [Paramètres par défaut](#parametres-par-defaut)
* [Paramètres rest](#parametres-rest)
* [Déstructuration](#destructuration)
* [For...of](#for-of)
* [Générateurs](#generateurs)
* [Modules](#modules)
* [Autres](#autres)

<h2 id="arrows">Arrows</h2>

Une nouvelle manière, plus simple et plus rapide, d'écrire les fonctions&nbsp;:

<pre><code class="js">// ES5
link.addEventlistener('click', function(e) {
  e.preventDefault();
})

// ES6
link.addEventListener('click', e => { e.preventDefault(); });
</code></pre>

Attention&nbsp;: contrairement aux fonctions traditionnelles la valeur de `this` est liée de façon lexicale (permet par exemple d'éviter les `var self = this;`).

<h2 id="let-et-const">Let et const</h2>

`Let` et `const` sont les nouveaux `var`, à la différence qu'ils restent scopés au bloc le plus proche.

<pre><code class="js">function whatever() {
  if (true) {
    let a = 2;
  }
  console.log(a); // Erreur, a n'est pas défini
}</code></pre>

`Const` est immuable. Il n'est accessible qu'en lecture seule.

<pre><code class="js">const a = 1;
a++; // Erreur
</code></pre>

<h2 id="templates">Templates</h2>

Les templates fournissent une manière plus simple de construire les strings (avec le caractère <kbd>`</kbd>) en permettant de l'interpolation.

<pre><code class="js">let fruit = {name: 'banana', color: 'yellow'};
let describe = `This ${fruit.name} is ${fruit.color}`;
console.log(describe); // Log 'This banana is yellow'</code></pre>

Par ailleurs, <kbd>`</kbd> permet d'écrire des strings multilignes.

<h2 id="objets-litteraux">Objets littéraux</h2>

Ceux-ci bénéficient de quelques nouveautés&nbsp;: définition du prototype à la construction, raccourcis pour les assignements de type `prop: prop`, noms de propriétés dynamiques, possibilité de définir des méthodes directement...

<pre><code class="js">var myObj = {
  // Définition du protoype
  __proto__: protoObj,
  // Equivalent à prop: prop
  prop,
  // Nom de propriété dynamique
  &#91;'foo' + 'bar'&#93;: 1,
  // Méthode
  myMethod() {}
};
</code></pre>

<h2 id="classes">Classes</h2>

ES6 fournit une manière de gérer des classes via `class` et `extend`. Cette nouvelle syntaxe est du sucre syntaxique (sic) par-dessus les prototypes. En voici un petit exemple&nbsp;:

<pre><code class="js">class Car {
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
console.log(f430.newStats); // Log 'Max speed: 250km/h'</code></pre>

<h2 id="parametres-par-defaut">Paramètres par défaut</h2>

On peut dorénavant spécifier des paramètres par défaut dans nos fonctions&nbsp;:

<pre><code class="js">function car(color='red') {
  console.log(`This car is ${color}.`);
}

car(); // Log 'This car is red.'</code></pre>

<h2 id="parametres-rest">Paramètres rest</h2>

Ils permettent de représenter un nombre illimité de paramètres, sous forme d'array.

<pre><code class="js">function fn(...args) {
  console.log(args.length);
}

fn(); // Log 0
fn(1, 2, 3, 4, 5); // Log 5
fn(...&#91;1, 2, 3, 4, 5&#93;); // Log 5 également</code></pre>

<h2 id="destructuration">Déstructuration</h2>

Celle-ci permet de lier des données (arrays et objets sont supportés). Si la valeur n'est pas trouvée, `undefined` sera retourné.

<pre><code class="js">let [foo, baz, bar] = [1, , 3];
console.log(foo); // Log 1
console.log(baz); // Log undefined
console.log(bar); // Log 3</code></pre>

<h2 id="for-of">For...of</h2>

Cette déclaration crée une boucle sur des objets pouvant être itérés (array, map, paramètres etc.). La syntaxe est simple&nbsp;:

<pre><code class="js">let arr = ['red', 'yellow', 'blue'];
for (let n of arr) {
  console.log(n); // Log chaque valeur de l'array successivement
}</code></pre>

<h2 id="generateurs">Générateurs</h2>

Leur syntaxe est particulière&nbsp;: On déclare une nouvelle instance générateur avec la syntaxe `function*`. A l'intérieur de celle-ci, `yield` définit la valeur retournée. On peut appeler chaque valeur qui suit avec `next()`.

<pre><code class="js">function* fn() {
  yield 'blue';
  yield 'red';
  yield 'green';
}

var a = fn();
console.log(a.next()); // Log 'blue'
console.log(a.next()); // Log 'red'
console.log(a.next()); // Log 'green'</code></pre>

<h2 id="modules">Modules</h2>

Ils permettent de démocratiser les solutions mises en place avec CommonJS ou AMD. Ces nouveaux modules fonctionnent sur un modèle asynchrone&nbsp;: le code n'est pas exécuté tant que les modules requis n'ont pas été exécutés.

<pre><code class="js">// Dans un fichier 'utils.js'&nbsp;:
export function addOne(x) {
  return x + 1;
};

// Dans un autre fichier&nbsp;:
import addOne from 'utils';
addOne(4);

// Importation de tout le fichier&nbsp;:
import * as utils from 'utils';
utils.addOne(4);</code></pre>

<h2 id="autres">Autres</h2>

J'ai couvert ici les nouveautés qui paraissaient importantes à mes yeux, mais il en existe d'autres&nbsp;: promises, symboles, WeakMaps et WeakSets... Pour une liste exhaustive de tous les ajouts, je vous invite à consulter [es6-features](https://github.com/lukehoban/es6features) sur Github.
