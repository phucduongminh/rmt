import 'react-native-gesture-handler'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import Routes from './routes/routes'
import theme from './theme'

export default function App () {
  return (
    <ThemeProvider theme={theme.dark}>
      <Routes />
    </ThemeProvider>
  )
}