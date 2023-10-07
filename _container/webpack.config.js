const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

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
        products_n: 'products@http://localhost:8002/remoteEntry.js',
        cart_n: 'cart@http://localhost:8001/remoteEntry.js'
      }
    })
  ]
}
