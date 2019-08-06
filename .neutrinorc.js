const Dotenv = require('dotenv-webpack');

module.exports = {
  use: [
    (neutrino) =>
      neutrino.use('@neutrinojs/react', {
        html: {
          title: 'Astronomer'
        },
        publicPath: '/',
        devServer: {
          allowedHosts: ['localhost', 'app.local.astronomer.io'],
        },
        style: {
          css: {
            localIdentName:
              process.env.NODE_ENV === 'production'
                ? '[hash:base64:8]'
                : '[folder]__[local]__[hash:base64:5]'
          },
          loaders: [
            {
              loader: require.resolve('postcss-loader'),
              useId: 'postcss'
            }
          ]
        },
      }),
    (neutrino) => {
      neutrino.config.resolve.modules.add(neutrino.options.source);
      neutrino.config.plugin('dotenv').use(Dotenv, [{
        systemvars: true
      }]);
    }
  ]
};
