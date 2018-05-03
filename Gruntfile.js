module.exports = function(grunt) {
 require('jit-grunt')(grunt);

 grunt.initConfig({
 	less: {
 		development: {
 			files: {
 				"css/styles.css": "css/styles.less"
 				}
			      }
 	       },
 watch: {
 	styles: {
 		files: ['css/**/*.less'],
 		tasks: ['less'],
 		options: {
 			nospawn: true
			 }
 		}
 	}
 });
 grunt.registerTask('default', ['less', 'watch']);
};