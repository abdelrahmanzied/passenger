// variables of pachages
var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    connect = require('gulp-connect');

// variables of tasks links
var htmlL = 'stage/html/*.pug',
    cssL = ['stage/css/**/*.scss', 'stage/css/**/*.css'],
    jsL = 'stage/js/*.js'; 


gulp.task('connect', function () {
    connect.server({
        root: './dist',
        livereload: true
    });
});


gulp.task('html', function() {
    return gulp.src(htmlL)
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
});

gulp.task('css', function() {
    return gulp.src(cssL)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
});

gulp.task('js', function () {
    return gulp.src(jsL)
        .pipe(concat('script.js'))
        //.pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload())
});

gulp.task('watch', function(){
    gulp.watch('stage/html/**/*.pug', ['html']);
    gulp.watch(cssL, ['css']);
    gulp.watch(jsL, ['js']);
});

gulp.task('default', ['connect', 'watch']);


// Basma