var gulp = require('gulp');
var config = require('./gulp.config');
var tsc = require('gulp-typescript');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var browsersync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var port = 80;
var url = 'absolut.loc:' + port + '/admin';
var tsProject = tsc.createProject('tsconfig.json');
var wiredep = require('wiredep').stream;
var webpack = require('webpack-stream');

gulp.task('default', ['watching'], function () {
    var options = {
        proxy: url,
        port: 8080,
        files: [
            config.app + '**/*',
        ],
        ghostMode: {
            clicks: true,
            location: true,
            forms: true,
            scrolling: true
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'Admin Application',
        notify: true,
        reloadDelay: 500
    };

    browsersync(options);
});

gulp.task('webpack:build', function () {
    return gulp.src(config.dev + 'app.ts')
            .pipe(webpack(require('./webpack.config.js')))
            .pipe(gulp.dest('./'));
});

gulp.task('watching', ['build'], function() {
    gulp.watch(config.ts, ['ts-compile']);
    gulp.watch(config.sass.allSass, ['sass-compile']);
    gulp.watch(config.html, ['html-compile']);
});

gulp.task('build', ['html-compile']);

gulp.task('watch-html', function () {
    gulp.watch(config.html, ['html-compile']);
});

gulp.task('copy-styles-scripts', function () {
    return gulp.src(config.resources.other)
        .pipe(gulp.dest(config.app));
})

gulp.task('copy-translations', function() {
    return gulp.src(config.resources.translations)
        .pipe(gulp.dest(config.app));
});

gulp.task('copy-images', function () {
    return gulp.src(config.resources.images)
        .pipe(gulp.dest(config.app + 'images'));
})

gulp.task('html-compile', ['index-compile'], function () {
    return gulp.src(config.html)
        .pipe(gulp.dest(config.app));
});

gulp.task('ts-compile', ['copy-translations'], function () {
    var tsProject = tsc.createProject(require('./tsconfig.json'));
    var prepare = gulp.src(config.ts)
        .pipe(tsc(tsProject));

    return prepare.js.pipe(gulp.dest(config.app));
});

gulp.task('sass-compile', function () {
    return gulp.src(config.sass.allSass)
        .pipe(sass())
        .pipe(gulp.dest(config.sass.buildFiles));
});

gulp.task('index-compile', ['copy-styles-scripts', 'ts-compile', 'copy-images'], function () {
    var bower = require('./bower.json');
    return gulp.src(config.dev + 'view/layout/index.html')
        .pipe(wiredep({
            fileTypes: {
                html: {
                    replace: {
                        js: '<script src="' + (config.prefix? '/' + config.prefix: '' ) + '/dev{{filePath}}"></script>',
                        css: '<link rel="stylesheet" href="' + (config.prefix? '/' + config.prefix: '' ) + '/dev{{filePath}}">'
                    }
                }
            },
            ignorePath: '../..',
            bowerjson: bower
        }))
        .pipe(inject(gulp.src(config.inject), {
            transform: function (filepath, file, i, length) {
                var splitted = filepath.split('.'),
                        ext = splitted[(splitted.length-1)];
                switch(ext) {
                    case 'css':
                        return '<link rel="stylesheet" href="' + (config.prefix? '/' + config.prefix: '' ) + filepath + '">';
                    case 'js':
                        return '<script src="' + (config.prefix? '/' + config.prefix: '' ) + filepath + '"></script>'
                }
            }
        }))
        .pipe(gulp.dest('./'));
});
