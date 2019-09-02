const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    autoprefixer(),
    cssnano({
      preset: 'default',
    }),
  ],
}
