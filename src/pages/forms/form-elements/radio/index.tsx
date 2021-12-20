// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import RadioGroup from './RadioGroup'
import RadioColor from './RadioColor'
import RadioSizes from './RadioSizes'
import RadioShowError from './RadioShowError'
import RadioStandalone from './RadioStandalone'
import RadioCustomized from './RadioCustomized'
import RadioLabelPlacement from './RadioLabelPlacement'
import RadioControlledUncontrolled from './RadioControlledUncontrolled'

// ** Source code imports
import * as source from './RadioSourceCode'

const Radios = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <CardSnippet title='RadioGroup' code={source.RadioGroupCode}>
          <Typography sx={{ marginBottom: 2 }}>
            <code>RadioGroup</code> is a helpful wrapper used to group <code>Radio</code> components that provides an
            easier API, and proper keyboard accessibility to the group.
          </Typography>
          <RadioGroup />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Controlled and Uncontrolled' code={source.RadioControlledUncontrolledCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Manage <code>value</code> prop with <code>RadioGroup</code> component with the help of a state for
            controlled radio and <code>defaultValue</code> prop with <code>RadioGroup</code> component for uncontrolled
            radio.
          </Typography>
          <RadioControlledUncontrolled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Standalone Radio Buttons' code={source.RadioStandaloneCode}>
          <Typography sx={{ marginBottom: 2 }}>
            <code>Radio</code> can also be used standalone, without the RadioGroup wrapper.
          </Typography>
          <RadioStandalone />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Colors' code={source.RadioColorCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>color</code> prop with <code>Radio</code> component for different colored radio button.
          </Typography>
          <RadioColor />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Sizes' code={source.RadioSizesCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>color</code> prop with <code>Radio</code> component for different colored radio button.
          </Typography>
          <RadioSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Customized Radio' code={source.RadioCustomizedCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>styled</code> hook to customize your radio button.
          </Typography>
          <RadioCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Label Placement' code={source.RadioLabelPlacementCode}>
          <Typography sx={{ marginBottom: 4 }}>
            You can change the placement of the label with <code>FormControlLabel</code> component's{' '}
            <code>labelPlacement</code> prop.
          </Typography>
          <RadioLabelPlacement />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Show Error' code={source.RadioShowErrorCode}>
          <Typography sx={{ marginBottom: 4 }}>
            In general, radio buttons should have a value selected by default. If this is not the case, you can display
            an error if no value is selected when the form is submitted.
          </Typography>
          <RadioShowError />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Radios
