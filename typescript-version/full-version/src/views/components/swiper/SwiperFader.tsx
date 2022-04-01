// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Direction } from '@mui/material'

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react'

const images = [
  '/images/banner/banner-1.jpg',
  '/images/banner/banner-2.jpg',
  '/images/banner/banner-3.jpg',
  '/images/banner/banner-4.jpg',
  '/images/banner/banner-5.jpg'
]

const SwiperFader = ({ direction }: { direction: Direction }) => {
  const [opacities, setOpacities] = useState<number[]>([])

  // ** Hook
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: images.length,
    rtl: direction === 'rtl',
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(slide => slide.portion)
      setOpacities(new_opacities)
    }
  })

  return (
    <Box ref={sliderRef} className='fader'>
      {images.map((src, idx) => (
        <Box key={idx} className='fader__slide' sx={{ opacity: opacities[idx] }}>
          <img src={src} alt={`slider ${idx}`} />
        </Box>
      ))}
    </Box>
  )
}

export default SwiperFader
