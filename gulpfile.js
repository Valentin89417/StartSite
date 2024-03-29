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
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');

const paths = {
    watch: {
        styles:  ['src/css/**/*.less','src/css/**/*.scss','src/css/**/*.css'],
        scripts: 'src/js/**/*.js',
        images:  'src/images/**',
        source:  'src/source/**',
        fonts:   'src/fonts/**',
        html:    'src/html/**/*.html'
    },
    html: {
        src: ['src/html/**/*.html','!src/html/include/**/*.html'],
        dest: './'

    },
    styles: {
        src: 'src/css/style.scss',
        dest: 'assets/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'assets/js/'
    },
    images: {
        src: 'src/images/**',
        dest: 'assets/images'
    },
    source: {
        src: [
            'src/source/**',
            '!src/source/bootstrap_v5/js/**',
            '!src/source/bootstrap_v5/scss/**',
            '!src/source/bootstrap_v5/dist/css/**',
            '!**/README.md',
        ],
        dest: 'assets/source'
    },
    fonts: {
        src: 'src/fonts/**',
        dest: 'assets/fonts'
    }
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        //.pipe(less())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(rename({
            basename: 'style',
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gsize({
            title:'styles',
            showFiles:true
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream())
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gsize({
            title:'scripts',
            showFiles:true
        }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream())
}

function images() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin(
            [
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({tune: 'ssim',quantTable: 1,progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({plugins: [{removeViewBox: true},{cleanupIDs: false}]})
            ],
            {
                verbose: true
            }))
        .pipe(gsize({
            title:'images'
        }))
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browserSync.stream())
}

function source() {
    return gulp.src(paths.source.src)
        .pipe(gsize({
            title:'source',
            uncompressed:true
        }))
        .pipe(gulp.dest(paths.source.dest))
        .pipe(browserSync.stream())
}

function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gsize({
            title:'fonts',
            uncompressed:true
        }))
        .pipe(gulp.dest(paths.fonts.dest))
        .pipe(browserSync.stream())
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(gsize({
            title:'html'
        }))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream())
}

function clean() {
    return del(['assets/*','!assets/images','!assets/source','!assets/fonts'])
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(paths.watch.styles, styles)
    gulp.watch(paths.watch.scripts, scripts)
    gulp.watch(paths.watch.images, images)
    gulp.watch(paths.watch.source, source)
    gulp.watch(paths.watch.fonts, fonts)
    gulp.watch(paths.watch.html, html)
}

const build = gulp.series(
    clean,
    gulp.parallel(source,fonts,html),
    gulp.parallel(styles,scripts,images),
    watch)

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.source = source;
exports.fonts = fonts;
exports.html = html;
exports.watch = watch;
exports.build = build;
exports.default = build;
