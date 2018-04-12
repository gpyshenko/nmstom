var gulp = require('gulp');

// - HTML
var pug = require('gulp-pug');

// - CSS
var postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	precss = require('precss'),
	cleanCSS = require('gulp-clean-css');

// - JS
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    
// - UTILS
var clean = require('gulp-clean'),
    rename = require("gulp-rename"),
    zip = require('gulp-zip');

 
gulp.task('html', function () {
    return gulp.src('./src/**/*.pug')
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('pug-watch', ['html']);

gulp.task('css', function () {
    var processors = [
		precss, autoprefixer({browsers: ['last 10 version']})
	];
	return gulp.src('./src/css/*.css')
		.pipe(postcss(processors))
        //.pipe(cleanCSS())
        .pipe(rename('bundle.min.css'))
		.pipe(gulp.dest('./dist/css'));
});
gulp.task('css-watch', ['css']);

gulp.task('js', function () {
    return gulp.src([
        './src/js/vendors/jquery-3.3.1.min.js',
        './src/js/vendors/jquery.waypoints.min.js',
        './src/js/vendors/slick.min.js',
        './src/js/main.js'
    ])
        .pipe(concat('bundle.js'))
        //.pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('./dist/js'));
});
gulp.task('js-watch', ['js']);

gulp.task('assets', function () {
	return gulp.src('./src/assets/**/*')
		.pipe(gulp.dest('./dist/assets'));
});

gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('default', ['html','css', 'js', 'assets'], function () {
    gulp.watch(['./src/**/*.pug'],['html']);
    gulp.watch(['./src/css/**/*css'], ['css']);
    gulp.watch(['./src/js/**/*js'], ['js']);
});

gulp.task('prod', ['html','css', 'js', 'assets']);

gulp.task('zip', function () {
    return gulp.src('./dist/**/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'))
});
