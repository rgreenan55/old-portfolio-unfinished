import React from "react";
import Layout from "./layouts/Layout.js"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#221533',
    },
    secondary: {
      main: '#ffffff',
    },
  },
})

const Home = () => {}
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* Header */}
        <Routes>
          {/* Could make this main thing? Then RouteA -> Portfolio, RouteB->App, then subroute? */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="*" element={<div> Website Path Does Not Exist </div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
