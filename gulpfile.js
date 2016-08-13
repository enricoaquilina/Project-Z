var gulp = require('gulp');
var gulp_typescript = require('gulp-typescript');
var gulpSourcemaps = require('gulp-sourcemaps');


var appDev = 'assets/app';
var appProd = 'public/js/app';
var vendor = 'public/js/vendor';

var tsconfig = gulp_typescript.createProject('tsconfig.json');

gulp.task('build-ts', function(){
    return gulp.src(appDev + '/**/*.ts')
        .pipe(gulpSourcemaps.init())
        .pipe(gulp_typescript(tsconfig))
        .pipe(gulpSourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-copy', function(){
    return gulp.src([appDev + '/**/*.html', appDev + '/**/*.htm', appDev + '/**/*.css'])
        .pipe(gulp.dest(appProd));
});

gulp.task('vendor', function(){
    gulp.src('node_modules/@angular/**')
        .pipe(gulp.dest(vendor + '/@angular'));
    
    gulp.src('node_modules/es6-shim/**')
        .pipe(gulp.dest(vendor + '/es6-shim'));

    gulp.src('node_modules/reflect-metadata/**')
        .pipe(gulp.dest(vendor + '/reflect-metadata/'));

    gulp.src('node_modules/rxjs/**')
        .pipe(gulp.dest(vendor + '/rxjs/'));
    
    gulp.src('node_modules/systemjs/**')
        .pipe(gulp.dest(vendor + '/systemjs/'));
    
    gulp.src('node_modules/symbol-observable/**')
        .pipe(gulp.dest(vendor + '/symbol-observable/'));

    return gulp.src('node_modules/zone.js/**')
        .pipe(gulp.dest(vendor + '/zone.js/'));
});

gulp.task('watch', function(){
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(appDev + '**/*.{html,htm,css}', ['build-copy']);
});

gulp.task('default', ['watch', 'build-ts', 'build-copy', 'vendor']);