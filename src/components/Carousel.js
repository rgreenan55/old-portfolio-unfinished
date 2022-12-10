import React from "react";
import { Box, Button, MobileStepper, Paper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import PropTypes from "prop-types";

const CurrentImage = ({ src }) => {
  return (
    <Box 
      component='img'
      src={src}
      position='absolute'
      sx={{
        width: '40vw',
        height: '30vw',
        zIndex: 1,
        boxShadow: 5
      }}
    />
  )
}

const SideImage = ({ src, prev, next }) => {
  return (
    <Box
      component='img'
      src={src}
      position='absolute'
      sx={{
        width: '40vw',
        height: '30vw',
        zIndex: 0,
        opacity: 0.6,
        boxShadow: 5,
        transform: 'scale(0.9, 0.9)',
      }}
      onClick={prev || next}
      marginRight={prev && '40%'}
      marginLeft={next && '40%'}
    />
  )
}

const Carousel = ({ slides, index, setIndex }) => {
  const getPrevIndex = (i, len) => i === 0 ? len-1 : i-1
  const getNextIndex = (i, len) => i === len-1 ? 0 : i+1
  
  const goNext = () => setIndex(getNextIndex(index, slides.length))
  const goPrev = () => setIndex(getPrevIndex(index, slides.length))

  return (
    <Box>
      <Box display='flex' position='relative' justifyContent='center' sx={{ height:'30vw', m: '12px' }}>
          <SideImage src={slides[getPrevIndex(index, slides.length)].img} prev={goPrev} />
          <CurrentImage src={slides[index].img} />
          <SideImage src={slides[getNextIndex(index, slides.length)].img} next={goNext} />
      </Box>
      <Box display='flex' justifyContent='center'>
          <MobileStepper
            variant='dots'
            position='static'
            steps={slides.length}
            activeStep={index}
            sx={{ maxWidth: 'calc(40vw - 16px)', flexGrow: '1' }}
            backButton={
              <Button size='small' onClick={goPrev}>
                <KeyboardArrowLeft />
                Prev
              </Button>
            }
            nextButton={
              <Button size='small' onClick={goNext}>
                Next
                <KeyboardArrowRight />
              </Button>
            }
          />
      </Box>
    </Box>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
}

export default Carousel;