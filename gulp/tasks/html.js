// для модулей html
import fileinclude from "gulp-file-include";

import GulpPug from "gulp-pug";
// Для обертки изображений
import webpHtmlNosvg from "gulp-webp-html-nosvg";
// Для откючения кэширования стилей в браузере
import versionNumber from "gulp-version-number";

export const html = () => {
	return (
		app.gulp
			.src(app.path.src.html)
			.pipe(fileinclude())
			.pipe(app.plugins.replace(/@img\//g, "img/"))
			// Запуск только в режиме сборки
			.pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
      // Генерация версии файла для *.js и *.css
			.pipe(
				app.plugins.if(
					app.isBuild,
					versionNumber({
						value: "%DT%",
						append: {
							key: "_v",
							cover: 0,
							to: ["css", "js"],
						},
						output: {
							file: "gulp/version.json",
						},
					})
				)
			)
			.pipe(app.gulp.dest(app.path.build.html))
			.pipe(app.plugins.browserSync.stream())
	);
};
