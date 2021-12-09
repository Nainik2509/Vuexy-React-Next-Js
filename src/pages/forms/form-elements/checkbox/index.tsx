// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from '@core/components/card-snippet'

// ** Demo Components Imports
import CheckboxesBasic from './CheckboxesBasic'
import CheckboxesSizes from './CheckboxesSizes'
import CheckboxesColors from './CheckboxesColors'
import CheckboxesShowError from './CheckboxesShowError'
import CheckboxesCustomized from './CheckboxesCustomized'
import CheckboxesCustomIcons from './CheckboxesCustomIcons'
import CheckboxesLabelPlacement from './CheckboxesLabelPlacement'
import CheckboxesControlledUncontrolled from './CheckboxesControlledUncontrolled'

// ** Source code imports
import * as source from './CheckboxesSourceCode'

const Checkboxes = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <CardSnippet title='Basic Checkboxes' code={source.CheckboxesBasicCode}>
          <CheckboxesBasic />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Controlled and Uncontrolled' code={source.CheckboxesControlledUncontrolledCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Manage <code>checked</code> prop with the help of a state for controlled <code>Checkbox</code> and{' '}
            <code>defaultChecked</code> prop with for uncontrolled <code>Checkbox</code>.
          </Typography>
          <CheckboxesControlledUncontrolled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Colors' code={source.CheckboxesColorsCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>color</code> prop for different colored checkbox.
          </Typography>
          <CheckboxesColors />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Customized' code={source.CheckboxesCustomizedCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>styled</code> hook to customize your checkbox.
          </Typography>
          <CheckboxesCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Custom Icons' code={source.CheckboxesCustomIconsCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>icon</code> and <code>checkedIcon</code> props with <code>Checkbox</code> component to change
            default checkbox icons.
          </Typography>
          <CheckboxesCustomIcons />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Label Placement' code={source.CheckboxesLabelPlacementCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>labelPlacement</code> prop with <code>FormControlLabel</code> component to change the placement of
            the label.
          </Typography>
          <CheckboxesLabelPlacement />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Show Error' code={source.CheckboxesShowErrorCode}>
          <Typography>
            You can display error by managing <code>error</code> prop with <code>FormControl</code> component with the
            help of a state.
          </Typography>
          <CheckboxesShowError />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Sizes' code={source.CheckboxesSizesCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>icon</code> and <code>checkedIcon</code> props with <code>Checkbox</code> component and use{' '}
            <code>fontSize='small'</code> prop with the former props for small checkbox.
          </Typography>
          <CheckboxesSizes />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Checkboxes
