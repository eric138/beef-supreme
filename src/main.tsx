import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#000000',
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
