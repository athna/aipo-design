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
					'./themes/default/css/style-min.css':['themes/default/css/style.css']
				}
			}
		},
		watch: {
			sass: {
				files: ['themes/default/sass/*.scss'],
				tasks: ['compass']
			}
		}
	});
	var taskName;
	for(taskName in pkg.devDependencies) {
		if(taskName.substring(0, 6) == 'grunt-') {
			grunt.loadNpmTasks(taskName);
		}
	}
	grunt.registerTask('default', ['watch']);
};