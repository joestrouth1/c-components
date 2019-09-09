const heading = {
  fontFamily: 'heading',
  letterSpacing: 'heading',
  lineHeight: 'heading',
  margin: 0,
}

const body = {
  fontFamily: 'body',
  letterSpacing: 'body',
  lineHeight: 'body',
}

export const type = {
  title: {
    ...heading,
    fontWeight: 'bold',
    fontSize: [5],
  },
  subtitle: {
    ...heading,
    fontWeight: 'body',
    fontSize: [4],
  },
  body: {
    ...body,
    fontWeight: 'body',
    fontSize: [2],
    mb: 3,
  },
  label: {
    ...body,
    fontSize: [2],
    fontWeight: 'body',
  },
  hint: {
    ...body,
    lineHeight: 16 / 14,
    fontSize: [1],
  },
}
