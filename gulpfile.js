var   gulp = require('gulp')
	, browserify = require('browserify')
    , uglify = require('gulp-uglify')
    , source = require('vinyl-source-stream')
    , buffer = require('vinyl-buffer')
;

var src = 'src/main.js'

gulp.task('build', function(){
    browserify(src)
        .bundle()
        .on('error', function(err){ console.log(err.message); })
        .pipe(source('notePlayer.js'))  //output stream
        .pipe(gulp.dest('lib/'))
        ;
});

gulp.task('compress', function(){
    browserify(src)
        .bundle()
        .on('error', function(err){ console.log(err.message); })
        .pipe(source('notePlayer.min.js'))  //output stream
        .pipe(buffer())
        .pipe(uglify())
        .on('error', function(err){ console.log(err); })
        .pipe(gulp.dest('lib/'))
        ;
});



gulp.task('watch', function() {
    gulp.watch(src, ['build','compress']);
});

gulp.task('default', ['build','compress','watch']);

