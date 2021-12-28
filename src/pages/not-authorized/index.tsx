// ** React Imports
import { ReactNode, useContext } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Context
import { Auth } from 'src/@core/context/AuthContext'

// ** Config
import authConfig from 'src/configs/auth'

// ** Demo Imports
import FooterIllustrations from 'src/pages/pages/misc/FooterIllustrations'

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  marginBottom: theme.spacing(9.75),
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(12)
  }
}))

const NotAuthorized = () => {
  // ** Hooks
  const { user } = useContext(Auth)

  return (
    <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1, fontSize: '1.5rem !important' }}>
            You are not authorized! 🔐
          </Typography>
          <Typography variant='body2'>You don’t have permission to access this page. Go Home!</Typography>
        </BoxWrapper>
        <Img height='487' alt='not-authorized-illustration' src='/images/pages/misc-not-authorized.png' />
        <Link href={user ? authConfig.redirectURL(user.role) : '/'} passHref>
          <Button type='submit' component='a' variant='contained' sx={{ paddingLeft: 5.5, paddingRight: 5.5 }}>
            Back to Home
          </Button>
        </Link>
      </Box>
      <FooterIllustrations />
    </Box>
  )
}

NotAuthorized.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default NotAuthorized
