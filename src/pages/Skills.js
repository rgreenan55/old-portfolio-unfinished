import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress, Grid, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import { technicalSkills, transferableSkills, softwareFields } from '../config/skills.js';
import AnimatedPage from "./AnimatedPage";

const MyProgress = ({ label, value, ...props }) => {
  return (
    <Box sx={{ m: '12px 0px 0px' }} {...props}>
      <Typography noWrap> {label || '_'} </Typography>
      <LinearProgress variant='determinate' value={value} sx={{ height: '16px' }}/>
    </Box>
  )
};

const MyCircularProgress = ({ label, value, ...props }) => {
  return (
    <Box display='flex' justifyContent='center' sx={{ width: '20%' }} {...props}>
      <Box>
        <Typography color='white' align='center' gutterBottom> {label || '_'} </Typography>
        <Box sx={{ position: 'relative' }}>

          <CircularProgress variant='determinate' value={value} thickness={4} size='5rem' style={{ color: 'white' }} />
          <Box sx={{ top: 0, bottom: 5, left: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography color='white' align='center'> {`${value || 0}%`} </Typography>
          </Box>

        </Box>
      </Box>
    </Box>
  )
};

const Skills = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/Projects')
  }	

  return (
    <AnimatedPage>
      {/* Left */}
      <Grid container spacing={4} justifyContent='center' alignItems='center'>
        <Grid item xs={4}>
          <Box sx={{ ml: '24px' }}>
            <Typography variant='h4'> My Skills </Typography>
            <Button variant='contained' size='large' onClick={onClick}>
              My Projects
            </Button>
          </Box>
        </Grid>
        
        {/* Right */}
        <Grid item xs={8}>
          {/* Top */}
          <Paper sx={{ mb: '24px', height: '400px', opacity: '95%' }}>
            <Box sx={{ p: '8px 24px 0px' }}>
              <Grid container spacing={6}>
                <Grid item xs={6}>
                  <Typography variant='h5' noWrap sx={{ textDecoration: 'underline' }}> Technical Skills </Typography>
                  {technicalSkills.map(skill => <MyProgress key={skill.label} label={skill.label} value={skill.percent} />)}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='h5' noWrap sx={{ textDecoration: 'underline' }}> Transferable Skills </Typography>
                  {transferableSkills.map(skill => <MyProgress key={skill.label} label={skill.label} value={skill.percent} />)}
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{ p: '12px 0px 12px', bgcolor: '#221533' }}>
                    <Stack direction='row'>
                      {softwareFields.map(field => <MyCircularProgress key={field.label} label={field.label} value={field.percent}/>)}
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          {/* Bottom */}
          <Paper sx={{ height: '400px', opacity: '95%' }}>

          </Paper>
        </Grid>
      </Grid>
    </AnimatedPage>
  )
}

export default Skills;
