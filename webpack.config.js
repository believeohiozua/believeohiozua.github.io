const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Font stylesheets
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[hash].[ext]'
            }
          },
          'extract-loader',
          'css-loader',
          'postcss-loader'
        ],
        include: [/fonts/]
      },
      {
        test: /\.ttf$/i,
        loader: 'null-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=/public/icons/[name].[ext]"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {}
        }]
      },

      {
        test: /\/jquery.js$/,
        loaders: [{
          loader: "expose?jQuery"
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        // Test for a polyfill (or any file) and it won't be included in your
        // bundle
        test: path.resolve(__dirname, 'node_modules/library/polyfill.js'),
        use: 'null-loader',
      },

    ]
  }
}