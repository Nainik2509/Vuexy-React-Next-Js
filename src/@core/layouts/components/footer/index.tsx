// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Icon Import
import HeartOutline from 'mdi-material-ui/HeartOutline'

const FooterContent: FC = () => {
  // ** Vars
  const hiddenSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const hiddenXS = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography>
        <Typography component='span' sx={{ marginRight: 1.5, textTransform: 'uppercase' }}>
          Copyright
        </Typography>
        {`© ${new Date().getFullYear()} `}
        <Link target='_blank' href='https://themeselection.com/'>
          ThemeSelection
        </Link>
        {hiddenXS ? null : ', All rights Reserved'}
      </Typography>
      {hiddenSM ? null : (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ mr: 1.25 }} component='span'>
            Hand-crafted &amp; Made with
          </Typography>
          <HeartOutline fontSize='small' color='error' sx={{ verticalAlign: 'top' }} />
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
