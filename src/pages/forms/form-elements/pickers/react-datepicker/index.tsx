// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from '@core/components/page-header'
import CardSnippet from '@core/components/card-snippet'

// ** Demo Components Imports
import PickersTime from './PickersTime'
import PickersBasic from './PickersBasic'
import PickersRange from './PickersRange'
import PickersMinMax from './PickersMinMax'
import PickersLocale from './PickersLocale'
import PickersOptions from './PickersOptions'
import PickersCallbacks from './PickersCallbacks'
import PickersSpecificRange from './PickersSpecificRange'
import PickersCustomization from './PickersCustomization'
import PickersIncludeExclude from './PickersIncludeExclude'
import PickersMonthYearQuarter from './PickersMonthYearQuarter'
import PickersMonthYearDropdowns from './PickersMonthYearDropdowns'

// ** Source code imports
import * as source from './PickersSourceCode'

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
