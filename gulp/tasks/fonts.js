// Задача не доработке
import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'
export const ttfToWoff = () =>{
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
  // Конвертируем в woff
  .pipe(fonter({
    formats: ['woff']
  }))
  // Выгружаем в папку с результатом
  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  // Ищем файлы шрифтов .ttf
  .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
  // Конвертируем в .woff2
  .pipe(ttf2woff2())
  // Выгружаем в папку с результатом
  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export const fonts = () =>{
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
  .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}
