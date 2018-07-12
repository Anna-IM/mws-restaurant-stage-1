var gulp = require('gulp');

const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
    gulp.src('/img/*')
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
