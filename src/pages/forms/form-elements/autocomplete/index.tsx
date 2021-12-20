// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import AutocompleteProps from './AutocompleteProps'
import AutocompleteCountry from './AutocompleteCountry'
import AutocompleteGrouped from './AutocompleteGrouped'
import AutocompleteVariants from './AutocompleteVariants'
import AutocompleteFreeSolo from './AutocompleteFreeSolo'
import AutocompleteCreatable from './AutocompleteCreatable'
import AutocompleteLimitTags from './AutocompleteLimitTags'
import AutocompleteSmallSize from './AutocompleteSmallSize'
import AutocompleteCheckboxes from './AutocompleteCheckboxes'
import AutocompleteCustomInput from './AutocompleteCustomInput'
import AutocompleteFixedOptions from './AutocompleteFixedOptions'
import AutocompleteCustomFilter from './AutocompleteCustomFilter'
import AutocompleteMultipleValues from './AutocompleteMultipleValues'
import AutocompleteDisabledOptions from './AutocompleteDisabledOptions'
import AutocompleteAsynchronousRequest from './AutocompleteAsynchronousRequest'
import AutocompleteControlledUncontrolled from './AutocompleteControlledUncontrolled'

// ** Source code imports
import * as source from './AutocompleteSourceCode'

const Autocomplete = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <CardSnippet title='Variants' code={source.AutocompleteVariantsCode}>
          <Typography>
            Use <code>variant={`{'filled' | 'standard'}`}</code> prop with <code>TextField</code> component in{' '}
            <code>renderInput</code> prop with <code>Autocomplete</code> component for different variants of input. Use{' '}
            <code>disabled</code> prop with <code>Autocomplete</code> component for disabled autocomplete.
          </Typography>
          <AutocompleteVariants />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Controlled and Uncontrolled' code={source.AutocompleteControlledUncontrolledCode}>
          <Typography>
            Use <code>value</code> prop with <code>Autocomplete</code> component for controlled autocomplete input.
          </Typography>
          <AutocompleteControlledUncontrolled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Autocomplete Props' code={source.AutocompletePropsCode}>
          <Typography>
            Each of the following examples demonstrate one feature of <code>Autocomplete</code> component.
          </Typography>
          <AutocompleteProps />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Country Select' code={source.AutocompleteCountryCode}>
          <Typography sx={{ marginBottom: 4 }}>Choose one of the countries.</Typography>
          <AutocompleteCountry />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Free Solo' code={source.AutocompleteFreeSoloCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>freeSolo</code> prop so the textbox can contain any arbitrary value.
          </Typography>
          <AutocompleteFreeSolo />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Creatable' code={source.AutocompleteCreatableCode}>
          <Typography sx={{ marginBottom: 4 }}>You can create an option other than from the list.</Typography>
          <AutocompleteCreatable />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Grouped' code={source.AutocompleteGroupedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>groupBy</code> prop to group the list according to your needs.
          </Typography>
          <AutocompleteGrouped />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Disabled Options' code={source.AutocompleteDisabledOptionsCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>getOptionDisabled</code> prop to disable some options from the list.
          </Typography>
          <AutocompleteDisabledOptions />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Asynchronous Request' code={source.AutocompleteAsynchronousRequestCode}>
          <Typography sx={{ marginBottom: 4 }}>
            You can fetch the data with the help of APIs for the options.
          </Typography>
          <AutocompleteAsynchronousRequest />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Multiple Values' code={source.AutocompleteMultipleValuesCode}>
          <Typography>
            Use <code>multiple</code> prop to select multiple options from the list.
          </Typography>
          <AutocompleteMultipleValues />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Fixed Options' code={source.AutocompleteFixedOptionsCode}>
          <Typography sx={{ marginBottom: 4 }}>
            You can fix an option in the input and add any other option as well.
          </Typography>
          <AutocompleteFixedOptions />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Checkboxes' code={source.AutocompleteCheckboxesCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>Checkbox</code> component in <code>renderOption</code> prop to render checkbox in options.
          </Typography>
          <AutocompleteCheckboxes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Limit Tags' code={source.AutocompleteLimitTagsCode}>
          <Typography sx={{ marginBottom: 6 }}>
            Use <code>limitTags</code> prop to limit tags in the input.
          </Typography>
          <AutocompleteLimitTags />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Small Size' code={source.AutocompleteSmallSizeCode}>
          <Typography sx={{ marginBottom: 5 }}>
            Use <code>size='small'</code> prop for small sized input.
          </Typography>
          <AutocompleteSmallSize />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Custom Input' code={source.AutocompleteCustomInputCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>renderInput</code> prop to customize the rendered input.
          </Typography>
          <AutocompleteCustomInput />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Custom Filter' code={source.AutocompleteCustomFilterCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>filterOptions</code> prop to filter the search according to your needs.
          </Typography>
          <AutocompleteCustomFilter />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Autocomplete
