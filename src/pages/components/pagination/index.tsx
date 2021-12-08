// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid, { GridProps } from '@mui/material/Grid'

// ** Custom Components Imports
import CardSnippet from '@core/components/card-snippet'

// ** Demo Components Imports
import PaginationSizes from './PaginationSizes'
import PaginationSimple from './PaginationSimple'
import PaginationRanges from './PaginationRanges'
import PaginationRounded from './PaginationRounded'
import PaginationButtons from './PaginationButtons'
import PaginationOutlined from './PaginationOutlined'
import PaginationDisabled from './PaginationDisabled'
import PaginationControlled from './PaginationControlled'

// ** Source code imports
import * as source from './PaginationSourceCode'

// Styled component for Grid container
const GridContainer = styled(Grid)<GridProps>(({ theme }) => ({
  '& .demo-space-y > *': {
    marginBottom: theme.spacing(5.2),
    '&:last-of-type': {
      marginBottom: 0
    }
  }
}))

const Pagination = () => {
  return (
    <GridContainer container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Simple Pagination' code={source.PaginationSimpleCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use the following props with <code>Pagination</code> component: <code>count</code> prop for number of page
            items and <code>color</code> prop for different colored pagination.
          </Typography>
          <PaginationSimple />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Outlined Pagination' code={source.PaginationOutlinedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>variant='outlined'</code> prop for outlined pagination.
          </Typography>
          <PaginationOutlined />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Disabled Pagination' code={source.PaginationDisabledCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>disabled</code> prop with <code>Pagination</code> component to disable the whole pagination.
          </Typography>
          <PaginationDisabled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Rounded Pagination' code={source.PaginationRoundedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>shape='rounded'</code> prop for rounded pagination.
          </Typography>
          <PaginationRounded />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Sizes' code={source.PaginationSizesCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>size={`{'small' | 'large'}`}</code> prop for different sizes of pagination.
          </Typography>
          <PaginationSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Buttons' code={source.PaginationButtonsCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>showFirstButton</code> & <code>showLastButton</code> props to show first-page and last-page
            buttons and <code>hidePrevButton</code> & <code>hideNextButton</code> props to hide previous-page and
            next-page buttons.
          </Typography>
          <PaginationButtons />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Controlled Pagination' code={source.PaginationControlledCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Manage <code>page</code> and <code>onChange</code> props with the help of a state.
          </Typography>
          <PaginationControlled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Pagination Ranges' code={source.PaginationRangesCode}>
          <Typography sx={{ marginBottom: 4 }}>
            You can specify how many digits to display either side of current page with the <code>siblingRange</code>{' '}
            prop, and adjacent to the start and end page number with the <code>boundaryRange</code> prop.
          </Typography>
          <PaginationRanges />
        </CardSnippet>
      </Grid>
    </GridContainer>
  )
}

export default Pagination
