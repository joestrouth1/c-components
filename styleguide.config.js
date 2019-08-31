const path = require('path')
const { version } = require('./package')

module.exports = {
  components: 'src/**/*.tsx',
  defaultExample: false,
  // moduleAliases: {
  //   '@': path.resolve(__dirname, 'src'),
  // },
  version,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
    },
  },
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
}
