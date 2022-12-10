import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import HomepagePhoto from "../assets/temp_homepage_photo.png"
import AnimatedPage from "./AnimatedPage";

const Home = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/About')
  }

  return (
    <AnimatedPage>
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <Grid item xs={6} >
          <Box sx={{ ml: '10%' }}>
            <Typography variant='h3'> Hello! </Typography>
            <Typography variant='h4'> Welcome to my Portfolio </Typography>
            <Button variant='contained' size='large' onClick={onClick}>
              About Me
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
              component='img'
              src={HomepagePhoto}
              sx={{
                filter: 'drop-shadow(5px 5px 5px #222)',
                zIndex: 1,
              }}
            />
        </Grid>
      </Grid>
    </AnimatedPage>
  )
}

export default Home;