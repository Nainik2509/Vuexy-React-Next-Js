// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import DialogAddCard from './DialogAddCard'
import DialogPricing from './DialogPricing'
import DialogReferEarn from './DialogReferEarn'
import DialogCreateApp from './DialogCreateApp'
import DialogAddAddress from './DialogAddAddress'
import DialogShareProject from './DialogShareProject'
import DialogEditUserInfo from './DialogEditUserInfo'
import DialogAuthentication from './DialogAuthentication'

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
