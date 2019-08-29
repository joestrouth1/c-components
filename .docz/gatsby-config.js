const { merge } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'Components',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root:
          '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        ignore: [{}, {}, {}, {}, {}],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Components',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        themeConfig: {},
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components',
          templates:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/node_modules/docz-core/dist/templates',
          packageJson:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/package.json',
          docz:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/.docz',
          cache:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/.docz/.cache',
          app:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/.docz/app',
          appPublic:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/.docz/public',
          appNodeModules:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/node_modules',
          appPackageJson:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/package.json',
          appYarnLock:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/gatsby-config.js',
          gatsbyBrowser:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/gatsby-browser.js',
          gatsbyNode:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/gatsby-node.js',
          gatsbySSR:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/gatsby-ssr.js',
          importsJs:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/.docz/app/imports.js',
          rootJs:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/.docz/app/root.jsx',
          indexJs:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/.docz/app/index.jsx',
          indexHtml:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/.docz/app/index.html',
          db:
            '/mnt/c/Users/joe0/Documents/Projects/web/gatsby/ideal-split/c-components/.docz/app/db.json',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],
}

module.exports = merge(config, custom)
