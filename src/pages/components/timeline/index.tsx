// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardSnippet from '@core/components/card-snippet'

// ** Demo Components Imports
import TimelineFilled from './TimelineFilled'
import TimelineCenter from './TimelineCenter'
import TimelineOutlined from './TimelineOutlined'

// ** Source code imports
import * as source from './TimelineSourceCode'

const TreeView: FC = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Timeline Filled' code={source.TimelineFilledCode}>
          <TimelineFilled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Timeline Outlined' code={source.TimelineOutlinedCode}>
          <TimelineOutlined />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Timeline Center With Icons' code={source.TimelineCenterCode}>
          <TimelineCenter />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default TreeView
