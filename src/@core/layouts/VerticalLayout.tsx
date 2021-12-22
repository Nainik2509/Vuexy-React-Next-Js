// ** React Imports
import { ReactNode, useState } from 'react'

// ** MUI Imports
import Backdrop from '@mui/material/Backdrop'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Components
import AppBar from './components/vertical/appBar'
import Customizer from 'src/@core/components/customizer'
import Navigation from './components/vertical/navigation'
import Footer from './components/shared-components/footer'

// ** Type Import
import { VerticalNavItemsType } from './types'
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  hidden: boolean
  settings: Settings
  children: ReactNode
  verticalNavItems?: VerticalNavItemsType
  saveSettings: (values: Settings) => void
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

const VerticalLayout = (props: Props) => {
  // ** Props
  const { hidden, settings, children } = props

  // ** Vars
  const navigationBorderWidth = 1
  const { contentWidth } = settings
  const navWidth = themeConfig.navigationSize
  const collapsedNavWidth = themeConfig.collapsedNavigationSize

  // ** States
  const [navHover, setNavHover] = useState<boolean>(false)
  const [navVisible, setNavVisible] = useState<boolean>(false)
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false)

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <>
      <VerticalLayoutWrapper className='layout-wrapper'>
        {/* Navigation Menu */}
        {settings.navHidden ? null : (
          <Navigation
            navWidth={navWidth}
            navHover={navHover}
            navVisible={navVisible}
            setNavHover={setNavHover}
            setNavVisible={setNavVisible}
            collapsedNavWidth={collapsedNavWidth}
            toggleNavVisibility={toggleNavVisibility}
            navigationBorderWidth={navigationBorderWidth}
            {...props}
          />
        )}
        <MainContentWrapper className='layout-content-wrapper'>
          {/* AppBar Component */}
          <AppBar setShowBackdrop={setShowBackdrop} toggleNavVisibility={toggleNavVisibility} {...props} />

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
        </MainContentWrapper>

        {/* Backdrop */}
        <Backdrop open={showBackdrop} onClick={() => setShowBackdrop(false)} sx={{ zIndex: 12 }} />
      </VerticalLayoutWrapper>

      {/* Customizer */}
      {themeConfig.disableCustomizer || hidden ? null : <Customizer />}
    </>
  )
}

export default VerticalLayout
