const path = require('path');
/*
Webpack Config Notes
--http://andrewhfarmer.com/--
context: absolute path to client-side JavaScript folder
module.rules : loaders. Specifies how file processed before combined into bundle. Only have one loader: Babel.
  Here, convert ES6 + JSX JS into ES5 before merging into bundle.
resolve: Where Webpack should look for files referenced by an import or require() statement.

--usually any npm package ending in -loader is for Webpack.


-npm run compile > www/bundle.js.
--TODO: clean this?
--TODO: live recompile
--TODO: add linter to pipe
*/

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
        'babel-loader'
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
