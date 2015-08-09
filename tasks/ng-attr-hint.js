/*
 * grunt-ng-attr-hint
 * https://github.com/senthilporunan/grunt-ng-attr-hint.git
 *
 * Copyright (c) 2015 Senthil Porunan
 * Licensed under the MIT license.
 */

'use strict';
var chalk = require('chalk');
var ngAttrHint = require('ng-attr-hint');

module.exports = function (grunt) {

	grunt.registerMultiTask('ng-attr-hint', 'A static linting tool for angular ng directives', function () {

		var done = this.async();
		var options = this.options();

		this.files.forEach(function (file) {
			var src = file.src.filter(function (filepath) {

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
			
			src.forEach(function(fileName) {
				
				var result = ngAttrHint({files: [fileName]}, function(err, data) {
					if(err) {
						grunt.log.error(err);
						done(false);
					}
					else  {
						var contents = '';
						ngAttrHint.format(data).forEach(function(o, index) {
							contents += formatOptions(data, o, index) + '\n';
						});
						grunt.file.write(file.dest, contents);
						done();
					}
				});
			});
			
			var formatOptions = function(data, o, index) {
				var type = data[index]['type'] || [];
				var attrs = data[index]['attrs'] || [];
				var skip = options.skip || [];

				var isBreak = data[index]['attrs'].some(function(attr) {
					var isBreak = skip.some(function(skip) {
						if (skip.indexOf(attr) !== -1) 	return true;
					});
					return isBreak;
				});
				
				if (!isBreak) {
					printMsgs(type, o);
					return o;
				}
				return '';
			};
			
			var printMsgs = function(type, o) {
				switch(type) {
					case 'info':
						grunt.log.writeln(chalk.cyan(o));
						break;
					case 'warning':
						grunt.log.writeln(chalk.yellow(o));
						break;
					default:
						grunt.log.writeln(chalk.magenta(o));
						break;
				}
			};
		});
	});
};
