// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

const ReviewComplete = () => {
  // ** Hooks
  const theme = useTheme()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant='h5' sx={{ mb: 4 }}>
              Almost done! 🚀
            </Typography>
            <Typography>Confirm your deal details information and submit to create it.</Typography>
          </Grid>
          <Grid item xs={5} sm={3}>
            <Typography sx={{ fontWeight: 700 }}>Deal Type</Typography>
          </Grid>
          <Grid item xs={7} sm={9}>
            <Typography>Percentage</Typography>
          </Grid>
          <Grid item xs={5} sm={3}>
            <Typography sx={{ fontWeight: 700 }}>Amount</Typography>
          </Grid>
          <Grid item xs={7} sm={9}>
            <Typography>25%</Typography>
          </Grid>
          <Grid item xs={5} sm={3}>
            <Typography sx={{ fontWeight: 700 }}>Deal Code</Typography>
          </Grid>
          <Grid item xs={7} sm={9}>
            <CustomChip rounded size='small' skin='light' color='warning' label='25PEROFF' />
          </Grid>
          <Grid item xs={5} sm={3}>
            <Typography sx={{ fontWeight: 700 }}>Deal Title</Typography>
          </Grid>
          <Grid item xs={7} sm={9}>
            <Typography>Black friday sale, 25% OFF</Typography>
          </Grid>
          <Grid item xs={5} sm={3}>
            <Typography sx={{ fontWeight: 700 }}>Deal Duration</Typography>
          </Grid>
          <Grid item xs={7} sm={9}>
            <Typography>2021-07-14 to 2021-07-30</Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch />}
              label='I have confirmed the deal details.'
              sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center', '& img': { maxWidth: '100%' } }}>
          <img
            width={350}
            alt='review-illustration'
            src={`/images/pages/girl-checkout-offer-${theme.palette.mode}.png`}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default ReviewComplete
