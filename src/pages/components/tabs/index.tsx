// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import TabsNav from './TabsNav'
import TabsIcon from './TabsIcon'
import TabsSimple from './TabsSimple'
import TabsColor from './TabsColor'
import TabsCentered from './TabsCentered'
import TabsVertical from './TabsVertical'
import TabsFullWidth from './TabsFullWidth'
import TabsCustomized from './TabsCustomized'
import TabsForcedScroll from './TabsForcedScroll'
import TabsCustomizedVertical from './TabsCustomizedVertical'

// ** Source code imports
import * as source from './TabsSourceCode'

const Tabs = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Default Tabs' code={source.TabsSimpleCode}>
          <Typography sx={{ marginBottom: 4 }}>Tabs are managed with the help of a state.</Typography>
          <TabsSimple />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Color' code={source.TabsColorCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>textColor='secondary'</code> and <code>indicatorColor='secondary'</code> props with{' '}
            <code>TabList</code> component for secondary tabs.
          </Typography>
          <TabsColor />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Full Width Tabs' code={source.TabsFullWidthCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>variant='fullWidth'</code> prop with <code>TabList</code> component to have full width tabs.
          </Typography>
          <TabsFullWidth />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Centered Tabs' code={source.TabsCenteredCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>centered</code> prop with <code>TabList</code> component to have tabs on center.
          </Typography>
          <TabsCentered />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Icon Tabs' code={source.TabsIconCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>icon</code> prop with <code>Tab</code> component for icons in the tab.
          </Typography>
          <TabsIcon />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Customized Tabs' code={source.TabsCustomizedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>styled</code> hook to customize your tabs.
          </Typography>
          <TabsCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Vertical Tabs' code={source.TabsVerticalCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>orientation='vertical'</code> prop with <code>TabList</code> component to have vertical tabs.
          </Typography>
          <TabsVertical />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Customized Vertical Tabs' code={source.TabsCustomizedVerticalCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>styled</code> hook to customize your tabs.
          </Typography>
          <TabsCustomizedVertical />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Nav Tabs' code={source.TabsNavCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>component</code> prop to change the <code>Tab</code> component to the component of your choice.
          </Typography>
          <TabsNav />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Forced Scroll Buttons' code={source.TabsForcedScrollCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>scrollButtons</code> and <code>variant='scrollable'</code> props with <code>TabList</code>{' '}
            component to have forced scrollable tabs.
          </Typography>
          <TabsForcedScroll />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Tabs
