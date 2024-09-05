const path = require('path');  // Import the 'path' module

module.exports = {
  mode: 'development',  // Set mode to 'development' or 'production'
  entry: './src/index.js',  // Entry point of your app
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output folder
    filename: 'bundle.js',  // Bundled output file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
