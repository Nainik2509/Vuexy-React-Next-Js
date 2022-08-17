// ** React Imports
import { SyntheticEvent } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomRadioBasic from 'src/@core/components/custom-radio/basic'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

const dataIcons = [
  {
    value: 'standard',
    title: 'Standard',
    gridProps: { sm: 4, xs: 12 },
    icon: (
      <Box sx={{ mb: 2, color: 'text.secondary' }}>
        <Icon fontSize='2rem' icon='mdi:account-outline' />
      </Box>
    ),
    content: (
      <>
        <CustomChip
          rounded
          size='small'
          skin='light'
          label='Free'
          color='success'
          sx={{ top: 12, right: 12, position: 'absolute' }}
        />
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 1 Week.
        </Typography>
      </>
    )
  },
  {
    value: 'express',
    title: 'Express',
    gridProps: { sm: 4, xs: 12 },
    icon: (
      <Box sx={{ mb: 2, color: 'text.secondary' }}>
        <Icon fontSize='2rem' icon='mdi:crown-outline' />
      </Box>
    ),
    content: (
      <>
        <CustomChip
          rounded
          label='$10'
          size='small'
          skin='light'
          color='secondary'
          sx={{ top: 12, right: 12, position: 'absolute' }}
        />
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 3-4 days.
        </Typography>
      </>
    )
  },
  {
    value: 'overnight',
    title: 'Overnight',
    gridProps: { sm: 4, xs: 12 },
    icon: (
      <Box sx={{ mb: 2, color: 'text.secondary' }}>
        <Icon fontSize='2rem' icon='mdi:rocket-launch-outline' />
      </Box>
    ),
    content: (
      <>
        <CustomChip
          rounded
          label='$15'
          size='small'
          skin='light'
          color='secondary'
          sx={{ top: 12, right: 12, position: 'absolute' }}
        />
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 1 day.
        </Typography>
      </>
    )
  }
]

const data = [
  {
    value: 'home',
    title: <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>John Doe (Default)</Typography>,
    gridProps: { sm: 6, xs: 12 },
    meta: <CustomChip rounded size='small' skin='light' label='Home' color='primary' />,
    content: (
      <Box sx={{ mt: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='body2' sx={{ mb: 'auto' }}>
          4135 Parkway Street, Los Angeles, CA, 90017.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ mr: 3, color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Edit
            </Box>
          </Link>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Remove
            </Box>
          </Link>
        </Box>
      </Box>
    )
  },
  {
    value: 'office',
    title: <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>ACME Inc.</Typography>,
    gridProps: { sm: 6, xs: 12 },
    meta: <CustomChip rounded size='small' skin='light' label='Office' color='success' />,
    content: (
      <Box sx={{ mt: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='body2' sx={{ mb: 'auto' }}>
          87 Hoffman Avenue, New York, NY, 10016.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ mr: 3, color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Edit
            </Box>
          </Link>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Remove
            </Box>
          </Link>
        </Box>
      </Box>
    )
  }
]

const StepAddress = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={8} xl={9}>
        <Typography sx={{ mt: 1, mb: 4, color: 'text.secondary' }}>Select your preferable address</Typography>
        <CustomRadioBasic data={data} value='home' name='custom-radios-address' />
        <Button variant='outlined' sx={{ mt: 4.5 }}>
          Add new address
        </Button>
        <Typography sx={{ mt: 8, mb: 4, color: 'text.secondary' }}>Choose Delivery Speed</Typography>
        <CustomRadioIcons data={dataIcons} value='standard' name='custom-radios-delivery' />
      </Grid>
      <Grid item xs={12} lg={4} xl={3}>
        <Card sx={{ mb: 4, background: 'transparent', boxShadow: 'none', border: '1px solid', borderColor: 'divider' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Estimated Delivery Date</Typography>
            <Box sx={{ mb: 4, display: 'flex' }}>
              <Box sx={{ mr: 4 }}>
                <img width={50} src='/images/products/google-home.png' alt='Google Home' />
              </Box>
              <Box>
                <Typography sx={{ color: 'text.secondary' }}>Google - Google Home - White</Typography>
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>18th Nov 2021</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ mr: 4 }}>
                <img width={50} src='/images/products/iphone-11.png' alt='iphone 11' />
              </Box>
              <Box>
                <Typography sx={{ color: 'text.secondary' }}>Apple iPhone 11 (64GB, Black)</Typography>
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>20th Nov 2021</Typography>
              </Box>
            </Box>
          </CardContent>
          <Divider sx={{ mt: theme => `${theme.spacing(4)} !important`, mb: '0 !important' }} />
          <CardContent sx={{ p: 4 }}>
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Price Details</Typography>
            <Grid container>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ color: 'text.secondary' }}>Order Total</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ textAlign: 'right', color: 'text.secondary' }}>$1100.00</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: 'text.secondary' }}>Delivery Charges</Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Typography sx={{ mr: 2, textDecoration: 'line-through', color: 'text.secondary' }}>$5.00</Typography>
                  <CustomChip rounded size='small' skin='light' color='success' label='Free' />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          <CardContent sx={{ p: theme => `${theme.spacing(4)} !important` }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 700, color: 'text.secondary' }}>Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ textAlign: 'right', color: 'text.secondary' }}>$1100.00</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Button fullWidth variant='contained' onClick={handleNext}>
          Place Order
        </Button>
      </Grid>
    </Grid>
  )
}

export default StepAddress
