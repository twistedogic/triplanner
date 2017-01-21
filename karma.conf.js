var argv = require('yargs').argv;
var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './src/**/*.test.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      './src/**/*.test.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      debug: true,
      devtool: 'inline-source-map',
      noInfo: false,
      module: {
        loaders: [
          {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
          {test: /(\.css)$/, loaders: ['style', 'css']},
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
          {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
          {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ],

    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: !argv.watch
  })
};
