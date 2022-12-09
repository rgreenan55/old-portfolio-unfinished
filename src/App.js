import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import MainLayout from "./layouts/MainLayout.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Experience from "./pages/Experience.js"
import Projects from "./pages/Projects.js"

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

const App = () => {
  const routes = ['Home', 'About', 'Experience', 'Projects']; // When Adding Route, put its Route here.

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* Header */}
        <Routes>
          {/* Could make this main thing? Then RouteA -> Portfolio, RouteB->App, then subroute? */}
          <Route path="/" element={<MainLayout routes={routes} />}>
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Experience" element={<Experience />} />
            <Route path="Projects" element={<Projects />} />
          </Route>

          <Route path="*" element={<div> Website Path Does Not Exist </div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
