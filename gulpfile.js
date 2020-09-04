const gulp = require('gulp');
const sass = require('gulp-sass');
const browsersync = require('browser-sync').create();

// compile scss into css
function style(){
  //1.where is my scss
  return gulp.src('./sass/**/*.scss')
  //2.pass that file through sass compiler
  .pipe(sass())
  //3.where do i save the compiled css?
  .pipe(gulp.dest('./css'))
  //4.stream change to all browsersync
  .pipe(browsersync.stream());
}
function watch(){
  browsersync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./sass/**/*.scss', style);
  gulp.watch('./*.php').on('change', browsersync.reload);
  gulp.watch('./*.html').on('change', browsersync.reload);
  gulp.watch('./js/**/*.js').on('change', browsersync.reload);
}

exports.style = style;
exports.watch = watch;
