// Load Grunt
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // TASKS
        // Begin Sass plugin
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['**/*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        // Begin Post CSS plugin
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'css/style.css'
            }
        },

        // Begin CSS Minify plugin
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'css',
                        ext: '.min.css'
                    }
                ]
            }
        },

        // Begin JS Uglify plugin
        uglify: {
            build: {
                src: ['src/*.js'],
                dest: 'js/script.min.js'
            }
        },

        // Compile everything into one task with Watch plugin
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'postcss', 'cssmin']
            },
            js: {
                files: '**/*.js',
                tasks: ['uglify']
            }
        }
    });



    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Register Grunt tasks
    grunt.registerTask('default', ['watch']);
};
