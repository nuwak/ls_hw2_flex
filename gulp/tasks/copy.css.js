'use strict';

module.exports = function() {
  $.gulp.task('copy:css', function() {
    return $.gulp.src('./node_modules/normalize.css/normalize.css', { since: $.gulp.lastRun('copy:css') })
      .pipe($.gulp.dest($.config.root + '/assets/css'));
  });
};
