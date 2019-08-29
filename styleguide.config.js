const path = require('path')
const { version } = require('./package')

module.exports = {
  components: 'src/**/*.tsx',
  defaultExample: true,
  moduleAliases: {
    '@': path.resolve(__dirname, 'src'),
  },
  version,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
      noParse: /\.(css|scss)/,
    },
    resolve: {
      extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
    },
  },
}
