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
import StepPropertyArea from 'src/views/pages/wizard-examples/property-listing/StepPropertyArea'
import StepPriceDetails from 'src/views/pages/wizard-examples/property-listing/StepPriceDetails'
import StepPropertyDetails from 'src/views/pages/wizard-examples/property-listing/StepPropertyDetails'
import StepPersonalDetails from 'src/views/pages/wizard-examples/property-listing/StepPersonalDetails'
import StepPropertyFeatures from 'src/views/pages/wizard-examples/property-listing/StepPropertyFeatures'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'

const steps = [
  {
    title: 'Personal Details',
    subtitle: 'Your Name/Email',
    icon: 'mdi:account-outline'
  },
  {
    icon: 'mdi:home-outline',
    title: 'Property Details',
    subtitle: 'Property Type'
  },
  {
    icon: 'mdi:star-outline',
    title: 'Property Features',
    subtitle: 'Bedrooms/Floor No'
  },
  {
    title: 'Property Area',
    subtitle: 'Covered Area',
    icon: 'mdi:map-marker-outline'
  },
  {
    title: 'Price Details',
    icon: 'mdi:currency-usd',
    subtitle: 'Expected Price'
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

const PropertyListingWizard = () => {
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
        return <StepPersonalDetails />
      case 1:
        return <StepPropertyDetails />
      case 2:
        return <StepPropertyFeatures />
      case 3:
        return <StepPropertyArea />
      case 4:
        return <StepPriceDetails />
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
                  <StepLabel icon={<></>} sx={{}}>
                    <CustomAvatar
                      variant='rounded'
                      skin={activeStep === index ? 'filled' : 'light'}
                      color={activeStep === index || activeStep > index ? 'primary' : 'secondary'}
                      sx={{
                        mr: 2.5,
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

export default PropertyListingWizard
