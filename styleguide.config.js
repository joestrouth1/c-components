const path = require('path')
const { version } = require('./package')
const styleguideTheme = require('./styleguide.theme')

module.exports = {
  ribbon: {
    url: 'https://github.com/joestrouth1/c-components',
  },
  theme: styleguideTheme,
  defaultExample: false,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.(js|ts)x?$/, '.examples.md')
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'How do I add these components to a project?',
        },
        {
          name: 'Configuration',
          description: 'How can I customize these components?',
          content: 'docs/configuration.md',
          exampleMode: 'expand',
        },
        {
          name: 'Live Demo',
          external: true,
          href: 'http://example.com',
        },
      ],
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/**/*.tsx',
      ignore: [
        '**/__tests__/**',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.spec.{js,jsx,ts,tsx}',
        '**/*.d.ts',
        '**/styleguide/Wrapper.tsx',
      ],
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
  moduleAliases: {
    'c-components': path.resolve(__dirname, 'src'),
    styleguide: path.resolve(__dirname, 'src', 'styleguide'),
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
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name][md5:hash:base64:8].[ext]',
                outputPath: 'fonts/',
              },
            },
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
