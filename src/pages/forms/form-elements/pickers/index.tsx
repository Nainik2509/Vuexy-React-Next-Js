// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import MUIPickers from './mui'
import ReactDatePicker from './react-datepicker'

const Pickers = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <MUIPickers />
      </Grid>
      <Grid item xs={12}>
        <ReactDatePicker />
      </Grid>
    </Grid>
  )
}

export default Pickers
