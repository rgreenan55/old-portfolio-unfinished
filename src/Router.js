import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import MainLayout from "./layouts/MainLayout.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Skills from "./pages/Skills.js"
import Work from "./pages/Work.js"
import Projects from "./pages/Projects.js"


const MyRouter = () => {
  const location = useLocation();
  const locationArr = location.pathname?.split('/') || [];
  const navigate = useNavigate();
  const routes = ['home', 'about', 'skills', 'projects', 'work'];

  React.useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location])
  

  return (
    <>
      <MainLayout routes={routes} />
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={locationArr}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
          <Route path='work' element={<Work />} />
          <Route path='*' element={<div> Website Path Does Not Exist </div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default MyRouter;