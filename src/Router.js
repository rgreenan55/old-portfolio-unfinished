import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
  const routes = ['Home', 'About', 'Skills', 'Work', 'Projects']; // When Adding Route, put its Route here.

  return (
    <>
      <MainLayout routes={routes} />
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={locationArr}>
          <Route path='Home' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Skills' element={<Skills />} />
          <Route path='Work' element={<Work />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='*' element={<div> Website Path Does Not Exist </div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default MyRouter;