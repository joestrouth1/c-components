/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Component } from 'react'
import { ThemeProvider } from 'theme-ui'
import { defaultTheme } from '../theme'
import 'typeface-open-sans'

function SpacedStack(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      sx={{
        display: 'grid',
        gridGap: 16,
        maxWidth: 320,
        mx: 'auto',
        alignContent: 'stretch',
      }}
    />
  )
}

export default class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <SpacedStack>{this.props.children}</SpacedStack>
      </ThemeProvider>
    )
  }
}
