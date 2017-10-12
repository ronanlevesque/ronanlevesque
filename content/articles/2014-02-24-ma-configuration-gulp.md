---
date: 2014-02-24T00:00:00Z
description: Cet article décrit la façon dont j'ai configuré Gulp pour optimiser au
  maximum mon workflow au quotidien. Il inclut compilation, compression et concaténation
  des fichiers.
tags:
- tutoriels
- outils
- javascript
title: Ma configuration Gulp
---

Quand [Grunt](http://gruntjs.com/) a commencé à faire parler de lui, j'ai été vite enthousiasmé par ses possibilités et sa puissance. Il représentait l'outil idéal pour l'automatisation de mes tâches front-end; j'ai d'ailleurs très vite créé ma [boilerplate](/fox-bp) suite à ça. Mais la donne a un peu changé avec l'arrivée d'un petit nouveau&nbsp;: [Gulp](http://gulpjs.com/).

---

<p class="info">Mise à jour (14/03/2014)&nbsp;: j'ai créé une <a href="https://github.com/eskiiss/FOX-Boilerplate-2">boilerplate</a> pour Gulp, avec une configuration bien plus poussée que celle décrite ci-dessous. Je vous invite à aller consulter son <a href="https://github.com/eskiiss/FOX-Boilerplate-2/blob/master/gulpfile.js">gulpfile.js</a> pour plus d'infos.</p>

---

## Grunt VS Gulp

Il existe déjà une [foule](http://www.100percentjs.com/just-like-grunt-gulp-browserify-now/) d'[articles](http://jaysoo.ca/2014/01/27/gruntjs-vs-gulpjs/) sur le [sujet](http://www.insertafter.com/articles-gulp_vs_grunt.html), je ne vais donc pas m'étendre outre mesure sur la comparaison entre ces deux outils. Mais pour résumer rapidement, Gulp est plus intéressant de mon point de vue pour les raisons suivantes&nbsp;:

* Rapidité d'exécution grâce à son fonctionnement asynchrone
* Rapidité de configuration grâce à son écriture en fonctions

J'ai donc décidé de tester Gulp en production pour voir ce qu'il avait dans le ventre, et le résultat est à la hauteur de mes attentes.

## Gulpfile.js

A l'instar de Grunt, la configuration des tâches se fait via un fichier `gulpfile.js`. Voilà en détails le fichier que j'utilise pour l'instant&nbsp;:

    // On définit nos dépendances
    var gulp = require('gulp'),
        connect = require('gulp-connect'),
        sass = require('gulp-ruby-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        minify = require('gulp-minify-css'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify');

    // Serveur + livereload + ouverture de Chrome
    gulp.task('connect', connect.server({
      root: ['dev'],
      port: 1337,
      livereload: true,
      open: {
        browser: 'chrome'
      }
    }));

    // Fonction qui gère les erreurs Gulp
    function handleError(err) {
      console.log(err.toString());
      this.emit('end');
    }

    // Compilation des fichiers SCSS, auto-préfixage et livereload
    gulp.task('sass', function() {
      return gulp.src(['./dev/css/**/*.scss', '!./dev/css/**/_*.scss'])
      .pipe(sass({style: 'expanded', quiet: true}))
      .on('error', handleError)
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('./dev/css'))
      .pipe(connect.reload());
    });

    // Livereload du HTML
    gulp.task('html', function () {
      return gulp.src('./dev/*.html')
      .pipe(connect.reload());
    });

    // Concaténation des JS et livereload
    gulp.task('scripts', function() {
    	return gulp.src(['./dev/js/**/*.js', '!./dev/js/ie/*.js', '!./dev/js/**/main.js'])
    	.pipe(concat('main.js'))
    	.pipe(gulp.dest('./dev/js'))
    	.pipe(connect.reload());
    });

    // Minification du CSS et déplacement vers /dist
    gulp.task('minify', function() {
      return gulp.src('./dev/css/*.css')
      .pipe(minify(opts))
      .pipe(gulp.dest('./dist/css'))
    });

    // Minification du JS et déplacement vers /dist
    gulp.task('uglify', function() {
    	return gulp.src('./dev/js/main.js')
    	.pipe(uglify())
    	.pipe(gulp.dest('./dist/js'))
    });

    // Tâches à surveiller
    gulp.task('watch', function () {
      gulp.watch('./dev/css/**/*.scss', ['sass']);
      gulp.watch('./dev/**/*.html', ['html']);
      gulp.watch('./dev/js/**/*.js', ['scripts', 'uglify']);
      gulp.watch('./dev/css/**/*.css', ['minify']);
    });

    // Tâche par défaut
    gulp.task('default', ['connect', 'watch']);

Si jamais vous voyez des moyens de l'optimiser ou de l'améliorer, n'hésitez pas à m'en faire part sur Twitter.
