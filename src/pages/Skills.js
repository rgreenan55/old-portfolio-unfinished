import React from 'react';
import { Box, Grid, Paper, Stack, Tabs, Tab, MobileStepper, Typography } from "@mui/material";
import AnimatedPage from "./AnimatedPage";
import { sections } from '../config/skills.js';
import { colors } from '../utils/util.js';

const Skills = () => {
  const [tabValue, setTabValue] = React.useState(0);
	const handleChange = (_, newTabValue) => {
		setTabValue(newTabValue);
	};

  return (
    <AnimatedPage>
      {/* Left */}
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <Grid item xs={6}>
          <Paper>
            Hello
          </Paper>
        </Grid>
        
        {/* Right */}
        <Grid item xs={6}>
          <Stack spacing={2}>
            {/* Display Skills */}
            <Box sx={{ height: '50vh' }}>
              <Tabs
                value={tabValue}
                onChange={handleChange}
                sx={{ borderBottom: 1, borderColor: 'divider' }}
                TabIndicatorProps={{ style: { backgroundColor: colors[tabValue] } }}
              >
                {sections.map((section,i) => (
                  <Tab key={i} label={i === tabValue ? <span style={{ color: colors[tabValue] }}> {section.label} </span> : section.label} value={i} />
                ))}
              </Tabs>

                {/*<Stack spacing={6} sx={{ p: '24px' }}>
                  {sections[tabValue].skills.map(skill => (
                    <Box alignItems='center'>
                      <Typography variant='h5' sx={{ ml: '8px' }}> {skill.skill} </Typography>
                      <MobileStepper
                        variant='progress'
                        position="static"
                        steps={5}
                        activeStep={skill.tier}
                        sx={{ flexGrow: 1, background: 'none' }}
                        backButton={<Typography> Beginner </Typography>}
                        nextButton={<Typography> Expert </Typography>}
                      />
                    </Box>
                  ))}
                </Stack>*/}
            </Box>

            {/* Bottom */}
            <Paper>

            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </AnimatedPage>
  )
}

export default Skills;
