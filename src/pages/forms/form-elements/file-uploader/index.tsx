// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components Imports
import FileUploaderSingle from 'src/views/forms/form-elements/file-uploader/FileUploaderSingle'
import FileUploaderMultiple from 'src/views/forms/form-elements/file-uploader/FileUploaderMultiple'
import FileUploaderRestrictions from 'src/views/forms/form-elements/file-uploader/FileUploaderRestrictions'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/file-uploader/FileUploaderSourceCode'

const FileUploader = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <PageHeader
        title={
          <Typography variant='h5'>
            <Link href='https://github.com/react-dropzone/react-dropzone/' target='_blank'>
              React Dropzone
            </Link>
          </Typography>
        }
        subtitle={<Typography variant='body2'>Simple HTML5 drag-drop zone with React.js</Typography>}
      />
      <Grid item xs={12}>
        <CardSnippet title='Upload Multiple Files' code={source.FileUploaderMultipleCode}>
          <FileUploaderMultiple />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Upload Single Files' code={source.FileUploaderSingleCode}>
          <FileUploaderSingle />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Upload Files with Restrictions' code={source.FileUploaderRestrictionsCode}>
          <FileUploaderRestrictions />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default FileUploader
