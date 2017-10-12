---
date: 2013-09-02T00:00:00Z
description: Comment tirer parti de la puissance de Grunt pour optimiser votre workflow
  Frontend
tags:
- tutoriels
- outils
- javascript
title: Automatiser son workflow avec Grunt
---

<a href="http://gruntjs.com/">Grunt</a> est un task runner dont le but est d'automatiser certaines tâches répétitives (compilation, minification etc). Il est écrit en JavaScript et fonctionne avec <a href="http://nodejs.org/">Node.js</a>. Dans cet article j'expliquerai comment le configurer et le lancer de manière basique.

---

## Un outil extrêmement puissant

Le gros avantage de Grunt est donc son automatisation. En quelques secondes et une ligne de commande, il sera capable de conduire un très large nombre de tâches&nbsp;:

* Minifier et concaténer des fichiers JS
* Tester les fichiers JS avec JSHint
* Optimiser des images
* Compiler et optimiser des fichiers Sass
* Nettoyer des sprites inutiles
* etc.

Ceci n'est qu'un petit aperçu, sachant qu'il existe des centaines de tâches différentes. Dans l'exemple d'aujourd'hui, je n'en présenterai que quelques unes.

## Installation

Avant toute chose, il vous faudra installer [Node.js et NPM](http://nodejs.org/) sur votre ordinateur. NPM est le *package manager* de Node, qui va permettre d'installer Grunt.

Ensuite, il va falloir installer l'interface de commande de Grunt. Depuis votre ligne de commande habituelle, entrez la commande suivante&nbsp;:

<pre><code class="bash">npm install -g grunt-cli</code></pre>

Cela va permettre de lancer Grunt de n'importe où sur votre système.

## Configuration

Grunt a besoin de deux fichiers pour fonctionner&nbsp;: `package.json` et `Gruntfile.js`. Ce seront les deux fichiers de configuration de votre projet.

### Package.json

Ce fichier doit être situé à la racine du projet. Il contient des métadonnées (nom du projet, version etc.) ainsi que les modules Grunt utilisés, appelés `devDependencies`. On peut créer un `package.json` de plusieurs manières&nbsp;: avec [grunt init](http://gruntjs.com/project-scaffolding) (automatisation de la création du projet), [npm init](https://npmjs.org/doc/init.html) (création d'un fichier sur mesure via NPM), ou en créant soi-même le fichier. Choisissons la dernière solution, en prenant l'exemple de FOX-boilerplate&nbsp;:

    {
      "name": "FOX-Boilerplate",
      "version": "0.1.0",
      "description": "Boilerplate with Grunt and FOX CSS",
      "author": "Ronan Levesque",
      "devDependencies": {
        "grunt": "~0.4.1",
        "grunt-contrib-sass": "~0.5.0",
        "grunt-autoprefixer": "~0.3.0",
        "grunt-csso": "~0.5.0",
        "grunt-contrib-imagemin": "~0.3.0",
        "grunt-contrib-watch": "~0.5.3",
        "grunt-contrib-uglify": "~0.2.2",
        "grunt-contrib-jshint": "~0.6.4",
        "grunt-contrib-concat": "~0.3.0",
        "matchdep": "~0.1.2"
      }
    }

On a donc défini ici le nom, la version, la description et l'auteur du projet ainsi que les différentes dépendances du projet. Celles-ci sont équivalentes aux plugins que l'on devra installer pour que Grunt fonctionne correctement. Ces plugins s'installent de la manière suivante&nbsp;:

<pre><code class="bash">npm install &lt;nom-du-plugin&gt; --save-dev</code></pre>

Le flag `--save-dev` permet d'inscrire le plugin dans dans la section `devDependencies` du `package.json`.

### Gruntfile.js

Ce fichier doit également être placé à la racine du projet. C'est le fichier de configuration dans lequel toutes les tâches seront définies. Nous allons regarder en détails sa construction. Tout d'abord, on commence par créer une fonction principale dans laquelle ira l'ensemble de notre code&nbsp;:

    module.exports = function(grunt) {};

Ensuite, on loade l'ensemble de nos tâches&nbsp;:

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

NOTE&nbsp;: l'exemple du site officiel préconise de le faire d'une [manière différente](http://gruntjs.com/sample-gruntfile), en loadant les plugins ligne par ligne, mais `matchdep` permet de tous les loader en une seule ligne de code.

On configure après cela les différentes tâches nécessaires au projet de cette façon&nbsp;:

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      sass: {
        // Config Compass
      },

      concat: {
        // Config concaténation
      },

      uglify: {
        // Config uglify
      },

      etc.

    });

Il est important de bien comprendre la façon dont ces tâches se configurent. Différentes écritures existent, bien détaillées [sur le site officiel](http://gruntjs.com/configuring-tasks).

La dernière partie du code contient les tâches et leur customisation. Une tâche par défaut s'écrira de la manière suivante&nbsp;:

    grunt.registerTask('default', 'watch');

Et se lancera depuis la ligne de commande avec un simple `grunt`.

Les tâches peuvent aussi être customisées. Par exemple, si on souhaite uniquement lancer JSHint, concaténer et minifier nos scripts, on pourra ajouter une nouvelle tâche qui s'écrira de la façon suivante&nbsp;:

    grunt.registerTask('js', ['jshint', 'concat', 'uglify']);

La tâche sera ensuite lancée grâce à `grunt js`.

### Configuration des tâches

Cette partie est en quelque sorte le coeur de votre Gruntfile, puisqu'elle va déterminer ce que chaque tâche qui a été installée est supposée faire. Je vais rentrer ici dans le détail des [différentes tâches](https://github.com/eskiiss/FOX-Boilerplate/blob/master/Gruntfile.js) de FOX-Boilerplate. Pour info, [cet article](http://integralist.co.uk/Grunt-Boilerplate.html) de [@integralist](https://twitter.com/integralist) m'a bien aidé à y voir plus clair sur la config des tâches.

**Sass**

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        expand: true,
        cwd: 'css/sass/',
        src: ['*.scss', '!_*.scss'],
        dest: 'css/',
        ext: '.css'
      }
    }

