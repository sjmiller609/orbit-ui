import HtmlWebpackPlugin from 'html-webpack-plugin'

import { default as common, prod } from './webpack.common'
import merge from 'webpack-merge'

const configs = merge(common, prod, {
  // devtool: 'cheap-module-eval-source-map', // NOTE: Useful for debugging
  devtool: 'nosources-source-map', // use this for accurate bundle sizes
  plugins: [
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
      api_http: 'http://houston:8871/v1',
      api_ws: 'ws://houston:8871/ws', //NOTE: temp for mock logs
      stripe_pk: 'pk_test_9nakxMiaKT3egTTtCmdfLdet',
      tracking_id: 'Bn2txcmq5EaXFFCoNETPR',
    }),
  ],
})

export default configs
