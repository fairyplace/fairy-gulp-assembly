import replace from "gulp-replace"; // Поиск и замена
import browserSync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer" // Проверка обновления файла
import ifPlugin from 'gulp-if' // Условное выполнение

export const plugins = {
  replace:replace,
  browserSync:browserSync, 
  newer:newer,
  if:ifPlugin
}