import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import MainLayout from "./layouts/MainLayout.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Skills from "./pages/Skills.js"
import Work from "./pages/Work.js"
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
  const routes = ['Home', 'About', 'Skills', 'Work', 'Projects']; // When Adding Route, put its Route here.

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout routes={routes} />}>
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Work" element={<Work />} />
            <Route path="Projects" element={<Projects />} />
          </Route>

          <Route path="*" element={<div> Website Path Does Not Exist </div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
