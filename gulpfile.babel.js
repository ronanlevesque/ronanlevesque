// Import packages

import gulp from 'gulp';
import runSequence from 'run-sequence';
import cp from 'child_process';
import rimraf from 'rimraf';
import del from 'del';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import gulpLoadPlugins from 'gulp-load-plugins';

const $$ = gulpLoadPlugins();

// Handle CLI errors

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// Folders structure

const baseDevFolder = 'src/';
const baseDistFolder = 'static/assets/';

const devFolder = {
  scss: baseDevFolder + 'scss/',
  js: baseDevFolder + 'js/',
};

const distFolder = {
  css: baseDistFolder + 'css/',
  js: baseDistFolder + 'js/',
};

// Styles

gulp.task('styles', () => {
  del(distFolder.css + '**/*')
  return gulp.src(devFolder.scss + 'main.scss')
  .pipe($$.sourcemaps.init())
  .pipe($$.sass())
  .on('error', $$.notify.onError("Error: <%= error.message %>"))
  .on('error', handleError)
  .pipe($$.autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false,
  }))
  .pipe($$.cssnano())
  .pipe($$.hash())
  .pipe($$.sourcemaps.write('.'))
  .pipe(gulp.dest(distFolder.css))
  .pipe($$.hash.manifest('hashcss.json'))
  .pipe(gulp.dest('data'));
});

// Scripts

gulp.task('scripts', () => {
  del(distFolder.js + '**/*')
  return browserify({
    entries: devFolder.js + 'main.js',
    debug: true
  })
  .transform(babelify.configure({
    presets : ['env'],
    sourceMaps: true,
  }))
  .bundle()
  .on('error', $$.notify.onError("Error: <%= error.message %>"))
  .on('error', handleError)
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe($$.sourcemaps.init({
    loadMaps: true,
  }))
  .pipe($$.uglify())
  .pipe($$.hash())
  .pipe($$.sourcemaps.write('.'))
  .pipe(gulp.dest(distFolder.js))
  .pipe($$.hash.manifest('hashjs.json'))
  .pipe(gulp.dest('data'));
});

// Watch files

gulp.task('watch', () => {
  gulp.watch(devFolder.scss + '**/*.scss', ['styles']);
  gulp.watch(devFolder.js + '**/*.js', ['scripts']);
});

// Build assets

gulp.task('build', ['styles', 'scripts']);

// Watch changes

gulp.task('default', cb => {
  runSequence('build', 'watch', cb);
});
