// This file configures a web server for testing the production build
// on your local machine.
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
import config from '../webpack.drone'
import path from 'path'

const options = {
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, 'dist'),
  disableHostCheck: true,
  compress: true,
  inline: true,
  port: 8080,
  host: '0.0.0.0',
  allowedHosts: ['0.0.0.0', 'orbit'],
  open: false,
  clientLogLevel: 'error',
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(8080, '0.0.0.0', () => {
  console.log('Distribution server listening on 0.0.0.0 at port 8080') // eslint-disable-line no-console
})
