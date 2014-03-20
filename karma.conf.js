// Karma configuration
// Generated on Tue Mar 11 2014 15:30:22 GMT+0100 (CET)



/*
    if (require('os').platform() === 'darwin') {
        browsers.push('Safari')
    }
*/


module.exports = function(config) {

    browserToTestIn = ['PhantomJS'];
    if (process.env.TRAVISCI) {
        browserToTestIn = ['Firefox'];
    }


  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'lib/angular/angular.min.js',
        'lib/angular/angular-mocks.js',
        'js/*.js',
        'test/*.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
   //  port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  //  browsers: ['Chrome'],
//      browsers: ['PhantomJS','Chrome'],
   //  browsers: ['PhantomJS'],
     browsers: browserToTestIn,

    plugins : [
        'karma-phantomjs-launcher',
        'karma-junit-reporter',
        'karma-firefox-launcher',
        'karma-jasmine'
    ],

      junitReporter: {
        outputFile: 'unit.xml',
          suite: 'unit'
      },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
