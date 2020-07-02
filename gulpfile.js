const fs = require('fs');
const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');0.
const watch = require('gulp-watch');

gulp.task("default",async ()=>{
    // 压缩html
    gulp.watch("./src/html/*.html",async ()=>{
        gulp.src("./src/html/*.html")
        .pipe(htmlmin({
            collapseWhitespace:true
        }))
        .pipe(gulp.dest("E:/phpstudy_pro/WWW/lol.com/src/html"));
    });

    // 压缩js
    gulp.watch(["./src/js/*.js"],async ()=>{
        gulp.src(['./src/js/*.js', '!src/js/*.min.js'])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('E:/phpstudy_pro/WWW/lol.com/src/js'));
    });    

    //编译sass
    gulp.watch("./src/sass/*.scss",async ()=>{
        gulp.src("./src/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("E:/phpstudy_pro/WWW/lol.com/src/style"));
    });
    
    //把php文件夹里的所有代码原封不动的复制到服务器目录下
    gulp.watch("./src/php/*.php",async ()=>{
        gulp.src("./src/php/*.php")
        .pipe(gulp.dest("E:/phpstudy_pro/WWW/lol.com/src/php"));
    });

    //压缩img
    gulp.watch("./src/images/*",async ()=>{
        gulp.src("./src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("E:/phpstudy_pro/WWW/lol.com/src/images"));
    });
    
});