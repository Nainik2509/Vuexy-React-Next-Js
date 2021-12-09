// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from '@core/components/card-snippet'

// ** Demo Components Imports
import TextFieldSizes from './TextFieldSizes'
import TextFieldColor from './TextFieldColor'
import TextFieldIcons from './TextFieldIcons'
import TextFieldLayout from './TextFieldLayout'
import TextFieldInputs from './TextFieldInputs'
import TextFieldVariant from './TextFieldVariant'
import TextFieldFormProps from './TextFieldFormProps'
import TextFieldComponents from './TextFieldComponents'
import TextFieldCustomized from './TextFieldCustomized'
import TextFieldValidation from './TextFieldValidation'
import TextFieldInputAdornment from './TextFieldInputAdornment'
import TextFieldControlledUncontrolled from './TextFieldControlledUncontrolled'

// ** Source code imports
import * as source from './TextFieldSourceCode'

const TextFields = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <CardSnippet title='Variants' code={source.TextFieldVariantCode}>
          <Typography>
            Use <code>variant={`{'filled' | 'standard'}`}</code> prop for different text fields.
          </Typography>
          <TextFieldVariant />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Form Props' code={source.TextFieldFormPropsCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Standard form attributes are supported e.g. <code>required</code>, <code>disabled</code>, <code>type</code>,
            etc. as well as <code>helperText</code> which is used to give context about a field’s input, such as how the
            input will be used.
          </Typography>
          <TextFieldFormProps />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Controlled and Uncontrolled' code={source.TextFieldControlledUncontrolledCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Manage <code>value</code> prop with the help of a state for controlled <code>TextField</code> and use
            <code>defaultChecked</code> prop for uncontrolled <code>TextField</code>.
          </Typography>
          <TextFieldControlledUncontrolled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Sizes' code={source.TextFieldSizesCode}>
          <Typography sx={{ marginBottom: 2 }}>
            Use <code>size</code> prop for different sizes of text fields.
          </Typography>
          <TextFieldSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Color' code={source.TextFieldColorCode}>
          <Typography>
            <code>color={`{'secondary' | 'success' | 'error' | 'warning' | 'info'}`}</code> prop changes the highlight
            color of the text field when focused.
          </Typography>
          <TextFieldColor />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Icons' code={source.TextFieldIconsCode}>
          <Typography sx={{ marginBottom: 2 }}>
            There are multiple ways to display an icon with a text field.
          </Typography>
          <TextFieldIcons />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Input Adornment' code={source.TextFieldInputAdornmentCode}>
          <Typography sx={{ marginBottom: 2 }}>
            The main way is with an <code>InputAdornment</code>. This can be used to add a prefix, a suffix or an action
            to an input. For instance, you can use an icon button to hide or reveal the password.
          </Typography>
          <TextFieldInputAdornment />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Layout' code={source.TextFieldLayoutCode}>
          <Typography>
            <code>fullWidth</code> can be used to make the input take up the full width of its container.
          </Typography>
          <Typography sx={{ marginBottom: 4 }}>
            <code>margin</code> prop can be used to alter the vertical spacing of inputs. Using <code>none</code>{' '}
            (default) doesn't apply margins to the <code>FormControl</code> whereas <code>dense</code> and{' '}
            <code>normal</code> do.
          </Typography>
          <TextFieldLayout />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Components' code={source.TextFieldComponentsCode}>
          <Typography sx={{ marginBottom: 2 }}>
            <code>TextField</code> is composed of smaller components (<code>FormControl</code>, <code>Input</code>,{' '}
            <code>FilledInput</code>, <code>InputLabel</code>, <code>OutlinedInput</code>, and{' '}
            <code>FormHelperText</code>) that you can leverage directly to significantly customize your form inputs.
          </Typography>
          <TextFieldComponents />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Inputs' code={source.TextFieldInputsCode}>
          <TextFieldInputs />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Customized' code={source.TextFieldCustomizedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>styled</code> hook to customize your text field.
          </Typography>
          <TextFieldCustomized />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Validation' code={source.TextFieldValidationCode}>
          <Typography sx={{ marginBottom: 2 }}>
            The <code>error</code> prop toggles the error state, the <code>helperText</code> prop can then be used to
            provide feedback to the user about the error.
          </Typography>
          <TextFieldValidation />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default TextFields
