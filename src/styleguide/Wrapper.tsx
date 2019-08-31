import React, { Component } from 'react'
import { ThemeProvider } from 'theme-ui'
import defaultTheme from '../theme'
export default class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>{this.props.children}</ThemeProvider>
    )
  }
}
