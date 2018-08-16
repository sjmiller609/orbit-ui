import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import HardSourceWebpackPlugin from 'hard-source-webpack-plugin'
import { default as common, output } from './webpack.common'

export default {
  ...common,
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.js.org/guides/development/#using-source-maps and https://webpack.js.org/configuration/devtool/
  mode: 'development',
  output: {
    ...output,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  plugins: [
    new HardSourceWebpackPlugin(), // cache's modules for faster build times
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
      api_http: 'http://localhost:8870/v1',
      api_ws: 'ws://localhost:4000', //NOTE: temp for mock logs
      stripe_pk: 'pk_test_9nakxMiaKT3egTTtCmdfLdet',
      tracking_snippet:
        '!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Astronomer snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.astronomer.io/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";analytics.load("GEu2WuWnPGAAmMs8N7qSc");}}();',
      hash: true,
    }),
    new webpack.NamedModulesPlugin(),
  ],
}
