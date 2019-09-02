const sansSerif = `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif`

const fonts = {
  sans: sansSerif,
  body: sansSerif,
  heading: sansSerif,
}

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]

export const typography = {
  fonts,
  fontSizes,
  fontWeights: {
    body: 400,
    heading: 700,
    light: 300,
    bold: 700,
    extraBold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
}
