import path from 'path'

const module = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.eot(\?v=\d+.\d+.\d+)?$/,
      use: ['file-loader'],
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          },
        },
      ],
    },
    {
      test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream',
          },
        },
      ],
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
          },
        },
      ],
    },
    {
      test: /\.(jpe?g|png|gif|ico)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    },
    {
      test: /(\.css|\.scss|\.sass)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              require('autoprefixer'),
            ],
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, 'src', 'scss')],
            sourceMap: true,
          },
        },
      ],
    },
  ],
}

export default module
