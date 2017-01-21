var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglifyjs'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin');

gulp.task('compress-images', function () {
    return gulp.src('dist/img/*')
        .pipe(imagemin({  progressive:true }))
        .pipe(gulp.dest('app/img'));
});

gulp.task('sass', function () {
    return gulp.src('dist/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('scripts', function() {
    return gulp.src([
        'dist/js/*.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['sass','scripts','compress-images'], function(){
    gulp.watch('dist/sass/**/*.scss', ['sass']);
    gulp.watch('dist/js/*.js', ['scripts']);
    gulp.watch('dist/img/*', ['compress-images']);

});

gulp.task('default',['watch']);