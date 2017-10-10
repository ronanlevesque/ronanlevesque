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

<h2>Un outil extrêmement puissant</h2>

Le gros avantage de Grunt est donc son automatisation. En quelques secondes et une ligne de commande, il sera capable de conduire un très large nombre de tâches&nbsp;:

<ul>
<li>Minifier et concaténer des fichiers JS</li>
<li>Tester les fichiers JS avec JSHint</li>
<li>Optimiser des images</li>
<li>Compiler et optimiser des fichiers Sass</li>
<li>Nettoyer des sprites inutiles</li>
<li>etc.</li>
</ul>

Ceci n'est qu'un petit aperçu, sachant qu'il existe des centaines de tâches différentes. Dans l'exemple d'aujourd'hui, je n'en présenterai que quelques unes.

<h2>Installation</h2>

Avant toute chose, il vous faudra installer <a href="http://nodejs.org/">Node.js et NPM</a> sur votre ordinateur. NPM est le <em>package manager</em> de Node, qui va permettre d'installer Grunt.

Ensuite, il va falloir installer l'interface de commande de Grunt. Depuis votre ligne de commande habituelle, entrez la commande suivante&nbsp;:

<pre><code class="bash">npm install -g grunt-cli</code></pre>

Cela va permettre de lancer Grunt de n'importe où sur votre système.

<h2>Configuration</h2>

Grunt a besoin de deux fichiers pour fonctionner&nbsp;: <code>package.json</code> et <code>Gruntfile.js</code>. Ce seront les deux fichiers de configuration de votre projet.

<h3>package.json</h3>

Ce fichier doit être situé à la racine du projet. Il contient des métadonnées (nom du projet, version etc.) ainsi que les modules Grunt utilisés, appelés <code>devDependencies</code>. On peut créer un <code>package.json</code> de plusieurs manières&nbsp;: avec <a href="http://gruntjs.com/project-scaffolding">grunt init</a> (automatisation de la création du projet), <a href="https://npmjs.org/doc/init.html">npm init</a> (création d'un fichier sur mesure via NPM), ou en créant soi-même le fichier. Choisissons la dernière solution, en prenant l'exemple de FOX-boilerplate&nbsp;:

<pre><code class="js">{
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
}</code></pre>

On a donc défini ici le nom, la version, la description et l'auteur du projet ainsi que les différentes dépendances du projet. Celles-ci sont équivalentes aux plugins que l'on devra installer pour que Grunt fonctionne correctement. Ces plugins s'installent de la manière suivante&nbsp;:

<pre><code class="bash">npm install &lt;nom-du-plugin&gt; --save-dev</code></pre>

Le flag <code>--save-dev</code> permet d'inscrire le plugin dans dans la section <code>devDependencies</code> du <code>package.json</code>.

<h3>Gruntfile.js</h3>

Ce fichier doit également être placé à la racine du projet. C'est le fichier de configuration dans lequel toutes les tâches seront définies. Nous allons regarder en détails sa construction. Tout d'abord, on commence par créer une fonction principale dans laquelle ira l'ensemble de notre code&nbsp;:

<pre><code class="js">module.exports = function(grunt) {}</code></pre>

Ensuite, on loade l'ensemble de nos tâches&nbsp;:

<pre><code class="js">require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);</code></pre>

NOTE&nbsp;: l'exemple du site officiel préconise de le faire d'une <a href="http://gruntjs.com/sample-gruntfile">manière différente&nbsp;<sup>EN</sup></a>, en loadant les plugins ligne par ligne, mais <code>matchdep</code> permet de tous les loader en une seule ligne de code.

On configure après cela les différentes tâches nécessaires au projet de cette façon&nbsp;:

<pre><code class="js">grunt.initConfig({
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

});</code></pre>

Il est important de bien comprendre la façon dont ces tâches se configurent. Différentes écritures existent, bien détaillées <a href="http://gruntjs.com/configuring-tasks">sur le site officiel&nbsp;<sup>EN</sup></a>.

La dernière partie du code contient les tâches et leur customisation. Une tâche par défaut s'écrira de la manière suivante&nbsp;:

<pre><code class="js">grunt.registerTask('default', 'watch');</code></pre>

Et se lancera depuis la ligne de commande avec un simple <code>grunt</code>.

Les tâches peuvent aussi être customisées. Par exemple, si on souhaite uniquement lancer JSHint, concaténer et minifier nos scripts, on pourra ajouter une nouvelle tâche qui s'écrira de la façon suivante&nbsp;:

<pre><code class="js">grunt.registerTask('js', ['jshint', 'concat', 'uglify']);</code></pre>

La tâche sera ensuite lancée grâce à <code>grunt js</code>.

<h3>Configuration des tâches</h3>

