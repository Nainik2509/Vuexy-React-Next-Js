// ** React Imports
import { ReactNode } from 'react'

// ** MUI Components
import Grid from '@mui/material/Grid'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Components Imports
import RegisterMultiStepsWizard from 'src/views/pages/auth/register-multi-steps'

// ** Styled Components
const RegisterIllustrationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(18),
  paddingRight: 0,
  paddingBottom: 0,
  justifyContent: 'flex-end',
  backgroundColor: theme.palette.background.default
}))

const RegisterIllustration = styled('img')(() => ({
  width: 600,
  maxWidth: '100%'
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4),
  paddingBottom: 0,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(12),
    paddingBottom: 0
  }
}))

const RegisterMultiSteps = () => {
  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()

  // ** Vars
  const { skin } = settings
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      className='content-right'
      sx={{
        backgroundColor: 'background.paper'
      }}
    >
      <Grid container>
        {!hidden ? (
          <Grid item md={4}>
            <RegisterIllustrationWrapper>
              <Box sx={{ width: 400 }}>
                <RegisterIllustration
                  alt='register-illustration'
                  src={`/images/pages/create-account-${theme.palette.mode}.png`}
                />
              </Box>
            </RegisterIllustrationWrapper>
          </Grid>
        ) : null}
        <Grid item md={8} xs={12}>
          <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
            <Box sx={{ width: 700, mx: 'auto' }}>
              <RegisterMultiStepsWizard />
            </Box>
          </RightWrapper>
        </Grid>
      </Grid>
    </Box>
  )
}

RegisterMultiSteps.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterMultiSteps
