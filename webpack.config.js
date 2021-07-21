const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    library: {
      type: 'commonjs2',
    }
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env']
          }
        },
      },
    ],
  },
}