'use strict';
var config = require('../config');

module.exports = [
  config.task + 'sass.js',
  config.task + 'serve.js',
  config.task + 'pug.js',
  config.task + 'watch.js',
  config.task + 'clean.js',
  config.task + 'js.foundation.js',
  config.task + 'css.foundation.js',
  config.task + 'js.process.js',
  config.task + 'js.lint.js',
  config.task + 'copy.image.js',
  config.task + 'copy.fonts.js',
  config.task + 'copy.css.js',
  config.task + 'sprite.svg.js',
  config.task + 'sprite.png.js'
];

