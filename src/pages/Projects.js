import React from "react";
import { Paper, Typography } from "@mui/material";
import Carousel from "../components/Carousel";
import slides from "../assets/proj1/images"

const Projects = () => {
  const [index, setIndex] = React.useState(0)

  return (
    <>
      <Paper sx={{ p: '24px', pt: '12px', bgcolor: '#221533' }}>
        <Carousel index={index} setIndex={setIndex} slides={slides} />
      </Paper>
      <Paper sx={{ p: '24px', mt: '12px', bgcolor: '#221533' }}>
        <Paper sx={{ p: '12px', height: '10rem' }}>
            <Typography variant='h4' align='center'> {slides[index].title} </Typography>
            <Typography variant='body1' align='center'> {slides[index].description} </Typography>
        </Paper>
      </Paper>
    </>
  )
}

export default Projects;

//https://mui.com/material-ui/react-stepper/#SwipeableTextMobileStepper.js