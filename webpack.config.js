module.exports = {
  context: __dirname + '/',
  entry: './index.js',
  output: {
    path: __dirname + '/app/scripts',
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],

      },
      {
        test: /\.png$/,
        loader: 'url-loader'
      }]
  }
    
};