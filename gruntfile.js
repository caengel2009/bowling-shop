// Gruntfile for task running

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // LESS compilation tasks
    less: {
      compile: {
        src: ['less/main.less'],
        dest: 'public/stylesheets/main.css'
      }
    },

    // Watch plugin configuration
    watch: {
      less: {
        files: ['less/**/*.less'],
        tasks: ['less:compile'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['public/**/*.html'],
        options: {
          livereload: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