Cette partie est en quelque sorte le coeur de votre Gruntfile, puisqu'elle va déterminer ce que chaque tâche qui a été installée est supposée faire. Je vais rentrer ici dans le détail des <a href="https://github.com/eskiiss/FOX-Boilerplate/blob/master/Gruntfile.js">différentes tâches</a> de FOX-Boilerplate. Pour info, <a href="http://integralist.co.uk/Grunt-Boilerplate.html">cet article</a> de <a href="https://twitter.com/integralist">@integralist</a> m'a bien aidé à y voir plus clair sur la config des tâches.

**Sass**

<pre><code class="js">sass: {
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
}</code></pre>

Je pense qu'il n'est plus besoin de présenter Sass, mais au besoin je vous invite à lire cet <a href="http://ronanlevesque.fr/le-jour-ou-jai-teste-sass/">article</a>. Ici, on définit d'abord les options de Sass (le CSS ne sera pas compressé après compilation), puis les différents paramètres&nbsp;: <code>expand: true</code> permet de cibler des fichiers multiples, <code>cwd</code> est le dossier dans lequel aller chercher les fichiers, <code>src</code> seront les fichiers sources. Le <code>!</code> permet d'exclure certains fichiers (dans ce cas de figure, les fichiers partiels Sass qui n'ont pas besoin d'être compilés). <code>dest</code> est le dossier de destination, <code>ext</code> le format auquel les fichiers seront compilés.

**Autoprefixer**

<pre><code class="js">autoprefixer: {
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'css/*.css',
    dest: 'css/'
  }
}</code></pre>

Autoprefixer est un outil puissant qui permet de préfixer automatiquement les différentes propriétés CSS3 ou de supprimer des préfixes obsolètes en allant chercher les infos directement dans la base de <a href="http://caniuse.com/">CanIuse</a>. Dans cet exemple, c'est grosso modo la même chose que pour Sass, à la différence que <code>flatten: true</code> va permettre "d'aplatir" les résultats à un même niveau.

**JSHint**

<pre><code class="js">jshint: {
  files: ['gruntfile.js', 'js/**/*.js', '!js/plugins/*.js']
}</code></pre>

Cette tâche permet de lancer les tests JSHint sur l'ensemble de mes fichiers JavaScript, à l'exception des plugins externes qui sont régulièrement sources de messages d'erreurs.

**CSSO**

<pre><code class="js">csso: {
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'css/*.css',
    dest: 'css/'
  }
}</code></pre>

CSSO minifiera tous les fichiers situés dans le dossier <code>css/</code>. On retrouve ici nos paramètres habituels.

**Imagemin**

<pre><code class="js">imagemin: {
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
}</code></pre>

Imagemin optimise et compresse les images (PNG et JPG). Dans l'exemple ci-dessus, deux sous-tâches ont été créées, une par type de fichier. Si besoin, elles peuvent être ciblées spécifiquement par <code>[imagemin:png]</code> ou <code>[imagemin:jpg]</code>. La première sous-tâche définit le niveau d'optimisation, la deuxième optimise les JPG en les enregistrant au format progressif.

**Concat**

<pre><code class="js">concat: {
  options: {
    separator: ';'
  },
  dist: {
    files: {
      'js/main.js': ['js/plugins/**/*.js']
    }
  }
}</code></pre>

Concat regroupera tous les fichiers JS située dans le dossier <code>plugin</code> (ou un de ses sous-dossiers) en un seul fichier appelé <code>main.js</code>. Les différents fichiers concaténés seront séparés grâce à <code>;</code>.

**Uglify**

<pre><code class="js">uglify: {
  js: {
    files: {
      'js/main.js': ['js/main.js']
    }
  }
}</code></pre>

Le rôle d'Uglify et de minifier le fichier <code>main.js</code>.

**Watch**

<pre><code class="js">watch: {
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
}</code></pre>

Cette tâche va surveiller automatiquement certains changements et mettre en place certaines actions, ce qui permet par exemple d'éviter d'avoir à exécuter une commande à chaque changement d'un fichier spécifique. Trois sous-tâches sont définies ici&nbsp;:

<ul>
<li><code>livereload</code>&nbsp;: couplé à l'extension Livereload (disponible pour <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei">Chrome</a>), <code>livereload</code> rechargera le browser à chaque modification des fichiers surveillés.</li>
<li><code>sass</code>&nbsp;: surveille tous les fichiers Sass et effectue automatiquement la compilation et "l'auto-préfixage" des fichiers SCSS.</li>
<li><code>html</code>&nbsp;: mise à jour du browser à chaque modification d'un fichier HTML.</li>
</ul>

Voilà pour le rapide survol des différentes tâches que j'utilise avec Grunt. Par ailleurs l'ensemble de mon Gruntfile.js est disponible sur <a href="https://github.com/eskiiss/FOX-Boilerplate/blob/master/Gruntfile.js">Github</a>.

<h2>Conclusion</h2>

Ce tutoriel ne fait qu'effleurer une partie des possibilités de Grunt; de nombreuses autres tâches existent en effet afin de faciliter votre workflow à travers l'optimisation de nombreuses tâches répétitives. La liste des plugins est accessible sur le <a href="http://gruntjs.com/plugins">site officiel</a>.
