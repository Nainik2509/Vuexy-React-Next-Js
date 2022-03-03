// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AppBar from '@mui/material/AppBar'
import Backdrop from '@mui/material/Backdrop'
import { styled } from '@mui/material/styles'
import MuiToolbar from '@mui/material/Toolbar'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Components
import Customizer from 'src/@core/components/customizer'
import Footer from './components/shared-components/footer'
import Navigation from './components/horizontal/navigation'
import ScrollToTop from 'src/@core/components/scroll-to-top'
import AppBarContent from './components/horizontal/app-bar-content'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Util Import
import { hexToRGBA } from '../utils/hex-to-rgba'

const HorizontalLayoutWrapper = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  width: '100%',
  padding: `${theme.spacing(0, 6)} !important`,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const HorizontalLayout = props => {
  // ** Props
  const {
    hidden,
    children,
    settings,
    scrollToTop,
    saveSettings,
    horizontalNavMenuContent: userHorizontalNavMenuContent
  } = props

  // ** States
  const [showBackdrop, setShowBackdrop] = useState(false)

  // ** Vars
  const { skin, appBar, navHidden, contentWidth } = settings

  return (
    <HorizontalLayoutWrapper className='layout-wrapper'>
      <AppBar
        color='default'
        elevation={skin === 'bordered' ? 0 : 3}
        className='layout-navbar-and-nav-container'
        position={appBar === 'fixed' ? 'sticky' : 'static'}
        sx={{
          alignItems: 'center',
          color: 'text.primary',
          justifyContent: 'center',
          ...(appBar === 'static' && { zIndex: 13 }),
          transition: 'border-bottom 0.2s ease-in-out',
          backgroundColor: theme => theme.palette.background.paper,
          ...(!showBackdrop && skin === 'bordered' && { borderBottom: theme => `1px solid ${theme.palette.divider}` })
        }}
      >
        <Box
          className='layout-navbar'
          sx={{
            width: '100%',
            ...(navHidden ? {} : { borderBottom: theme => `1px solid ${theme.palette.divider}` })
          }}
        >
          <Toolbar
            className='navbar-content-container'
            sx={{
              mx: 'auto',
              ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } }),
              minHeight: theme => `${theme.mixins.toolbar.minHeight - 1}px !important`
            }}
          >
            <AppBarContent
              {...props}
              hidden={hidden}
              settings={settings}
              saveSettings={saveSettings}
              setShowBackdrop={setShowBackdrop}
            />
          </Toolbar>
        </Box>

        {navHidden ? null : (
          <Box className='layout-horizontal-nav' sx={{ width: '100%', position: 'relative' }}>
            <Toolbar
              className='horizontal-nav-content-container'
              sx={{
                mx: 'auto',
                ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } }),
                minHeight: theme => `${theme.mixins.toolbar.minHeight - (skin === 'bordered' ? 1 : 0)}px !important`
              }}
            >
              {(userHorizontalNavMenuContent && userHorizontalNavMenuContent(props)) || <Navigation {...props} />}
            </Toolbar>
            <Backdrop
              open={showBackdrop}
              onClick={() => setShowBackdrop(false)}
              sx={{
                position: 'absolute',
                backgroundColor: theme =>
                  theme.palette.mode === 'light'
                    ? `rgba(${theme.palette.customColors.main}, 0.665)`
                    : hexToRGBA(theme.palette.background.default, 0.7)
              }}
            />
          </Box>
        )}
      </AppBar>

      <ContentWrapper
        className='layout-page-content'
        sx={{
          ...(contentWidth === 'boxed' && {
            mx: 'auto',
            '@media (min-width:1440px)': { maxWidth: 1440 },
            '@media (min-width:1200px)': { maxWidth: '100%' }
          })
        }}
      >
        {children}
      </ContentWrapper>

      <Footer showBackdrop={showBackdrop} {...props} />

      <DatePickerWrapper sx={{ zIndex: 11 }}>
        <Box id='react-datepicker-portal'></Box>
      </DatePickerWrapper>

      {themeConfig.disableCustomizer || hidden ? null : <Customizer />}

      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed'>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}

      <Backdrop open={showBackdrop} onClick={() => setShowBackdrop(false)} sx={{ zIndex: 12 }} />
    </HorizontalLayoutWrapper>
  )
}

export default HorizontalLayout
