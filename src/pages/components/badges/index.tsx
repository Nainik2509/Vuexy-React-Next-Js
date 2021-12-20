// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import BadgesDot from './BadgesDot'
import BadgesBasic from './BadgesBasic'
import BadgesLight from './BadgesLight'
import BadgesOverlap from './BadgesOverlap'
import BadgesMaxValue from './BadgesMaxValue'
import BadgesAlignment from './BadgesAlignment'
import BadgesVisibility from './BadgesVisibility'

// ** Source code imports
import * as source from './BadgeSourceCode'

const Pagination = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Simple Badges' code={source.BadgesBasicCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>badgeContent</code> prop for the text inside the badge and <code>color</code> prop for different
            colors of a badge.
          </Typography>
          <BadgesBasic />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Dot Badges' code={source.BadgesDotCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>variant='dot'</code> prop for dot badges.
          </Typography>
          <BadgesDot />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Badge Alignment' code={source.BadgesAlignmentCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>anchorOrigin</code> prop to move the badge to any corner of the wrapped element.
          </Typography>
          <BadgesAlignment />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Maximum Value' code={source.BadgesMaxValueCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>max</code> prop to cap the value of the badge content.
          </Typography>
          <BadgesMaxValue />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Badge Overlap' code={source.BadgesOverlapCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>overlap</code> prop to place the badge relative to the corner of the wrapped element.
          </Typography>
          <BadgesOverlap />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Badge visibility' code={source.BadgesVisibilityCode}>
          <Typography sx={{ marginBottom: 2 }}>
            The visibility of badges can be controlled using <code>invisible</code> prop.
          </Typography>
          <BadgesVisibility />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Custom Light Badges' code={source.BadgesLightCode}>
          <Typography sx={{ marginBottom: 2 }}>
            If you want to use light variant of the badges, you need to use our custom component with{' '}
            <code>skin='light'</code> prop.
          </Typography>
          <BadgesLight />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Pagination
