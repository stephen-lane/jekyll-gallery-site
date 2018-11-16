module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    paths: {
      src: './assets',
      dev: './assets',
      build: './dist'
    },

    clean: {
      build: {
      src: ['<%= paths.build %>/{,**/}*']
    }
  },

  copy: {
    js: {
      files: [
     ]
   },
   sass: {
    files: [
    {
     expand: true,
     cwd: 'node_modules/slick-carousel/slick/',
     src: ['*.scss'],
     dest: './_sass'
   },
   {
     expand: true,
     cwd: 'node_modules/slick-carousel/slick/',
     src: ['ajax-loader.gif', 'fonts/slick.ttf', 'fonts/slick.woff'],
     dest: './assets'
   },
   {
     expand: true,
     cwd: 'node_modules/vex-js/dist/css/',
     src: ['vex.css', 'vex-theme-default.css', 'vex-theme-wireframe.css'],
     dest: './assets/css'
   }
   ]
 }
},

// less: {
//   development: {
//     options: {
//       paths: ['assets/css']
//     },
//     files: {
//       './assets/css/all.css': './assets/less/all.less'
//     }
//   }
// },

browserify: {
  dist: {
    files: {
      "<%= paths.build %>/app.js": "<%= paths.src %>/js/app.js"
    },
    options: {
      browserifyOptions : {
        debug: true,
        fullPaths: false,
        extensions: ['js'],
        paths: ['./assets/js']
      },
      transform: [["babelify", { "presets": ["es2015"] }]],
      alias: {
        'slick': './node_modules/slick-carousel/slick/slick.js',
        'masonry': './node_modules/masonry-layout/masonry.js',
        'vex': './node_modules/vex-js/dist/js/vex.js',
        'vex.dialog': './node_modules/vex-dialog/dist/vex.dialog.js'
      }
    }
  }
}

});

  // grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['copy', 'browserify']);

};
