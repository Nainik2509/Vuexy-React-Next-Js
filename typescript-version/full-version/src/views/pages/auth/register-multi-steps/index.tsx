// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import { styled } from '@mui/material/styles'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiStepper, { StepperProps } from '@mui/material/Stepper'

// ** Icons Imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import ChevronRight from 'mdi-material-ui/ChevronRight'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import CardTextOutline from 'mdi-material-ui/CardTextOutline'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Step Components
import StepPersonalInfo from 'src/views/pages/auth/register-multi-steps/StepPersonalInfo'
import StepAccountDetails from 'src/views/pages/auth/register-multi-steps/StepAccountDetails'
import StepBillingDetails from 'src/views/pages/auth/register-multi-steps/StepBillingDetails'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const steps = [
  {
    title: 'Account',
    subtitle: 'Account Details',
    icon: <HomeOutline sx={{ fontSize: '1.125rem' }} />
  },
  {
    title: 'Personal',
    subtitle: 'Enter Information',
    icon: <AccountOutline sx={{ fontSize: '1.125rem' }} />
  },
  {
    title: 'Billing',
    subtitle: 'Payment Details',
    icon: <CardTextOutline sx={{ fontSize: '1.125rem' }} />
  }
]

const Stepper = styled(MuiStepper)<StepperProps>(({ theme }) => ({
  margin: 'auto',

  '& .MuiStep-root': {
    cursor: 'pointer',
    paddingLeft: 0,
    paddingBottom: theme.spacing(8),
    '&.Mui-completed': {
      cursor: 'default',
      pointerEvents: 'none',
      '& + .MuiSvgIcon-root': {
        color: theme.palette.primary.main
      }
    },
    '&:not(.Mui-completed) + .MuiSvgIcon-root': {
      color: theme.palette.text.disabled
    },
    '& + .MuiSvgIcon-root': {
      display: 'none',
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    },

    '& .MuiStepLabel-iconContainer': {
      display: 'none'
    },

    '&:first-of-type': {
      paddingLeft: 0
    },

    '& .MuiStepLabel-label': {
      display: 'flex',
      alignItems: 'center',
      '& .step-title': {
        color: theme.palette.text.secondary
      },
      '& .step-subtitle': {
        color: theme.palette.text.disabled
      },
      '& .MuiAvatar-root .MuiSvgIcon-root': {
        color: theme.palette.text.disabled
      },
      '&.Mui-active': {
        '& .step-title': {
          color: theme.palette.primary.main
        },
        '& .MuiAvatar-root .MuiSvgIcon-root': {
          color: theme.palette.common.white
        }
      },
      '&.Mui-completed': {
        '& .MuiTypography-root': {
          color: theme.palette.text.disabled
        },
        '& .MuiAvatar-root .MuiSvgIcon-root': {
          color: theme.palette.primary.main
        }
      }
    },

    [theme.breakpoints.up('md')]: {
      paddingBottom: 0,
      paddingLeft: theme.spacing(2),
      '& + .MuiSvgIcon-root': {
        display: 'block'
      }
    }
  }
}))

const RegisterMultiSteps = () => {
  // ** States
  const [activeStep, setActiveStep] = useState<number>(0)

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }
  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <StepAccountDetails handleNext={handleNext} />
      case 1:
        return <StepPersonalInfo handleNext={handleNext} handlePrev={handlePrev} />
      case 2:
        return <StepBillingDetails handlePrev={handlePrev} />

      default:
        return null
    }
  }

  const renderContent = () => {
    return getStepContent(activeStep)
  }

  return (
    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent sx={{ py: 5.5 }}>
        <StepperWrapper>
          <Stepper activeStep={activeStep} connector={<ChevronRight />}>
            {steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel icon={<></>}>
                    <CustomAvatar
                      variant='rounded'
                      skin={activeStep === index ? 'filled' : 'light'}
                      color={activeStep === index || activeStep > index ? 'primary' : 'secondary'}
                      sx={{
                        mr: 2.5,
                        borderRadius: 1,
                        boxShadow: theme =>
                          activeStep === index
                            ? `0 0.1875rem 0.375rem 0 ${hexToRGBA(theme.palette.primary.main, 0.4)}`
                            : 'none'
                      }}
                    >
                      {step.icon}
                    </CustomAvatar>
                    <Box>
                      <Typography className='step-title' sx={{ fontWeight: 600 }}>
                        {step.title}
                      </Typography>
                      <Typography className='step-subtitle'>{step.subtitle}</Typography>
                    </Box>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>

      <CardContent sx={{ pt: theme => `${theme.spacing(6)} !important` }}>{renderContent()}</CardContent>
    </Card>
  )
}

export default RegisterMultiSteps
