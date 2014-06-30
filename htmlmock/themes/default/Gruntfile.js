module.exports = function(grunt) {
	var pkg = grunt.file.readJSON('package.json');
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		cssmin: {
			compress: {
				files: {
					'./css/style-min.css':['css/style.css']
				}
			}
		},
		watch: {
			sass: {
				files: ['sass/*.scss'],
				tasks: ['compass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//var taskName;
	//for(taskName in pkg.devDependencies) {
	//	if(taskName.substring(0, 6) == 'grunt-') {
	//		grunt.loadNpmTasks(taskName);
	//	}
	//}
	grunt.registerTask('default', ['watch']);
};