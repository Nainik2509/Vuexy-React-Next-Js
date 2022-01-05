// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import ListDense from 'src/views/components/list/ListDense'
import ListSimple from 'src/views/components/list/ListSimple'
import ListNested from 'src/views/components/list/ListNested'
import ListSecondary from 'src/views/components/list/ListSecondary'
import ListWithSwitch from 'src/views/components/list/ListWithSwitch'
import ListItemSelected from 'src/views/components/list/ListItemSelected'
import ListWithCheckbox from 'src/views/components/list/ListWithCheckbox'
import ListStickySubheader from 'src/views/components/list/ListStickySubheader'

// ** Source code imports
import * as source from 'src/views/components/list/ListsSourceCode'

const Lists = () => {
  return (
    <Grid className='match-height' container spacing={6}>
      <Grid item xs={12} md={6}>
        <CardSnippet id='simple-list' title='Simple List' code={source.ListSimpleCode}>
          <Typography sx={{ marginBottom: 4 }}>Lists are a continuous group of text or images.</Typography>
          <ListSimple />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Nested List' code={source.ListNestedCode}>
          <ListNested />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Dense List' code={source.ListDenseCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>dense</code> prop with <code>&lt;List&gt;</code> component for dense list.
          </Typography>
          <ListDense />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='List with Secondary Text' code={source.ListSecondaryCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>secondary</code> prop with <code>&lt;ListItemText&gt;</code> component for secondary text.
          </Typography>
          <ListSecondary />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Selected List Item' code={source.ListItemSelectedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Manage <code>selected</code> prop with the help of a state.
          </Typography>
          <ListItemSelected />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='List with Checkbox' code={source.ListWithCheckboxCode}>
          <ListWithCheckbox />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='List with Switch' code={source.ListWithSwitchCode}>
          <ListWithSwitch />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Sticky Subheader' code={source.ListWithSwitchCode}>
          <Typography sx={{ marginBottom: 4 }}>
            <code>&lt;ListSubheader&gt;</code> is by default sticky.
          </Typography>
          <ListStickySubheader />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Lists
