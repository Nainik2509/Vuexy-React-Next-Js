// ** React Imports
import { FC, ReactNode, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Backdrop from '@mui/material/Backdrop'
import { styled } from '@mui/material/styles'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'

// ** Theme Config Import
import themeConfig from 'configs/themeConfig'

// ** Components
import Customizer from '@core/components/customizer'
import Footer from './components/shared-components/footer'
import AppBarContent from './components/horizontal/app-bar-content'

// ** Hook Import
import { useSettings } from '@core/hooks/useSettings'

interface Props {
  hidden: boolean
  children: ReactNode
}

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
  transition: 'padding .25s ease',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const HorizontalLayout: FC<Props> = (props: Props) => {
  // ** Props
  const { hidden, children } = props

  // ** States
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false)

  // ** Hooks
  const { settings, saveSettings } = useSettings()

  // ** Vars
  const { contentWidth } = settings

  return (
    <HorizontalLayoutWrapper className='layout-wrapper'>
      {/* AppBar Component */}
      {settings.appBar === 'hidden' ? null : (
        <AppBar
          elevation={3}
          color='default'
          className='layout-navbar'
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
            sx={{
              width: '100%',
              ...(settings.navHidden ? {} : { borderBottom: theme => `1px solid ${theme.palette.divider}` })
            }}
          >
            <Toolbar
              sx={{
                mx: 'auto',
                minHeight: `${themeConfig.appBarHeight - 1}px !important`,
                ...(settings.contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } })
              }}
            >
              <AppBarContent
                hidden={hidden}
                settings={settings}
                saveSettings={saveSettings}
                setShowBackdrop={setShowBackdrop}
              />
            </Toolbar>
          </Box>
          {settings.navHidden ? null : (
            <Toolbar
              sx={{
                minHeight: `${themeConfig.appBarHeight}px !important`,
                ...(settings.contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } })
              }}
            >
              Navigation
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
      <Footer settings={settings} saveSettings={saveSettings} showBackdrop={showBackdrop} />

      {/* Customizer */}
      {themeConfig.disableCustomizer || hidden ? null : <Customizer />}

      {/* Backdrop */}
      <Backdrop open={showBackdrop} onClick={() => setShowBackdrop(false)} sx={{ zIndex: 12 }} />
    </HorizontalLayoutWrapper>
  )
}

export default HorizontalLayout
