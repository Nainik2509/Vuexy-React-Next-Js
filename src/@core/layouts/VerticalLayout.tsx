// ** React Imports
import { FC, ReactNode, useState } from 'react'

// ** MUI Imports
import Backdrop from '@mui/material/Backdrop'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, Theme, useTheme } from '@mui/material/styles'

// ** Theme Config Import
import themeConfig from 'configs/themeConfig'

// ** Layout Components
import FooterContent from './components/footer'
import AppBar from './components/appBar/vertical'
import Navigation from './components/navigation/vertical'

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

const FooterWrapper = styled('footer')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 6),
  transition: 'width .25s ease, margin .25s ease'
}))

const VerticalLayout: FC<Props> = (props: Props) => {
  // ** Props
  const { children } = props

  // ** States
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false)

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  // ** Vars
  const navWidth = themeConfig.navigationSize
  const { appBar, footer, contentWidth, navCollapsed } = settings
  const collapsedNavWidth = themeConfig.collapsedNavigationSize

  return (
    <VerticalLayoutWrapper className='layout-wrapper'>
      <Navigation hidden={hidden} navWidth={navWidth} collapsedNavWidth={collapsedNavWidth} />
      <MainContentWrapper className='layout-content-wrapper'>
        {/* AppBar Component */}
        {appBar === 'hidden' ? null : (
          <AppBar hidden={hidden} position={appBar} contentWidth={contentWidth} setShowBackdrop={setShowBackdrop} />
        )}

        <ContentWrapper
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
        {footer === 'hidden' ? null : (
          <FooterWrapper
            sx={{
              zIndex: showBackdrop && footer === 'fixed' ? 13 : 10,
              ...(footer === 'fixed' && {
                bottom: 0,
                position: 'sticky',
                boxShadow: theme.shadows[4],
                backgroundColor: theme.palette.background.paper,
                [theme.breakpoints.down('lg')]: {
                  marginLeft: 0
                }
              }),
              ...(footer === 'static' && {
                boxShadow: 'none',
                backgroundColor: 'transparent'
              })
            }}
          >
            <Box
              sx={{
                width: '100%',
                ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } })
              }}
            >
              <FooterContent />
            </Box>
          </FooterWrapper>
        )}
      </MainContentWrapper>

      <Backdrop open={showBackdrop} onClick={() => setShowBackdrop(false)} sx={{ zIndex: 12 }} />
    </VerticalLayoutWrapper>
  )
}

export default VerticalLayout
