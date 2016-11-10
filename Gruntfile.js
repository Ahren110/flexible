'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        name: 'flexible',
        srcPath: 'src',
        assetsPath: 'assets',
        distPath: 'build',

        clean: ['<%= distPath %>/*'],




        uglify: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= srcPath %>',
                    src: ['*.js'],
                    dest: '<%= distPath %>',
                    ext: '.min.js'
                }]
            }
        },

        watch: {
            js: {
                files: ['<%= srcPath %>/*.js', '<%= srcPath %>/**/*.js'],
                tasks: ['uglify']
            }
        },


    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dist', ['clean', 'uglify']);
    grunt.registerTask('dev', ['watch']);

    grunt.registerTask('default', ['dist']);
}