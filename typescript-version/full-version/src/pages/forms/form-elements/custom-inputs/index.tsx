// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import CustomRadios from 'src/views/forms/form-elements/custom-inputs/CustomRadios'
import CustomRadioImg from 'src/views/forms/form-elements/custom-inputs/CustomRadioImg'
import CustomCheckbox from 'src/views/forms/form-elements/custom-inputs/CustomCheckbox'
import CustomRadioIcons from 'src/views/forms/form-elements/custom-inputs/CustomRadioIcons'
import CustomCheckboxImg from 'src/views/forms/form-elements/custom-inputs/CustomCheckboxImg'
import CustomCheckboxIcons from 'src/views/forms/form-elements/custom-inputs/CustomCheckboxIcons'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/custom-inputs/CustomInputsSourceCode'

const CustomInputs = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} lg={6}>
        <CardSnippet
          title='Custom Radios'
          code={{
            tsx: source.CustomRadioTSXCode,
            jsx: source.CustomRadioJSXCode
          }}
        >
          <CustomRadios />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} lg={6}>
        <CardSnippet
          title='Custom Checkboxes'
          code={{
            tsx: source.CustomRadioTSXCode,
            jsx: source.CustomRadioJSXCode
          }}
        >
          <CustomCheckbox />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} lg={6}>
        <CardSnippet
          title='Custom Radio Icons'
          code={{
            tsx: source.CustomRadioTSXCode,
            jsx: source.CustomRadioJSXCode
          }}
        >
          <CustomRadioIcons />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} lg={6}>
        <CardSnippet
          title='Custom Checkbox Icons'
          code={{
            tsx: source.CustomRadioTSXCode,
            jsx: source.CustomRadioJSXCode
          }}
        >
          <CustomCheckboxIcons />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} lg={6}>
        <CardSnippet
          title='Custom Radio Images'
          code={{
            tsx: source.CustomRadioTSXCode,
            jsx: source.CustomRadioJSXCode
          }}
        >
          <CustomRadioImg />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} lg={6}>
        <CardSnippet
          title='Custom Checkbox Images'
          code={{
            tsx: source.CustomRadioTSXCode,
            jsx: source.CustomRadioJSXCode
          }}
        >
          <CustomCheckboxImg />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default CustomInputs
