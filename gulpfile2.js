var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var imageMin = require('gulp-imagemin');

var DEST = 'public/dist/page/';
var DEST_IMG = 'public/dist/images/';

gulp.task('build.test.js', function() {
  return gulp.src('public/page/**/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('build.test.css', function () {
  return gulp.src('public/page/**/*.css')
  .pipe(cleanCSS())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest(DEST))
})

gulp.task('build.test.image', function () {
  return gulp.src('public/images/*.*')
  .pipe(imageMin({ progressive: true }))
  .pipe(gulp.dest(DEST_IMG))
})

gulp.task('default', ['build.test.js', 'build.test.css', 'build.test.image'], () => {
  console.log('gulp finished..')
})