module.exports = function (grunt) {

    //Configuration
    grunt.initConfig({

        //pass in options to plugins, refrences to  files 
        concat: {

                js: {

                    src: ['js/jquery-1.12.4.js', 'js/rslides.js', 'js/script.js'],
                    dest: 'build/scripts.js'
                },
                css: {
                    src: ['css/*.css'],
                    dest: 'build/styles.css'
                }
             },

        sass: {
                    dist: {
                        files: {
                            'css/styles.css': 'css/sass/styles.scss'
                        }
                    }
               },

        cssmin: {
                options: {
                            mergeIntoShorthands: false,
                            roundingPrecision: -1
                        },
                target: {
                            files: {
                                'build/style-min.css': 'build/styles.css'
                            }
                        }
           },


        uglify: {
                    my_target: {
                        files: { 'build/scripts-min.js': ['build/scripts.js'] }
                    }
                }
    });

    //Load Plugins

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //Register tasks
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);


};


//// To minify CSS run this command -----    grunt cssmin 
//// To minify Javascript run this command -----    grunt uglify
//// To concat CSS run this command -----    grunt  concat
//// To compile sass into css run this command -----    grunt sass