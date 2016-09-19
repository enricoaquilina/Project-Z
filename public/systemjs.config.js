var map = {
    'app': 'js/app',
    'rxjs': 'js/vendor/rxjs',
    '@angular': 'js/vendor/@angular',
    'symbol-observable': 'js/vendor/symbol-observable'
};
var packages = {
    'app': { main: 'boot.js', defaultExtension: 'js' },
    'symbol-observable': {defaultExtension: 'js', main: 'index.js'},
    'rxjs' : {main: 'Rx', defaultExtension: 'js'},
    '@angular/core' : {main: 'bundles/core.umd.js'},
    '@angular/common' : {main: 'bundles/common.umd.js'},
    '@angular/upgrade' : {main: 'bundles/upgrade.umd.js'},
    '@angular/compiler' : {main: 'bundles/compiler.umd.js'},
    '@angular/forms' : {main: 'bundles/forms.umd.js'},
    '@angular/router' : {main: 'bundles/router.umd.js'},
    '@angular/platform-browser' : {main: 'bundles/platform-browser.umd.js'},
    '@angular/platform-browser-dynamic': {main: 'bundles/platform-browser-dynamic.umd.js'},
    '@angular/http' : {main: 'bundles/http.umd.min.js'}
};

// var packageNames = [
//     '@angular/common',
//     '@angular/compiler',
//     '@angular/core',
//     '@angular/http',
//     '@angular/forms',
//     '@angular/platform-browser',
//     '@angular/platform-browser-dynamic',
//     '@angular/router',
//     '@angular/testing',
//     '@angular/upgrade'
// ];

// packageNames.forEach(function(pkg) {
//     packages[pkg] = {main: 'index.js', defaultExtension: 'js'};
// });

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