Je pense qu'il n'est plus besoin de présenter Sass, mais au besoin je vous invite à lire cet [article](/articles//le-jour-ou-jai-teste-sass/). Ici, on définit d'abord les options de Sass (le CSS ne sera pas compressé après compilation), puis les différents paramètres&nbsp;: `expand: true` permet de cibler des fichiers multiples, `cwd` est le dossier dans lequel aller chercher les fichiers, `src` seront les fichiers sources. Le `!` permet d'exclure certains fichiers (dans ce cas de figure, les fichiers partiels Sass qui n'ont pas besoin d'être compilés). `dest` est le dossier de destination, `ext` le format auquel les fichiers seront compilés.

**Autoprefixer**

    autoprefixer: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css/'
      }
    }

Autoprefixer est un outil puissant qui permet de préfixer automatiquement les différentes propriétés CSS3 ou de supprimer des préfixes obsolètes en allant chercher les infos directement dans la base de [CanIuse](http://caniuse.com/). Dans cet exemple, c'est grosso modo la même chose que pour Sass, à la différence que `flatten: true` va permettre "d'aplatir" les résultats à un même niveau.

**JSHint**

    jshint: {
      files: ['gruntfile.js', 'js/**/*.js', '!js/plugins/*.js']
    }

Cette tâche permet de lancer les tests JSHint sur l'ensemble de mes fichiers JavaScript, à l'exception des plugins externes qui sont régulièrement sources de messages d'erreurs.

**CSSO**

    csso: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css/'
      }
    }

CSSO minifiera tous les fichiers situés dans le dossier `css/`. On retrouve ici nos paramètres habituels.

**Imagemin**

    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            expand: true,
            cwd: './img/',
            src: ['**/*.png'],
            dest: './img/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: './img/',
            src: ['**/*.jpg'],
            dest: './img/',
            ext: '.jpg'
          }
        ]
      }
    }

Imagemin optimise et compresse les images (PNG et JPG). Dans l'exemple ci-dessus, deux sous-tâches ont été créées, une par type de fichier. Si besoin, elles peuvent être ciblées spécifiquement par `[imagemin:png]` ou `[imagemin:jpg]`. La première sous-tâche définit le niveau d'optimisation, la deuxième optimise les JPG en les enregistrant au format progressif.

**Concat**

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        files: {
          'js/main.js': ['js/plugins/**/*.js']
        }
      }
    }

Concat regroupera tous les fichiers JS située dans le dossier `plugin` (ou un de ses sous-dossiers) en un seul fichier appelé `main.js`. Les différents fichiers concaténés seront séparés grâce à `;`.

**Uglify**

    uglify: {
      js: {
        files: {
          'js/main.js': ['js/main.js']
        }
      }
    }

Le rôle d'Uglify et de minifier le fichier `main.js`.

**Watch**

    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['css/sass/**/*.scss'],
        tasks: ['sass:dist', 'autoprefixer:multiple_files']
      },
      html: {
        files: ['*.html']
      },
    }

Cette tâche va surveiller automatiquement certains changements et mettre en place certaines actions, ce qui permet par exemple d'éviter d'avoir à exécuter une commande à chaque changement d'un fichier spécifique. Trois sous-tâches sont définies ici&nbsp;:

* `livereload`&nbsp;: couplé à l'extension Livereload (disponible pour [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)), `livereload` rechargera le browser à chaque modification des fichiers surveillés.
* `sass`&nbsp;: surveille tous les fichiers Sass et effectue automatiquement la compilation et "l'auto-préfixage" des fichiers SCSS.
* `html`&nbsp;: mise à jour du browser à chaque modification d'un fichier HTML.

Voilà pour le rapide survol des différentes tâches que j'utilise avec Grunt. Par ailleurs l'ensemble de mon Gruntfile.js est disponible sur [Github](https://github.com/eskiiss/FOX-Boilerplate/blob/master/Gruntfile.js).

## Conclusion

Ce tutoriel ne fait qu'effleurer une partie des possibilités de Grunt; de nombreuses autres tâches existent en effet afin de faciliter votre workflow à travers l'optimisation de nombreuses tâches répétitives. La liste des plugins est accessible sur le [site officiel](http://gruntjs.com/plugins).
