/*
 * grunt-ng-attr-hint
 * https://github.com/senthilporunan/grunt-ng-attr-hint.git
 *
 * Copyright (c) 2015 Senthil Porunan
 * Licensed under the MIT license.
 */

'use strict';
var chalk = require('chalk');

module.exports = function (grunt) {

  grunt.registerMultiTask('ng-attr-hint', 'A static linting tool for angular ng directives', function () {

	var ngAttrHint = require('ng-attr-hint');
	
    this.files.forEach(function (file) {
      var src = file.src.filter(function (filepath) {
		grunt.log.writeln('Senthil: File : ' + file + ' FilePath: '+filepath);
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });
	  
	  if (!src.length) {
            grunt.fail.warn('Destination (' + chalk.cyan(file.dest) + ') not written because src files were empty.');
      }
	   var fileName = src[0];

	   grunt.verbose.writeln('Checking if file ' + chalk.cyan(filename) + ' has ng-attributes to convert');
	   ngAttrHint({
		   files: [filepath + '/' + fileName]
	   }, function(err, data) {
		   if (err) {
			   grunt.fail.warn('ngArrtHint (' + fileName + ') Throwing failure message as ' + err);
		   }
		   else {
			ngAttrHint.format(data).forEach(function(o) {
				grunt.log.writeln(o);
			});
		   }
	   }
	   );
    });
  });

};
