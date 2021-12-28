// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Footer Content Component
import FooterContent from './FooterContent'

interface Props {
  settings: Settings
  showBackdrop: boolean
  saveSettings: (values: Settings) => void
  footerContent?: (props?: any) => ReactNode
}

const FooterWrapper = styled('footer')(({ theme }) => ({
  padding: theme.spacing(4, 0)
}))

const Footer = (props: Props) => {
  // ** Props
  const { settings, showBackdrop, footerContent: userFooterContent } = props

  if (settings.footer === 'hidden') {
    return null
  }

  return (
    <FooterWrapper
      className='layout-footer'
      sx={{
        zIndex: showBackdrop && settings.footer === 'fixed' ? 13 : 10,
        ...(settings.footer === 'fixed' && {
          bottom: 0,
          position: 'sticky',
          boxShadow: theme => theme.shadows[4],
          backgroundColor: theme => theme.palette.background.paper
        }),
        ...(settings.footer === 'static' && {
          boxShadow: 'none',
          backgroundColor: 'transparent'
        })
      }}
    >
      <Box
        sx={{
          px: 6,
          width: '100%',
          ...(settings.contentWidth === 'boxed' && { mx: 'auto', '@media (min-width:1440px)': { maxWidth: 1440 } })
        }}
      >
        {userFooterContent ? userFooterContent() : <FooterContent />}
      </Box>
    </FooterWrapper>
  )
}

export default Footer
