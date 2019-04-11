// Karma configuration
// Generated on Sun Mar 31 2019 23:31:13 GMT+0300 (+03)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './app/scripts/bundle.js',
      './app/services/*.spec.*',
      './app/filters/*.spec.*',
      './app/components/*/*.spec.*',
      './app/components/inputComponent/*.html',
      './app/components/outputComponent/*.html',
      './app/components/mainComponent/*.html'
    ],
    

    exclude: [
    ],

    client: {
      clearContext: false
    },

    preprocessors: {
      'app/components/outputComponent/*.html': ['ng-html2js'],
      'app/components/inputComponent/*.html': ['ng-html2js'],
      'app/components/mainComponent/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix :'app/'
    },

    reporters: ['progress'],

    coverageIstanbulReporter: {
      reports: ['html'],
      fixWebpackSourcePaths: true
    },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
