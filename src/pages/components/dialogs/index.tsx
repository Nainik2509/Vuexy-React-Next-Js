// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import DialogForm from 'src/components/components/dialogs/DialogForm'
import DialogAlert from 'src/components/components/dialogs/DialogAlert'
import DialogSizes from 'src/components/components/dialogs/DialogSizes'
import DialogSimple from 'src/components/components/dialogs/DialogSimple'
import DialogsScroll from 'src/components/components/dialogs/DialogsScroll'
import DialogTransition from 'src/components/components/dialogs/DialogTransition'
import DialogCustomized from 'src/components/components/dialogs/DialogCustomized'
import DialogFullScreen from 'src/components/components/dialogs/DialogFullScreen'
import DialogConfirmation from 'src/components/components/dialogs/DialogConfirmation'
import DialogRespoFullScreen from 'src/components/components/dialogs/DialogRespoFullScreen'

// ** Source code imports
import * as source from 'src/components/components/dialogs/DialogSourceCode'

const Dialog = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Simple Dialog' code={source.DialogSimpleCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Manage <code>open</code> prop with the help of a state.
          </Typography>
          <DialogSimple />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Alerts' code={source.DialogAlertCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Show an alert to the user to convey something or make the user choose from the given options.
          </Typography>
          <DialogAlert />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Transitions' code={source.DialogTransitionCode}>
          <Typography sx={{ marginBottom: 4 }}>
            You can also use any of the transitions that you like. Use <code>TransitionComponent</code> prop for the
            transition.
          </Typography>
          <DialogTransition />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Form Dialog' code={source.DialogFormCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Form dialogs allow users to fill out form fields within a dialog.
          </Typography>
          <DialogForm />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Customized Dialog' code={source.DialogCustomizedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            You can customize the component the way you want using <code>styled</code> hook.
          </Typography>
          <DialogCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Full Screen Dialog' code={source.DialogFullScreenCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Add <code>fullScreen</code> prop with <code>Dialog</code> component for a full screen dialog.
          </Typography>
          <DialogFullScreen />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Optional Sizes' code={source.DialogSizesCode}>
          <Typography sx={{ marginBottom: 4 }}>
            You can set a dialog maximum width by using the <code>maxWidth</code> enumerable in combination with the{' '}
            <code>fullWidth</code> boolean. When the <code>fullWidth</code> property is true, the dialog will adapt
            based on the <code>maxWidth</code> value.
          </Typography>
          <DialogSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Responsive full-screen' code={source.DialogRespoFullScreenCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Make a full screen dialog at particular screen sizes only by using <code>useMediaQuery</code> hook.
          </Typography>
          <DialogRespoFullScreen />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Confirmation Dialog' code={source.DialogConfirmationCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>disableEscapeKeyDown</code> prop to disable 'Escape' key and use <code>onClose</code> prop to
            disable the backdrop.
          </Typography>
          <DialogConfirmation />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Scrolling Long Content' code={source.DialogsScrollCode}>
          <Typography>
            <code>scroll=paper</code> scrolls within the paper element and <code>scroll=body</code> scrolls within the
            body element.
          </Typography>
          <DialogsScroll />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Dialog
