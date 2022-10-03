import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { green, yellow } from '@material-ui/core/colors'


import App from './App'
import './index.css'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: green [500],
    },
    secondary: {
      main: yellow [500],
    },
  },
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)