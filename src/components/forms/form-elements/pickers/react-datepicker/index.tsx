// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import PickersTime from 'src/components/forms/form-elements/pickers/react-datepicker/PickersTime'
import PickersBasic from 'src/components/forms/form-elements/pickers/react-datepicker/PickersBasic'
import PickersRange from 'src/components/forms/form-elements/pickers/react-datepicker/PickersRange'
import PickersMinMax from 'src/components/forms/form-elements/pickers/react-datepicker/PickersMinMax'
import PickersLocale from 'src/components/forms/form-elements/pickers/react-datepicker/PickersLocale'
import PickersOptions from 'src/components/forms/form-elements/pickers/react-datepicker/PickersOptions'
import PickersCallbacks from 'src/components/forms/form-elements/pickers/react-datepicker/PickersCallbacks'
import PickersSpecificRange from 'src/components/forms/form-elements/pickers/react-datepicker/PickersSpecificRange'
import PickersCustomization from 'src/components/forms/form-elements/pickers/react-datepicker/PickersCustomization'
import PickersIncludeExclude from 'src/components/forms/form-elements/pickers/react-datepicker/PickersIncludeExclude'
import PickersMonthYearQuarter from 'src/components/forms/form-elements/pickers/react-datepicker/PickersMonthYearQuarter'
import PickersMonthYearDropdowns from 'src/components/forms/form-elements/pickers/react-datepicker/PickersMonthYearDropdowns'

// ** Source code imports
import * as source from 'src/sourceCodes/forms/PickersSourceCode'

const ReactDatePicker = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        subtitle={<Typography variant='body2'>A simple and reusable datepicker component for React</Typography>}
        title={
          <Typography variant='h5'>
            <Link href='https://github.com/Hacker0x01/react-datepicker/' target='_blank'>
              React DatePicker
            </Link>
          </Typography>
        }
      />
      <Grid item xs={12}>
        <CardSnippet title='Date Pickers' code={source.PickersBasicCode}>
          <PickersBasic />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Time Pickers' code={source.PickersTimeCode}>
          <PickersTime />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Min & Max Pickers' code={source.PickersMinMaxCode}>
          <PickersMinMax />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Date Range Pickers' code={source.PickersRangeCode}>
          <PickersRange />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Specific Range' code={source.PickersSpecificRangeCode}>
          <PickersSpecificRange />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Callbacks' code={source.PickersCallbacksCode}>
          <PickersCallbacks />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Customization' code={source.PickersCustomizationCode}>
          <PickersCustomization />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Include Exclude' code={source.PickersIncludeExcludeCode}>
          <PickersIncludeExclude />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Locale' code={source.PickersLocaleCode}>
          <PickersLocale />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Month & Year Dropdowns' code={source.PickersMonthYearDropdownsCode}>
          <PickersMonthYearDropdowns />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Month, Year & Quarter' code={source.PickersMonthYearQuarterCode}>
          <PickersMonthYearQuarter />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Options' code={source.PickersOptionsCode}>
          <PickersOptions />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default ReactDatePicker
