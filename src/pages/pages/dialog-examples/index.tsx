// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import DialogAddCard from 'src/components/pages/dialog-examples/DialogAddCard'
import DialogPricing from 'src/components/pages/dialog-examples/DialogPricing'
import DialogReferEarn from 'src/components/pages/dialog-examples/DialogReferEarn'
import DialogCreateApp from 'src/components/pages/dialog-examples/DialogCreateApp'
import DialogAddAddress from 'src/components/pages/dialog-examples/DialogAddAddress'
import DialogShareProject from 'src/components/pages/dialog-examples/DialogShareProject'
import DialogEditUserInfo from 'src/components/pages/dialog-examples/DialogEditUserInfo'
import DialogAuthentication from 'src/components/pages/dialog-examples/DialogAuthentication'

const DialogExamples = () => (
  <Grid container spacing={6} className='match-height'>
    <Grid item md={4} sm={6} xs={12}>
      <DialogShareProject />
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <DialogAddCard />
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <DialogPricing />
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <DialogReferEarn />
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <DialogAddAddress />
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <DialogCreateApp />
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <DialogAuthentication />
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <DialogEditUserInfo />
    </Grid>
  </Grid>
)

export default DialogExamples
