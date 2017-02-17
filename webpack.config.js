var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, './public')
    },
    // TODO: fix some module path resolve error
    // modules: [
    //   path.resolve(__dirname, './'),
    //   'node_modules'
    // ]
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        // vue-loader options go here
        buble: {
          // same options
          objectAssign: 'Object.assign'
        }
      }
    }, {
      test: /\.js$/,
      loader: 'buble-loader',
      exclude: /node_modules/,
      options: {
        objectAssign: 'Object.assign'
      }
    }, {
      test: /\.styl$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }, {
      test: /\.(ttf|eot|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',
  performance: false
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
