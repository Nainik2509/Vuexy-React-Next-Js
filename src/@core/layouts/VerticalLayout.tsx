// ** React Imports
import { FC, ReactNode, useState } from 'react'

// ** MUI Imports
import Backdrop from '@mui/material/Backdrop'
import Box, { BoxProps } from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Theme Config Import
import themeConfig from 'configs/themeConfig'

// ** Components
import AppBar from './components/vertical/appBar'
import Customizer from '@core/components/customizer'
import Navigation from './components/vertical/navigation'
import Footer from './components/shared-components/footer'

// ** Hook Import
import { useSettings } from '@core/hooks/useSettings'

interface Props {
  children: ReactNode
}

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

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

const VerticalLayout: FC<Props> = (props: Props) => {
  // ** Props
  const { children } = props

  // ** States
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false)

  // ** Hooks
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  // ** Vars
  const { contentWidth } = settings
  const navWidth = themeConfig.navigationSize
  const collapsedNavWidth = themeConfig.collapsedNavigationSize

  return (
    <VerticalLayoutWrapper className='layout-wrapper'>
      {/* Navigation Menu */}
      <Navigation
        hidden={hidden}
        navWidth={navWidth}
        settings={settings}
        saveSettings={saveSettings}
        collapsedNavWidth={collapsedNavWidth}
      />
      <MainContentWrapper className='layout-content-wrapper'>
        {/* AppBar Component */}
        <AppBar hidden={hidden} settings={settings} saveSettings={saveSettings} setShowBackdrop={setShowBackdrop} />

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
      </MainContentWrapper>

      {/* Customizer */}
      {themeConfig.disableCustomizer || hidden ? null : <Customizer />}

      {/* Backdrop */}
      <Backdrop open={showBackdrop} onClick={() => setShowBackdrop(false)} sx={{ zIndex: 12 }} />
    </VerticalLayoutWrapper>
  )
}

export default VerticalLayout
