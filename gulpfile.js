const gulp = require('gulp');
const sass = require('gulp-sass');
gulp.task('default',function(){
    return gulp.src('css/style.scss')
    .pipe(sass())
    .on('error',sass.logError)
    .pipe(gulp.dest('dest'));
});
gulp.task('index',function(){
  return gulp.src('css/index.scss')
  .pipe(sass())
  .on('error',sass.logError)
  .pipe(gulp.dest('dest'));
});
gulp.task('products',function(){
  return gulp.src('css/products.scss')
  .pipe(sass())
  .on('error',sass.logError)
  .pipe(gulp.dest('dest'));
});
gulp.task('profile',function(){
  return gulp.src('css/profile.scss')
  .pipe(sass())
  .on('error',sass.logError)
  .pipe(gulp.dest('dest'));
});
