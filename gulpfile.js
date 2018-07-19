var gulp = require('gulp');

const imagemin = require('gulp-imagemin');
const image = require('gulp-image');

gulp.task('default', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
]))
);

//Image task
//Compress
gulp.task('compress-image', function(){
   gulp.src('img/*')
  .pipe(imagemin({ progressive: true, optimizationLevel: 7 }))
  .pipe(uglify()) // run uglify (for minification)
  .pipe(gulp.dest('dist/images'));
});

const watch = require('gulp-watch');
gulp.task('default', function() {
    gulp.watch('dist/images/*.jpg', ['compress-image'])
});
