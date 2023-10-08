const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const TerserPlugin = require('terser-webpack-plugin')

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
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            beautify: true,
            comments: false
          },
          mangle: {
            keep_fnames: true,
            properties: {
              regex: /aaaaaaaaaaaaaaaaaaaaaaa/
            }
          }
        },
        extractComments: false
      })
    ]
  }
}
