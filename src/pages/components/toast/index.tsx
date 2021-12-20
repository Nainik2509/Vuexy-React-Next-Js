// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Third Party Components
import { Toaster } from 'react-hot-toast'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components
import ToastTypes from './ToastTypes'
import ToastPositions from './ToastPositions'

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'

const ReactHotToasts = () => {
  const [activePosition, setActivePosition] = useState<string>('top-center')

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h5'>
            <Link href='https://github.com/timolins/react-hot-toast' target='_blank'>
              React Hot Toasts
            </Link>
          </Typography>
        }
        subtitle={<Typography variant='body2'>Smoking hot React notifications.</Typography>}
      />
      <Grid item xs={12}>
        <ToastTypes />
      </Grid>
      <Grid item xs={12}>
        <ToastPositions activePosition={activePosition} setActivePosition={setActivePosition} />
      </Grid>
      <ReactHotToast>
        <Toaster position={activePosition} toastOptions={{ className: 'react-hot-toast' }} />
      </ReactHotToast>
    </Grid>
  )
}

export default ReactHotToasts
