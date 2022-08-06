// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiStepper, { StepperProps } from '@mui/material/Stepper'
import MuiStepLabel, { StepLabelProps } from '@mui/material/StepLabel'
import CardContent, { CardContentProps } from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Step Components
import StepDealType from 'src/views/pages/wizard-examples/create-deal/StepDealType'
import StepReview from 'src/views/pages/wizard-examples/create-deal/StepReview'
import StepDealUsage from 'src/views/pages/wizard-examples/create-deal/StepDealUsage'
import StepDealDetails from 'src/views/pages/wizard-examples/create-deal/StepDealDetails'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'

const steps = [
  {
    title: 'Deal Type',
    icon: 'mdi:tag-outline',
    subtitle: 'Choose type of deal'
  },
  {
    title: 'Deal Details',
    subtitle: 'Provide deal details',
    icon: 'mdi:clipboard-text-outline'
  },
  {
    title: 'Deal Usage',
    icon: 'mdi:credit-card-outline',
    subtitle: 'Limitations & Offers'
  },
  {
    subtitle: 'Launch a deal',
    title: 'Review & Complete',
    icon: 'mdi:rocket-launch-outline'
  }
]

const Stepper = styled(MuiStepper)<StepperProps>(({ theme }) => ({
  height: '100%',
  minWidth: '15rem',
  '& .MuiStep-root:not(:last-of-type) .MuiStepLabel-root': {
    paddingBottom: theme.spacing(5)
  },
  [theme.breakpoints.down('lg')]: {
    minWidth: 0
  }
}))

const StepLabel = styled(MuiStepLabel)<StepLabelProps>(({ theme }) => ({
  '& .MuiStepLabel-label': {
    display: 'flex',
    '& .step-title, & .step-subtitle, & .MuiAvatar-root svg': {
      color: theme.palette.text.secondary
    },
    '&.Mui-active': {
      '& .step-title': {
        color: theme.palette.primary.main
      },
      '& .MuiAvatar-root svg': {
        color: theme.palette.common.white
      }
    },
    '&.Mui-completed': {
      opacity: 0.65,
      '& .MuiAvatar-root svg': {
        color: theme.palette.primary.main
      }
    }
  }
}))

const StepperHeaderContainer = styled(CardContent)<CardContentProps>(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('lg')]: {
    borderRight: 0,
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const CreateDealWizard = () => {
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
        return <StepDealType />
      case 1:
        return <StepDealDetails />
      case 2:
        return <StepDealUsage />
      case 3:
        return <StepReview />
      default:
        return null
    }
  }

  const renderContent = () => {
    return getStepContent(activeStep)
  }

  const renderFooter = () => {
    const stepCondition = activeStep === steps.length - 1

    return (
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          color='secondary'
          variant='outlined'
          onClick={handlePrev}
          disabled={activeStep === 0}
          startIcon={<Icon icon='mdi:chevron-left' />}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          color={stepCondition ? 'success' : 'primary'}
          {...(!stepCondition ? { endIcon: <Icon icon='mdi:chevron-right' /> } : {})}
          onClick={() => (stepCondition ? alert('Submitted..!!') : handleNext())}
        >
          {stepCondition ? 'Submit' : 'Next'}
        </Button>
      </Box>
    )
  }

  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
      <StepperHeaderContainer>
        <StepperWrapper sx={{ height: '100%' }}>
          <Stepper connector={<></>} activeStep={activeStep} orientation='vertical'>
            {steps.map((step, index) => {
              return (
                <Step
                  key={index}
                  onClick={() => setActiveStep(index)}
                  sx={{
                    cursor: 'pointer',
                    '&.Mui-completed + svg': { color: 'primary.main' }
                  }}
                >
                  <StepLabel icon={<></>}>
                    <CustomAvatar
                      variant='rounded'
                      skin={activeStep === index ? 'filled' : 'light'}
                      color={activeStep === index || activeStep > index ? 'primary' : 'secondary'}
                      sx={{
                        mr: 4,
                        boxShadow: theme =>
                          activeStep === index
                            ? `0 0.1875rem 0.375rem 0 ${hexToRGBA(theme.palette.primary.main, 0.4)}`
                            : 'none'
                      }}
                    >
                      <Icon icon={step.icon} />
                    </CustomAvatar>
                    <Box>
                      <Typography className='step-title'>{step.title}</Typography>
                      <Typography variant='caption' className='step-subtitle'>
                        {step.subtitle}
                      </Typography>
                    </Box>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </StepperHeaderContainer>
      <Box>
        <CardContent>
          {renderContent()}
          {renderFooter()}
        </CardContent>
      </Box>
    </Card>
  )
}

export default CreateDealWizard
