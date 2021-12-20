// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import TextareaBasic from './TextareaBasic'
import TextareaVariant from './TextareaVariant'

// ** Source code imports
import * as source from './TextareaSourceCode'

const Textarea = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12}>
        <CardSnippet title='Basic Textarea' code={source.TextareaBasicCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>minRows</code> prop with <code>TextareaAutosize</code> component to add minimum rows in textarea
            and <code>maxRows</code> prop to add maximum rows.
          </Typography>
          <TextareaBasic />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Variants' code={source.TextareaVariantCode}>
          <Typography>
            Use <code>multiline</code> prop with <code>TextField</code> component to transform the text field into{' '}
            <code>textarea</code>. Use <code>variant</code> prop with <code>TextField</code> component for different
            variants of textarea.
          </Typography>
          <TextareaVariant />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Textarea
