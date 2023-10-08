const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  output: { clean: true },
  devServer: { port: 8001 },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      filename: 'remoteEntry.js',
      name: 'cart',
      exposes: {
        './index': './src/bootstrap'
      }
      // shared: ['@faker-js/faker']
    })
  ]
}
