import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import GulpCleanCss from "gulp-clean-css"; // Сжатие css
import autoPrefixer from "gulp-autoprefixer"; // Добавление вендорных префиксов
import gcmq from "gulp-group-css-media-queries"; //Группировка медиа-запросов

const sass = gulpSass(dartSass);

export const scss = () => {
	return (
		app.gulp
			.src(app.path.src.scss, {sourcemaps: app.isDev}) // Маппинг нужен только в режиме разработчика
			.pipe(
				sass({
					outputStyle: "expanded",
				})
			)
			.pipe(app.plugins.if(app.isBuild, gcmq()))
			.pipe(
				app.plugins.if(
					app.isBuild,
					autoPrefixer({
						// Поддержка grid-layout
						grid: true,
						// Диапазон версий браузеров
						overrideBrowserslist: ["last 3 versions"],
						cascade: true,
					})
				)
			)
			.pipe(app.plugins.replace(/@img\//g, "../img/"))
			// Если нужен не сжатый дубль файла стилей
			.pipe(app.gulp.dest(app.path.build.css))
			// Сжатие css
			.pipe(app.plugins.if(app.isBuild, GulpCleanCss()))
			.pipe(
				rename({
					extname: ".min.css",
				})
			)
			.pipe(app.gulp.dest(app.path.build.css))
			.pipe(app.plugins.browserSync.stream())
	);
};
