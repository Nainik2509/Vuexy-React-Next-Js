// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import AlertTitle from '@mui/material/AlertTitle'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import LinearProgress from '@mui/material/LinearProgress'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import PlanDetails from 'src/@core/components/plan-details'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import CheckCircleOutline from 'mdi-material-ui/CheckCircleOutline'
import CloseCircleOutline from 'mdi-material-ui/CloseCircleOutline'

// ** Types
import { PricingDataType, PricingPlanType } from 'src/@core/components/plan-details/types'

const CurrentPlanCard = ({ data }: { data: PricingDataType }) => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)
  const [userInput, setUserInput] = useState<string>('yes')
  const [plan, setPlan] = useState<'monthly' | 'annually'>('monthly')
  const [secondDialogOpen, setSecondDialogOpen] = useState<boolean>(false)
  const [openPricingDialog, setOpenPricingDialog] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<{ checked: boolean }>) => {
    if (e.target.checked) {
      setPlan('annually')
    } else {
      setPlan('monthly')
    }
  }

  const handleClose = () => setOpen(false)

  const handleSecondDialogClose = () => setSecondDialogOpen(false)

  const handleConfirmation = (value: string) => {
    handleClose()
    setUserInput(value)
    setSecondDialogOpen(true)
  }

  const renderPlan = () => {
    return data?.pricingPlans.map((item: PricingPlanType) => {
      return (
        <Grid item xs={12} md={4} key={item.title.toLowerCase()}>
          <PlanDetails plan={plan} data={item} />
        </Grid>
      )
    })
  }

  return (
    <>
      <Card sx={{ mb: 4 }}>
        <CardHeader title='Current Plan' />
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={6}>
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ mb: 2, fontWeight: 500 }}>Your Current Plan is Basic</Typography>
                <Typography variant='body2'>A simple start for everyone</Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ mb: 2, fontWeight: 500 }}>Active until Dec 09, 2021</Typography>
                <Typography variant='body2'>We will send you a notification upon Subscription expiration</Typography>
              </Box>
              <Box>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ mr: 2, fontWeight: 500 }}>$199 Per Month</Typography>
                  <CustomChip label='Popular' size='small' color='primary' skin='light' rounded={true} />
                </Box>
                <Typography variant='body2'>Standard plan for small to medium businesses</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Alert severity='warning' icon={false} sx={{ mb: 6 }}>
                <AlertTitle sx={{ fontWeight: 700 }}>We need your attention!</AlertTitle>
                Your plan requires update
              </Alert>

              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    Days
                  </Typography>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    24 of 30 Days
                  </Typography>
                </Box>
                <LinearProgress
                  value={75}
                  variant='determinate'
                  sx={{ my: 1, height: 12, borderRadius: 6, '& .MuiLinearProgress-bar': { borderRadius: 6 } }}
                />
                <Typography variant='body2'>6 days remaining until your plan requires update</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' sx={{ mr: 4 }} onClick={() => setOpenPricingDialog(true)}>
                Upgrade Plan
              </Button>
              <Button variant='outlined' color='secondary' onClick={() => setOpen(true)}>
                Cancel Subscription
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Dialog fullWidth maxWidth='xs' open={open} onClose={handleClose}>
        <DialogContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: '85%', textAlign: 'center' }}>
              <AlertCircleOutline sx={{ mb: 4, fontSize: '5.5rem', color: 'warning.main' }} />
              <Typography>Are you sure you would like to cancel your subscription?</Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button variant='contained' onClick={() => handleConfirmation('yes')}>
            Yes
          </Button>
          <Button variant='outlined' color='secondary' onClick={() => handleConfirmation('cancel')}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog fullWidth maxWidth='xs' open={secondDialogOpen} onClose={handleSecondDialogClose}>
        <DialogContent>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {userInput === 'yes' ? (
              <CheckCircleOutline sx={{ mb: 14, fontSize: '5.5rem', color: 'success.main' }} />
            ) : (
              <CloseCircleOutline sx={{ mb: 14, fontSize: '5.5rem', color: 'error.main' }} />
            )}
            <Typography variant='h4' sx={{ mb: 8 }}>
              {userInput === 'yes' ? 'Unsubscribed!' : 'Cancelled'}
            </Typography>
            <Typography>
              {userInput === 'yes' ? 'Your subscription cancelled successfully.' : 'Unsubscription Cancelled!'}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button variant='contained' color='success' onClick={handleSecondDialogClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth
        scroll='body'
        maxWidth='lg'
        open={openPricingDialog}
        onClose={() => setOpenPricingDialog(false)}
        onBackdropClick={() => setOpenPricingDialog(false)}
      >
        <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <IconButton
            size='small'
            onClick={() => setOpenPricingDialog(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Close />
          </IconButton>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 3 }}>
              Find the right plan for your site
            </Typography>
            <Typography variant='body2'>
              Get started with us - it's perfect for individuals and teams. Choose a subscription plan that meets your
              needs.
            </Typography>
          </Box>
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <InputLabel
              htmlFor='modal-pricing-switch'
              sx={{ fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem', color: 'text.secondary' }}
            >
              Monthly
            </InputLabel>
            <Switch onChange={handleChange} id='modal-pricing-switch' checked={plan === 'annually'} />
            <InputLabel
              htmlFor='modal-pricing-switch'
              sx={{ fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem', color: 'text.secondary' }}
            >
              Annually
            </InputLabel>
          </Box>
          <Grid container spacing={6}>
            {renderPlan()}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CurrentPlanCard
