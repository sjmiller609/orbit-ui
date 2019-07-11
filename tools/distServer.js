// This file configures a web server for testing the production build
// on your local machine.
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
import config from '../webpack.localProd'
import path from 'path'

const options = {
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, 'dist'),
  compress: true,
  port: 8080,
  host: 'localhost',
  allowedHosts: ['localhost', 'app.local.astronomer.io'],
  open: false,
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(8080, 'localhost', () => {
  console.log('Distribution server listening on port 8080') // eslint-disable-line no-console
})
