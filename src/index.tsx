import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import { appName } from './constants'
import { ThemeProvider } from '@material-ui/core'
import theme from './styles/theme'

// Sets the app document name dynamically.
document.title = appName

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
