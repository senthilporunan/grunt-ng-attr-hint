module.exports = function(grunt) {
    grunt.initConfig({
		'ng-attr-hint': {
		   'default-opt': {
		   	    options: {
					skip: ['ngInit']
			    },
			    files: {
			      'dest.txt': ['*.html']
			    }
		   }	
		}
    });

	 grunt.loadNpmTasks('grunt-ng-attr-hint');

    // Default task(s).
    grunt.registerTask('default', ['ng-attr-hint']);

};
