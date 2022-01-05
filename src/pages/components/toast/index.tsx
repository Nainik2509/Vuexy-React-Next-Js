// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Demo Components
import ToastBlank from 'src/components/components/toast/ToastBlank'
import ToastError from 'src/components/components/toast/ToastError'
import ToastEmoji from 'src/components/components/toast/ToastEmoji'
import ToastThemed from 'src/components/components/toast/ToastThemed'
import ToastCustom from 'src/components/components/toast/ToastCustom'
import ToastSuccess from 'src/components/components/toast/ToastSuccess'
import ToastPromise from 'src/components/components/toast/ToastPromise'
import ToastMultiLine from 'src/components/components/toast/ToastMultiLine'
import ToastCustomPosition from 'src/components/components/toast/ToastCustomPosition'

// ** Source code imports
import * as source from 'src/components/components/toast/ToastSourceCode'

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
          <CardSnippet title='' code={source.ToastBlank}>
            <ToastBlank />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastMultiLine}>
            <ToastMultiLine />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastSuccess}>
            <ToastSuccess />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastError}>
            <ToastError />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastPromise}>
            <ToastPromise />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastEmoji}>
            <ToastEmoji />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastThemed}>
            <ToastThemed />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastCustom}>
            <ToastCustom />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSnippet title='' code={source.ToastCustomPosition}>
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
