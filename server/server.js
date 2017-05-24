const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const app = express();
var port = 8080;

const compiler = webpack(webpackConfig);

//Serve Static the Client Folder
app.use(express.static(__dirname + '/client/'));
console.log(__dirname + '/client')

//TODO: research this middleware
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(port, function (){
  console.log('App listening at', port);
})
