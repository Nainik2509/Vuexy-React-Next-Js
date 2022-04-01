// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Direction } from '@mui/material'

// ** Third Party Components
import { useKeenSlider, TrackDetails } from 'keen-slider/react'

const images = [
  '/images/banner/banner-6.jpg',
  '/images/banner/banner-7.jpg',
  '/images/banner/banner-8.jpg',
  '/images/banner/banner-9.jpg',
  '/images/banner/banner-10.jpg'
]

const SwiperFader = ({ direction }: { direction: Direction }) => {
  // ** State
  const [details, setDetails] = useState<TrackDetails | null>(null)

  // ** Hook
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 2,
    rtl: direction === 'rtl',
    detailsChanged(s) {
      setDetails(s.track.details)
    }
  })

  const scaleStyle = (idx: number) => {
    if (!details) return {}
    const slide = details.slides[idx]
    const scale_size = 0.7
    const scale = 1 - (scale_size - scale_size * slide.portion)

    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`
    }
  }

  return (
    <Box ref={sliderRef} className='keen-slider zoom-out'>
      {images.map((src, idx) => (
        <Box key={idx} className='keen-slider__slide zoom-out__slide'>
          <Box className='slider-content-wrapper' sx={{ ...scaleStyle(idx) }}>
            <img src={src} alt={`slider ${idx}`} />
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default SwiperFader
