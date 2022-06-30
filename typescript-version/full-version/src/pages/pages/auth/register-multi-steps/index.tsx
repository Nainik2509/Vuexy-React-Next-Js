// ** React Imports
import { ReactNode } from 'react'

// ** MUI Components
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
  paddingRight: '0',
  alignItems: 'center',
  padding: theme.spacing(18),
  backgroundColor: theme.palette.background.default
}))

const RegisterIllustration = styled('img')(() => ({
  width: 600,
  maxWidth: '100%'
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    flexGrow: 1,
    padding: theme.spacing(12)
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
      {!hidden ? (
        <Box sx={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <RegisterIllustrationWrapper>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <RegisterIllustration
                alt='register-illustration'
                src={`/images/pages/create-account-${theme.palette.mode}.png`}
              />
            </Box>
          </RegisterIllustrationWrapper>
        </Box>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            mx: { xs: 0, md: 'auto' },
            width: { xs: '100%', md: 700 }
          }}
        >
          <RegisterMultiStepsWizard />
        </Box>
      </RightWrapper>
    </Box>
  )
}

RegisterMultiSteps.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterMultiSteps
