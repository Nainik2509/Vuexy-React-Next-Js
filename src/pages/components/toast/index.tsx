// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components
import ToastBlank from 'src/views/components/toast/ToastBlank'
import ToastError from 'src/views/components/toast/ToastError'
import ToastEmoji from 'src/views/components/toast/ToastEmoji'
import ToastThemed from 'src/views/components/toast/ToastThemed'
import ToastCustom from 'src/views/components/toast/ToastCustom'
import ToastSuccess from 'src/views/components/toast/ToastSuccess'
import ToastPromise from 'src/views/components/toast/ToastPromise'
import ToastMultiLine from 'src/views/components/toast/ToastMultiLine'
import ToastCustomPosition from 'src/views/components/toast/ToastCustomPosition'

// ** Source code imports
import * as source from 'src/views/components/toast/ToastSourceCode'

const ReactHotToasts = () => {
  return (
    <>
      <Grid container spacing={6} className='match-height'>
        <PageHeader
          subtitle={<Typography variant='body2'>Smoking hot React notifications.</Typography>}
          title={
            <Typography variant='h5'>
              <Link href='https://github.com/timolins/react-hot-toast' target='_blank'>
                React Hot Toasts
              </Link>
            </Typography>
          }
        />
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastBlankCode}>
            <ToastBlank />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastMultiLineCode}>
            <ToastMultiLine />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastSuccessCode}>
            <ToastSuccess />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastErrorCode}>
            <ToastError />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastPromiseCode}>
            <ToastPromise />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastEmojiCode}>
            <ToastEmoji />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastThemedCode}>
            <ToastThemed />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastCustomCode}>
            <ToastCustom />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastCustomPositionCode}>
            <ToastCustomPosition />
          </CardSnippet>
        </Grid>
      </Grid>
    </>
  )
}

ReactHotToasts.setConfig = () => {
  return {
    toastPosition: 'top-right'
  }
}

export default ReactHotToasts
