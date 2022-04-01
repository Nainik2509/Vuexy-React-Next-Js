// ** MUI Imports
import Link from '@mui/material/Link'
import MuiGrid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import SwiperLoop from 'src/views/components/swiper/SwiperLoop'
import SwiperZoom from 'src/views/components/swiper/SwiperZoom'
import SwiperFader from 'src/views/components/swiper/SwiperFader'
import SwiperDefault from 'src/views/components/swiper/SwiperDefault'
import SwiperSpacing from 'src/views/components/swiper/SwiperSpacing'
import SwiperAutoplay from 'src/views/components/swiper/SwiperAutoplay'
import SwiperFreeMode from 'src/views/components/swiper/SwiperFreeMode'
import SwiperCentered from 'src/views/components/swiper/SwiperCentered'
import SwiperVertical from 'src/views/components/swiper/SwiperVertical'
import SwiperControls from 'src/views/components/swiper/SwiperControls'
import SwiperThumbnails from 'src/views/components/swiper/SwiperThumbnails'
import SwiperMultipleSlides from 'src/views/components/swiper/SwiperMultipleSlides'
import SwiperMutationObserver from 'src/views/components/swiper/SwiperMutationObserver'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'

// ** Source code imports
import * as source from 'src/views/components/swiper/SwiperSourceCode'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

const Swiper = () => {
  // ** Hook
  const {
    settings: { direction }
  } = useSettings()

  return (
    <KeenSliderWrapper>
      <MuiGrid container spacing={6} className='match-height'>
        <PageHeader
          subtitle={<Typography variant='body2'>Swiper is the most modern free mobile touch slider.</Typography>}
          title={
            <Typography variant='h5'>
              <Link href='https://swiperjs.com/react' target='_blank'>
                Swiper
              </Link>
            </Typography>
          }
        />
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Default'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperDefault direction={direction} />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Loop'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperLoop direction={direction} />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Multiple Slides'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperMultipleSlides direction={direction} />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Spacing'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperSpacing direction={direction} />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='FreeMode'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperFreeMode direction={direction} />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Centered'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperCentered direction={direction} />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Vertical'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperVertical />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Controls'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperControls direction={direction} />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Thumbnails'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperThumbnails direction={direction} />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Fader'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperFader direction={direction} />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Zoom'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperZoom direction={direction} />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Autoplay'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperAutoplay direction={direction} />
          </CardSnippet>
        </MuiGrid>
        <MuiGrid item xs={12}>
          <CardSnippet
            title='Mutation Observer'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperMutationObserver direction={direction} />
          </CardSnippet>
        </MuiGrid>
      </MuiGrid>
    </KeenSliderWrapper>
  )
}

export default Swiper
