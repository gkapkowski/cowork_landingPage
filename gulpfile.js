var gulp = require("gulp");
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var browserSync = require('browser-sync').create();

gulp.task("jshint", function() {
  return gulp.src("../cowork_landingPage/js/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "../cowork_landingPage"
    });

    gulp.watch("../cowork_landingPage/scss/**/*.scss", ['sass']);
    gulp.watch("../cowork_landingPage/*.html").on('change', browserSync.reload);
    gulp.watch("../cowork_landingPage/js/app.js").on('change', browserSync.reload);    
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("../cowork_landingPage/scss/style.scss")
        .pipe(sass({
          errLogToConsole: true,
          outputStyle: "expanded"
        }))
        .pipe(gulp.dest("../cowork_landingPage/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
