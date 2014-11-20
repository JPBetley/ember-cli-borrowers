/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app')
    pickFiles = require('broccoli-static-compiler'),
    mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// Put the bootstrap fonts in the place that the bootstrap css expects to find them.
var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
    srcDir: '/',
    destDir: '/assets/fonts'
});

// Merge the bootstrapFonts with the ember app tree
module.exports = mergeTrees([ app.toTree(), bootstrapFonts ]);
