const gulp = require('gulp')
const pug = require('gulp-pug')

module.exports = (cb) => {
    return gulp.src('src/pages/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('.'))
}