// ** React Imports
import { MutableRefObject } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Direction } from '@mui/material'

// ** Third Party Components
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react'

const ThumbnailPlugin = (mainRef: MutableRefObject<KeenSliderInstance | null>): KeenSliderPlugin => {
  return slider => {
    function removeActive() {
      slider.slides.forEach(slide => {
        slide.classList.remove('active')
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active')
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on('animationStarted', main => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(next)
      })
    })
  }
}

const SwiperThumbnails = ({ direction }: { direction: Direction }) => {
  // ** Hook
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    rtl: direction === 'rtl'
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      rtl: direction === 'rtl',
      slides: {
        perView: 4,
        spacing: 10
      }
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <Box ref={sliderRef} className='keen-slider'>
        <Box className='keen-slider__slide'>
          <img src='/images/banner/banner-1.jpg' alt='swiper 1' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banner/banner-2.jpg' alt='swiper 2' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banner/banner-3.jpg' alt='swiper 3' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banner/banner-4.jpg' alt='swiper 4' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banner/banner-5.jpg' alt='swiper 5' />
        </Box>
      </Box>

      <Box ref={thumbnailRef} className='keen-slider thumbnail'>
        <Box className='keen-slider__slide'>
          <img src='/images/banner/banner-1.jpg' alt='swiper 1' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banner/banner-2.jpg' alt='swiper 2' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banner/banner-3.jpg' alt='swiper 3' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banner/banner-4.jpg' alt='swiper 4' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banner/banner-5.jpg' alt='swiper 5' />
        </Box>
      </Box>
    </>
  )
}

export default SwiperThumbnails
