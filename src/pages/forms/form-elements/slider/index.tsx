// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import SliderBasic from 'src/views/forms/form-elements/slider/SliderBasic'
import SliderRange from 'src/views/forms/form-elements/slider/SliderRange'
import SliderSizes from 'src/views/forms/form-elements/slider/SliderSizes'
import SliderColors from 'src/views/forms/form-elements/slider/SliderColors'
import SliderDiscrete from 'src/views/forms/form-elements/slider/SliderDiscrete'
import SliderVertical from 'src/views/forms/form-elements/slider/SliderVertical'
import SliderSmallSteps from 'src/views/forms/form-elements/slider/SliderSmallSteps'
import SliderCustomized from 'src/views/forms/form-elements/slider/SliderCustomized'
import SliderCustomMarks from 'src/views/forms/form-elements/slider/SliderCustomMarks'
import SliderCustomColors from 'src/views/forms/form-elements/slider/SliderCustomColors'
import SliderRemovedTrack from 'src/views/forms/form-elements/slider/SliderRemovedTrack'
import SliderInvertedTrack from 'src/views/forms/form-elements/slider/SliderInvertedTrack'
import SliderMinimumDistance from 'src/views/forms/form-elements/slider/SliderMinimumDistance'
import SliderRestrictedValues from 'src/views/forms/form-elements/slider/SliderRestrictedValues'
import SliderLabelAlwaysVisible from 'src/views/forms/form-elements/slider/SliderLabelAlwaysVisible'
import SliderControlledUncontrolled from 'src/views/forms/form-elements/slider/SliderControlledUncontrolled'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/slider/SliderSourceCode'

const Sliders = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Basic Slider' code={source.SliderBasicCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>defaultValue</code> prop for default slider value and <code>disabled</code> prop for disabled
            slider.
          </Typography>
          <SliderBasic />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet sx={{ px: 2 }} title='Controlled and Uncontrolled' code={source.SliderControlledUncontrolledCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Manage <code>value</code> prop with the help of a state for controlled slider and use{' '}
            <code>defaultValue</code> prop for uncontrolled slider.
          </Typography>
          <SliderControlledUncontrolled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Discrete Slider' code={source.SliderDiscreteCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            You can generate a mark for each step with <code>marks</code> prop.
          </Typography>
          <SliderDiscrete />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Small Steps' code={source.SliderSmallStepsCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            You can change the default step increment with <code>step</code> prop.
          </Typography>
          <SliderSmallSteps />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Custom Marks' code={source.SliderCustomMarksCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            You can have custom marks by providing a rich array to the <code>marks</code> prop.
          </Typography>
          <SliderCustomMarks />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Restricted Values' code={source.SliderRestrictedValuesCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            You can restrict the selectable values to those provided with the <code>marks</code> prop with{' '}
            <code>step={null}</code>.
          </Typography>
          <SliderRestrictedValues />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Label Always Visible' sx={{ px: 2 }} code={source.SliderLabelAlwaysVisibleCode}>
          <Typography sx={{ marginBottom: 4 }}>
            You can force the thumb label to be always visible with <code>valueLabelDisplay='on'</code>.
          </Typography>
          <SliderLabelAlwaysVisible />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Range Slider' code={source.SliderRangeCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            The slider can be used to set the start and end of a range by supplying an array of values to the{' '}
            <code>value</code> or <code>defaultValue</code> prop.
          </Typography>
          <SliderRange />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Colors' code={source.SliderColorsCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>color</code> prop for different colored slider.
          </Typography>
          <SliderColors />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Customized Slider' code={source.SliderCustomizedCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 8 }}>
            Use <code>styled</code> hook to customize your slider.
          </Typography>
          <SliderCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Custom Colors' code={source.SliderCustomColorsCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>styled</code> hook to customize your slider.
          </Typography>
          <SliderCustomColors />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Vertical Sliders' code={source.SliderVerticalCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>orientation='vertical'</code> prop for vertical slider.
          </Typography>
          <SliderVertical />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Removed Track' code={source.SliderRemovedTrackCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            The track can be turned off with <code>track={`{false}`}</code> prop.
          </Typography>
          <SliderRemovedTrack />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Inverted Track' code={source.SliderInvertedTrackCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            The track can be inverted with <code>track='inverted'</code> prop.
          </Typography>
          <SliderInvertedTrack />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Sizes' code={source.SliderSizesCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>size</code> prop for different sizes of slider.
          </Typography>
          <SliderSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Minimum Distance' code={source.SliderMinimumDistanceCode} sx={{ px: 2 }}>
          <Typography sx={{ marginBottom: 4 }}>
            You can enforce a minimum distance between values in the <code>onChange</code> event handler.
          </Typography>
          <SliderMinimumDistance />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Sliders
