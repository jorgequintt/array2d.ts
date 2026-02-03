var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Dist name
var distName = 'Array2D';

// Uglify - Added "return" to signal task completion
gulp.task('uglify', function() {
  return gulp.src([path.join(__dirname, distName + '.js')])
    .pipe(uglify())
    .pipe(rename(distName + '.min.js'))
    .pipe(gulp.dest(path.join(__dirname, 'dist')));
});

// Default task: Wrapped in gulp.series()
gulp.task('default', gulp.series('uglify'));