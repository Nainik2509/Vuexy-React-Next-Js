// ** React Imports
import { ReactNode, SyntheticEvent } from 'react'

// ** Next Imports
import Link from 'next/link'
import Image from 'next/image'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiCard, { CardProps } from '@mui/material/Card'

// ** Icons Imports
import ChevronLeft from 'mdi-material-ui/ChevronLeft'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/pages/pages/auth/FooterIllustrationsV1'

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  display: 'flex',
  fontSize: '0.875rem',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: theme.palette.primary.main
}))

const ForgotPasswordV1 = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image alt='logo' width={35} height={29} src={themeConfig.templateLogo} />
            <Typography variant='h5' sx={{ marginLeft: 3, fontWeight: 600, fontSize: '1.5rem !important' }}>
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Forgot Password? 🔒
            </Typography>
            <Typography variant='body2'>
              Enter your email and we&prime;ll send you instructions to reset your password
            </Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField type='email' label='Email' sx={{ display: 'flex', marginBottom: 4 }} />
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 5.25 }}>
              Send reset link
            </Button>
            <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link passHref href='/pages/auth/login-v1'>
                <LinkStyled>
                  <ChevronLeft />
                  <span>Back to login</span>
                </LinkStyled>
              </Link>
            </Typography>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

ForgotPasswordV1.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ForgotPasswordV1
