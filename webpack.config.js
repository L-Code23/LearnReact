const path = require('path');  // Import the 'path' module
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // For extracting CSS into separate files

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
        test: /\.js$/,  // For JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use Babel to transpile JavaScript
        },
      },
      {
        test: /\.css$/,  // For CSS files
        use: [
          MiniCssExtractPlugin.loader,  // Extract CSS into separate files
          'css-loader',  // Translates CSS into CommonJS modules
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',  // Output CSS file name
    }),
  ],
  devtool: 'source-map',  // Enable source maps for easier debugging (optional)
};
