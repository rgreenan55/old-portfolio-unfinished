import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import MyRouter from "./Router";

const theme = createTheme({
  palette: {
    type: 'light',
    mode: 'light',
    primary: {
      main: '#221533',
    },
    secondary: {
      main: '#ffffff',
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
