import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress, Divider, Grid, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import { technicalSkills, transferableSkills, softwareFields, softwareTools } from '../config/skills.js';
import AnimatedPage from "./AnimatedPage";
import { useTheme } from '@emotion/react';
import { QuestionMark } from '@mui/icons-material';

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

  console.log(useTheme());

  const onClick = () => {
    navigate('/Projects')
  }

  return (
    <AnimatedPage>
      {/* Left */}
      <Grid container spacing={4} justifyContent='center' alignItems='center'>
        <Grid item xs={12} lg={4}>
          <Box sx={{ pl: '48px' }}>
            <Typography variant='h4'> My Skills </Typography>
          </Box>
        </Grid>
        
        {/* Right */}
        <Grid item xs={12} lg={8} >
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
                  <Paper color='secondary' sx={{ p: '12px 0px 12px', bgcolor: '#221533' }}>
                    <Stack direction='row' divider={<Divider varient='middle' orientation='vertical' flexItem sx={{ backgroundColor: 'black' }} />} spacing={2}>
                      {softwareFields.map(field => <MyCircularProgress key={field.label} label={field.label} value={field.percent}/>)}
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          {/* Bottom */}
          <Paper sx={{ height: '400px', opacity: '95%' }}>
            <Box sx={{ p: '8px 24px 0px' }}>
              <Typography variant='h5' noWrap sx={{ textDecoration: 'underline' }}> Software & Tools </Typography>
              <Box sx={{ height: '300px' }}>

              </Box>
              <Box display='flex' justifyContent='flex-end' alignContent='flex-end'>
                <Button position='absolute' variant='contained' size='large' onClick={onClick} sx={{ width: '100%' }}>
                  View Projects
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </AnimatedPage>
  )
}

export default Skills;
