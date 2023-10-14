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
        './index': './src/index'
      },
      shared: {
        '@faker-js/faker': {
          // eager: true,
          singleton: true // 版本不一致的时候使用高版本
        }
      }
    })
  ]
}
