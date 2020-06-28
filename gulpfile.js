const fs = require('fs');
const gulp = require('gulp');
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const watch = require('gulp-watch');

gulp.task('htmlmin', function () {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('E:\phpstudy_pro\WWW'));
});

