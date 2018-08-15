import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin'
import path from 'path'
import options from './webpack'

// NOTE: deprecated - leaving for when/if we get a dev server back up

export default {
  ...options,
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.js.org/guides/development/#using-source-maps and https://webpack.js.org/configuration/devtool/
  entry: [
    // must be first entry to properly set public path
    './src/webpack-public-path',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index.js'), // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HardSourceWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.ejs',
      favicon: 'src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
      api_http: 'http://houston.peter-dev.astronomer.io/v1',
      api_ws: 'http://houston.peter-dev.astronomer.io/w1',
      stripe_pk: 'pk_test_9nakxMiaKT3egTTtCmdfLdet',
      tracking_snippet: '',
    }),
  ],
}
