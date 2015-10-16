'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      all: {
        src: [
          'src/js/vendor/modernizr.js',
          'src/js/vendor/flexslider.js',
          'src/js/app/**/*.js',
          'src/js/app/*.js'
        ],
        dest: 'js/scripts.js'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['src/sass/{,**/}*.{scss,sass}'],
        tasks: ['compass:dev','autoprefixer'],
        options: {
          livereload: false,
          cascade: false
        }
      },
      registry: {
        files: ['*.info', '{,**}/*.{php,inc}'],
        tasks: ['shell'],
        options: {
          livereload: false
        }
      },
      images: {
        files: ['images/**']
      },
      css: {
        files: ['css/{,**/}*.css']
      },
      js: {
        files: ['src/js/{,**/}*.js', '!src/js/{,**/}*.min.js'],
        tasks: ['concat', 'jshint', 'uglify']
      }
    },

    shell: {
      all: {
        command: 'drush cache-clear theme-registry'
      }
    },

    compass: {
      options: {
        config: 'config.rb',
        bundleExec: true,
        force: true
      },
      dev: {
        options: {
          environment: 'development'
        }
      },
      dist: {
        options: {
          environment: 'production'
        }
      }
    },

    autoprefixer: {
      all: {
        src: ['css/{,**/}*.css']
      }
    },

    jshint: {
      all: ['src/js/app/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    uglify: {
      options: {
        mangle: false,
        compress: false,
        beautify: true
      },
      all: {
        files: {
          'js/scripts.min.js': ['<%= concat.all.dest %>']
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', [
    'concat',
    'uglify',
    'compass:dist',
    'jshint',
    'autoprefixer'
  ]);

};
