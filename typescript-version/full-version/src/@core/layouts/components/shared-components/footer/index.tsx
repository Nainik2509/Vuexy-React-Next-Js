// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Footer Content Component
import FooterContent from './FooterContent'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
  footerContent?: (props?: any) => ReactNode
}

const Footer = (props: Props) => {
  // ** Props
  const { settings, footerContent: userFooterContent } = props

  // ** Vars
  const { skin, footer, contentWidth } = settings

  if (footer === 'hidden') {
    return null
  }

  return (
    <Box
      component='footer'
      className='layout-footer'
      sx={{
        zIndex: 10,
        py: theme => theme.spacing(footer === 'fixed' && skin === 'bordered' ? 3.875 : 4),
        ...(footer === 'static' && {
          boxShadow: 'none',
          backgroundColor: 'transparent'
        }),
        ...(footer === 'fixed' && {
          bottom: 0,
          position: 'sticky',
          backgroundColor: theme => theme.palette.background.paper,
          boxShadow: theme => theme.shadows[skin === 'bordered' ? 0 : 4],
          ...(skin === 'bordered' && { borderTop: theme => `1px solid ${theme.palette.divider}` })
        })
      }}
    >
      <Box
        className='footer-content-container'
        sx={{
          px: 6,
          width: '100%',
          ...(contentWidth === 'boxed' && { mx: 'auto', '@media (min-width:1440px)': { maxWidth: 1440 } })
        }}
      >
        {userFooterContent ? userFooterContent(props) : <FooterContent />}
      </Box>
    </Box>
  )
}

export default Footer
