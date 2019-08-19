var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var imageMin = require('gulp-imagemin');
var del = require('del')
var flatten = require('gulp-flatten')

var DEST = 'public/dist/page/';
var DEST_IMG = 'public/dist/images/';

gulp.task('clean', function () {
  del([
    `${DEST}*`
  ])
})

gulp.task('build.test.js', function() {
  return gulp.src('public/page/**/*.js')
    .pipe(uglify())
    .pipe(flatten({ includeParents: 1 }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('build.test.css', function () {
  return gulp.src('public/page/**/*.css')
  .pipe(cleanCSS())
  .pipe(flatten({ includeParents: 1 }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest(DEST))
})

gulp.task('build.test.image', function () {
  return gulp.src('public/images/*.*')
  .pipe(imageMin({ progressive: true }))
  .pipe(gulp.dest(DEST_IMG))
})

gulp.task('default', ['clean', 'build.test.js', 'build.test.css', 'build.test.image'], () => {
  console.log('gulp finished..')
})