var jsxDir = './jsx',
    jsDir = './js',
    configs = {
        jsx : {
            src: jsxDir,
            dest: jsDir,
            get watch() {
                return this.src + '/**/*.js'
            }
        },
        less: {
            src: './less',
            dest: './css',
            get watch() {
                return this.src + '/**.less'
            }
        },
        compass: {
            src: './sass',
            dest: './css',
            configFile: './sass/config.rb',
            get watch() {
                return [this.src + '/**.sass']
            }
        }
    },
    gulp = require('gulp'),
    less = require('gulp-less'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    compass = require('gulp-compass'),
    source = require('vinyl-source-stream');

gulp.task('jsx', function() {
    var bundler = browserify(configs.jsx.src + '/app.js', {basedir: __dirname});
    bundler.transform(reactify);
    var stream = bundler.bundle();
    return stream
        .pipe(source('app.js'))
        .pipe(gulp.dest(configs.jsx.dest));
});

gulp.task('less', function(){
    return gulp.src(configs.less.src + '/*.less')
        .pipe(less())
        .pipe(gulp.dest(configs.less.dest));
});

gulp.task('compass', function() {
    gulp.src(configs.compass.src + '/*.sass')
        .pipe(compass({
            config_file: configs.compass.configFile,
            sass: configs.compass.src,
            css: './css'
        }))
        .pipe(gulp.dest(configs.compass.dest));
});

gulp.task('watch', function() {
    gulp.watch(configs.jsx.watch, ['jsx']);
    gulp.watch(configs.less.watch, ['less']);
    gulp.watch(configs.compass.watch, ['compass']);
});

gulp.task('default', ['jsx', 'less', 'compass', 'watch']);
