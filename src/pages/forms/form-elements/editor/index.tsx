// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import EditorControlled from 'src/components/forms/form-elements/editor/EditorControlled'
import EditorUncontrolled from 'src/components/forms/form-elements/editor/EditorUncontrolled'

// ** Source code imports
import * as source from 'src/components/forms/form-elements/editor/EditorSourceCode'

// ** Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const Editors = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <PageHeader
        title={
          <Typography variant='h5'>
            <Link href='https://jpuri.github.io/react-draft-wysiwyg/#/' target='_blank'>
              React Draft Wysiwyg
            </Link>
          </Typography>
        }
        subtitle={<Typography variant='body2'>A Wysiwyg Built on ReactJS and DraftJS</Typography>}
      />
      <Grid item xs={12}>
        <CardSnippet title='Controlled Wysiwyg Editor' code={source.EditorControlledCode} sx={{ overflow: 'visible' }}>
          <EditorControlled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet
          sx={{ overflow: 'visible' }}
          title='Uncontrolled Wysiwyg Editor'
          code={source.EditorUncontrolledCode}
        >
          <EditorUncontrolled />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Editors
