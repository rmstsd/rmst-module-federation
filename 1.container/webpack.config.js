const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

const MyRemoveComments = require('../removeComments')

module.exports = {
  mode: 'development',
  output: { clean: true },
  devServer: { port: 8000 },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        cart_n: 'cart@http://localhost:8001/remoteEntry.js',
        products_n: 'products@http://localhost:8002/remoteEntry.js'
      },
      shared: {
        '@faker-js/faker': {
          singleton: true // 版本不一致的时候使用高版本
        }
      }
    })
    // new MyRemoveComments()
  ]
}
