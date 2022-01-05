// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import RatingsHalf from 'src/components/components/ratings/RatingsHalf'
import RatingsBasic from 'src/components/components/ratings/RatingsBasic'
import RatingsSizes from 'src/components/components/ratings/RatingsSizes'
import RatingsCustomized from 'src/components/components/ratings/RatingsCustomized'
import RatingsHoverFeedback from 'src/components/components/ratings/RatingsHoverFeedback'

// ** Source code imports
import * as source from 'src/components/components/ratings/RatingsSourceCode'

const Ratings = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Basic Ratings' code={source.RatingsBasicCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>name</code> prop to name the rating and use <code>value</code> or <code>defaultValue</code> prop
            to set any initial value to a rating.
          </Typography>
          <RatingsBasic />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Customized Ratings' code={source.RatingsCustomizedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>icon</code> or <code>emptyIcon</code> prop to change default icon or empty icon respectively,{' '}
            <code>max</code> prop to set number of ratings and <code>IconContainerComponent</code> prop to change every
            icons in the ratings.
          </Typography>
          <RatingsCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Half Ratings' code={source.RatingsHalfCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>precision</code> prop to define the minimum increment value change allowed.
          </Typography>
          <RatingsHalf />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Sizes' code={source.RatingsSizesCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>size={`{'small' | 'large'}`}</code> prop for different sizes of ratings.
          </Typography>
          <RatingsSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Hover Feedback' code={source.RatingsHoverFeedbackCode}>
          <Typography sx={{ marginBottom: 4 }}>
            You can display a label on hover to help users pick the correct rating value. The demo uses the{' '}
            <code>onChangeActive</code> prop.
          </Typography>
          <RatingsHoverFeedback />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Ratings
