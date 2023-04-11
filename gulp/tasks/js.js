import webpack from "webpack-stream";

export const js = () => {
  return app.gulp.src(app.path.src.js, {sourcemaps: app.isDev}) // Маппинг нужен только в режиме разработчика
  .pipe(webpack({
    mode: app.isBuild ? 'production' : 'development',
    output: {
      filename: 'app.min.js'
    }
  }))
  .pipe(app.gulp.dest(app.path.build.js))
  .pipe(app.plugins.browserSync.stream())
};
