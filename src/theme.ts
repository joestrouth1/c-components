const fonts = {
  sans: `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif`,
}

const brand = {
  black: '#383739',
  green: '#00502F',
  red: '#e31b23',
}

const colors = {
  text: brand.black,
  background: '#FFFFFF',
  primary: brand.green,
  accent: brand.red,
}

export default {
  fonts,
  colors: {
    ...colors,
    brand,
  },
}
