const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const main = {
  name: "main",
  mode: 'development',
  target: 'electron-main',
  entry: path.join(__dirname, 'src', 'main', 'index'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist', 'main')
  },
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [{
      test: /.ts?$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
      loader: 'ts-loader',
    }]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
};

const renderer = {
  name: "renderer",
  mode: 'development',
  target: 'electron-renderer',
  entry: path.join(__dirname, 'src', 'renderer', 'index'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist', 'renderer')
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.(tsx|ts)$/,
      use: [
        'ts-loader'
      ],
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules'),
      ],
    }]
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "../index.html",
      template: "./src/index.html"
    })
  ]
};

module.exports = [
  main, renderer
];
