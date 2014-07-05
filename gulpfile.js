var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('mocha', function() {
    return gulp.src(['test*/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', gutil.beep);
});

gulp.task('watch', function() {
    gulp.watch(['src/**', 'test*/**'], ['mocha']);
});