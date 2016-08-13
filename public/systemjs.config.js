var map = {
    'app': 'js/app',
    'rxjs': 'js/vendor/rxjs',
    '@angular': 'js/vendor/@angular',
    'symbol-observable': 'js/vendor/symbol-observable'
};
var packages = {
    'app': { main: 'boot.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'symbol-observable': {defaultExtension: 'js', main: 'index.js'}
};

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    '@angular/upgrade'
];

packageNames.forEach(function(pkg) {
    packages[pkg] = {main: 'index.js', defaultExtension: 'js'};
});

var config = {
    // transpiler: 'ts',
    // typescriptOptions: {
    //     emitDecoratorMetadata: true,
    //     experimentalDecorators: true,
    //     module: 'commonjs',
    // },
    // meta: {
    //     'typescript': {
    //         'exports': 'ts'
    //     }
    // },
    map: map,
    packages: packages
};

System.config(config);