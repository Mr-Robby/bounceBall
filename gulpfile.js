var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
    return gulp.src('./css/source/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['less'], function() {
    gulp.watch('./css/source/**/*.less', ['less'])
});