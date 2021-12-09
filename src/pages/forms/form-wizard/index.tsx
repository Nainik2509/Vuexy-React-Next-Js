// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import StepperAlternativeLabel from './StepperAlternativeLabel'
import StepperVerticalWithNumbers from './StepperVerticalWithNumbers'
import StepperLinearWithValidation from './StepperLinearWithValidation'
import StepperVerticalWithoutNumbers from './StepperVerticalWithoutNumbers'

const FormWizard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h6'>Linear Stepper with Validation</Typography>
      </Grid>
      <Grid item xs={12}>
        <StepperLinearWithValidation />
      </Grid>
      <Grid item xs={12} sx={{ paddingTop: theme => `${theme.spacing(8)} !important` }}>
        <Typography variant='h6'>Alternative Label</Typography>
      </Grid>
      <Grid item xs={12}>
        <StepperAlternativeLabel />
      </Grid>
      <Grid item xs={12}>
        <StepperVerticalWithNumbers />
      </Grid>
      <Grid item xs={12}>
        <StepperVerticalWithoutNumbers />
      </Grid>
    </Grid>
  )
}

export default FormWizard
