const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  // entry: './src/index2',
  output: { clean: true },
  devServer: { port: 8002 },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      filename: 'remoteEntry.js',
      name: 'products',
      exposes: {
        './index': './src/index'
      }
    })
  ]
}
