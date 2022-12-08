import React from "react";
import Layout from "./layouts/Layout.js"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import EmailIcon from "@mui/icons-material/Email";

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

const Home = () => {<EmailIcon color='primary' />}
const About = () => {<p> b </p>}
const Experience = () => {<p> c </p>}
const Projects = () => {<p> d </p>}

const routes = ['Home', 'About', 'Experience', 'Projects'];
const App = () => {
  const [route, setRoute] = React.useState('Home')

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* Header */}
        <Routes>
          {/* Could make this main thing? Then RouteA -> Portfolio, RouteB->App, then subroute? */}
          <Route path="/" element={<Layout tabValue={route} setTabValue={setRoute} routes={routes} />}>
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
          </Route>

          <Route path="*" element={<div> Website Path Does Not Exist </div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
