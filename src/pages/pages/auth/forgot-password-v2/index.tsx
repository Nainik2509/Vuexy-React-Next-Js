// ** React Imports
import { ReactNode, SyntheticEvent } from 'react'

// ** Next Imports
import Link from 'next/link'
import Image from 'next/image'

// ** MUI Components
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme, styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Icons Imports
import ChevronLeft from 'mdi-material-ui/ChevronLeft'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/pages/pages/auth/FooterIllustrationsV2'

// Styled Components
const ForgotPasswordIllustrationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const ForgotPasswordIllustration = styled('img')(({ theme }) => ({
  maxWidth: '53.125rem',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '35rem'
  }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {
    width: '100%'
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  display: 'flex',
  fontSize: '0.875rem',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: theme.palette.primary.main
}))

const ForgotPasswordV2 = () => {
  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()

  // ** Vars
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <ForgotPasswordIllustrationWrapper>
            <ForgotPasswordIllustration
              alt='forgot-password-illustration'
              src={
                theme.palette.mode === 'light'
                  ? '/images/pages/auth-v2-forgot-password-illustration-light.png'
                  : '/images/pages/auth-v2-forgot-password-illustration-dark.png'
              }
            />
          </ForgotPasswordIllustrationWrapper>
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper
        sx={settings.skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}
      >
        <Box
          sx={{
            p: 12,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper'
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 29,
                left: 40,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image alt='logo' width={35} height={29} src={themeConfig.templateLogo} />
              <Typography variant='h5' sx={{ marginLeft: 3, fontWeight: 600, fontSize: '1.5rem !important' }}>
                {themeConfig.templateName}
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <TypographyStyled variant='h5'>Forgot Password? 🔒</TypographyStyled>
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
                <Link passHref href='/pages/auth/login-v2'>
                  <LinkStyled>
                    <ChevronLeft />
                    <span>Back to login</span>
                  </LinkStyled>
                </Link>
              </Typography>
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  )
}

ForgotPasswordV2.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ForgotPasswordV2
