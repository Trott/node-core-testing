// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  hash = require('bespoke-hash');
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch');

// Bespoke.js
bespoke.from('article', [
  classes(),
  hash(),
  keys(),
  touch()
]);
