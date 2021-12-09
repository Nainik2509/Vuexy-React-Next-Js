// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from '@core/components/card-snippet'

// ** Demo Components Imports
import ButtonGroupBasic from './ButtonGroupBasic'
import ButtonGroupSizes from './ButtonGroupSizes'
import ButtonGroupSplit from './ButtonGroupSplit'
import ButtonGroupColors from './ButtonGroupColors'
import ButtonToggleSizes from './ButtonToggleSizes'
import ButtonToggleSimple from './ButtonToggleSimple'
import ButtonToggleColors from './ButtonToggleColors'
import ButtonGroupVertical from './ButtonGroupVertical'
import ButtonToggleMultiple from './ButtonToggleMultiple'
import ButtonToggleVertical from './ButtonToggleVertical'
import ButtonToggleCustomized from './ButtonToggleCustomized'
import ButtonToggleEnforceValue from './ButtonToggleEnforceValue'

// ** Source code imports
import * as source from './ButtonGroupSourceCode'

const ButtonGroup = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <Typography variant='h6'>Button Group</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Basic Button Group' code={source.ButtonGroupBasicCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>variant={`{'outlined' | 'contained' | 'text'}`}</code> prop with <code>&lt;ButtonGroup&gt;</code>{' '}
            component for button groups.
          </Typography>
          <ButtonGroupBasic />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Button Group Sizes' code={source.ButtonGroupSizesCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>size={`{'small' | 'medium' | 'large'}`}</code> prop with <code>&lt;ButtonGroup&gt;</code>{' '}
            component for different sizes of button groups.
          </Typography>
          <ButtonGroupSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Vertical Button Group' code={source.ButtonGroupVerticalCode}>
          <Typography>
            Use <code>orientation='vertical'</code> prop with <code>&lt;ButtonGroup&gt;</code> component for vertical
            button groups.
          </Typography>
          <ButtonGroupVertical />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Split Button' code={source.ButtonGroupSplitCode}>
          <Typography sx={{ marginBottom: 4 }}>
            <code>ButtonGroup</code> can also be used to create a split button. The dropdown can change the button
            action (as in this example), or be used to immediately trigger a related action.
          </Typography>
          <ButtonGroupSplit />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Button Group Colors' code={source.ButtonGroupColorsCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>color</code> prop for different colored button-groups.
          </Typography>
          <ButtonGroupColors />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6'>Toggle Button</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Simple Toggle Button' code={source.ButtonToggleSimpleCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Manage <code>value</code> prop with <code>&lt;ToggleButtonGroup&gt;</code> component with the help of a
            state and use <code>exclusive</code> prop with <code>&lt;ToggleButtonGroup&gt;</code> component.
          </Typography>
          <ButtonToggleSimple />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Multiple Toggle Button' code={source.ButtonToggleMultipleCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Manage <code>value</code> prop with the help of a state with array.
          </Typography>
          <ButtonToggleMultiple />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Toggle Button Sizes' code={source.ButtonToggleSizesCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>size={`{'size' | 'large'}`}</code> prop for different sizes.
          </Typography>
          <ButtonToggleSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Vertical Toggle Button' code={source.ButtonToggleVerticalCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>orientation='vertical'</code> prop for vertical toggle button.
          </Typography>
          <ButtonToggleVertical />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Enforce Value Set' code={source.ButtonToggleEnforceValueCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>if</code> statement in handle function in <code>onChange</code> prop.
          </Typography>
          <ButtonToggleEnforceValue />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Customized Toggle Button' code={source.ButtonToggleCustomizedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>styled</code> hook to customize your toggle button.
          </Typography>
          <ButtonToggleCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Toggle Button Colors' code={source.ButtonToggleColorsCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>color</code> prop for different colored toggle-buttons.
          </Typography>
          <ButtonToggleColors />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default ButtonGroup
