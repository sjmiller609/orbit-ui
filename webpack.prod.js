import HtmlWebpackPlugin from 'html-webpack-plugin'

import { default as common, prod } from './webpack.common'
import merge from 'webpack-merge'

export default merge(common, prod, {
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
      // Note that you can add custom options here if you need to handle other custom logic in index.html
      tracking_id: 'ANALYTICS_TRACKING_ID',
      api_http: 'APP_API_LOC_HTTPS',
      api_ws: 'APP_API_LOC_WSS',
      stripe_pk: 'STRIPE_PUBK',
    }),
  ],
})
