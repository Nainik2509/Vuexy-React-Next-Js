// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import AlertsBasic from './AlertsBasic'
import AlertsFilled from './AlertsFilled'
import AlertsActions from './AlertsActions'
import AlertsOutlined from './AlertsOutlined'
import AlertsDescription from './AlertsDescription'
import AlertsDismissible from './AlertsDismissible'

// ** Source code imports
import * as source from './AlertSourceCode'

const Alerts = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Basic' code={source.AlertsBasicCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>severity={`{'error' | 'warning' | 'info' | 'success'}`}</code> prop with{' '}
            <code>&lt;Alert&gt;</code> component for different colored alerts.
          </Typography>
          <AlertsBasic />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Outlined' code={source.AlertsOutlinedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>variant='outlined'</code> prop with <code>&lt;Alert&gt;</code> component for outlined alerts.
          </Typography>
          <AlertsOutlined />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Filled' code={source.AlertsFilledCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>variant='filled'</code> prop with <code>&lt;Alert&gt;</code> component for filled alerts.
          </Typography>
          <AlertsFilled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Action' code={source.AlertsActionsCode}>
          <Typography sx={{ marginBottom: 4 }}>
            To add a button, you need to use <code>action</code> prop with <code>&lt;Alert&gt;</code> component and pass
            a button inside this prop. To add a close button, you need to use <code>onClose</code> prop with{' '}
            <code>&lt;Alert&gt;</code> component.
          </Typography>
          <AlertsActions />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Description' code={source.AlertsDescriptionCode}>
          <Typography sx={{ marginBottom: 4 }}>
            You can use the <code>AlertTitle</code> component to display a formatted title above the content.
          </Typography>
          <AlertsDescription />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Dismissible' code={source.AlertsDismissibleCode}>
          <Typography sx={{ marginBottom: 4 }}>
            You need to use one of the transition components (viz. Collapse, Fade, Grow and Slide) to make a dismissible
            alert.
          </Typography>
          <AlertsDismissible />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Alerts
