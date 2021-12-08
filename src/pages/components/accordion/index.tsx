// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from '@core/components/card-snippet'

// ** Demo Components Imports
import AccordionSimple from './AccordionSimple'
import AccordionActions from './AccordionActions'
import AccordionControlled from './AccordionControlled'
import AccordionCustomized from './AccordionCustomized'

// ** Source code imports
import * as source from './AccordionSourceCode'

const Accordion = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Simple Accordion'
          code={source.AccordionSimpleCode}
          sx={{
            boxShadow: 'none',
            backgroundColor: 'transparent',
            border: theme => `1px solid ${theme.palette.divider}`
          }}
        >
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>Accordion</code>, <code>AccordionSummary</code> and <code>AccordionDetails</code> components to
            make a simple accordion.
          </Typography>
          <AccordionSimple />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Controlled Accordion'
          code={source.AccordionControlledCode}
          sx={{
            boxShadow: 'none',
            backgroundColor: 'transparent',
            border: theme => `1px solid ${theme.palette.divider}`
          }}
        >
          <Typography sx={{ marginBottom: 4 }}>
            Manage <code>expanded</code> prop with the help of a state.
          </Typography>
          <AccordionControlled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Customized Accordion'
          code={source.AccordionCustomizedCode}
          sx={{
            boxShadow: 'none',
            backgroundColor: 'transparent',
            border: theme => `1px solid ${theme.palette.divider}`
          }}
        >
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>styled</code> hook to customize the component the way you want it.
          </Typography>
          <AccordionCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Additional Actions'
          code={source.AccordionActionsCode}
          sx={{
            boxShadow: 'none',
            backgroundColor: 'transparent',
            border: theme => `1px solid ${theme.palette.divider}`
          }}
        >
          <Typography sx={{ marginBottom: 4 }}>
            In order to put an action such as a Checkbox or a button inside <code>AccordionSummary</code>, you need to
            stop the propagation of the focus and click events to prevent the accordion from expanding/collapsing when
            using the action.
          </Typography>
          <AccordionActions />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Accordion
