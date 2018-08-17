// For info about this file refer to webpack and webpack-hot-middleware documentation
// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz
import webpack from 'webpack'
import WebpackMd5Hash from 'webpack-md5-hash'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { default as common, output } from './webpack.common'

export default {
  ...common,
  devtool: 'nosources-source-map',

  mode: 'production',
  output: {
    ...output,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css',
    }),
    // Generate HTML file that contains references to generated bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      favicon: 'src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      // Note that you can add custom options here if you need to handle other custom logic in index.html
      tracking_snippet: 'ANALYTICS_TRACKING_SNIPPET',
      api_http: 'APP_API_LOC_HTTPS',
      api_ws: 'APP_API_LOC_WSS',
      stripe_pk: 'STRIPE_PUBK',
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
}
