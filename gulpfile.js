/**
 * Gulpfile for Chefkoch-Design-System
 *
 * Compiling of SCSS-Sources
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync').create();

// Use 'development' variable with 'gulpif' to toggle writing of sourcemaps
var development = false;

// Load config
var config  = {
    'patternsSrcDir' : './config/**/*.scss',
    'appRootDir':  './app',
    'destFolder' : './app/build',
    'autoprefixerOptions' : {
        'browsers' : ['last 3 versions', '> 1% in DE', 'Android 4']
    }
};

/**
 * Task: Build
 * Description: Compiles SCSS to CSS.
 * Sourcemaps are written if 'development == true'
 */
gulp.task('compile-scss', function () {
    return gulp.src(config.patternsSrcDir)
        .pipe(gulpif(development, sourcemaps.init()))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sassErrorHandler))
        .pipe(autoprefixer(config.autoprefixerOptions))
        .pipe(gulpif(development, sourcemaps.write('./')))
        .pipe(gulp.dest(config.destFolder))
        .pipe(browserSync.stream());
});

/**
 * Custom Error-handler for SASS-Compiler
 * @param err
 * @src https://github.com/gulpjs/gulp/issues/259
 */
function sassErrorHandler(err) {
    // Display errormessage
    console.log(err.message);

    if (development) {
        // Returns to watcher, when in development-mode
        this.emit('end');
    } else {
        // Stops process when in production-mode
        process.exit(1);
    }
}

gulp.task('lint-css', function lintCssTask() {
    const gulpStylelint = require('gulp-stylelint');

    return gulp
        .src(['components/**/*.scss', 'app/components/**/*.scss'])
        .pipe(gulpStylelint({
            reporters: [
                {formatter: 'string', console: true}
            ]
        }));
});

// Static server
gulp.task('serve', function() {

    development = true;

    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

    gulp.watch(['components/**/*.scss', 'app/components/**/*.scss', 'config/**/*.scss'], gulp.parallel('compile-scss', 'lint-css'));
    gulp.watch('app/{components,pages}/**/*').on('change', browserSync.reload);
});

/**
 * Task: Build
 * Description: initializes astrum, copies all pattern description documents and finally compiles the assets
 */
gulp.task('test', gulp.parallel('lint-css'));
gulp.task('build', gulp.parallel('compile-scss', 'test'));

gulp.task('default', gulp.parallel('build'));
