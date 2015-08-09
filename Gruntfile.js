/*
 * grunt-angular-hint
 * https://github.com/senthilporunan/grunt-angular-hint.git
 *
 * Copyright (c) 2015 Senthil Porunan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

	// Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/tmp']
    },

    // Configuration to be run (and then tested).
    'ng-attr-hint': {
      'default_options': {
        files: {
			'test/tmp/default_options.txt' : ['test/*.html']
		}
      },
      'custom_options': {
        options: {
          skip: ['ngInit']
        },
        files: {
			'test/tmp/custom_options.txt': ['test/*.html']
		}
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('default', ['clean', 'ng-attr-hint', 'nodeunit']);
  grunt.registerTask('test', ['clean', 'ng-attr-hint', 'nodeunit']);


};
