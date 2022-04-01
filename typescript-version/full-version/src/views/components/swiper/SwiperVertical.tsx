// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperVertical = () => {
  // ** Hook
  const [ref] = useKeenSlider<HTMLDivElement>({
    vertical: true,
    slides: {
      origin: 'center',
      spacing: 8
    }
  })

  return (
    <Box ref={ref} className='keen-slider vertical'>
      {[...Array(10).keys()].map((num: number) => (
        <Box key={num} className='keen-slider__slide default-slide'>
          {num + 1}
        </Box>
      ))}
    </Box>
  )
}

export default SwiperVertical
