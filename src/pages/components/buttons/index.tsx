// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import ButtonsFab from 'src/views/components/buttons/ButtonsFab'
import ButtonsText from 'src/views/components/buttons/ButtonsText'
import ButtonsIcons from 'src/views/components/buttons/ButtonsIcons'
import ButtonsSizes from 'src/views/components/buttons/ButtonsSizes'
import ButtonsColors from 'src/views/components/buttons/ButtonsColors'
import ButtonsOutlined from 'src/views/components/buttons/ButtonsOutlined'
import ButtonsFabSizes from 'src/views/components/buttons/ButtonsFabSizes'
import ButtonsContained from 'src/views/components/buttons/ButtonsContained'
import ButtonsCustomized from 'src/views/components/buttons/ButtonsCustomized'
import ButtonsWithIconAndLabel from 'src/views/components/buttons/ButtonsWithIconAndLabel'

// ** Source code imports
import * as source from 'src/views/components/buttons/ButtonsSourceCode'

const Buttons = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <CardSnippet title='Contained' code={source.ButtonsContainedCode}>
          <Typography>
            Use <code>variant='contained'</code> prop with <code>&lt;Button&gt;</code> component for contained buttons.
          </Typography>
          <ButtonsContained />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Text' code={source.ButtonsTextCode}>
          <Typography>
            Use <code>variant='text'</code> prop with <code>&lt;Button&gt;</code> component for buttons with text only.
          </Typography>
          <ButtonsText />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Outlined' code={source.ButtonsOutlinedCode}>
          <Typography>
            Use <code>variant='outlined'</code> prop with <code>&lt;Button&gt;</code> component for outlined buttons.
          </Typography>
          <ButtonsOutlined />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Buttons With Icon and Label' code={source.ButtonsWithIconAndLabelCode}>
          <Typography>
            Use <code>startIcon | endIcon</code> prop with <code>&lt;Button&gt;</code> component to add an icon inside a
            button.
          </Typography>
          <ButtonsWithIconAndLabel />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Icon Buttons' code={source.ButtonsIconsCode}>
          <Typography>
            Use an icon component inside <code>&lt;IconButton&gt;</code> component. For different colors, use{' '}
            <code>color</code> prop with <code>&lt;IconButton&gt;</code> component.
          </Typography>
          <ButtonsIcons />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Button Sizes' code={source.ButtonsSizesCode}>
          <Typography>
            Use <code>size={`{'small' | 'medium' | 'large'}`}</code> prop with <code>&lt;Button&gt;</code> component for
            different sized buttons. To use icon buttons, you need to use <code>size={`{small | large}`}</code> prop
            with <code>&lt;IconButton&gt;</code> component or you can also use <code>fontSize</code> prop with the
            icons.
          </Typography>
          <ButtonsSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Button Colors' code={source.ButtonsColorsCode}>
          <Typography>
            Use <code>color</code> prop with <code>&lt;Button&gt;</code> component for different colored buttons.
          </Typography>
          <ButtonsColors />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Customized Buttons' code={source.ButtonsCustomizedCode}>
          <ButtonsCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Floating Action Button' code={source.ButtonsFabCode}>
          <Typography>
            Use <code>color</code> prop with <code>&lt;Fab&gt;</code> component for different colored Floating Action
            Button and <code>variant='extended'</code> prop for extended (not round) Floating Action Button.
          </Typography>
          <ButtonsFab />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Floating Action Button Sizes' code={source.ButtonsFabSizesCode}>
          <Typography>
            Use <code>size={`{'small' | 'medium' | 'large'}`}</code> prop for different sizes of Floating Action
            Buttons.
          </Typography>
          <ButtonsFabSizes />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Buttons
