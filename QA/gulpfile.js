var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var port = 5000;

gulp.task('browserify', function () {
  gulp.src('./app/js/main.js')
  .pipe(browserify({
      transform: 'reactify'
    }))
  .pipe(gulp.dest('./dist/js'))
});
