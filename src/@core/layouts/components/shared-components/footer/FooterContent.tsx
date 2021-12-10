// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const FooterContent: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made with ❤️ by `}
        <Link target='_blank' href='https://themeselection.com/'>
          ThemeSelection
        </Link>
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
        <Link target='_blank' href='https://themeselection.com/'>
          License
        </Link>
        <Link target='_blank' href='https://themeselection.com/'>
          More Themes
        </Link>
        <Link target='_blank' href='https://themeselection.com/'>
          Documentation
        </Link>
        <Link target='_blank' href='https://themeselection.com/support/'>
          Support
        </Link>
      </Box>
    </Box>
  )
}

export default FooterContent
