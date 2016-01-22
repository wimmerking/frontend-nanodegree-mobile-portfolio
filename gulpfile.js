var gulp = require('gulp');
    critical = require('critical');
    uglify = require("uglify-js");
    htmlmin = require('gulp-htmlmin');

gulp.task('critical', function () {

});

gulp.task('critical', function (cb) {
    critical.generate({
        inline: true,
        src: 'index.html',
        dest: 'index-critical.html',
        minify: true,
        width: 320,
        height: 480
    });
});

var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});