// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import DatePickers from 'src/components/forms/form-elements/pickers/mui/DatePickers'
import TimePickers from 'src/components/forms/form-elements/pickers/mui/TimePickers'
import DateTimePickers from 'src/components/forms/form-elements/pickers/mui/DateTimePickers'

// ** Source code imports
import * as source from 'src/sourceCodes/forms/MuiPickersSourceCode'

const MUIPickers = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h5'>
            <Link href='https://mui.com/components/pickers/' target='_blank'>
              MUI Pickers
            </Link>
          </Typography>
        }
        subtitle={
          <Typography variant='body2'>
            Date and Time pickers allow selecting a single value from a pre-determined set
          </Typography>
        }
      />
      <Grid item xs={12}>
        <CardSnippet title='MUI Date Pickers' code={source.DatePickersCode}>
          <DatePickers />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='MUI Time Pickers' code={source.TimePickersCode}>
          <TimePickers />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='MUI DateTime Pickers' code={source.DateTimePickersCode}>
          <DateTimePickers />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default MUIPickers
