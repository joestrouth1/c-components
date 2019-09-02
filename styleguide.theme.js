// Theme is written in typescript, so it must be built first.
const { defaultTheme: theme } = require('./dist')

module.exports = {
  color: {
    base: theme.colors.text,
    light: theme.colors.gray.green[40],
    lightest: theme.colors.gray.green[20],
    link: theme.colors.primary,
    linkHover: theme.colors.green[40],
    border: theme.colors.gray.green[10],
    name: theme.colors.lime[30],
    type: theme.colors.red[40],
    errors: theme.colors.red[30],
    baseBackground: theme.colors.gray.green[0],
    codeBackground: theme.colors.gray.green[5],
    sidebarBackground: theme.colors.gray.green[5],
    ribbonBackground: theme.colors.lime[10],
    ribbonText: theme.colors.lime[40],
  },
  fontFamily: {
    base: theme.fonts.sans,
    monospace: [
      '"FuraCode NF"',
      '"Operator Mono"',
      'Dank Mono',
      'Consolas',
      '"Liberation Mono"',
      'Menlo',
      'monospace',
    ],
  },
  borderRadius: 0,
}
