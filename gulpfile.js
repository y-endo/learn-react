const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpRename = require('gulp-rename');
const paths = {
  scss: {
    src: ['./src/**/*.scss', '!./src/**/_*.scss']
  }
};

gulp.task('scss', () => {
  return gulp
    .src(paths.scss.src, { base: 'src' })
    .pipe(
      gulpSass({
        outputStyle: 'compressed'
      })
    )
    .pipe(
      gulpRename(path => {
        path.dirname = `${path.dirname.split('/')[0]}/assets/css`;
      })
    )
    .pipe(gulp.dest('./public'));
});

gulp.task('default', () => {
  gulp.watch(paths.scss.src, gulp.series('scss'));
});
