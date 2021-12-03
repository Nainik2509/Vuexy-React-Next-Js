// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from '@core/components/card-snippet'

// ** Demo Components Imports
import SnackbarAlert from './SnackbarAlert'
import SnackbarSimple from './SnackbarSimple'
import SnackbarPositioned from './SnackbarPositioned'
import SnackbarTransition from './SnackbarTransition'
import SnackbarConsecutive from './SnackbarConsecutive'
import SnackbarControlSlideDirection from './SnackbarControlSlideDirection'

// ** Source code imports
import * as source from './SnackbarSourceCode'

const Snackbar: FC = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Simple Snackbar' code={source.SnackbarSimpleCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Manage <code>open</code> prop with <code>Snackbar</code> component with the help of a state.
          </Typography>
          <SnackbarSimple />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Alert Snackbar' code={source.SnackbarAlertCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Add <code>Alert</code> component as a children of <code>Snackbar</code> component.
          </Typography>
          <SnackbarAlert />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Positioned Snackbar' code={source.SnackbarPositionedCode}>
          <Typography>
            Use <code>anchorOrigin</code> prop to change the position of the snackbar.
          </Typography>
          <SnackbarPositioned />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Consecutive Snackbars' code={source.SnackbarConsecutiveCode}>
          <Typography>When multiple snackbar updates are necessary, they should appear one at a time.</Typography>
          <SnackbarConsecutive />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Change Transition' code={source.SnackbarTransitionCode}>
          <Typography>When multiple snackbar updates are necessary, they should appear one at a time.</Typography>
          <SnackbarTransition />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Control Slide Direction' code={source.SnackbarControlSlideDirectionCode}>
          <Typography>
            You can change the direction of the <code>Slide</code> transition.
          </Typography>
          <SnackbarControlSlideDirection />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Snackbar
