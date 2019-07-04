var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('b', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        browser: "chrome"
    });
});