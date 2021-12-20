// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import SwitchesBasic from './SwitchesBasic'
import SwitchesSizes from './SwitchesSizes'
import SwitchesColors from './SwitchesColors'
import SwitchesCustomized from './SwitchesCustomized'
import SwitchesStandalone from './SwitchesStandalone'
import SwitchesLabelPlacement from './SwitchesLabelPlacement'
import SwitchesControlledUncontrolled from './SwitchesControlledUncontrolled'

// ** Source code imports
import * as source from './SwitchesSourceCode'

const Switches = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <CardSnippet title='Basic Switches' code={source.SwitchesBasicCode}>
          <SwitchesBasic />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Controlled and Uncontrolled' code={source.SwitchesControlledUncontrolledCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Manage <code>checked</code> prop with the help of a state for controlled <code>Switch</code> and use
            <code>defaultChecked</code> prop for uncontrolled <code>Switch</code>.
          </Typography>
          <SwitchesControlledUncontrolled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Label Placement' code={source.SwitchesLabelPlacementCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>labelPlacement</code> prop with <code>FormControlLabel</code> component to change the placement of
            the label.
          </Typography>
          <SwitchesLabelPlacement />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Colors' code={source.SwitchesColorsCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>color</code> prop with <code>Switch</code> component for different colored switch.
          </Typography>
          <SwitchesColors />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Customized Switches' code={source.SwitchesCustomizedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>styled</code> hook to customize your switch.
          </Typography>
          <SwitchesCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Sizes' code={source.SwitchesSizesCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>size='small'</code> prop with <code>Switch</code> component for small switch.
          </Typography>
          <SwitchesSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Standalone Switches' code={source.SwitchesStandaloneCode}>
          <SwitchesStandalone />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Switches
