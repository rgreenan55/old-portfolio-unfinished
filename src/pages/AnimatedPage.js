import React from "react";
import { motion } from "framer-motion"
import { Box } from "@mui/material";

const AnimatedPage = ({ children }) => {
  const animations = {
    initial: { opacity: 0, transition: { duration: 0.5 }},
    animate: { opacity: 1, transition: { duration: 0.5 }},
    exit: { opacity: 0, transition: { duration: 0.75 }},
  }

  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Box minHeight='calc(100vh-64px)' margin='24px'>
        {children}
      </Box>
    </motion.div>
);
}

export default AnimatedPage;