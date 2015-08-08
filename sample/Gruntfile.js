module.exports = function(grunt) {
    grunt.initConfig({
		'ng-attr-hint': {
			options: {
			   skip: ['ngMessage', 'ngInit']
			},
			your_target: {
			    files: ['*.html']
			}
		}
    });

	 grunt.loadNpmTasks('grunt-ng-attr-hint');

    // Default task(s).
    grunt.registerTask('default', ['ng-attr-hint']);

};
