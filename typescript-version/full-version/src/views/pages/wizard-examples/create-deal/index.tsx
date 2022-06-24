// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import MuiStepper, { StepperProps } from '@mui/material/Stepper'
import CardContent, { CardContentProps } from '@mui/material/CardContent'

// ** Icons Imports
import TagOutline from 'mdi-material-ui/TagOutline'
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import ChevronRight from 'mdi-material-ui/ChevronRight'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import RocketLaunchOutline from 'mdi-material-ui/RocketLaunchOutline'
import ClipboardTextOutline from 'mdi-material-ui/ClipboardTextOutline'

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
    icon: <TagOutline />,
    subtitle: 'Choose type of deal'
  },
  {
    title: 'Deal Details',
    icon: <ClipboardTextOutline />,
    subtitle: 'Provide deal details'
  },
  {
    title: 'Deal Usage',
    icon: <CreditCardOutline />,
    subtitle: 'Limitations & Offers'
  },
  {
    subtitle: 'Launch a deal',
    title: 'Review & Complete',
    icon: <RocketLaunchOutline />
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
        <Button variant='contained' disabled={activeStep === 0} startIcon={<ChevronLeft />} onClick={handlePrev}>
          Previous
        </Button>
        <Button
          variant='contained'
          color={stepCondition ? 'success' : 'primary'}
          {...(!stepCondition ? { endIcon: <ChevronRight /> } : {})}
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
                    '&.Mui-completed + .MuiSvgIcon-root': { color: 'primary.main' }
                  }}
                >
                  <StepLabel
                    icon={<></>}
                    sx={{
                      '& .MuiStepLabel-label': {
                        display: 'flex',
                        '&.Mui-active': {
                          '& .step-title': { color: 'primary.main' }
                        },
                        '&.Mui-completed': {
                          '& .step-title, & .step-subtitle': { color: 'text.disabled' }
                        }
                      }
                    }}
                  >
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
                      {step.icon}
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
