const green = {
  0: '#edfaf6',
  5: '#e1f7ef',
  10: '#d5f3e9',
  20: '#96d6c1',
  30: '#46a483',
  40: '#12704d',
  50: '#00502f',
  55: '#004425',
  60: '#00381c',
}

const red = {
  0: '#faeded',
  5: '#ffdbdc',
  10: '#ffc6c7',
  20: '#ff898c',
  30: '#e31b23',
  40: '#9e000b',
  50: '#6d000c',
  55: '#55000c',
  60: '#3d000a',
}

const lime = {
  0: '#ddf0d4',
  5: '#c2eaab',
  10: '#aae583',
  20: '#7ac143',
  30: '#458512',
  40: '#234b00',
  50: '#142900',
  55: '#112300',
  60: '#0e1c00',
}

const gray = {
  green: {
    0: '#fafafa',
    5: '#f3f5f4',
    10: '#ecefee',
    20: '#c8d2cd',
    30: '#8ea098',
    40: '#5a6b64',
    50: '#3c4b45',
    55: '#374540',
    60: '#32403b',
  },
  red: {
    0: '#fafafa',
    5: '#f4f3f3',
    10: '#efeced',
    20: '#d1c6c8',
    30: '#9d8c8e',
    40: '#675658',
    50: '#463839',
    55: '#403334',
    60: '#3b2e2f',
  },
}

const brand = {
  black: gray.green[60],
  green: green[50],
  lime: lime[20],
  red: red[30],
}

const allColors = {
  text: brand.black,
  background: gray.green[0],
  primary: brand.green,
  secondary: brand.lime,
  accent: brand.red,
  muted: lime[5],
  green,
  red,
  lime,
  gray,
}

export const colors = {
  brand,
  ...allColors,
}
