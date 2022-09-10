const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')); // обработчик sass
const cleanCSS = require('gulp-clean-css') // минифицировать CSS
const autoprefixer = require('gulp-autoprefixer')// Добавить префиксы

const babel = require('gulp-babel') // поддержка старых версий скриптов
const uglify = require('gulp-uglify') // сжатие скриптов
const concat = require('gulp-concat') // переименовать скрипты

const imagemin = require('gulp-imagemin') // сжать фото
const newer = require('gulp-newer'); // обработка только новых файлов

const sourcemaps = require('gulp-sourcemaps') // карта для css и js
const rename = require('gulp-rename') // переименовывать файлы
const del = require('del') // удалять файлы
const gsize = require('gulp-size') // показать в консоли размер файла

const paths = {
    watch: {
        styles:  ['src/styles/**/*.scss','src/styles/**/*.sass'],
        scripts: 'src/scripts/**/*.js',
        images:  'src/img/**'
    },
    styles: {
        src: 'src/styles/style.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'src/img/*',
        dest: 'dist/images'
    }
}


function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gsize({
            title:'styles',
            showFiles:true
        }))
        .pipe(gulp.dest(paths.styles.dest))
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gsize({
            title:'scripts',
            showFiles:true
        }))
        .pipe(gulp.dest(paths.scripts.dest))
}

function images() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gsize({
            title:'images',
            uncompressed:true
        }))
        .pipe(gulp.dest(paths.images.dest))
}

function clean() {
    return del(['dist/*','!dist/images'])
}

function watch() {
    gulp.watch(paths.watch.styles, styles)
    gulp.watch(paths.watch.scripts, scripts)
    gulp.watch(paths.watch.images, images)
}

const build = gulp.series(
    clean,
    gulp.parallel(styles,scripts,images),
    watch)

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.build = build;
exports.default = build;