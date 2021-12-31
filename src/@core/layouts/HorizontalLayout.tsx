// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AppBar from '@mui/material/AppBar'
import Backdrop from '@mui/material/Backdrop'
import { styled } from '@mui/material/styles'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Components
import Customizer from 'src/@core/components/customizer'
import Footer from './components/shared-components/footer'
import Navigation from './components/horizontal/navigation'
import ScrollToTop from 'src/@core/components/scroll-to-top'
import AppBarContent from './components/horizontal/app-bar-content'

const HorizontalLayoutWrapper = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
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

const HorizontalLayout = (props: LayoutProps) => {
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
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false)

  // ** Vars
  const { contentWidth } = settings

  return (
    <HorizontalLayoutWrapper className='layout-wrapper'>
      {/* AppBar Component */}
      {settings.appBar === 'hidden' ? null : (
        <AppBar
          elevation={3}
          color='default'
          className='layout-navbar-and-nav-container'
          position={settings.appBar === 'fixed' ? 'sticky' : 'static'}
          sx={{
            transition: 'none',
            alignItems: 'center',
            color: 'text.primary',
            justifyContent: 'center',
            ...(settings.appBar === 'static' && { boxShadow: 'none', backgroundColor: 'transparent' }),
            ...(settings.appBar === 'fixed' && { backgroundColor: theme => theme.palette.background.paper })
          }}
        >
          <Box
            className='layout-navbar'
            sx={{
              width: '100%',
              ...(settings.navHidden ? {} : { borderBottom: theme => `1px solid ${theme.palette.divider}` })
            }}
          >
            <Toolbar
              className='navbar-content-container'
              sx={{
                mx: 'auto',
                minHeight: `${themeConfig.appBarHeight - 1}px !important`,
                ...(settings.contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } })
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
          {settings.navHidden ? null : (
            <Toolbar
              className='layout-horizontal-nav'
              sx={{
                minHeight: `${themeConfig.appBarHeight}px !important`,
                ...(settings.contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } })
              }}
            >
              {(userHorizontalNavMenuContent && userHorizontalNavMenuContent(props)) || <Navigation {...props} />}
            </Toolbar>
          )}
        </AppBar>
      )}

      {/* Content */}
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

      {/* Footer Component */}
      <Footer showBackdrop={showBackdrop} {...props} />

      {/* Customizer */}
      {themeConfig.disableCustomizer || hidden ? null : <Customizer />}

      {/* Scroll to top button */}
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed'>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}

      {/* Backdrop */}
      <Backdrop open={showBackdrop} onClick={() => setShowBackdrop(false)} sx={{ zIndex: 12 }} />
    </HorizontalLayoutWrapper>
  )
}

export default HorizontalLayout
