import App from 'next/app'
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme: DefaultTheme = {
  borderRadius: '8px',
  colors: {
    primary: '#3BC14A',
    secondary: '#4DA167',
    tertiary: '#4E6E5D',
    dark: '#4D5057',
    light: '#CFCFCF',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer />
      </ThemeProvider>
    )
  }
}
