// This file configures the development web server
// which supports hot reloading and synchronized testing.

// Require Browsersync along with webpack and middleware for it
//import browserSync from 'browser-sync'
// Required for react-router browserHistory
// see https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-102623643
//import historyApiFallback from 'connect-history-api-fallback'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
//import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config.local'
import path from 'path'

const options = {
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, 'dist'),
  compress: true,
  port: 5000,
  host: 'localhost',
  hot: true,
  //https: true,
  open: false,
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000')
})
