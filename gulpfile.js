var gulp = require('gulp');

const imagemin = require('gulp-imagemin');
const image = require('gulp-image');

gulp.task('default', () =>
    gulp.src('/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dest/img'))
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
gulp.task('image', function(){
  gulp.src('/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dest/img'));
});
