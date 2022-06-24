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

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomRadioBasic from 'src/@core/components/mui/radio/CustomRadioBasic'
import CustomRadioIcons from 'src/@core/components/mui/radio/CustomRadioIcons'

// ** Icons Imports
import CrownOutline from 'mdi-material-ui/CrownOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import RocketLaunchOutline from 'mdi-material-ui/RocketLaunchOutline'

const dataIcons = [
  {
    value: 'standard',
    title: 'Standard',
    gridProps: { sm: 4, xs: 12 },
    icon: <AccountOutline fontSize='large' />,
    content: (
      <Box>
        <CustomChip
          rounded
          size='small'
          skin='light'
          label='Free'
          color='success'
          sx={{ position: 'absolute', top: 8, right: 8 }}
        />
        <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
          Get your product in 1 Week.
        </Typography>
      </Box>
    )
  },
  {
    value: 'express',
    title: 'Express',
    gridProps: { sm: 4, xs: 12 },
    icon: <CrownOutline fontSize='large' />,
    content: (
      <Box>
        <CustomChip rounded size='small' skin='light' label='$10' sx={{ position: 'absolute', top: 8, right: 8 }} />
        <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
          Get your product in 3-4 days.
        </Typography>
      </Box>
    )
  },
  {
    value: 'overnight',
    title: 'Overnight',
    gridProps: { sm: 4, xs: 12 },
    icon: <RocketLaunchOutline fontSize='large' />,
    content: (
      <Box>
        <CustomChip rounded size='small' skin='light' label='$15' sx={{ position: 'absolute', top: 8, right: 8 }} />
        <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
          Get your product in 1 day.
        </Typography>
      </Box>
    )
  }
]

const data = [
  {
    value: 'home',
    title: 'John Doe (Default)',
    gridProps: { sm: 6, xs: 12 },
    meta: <CustomChip rounded size='small' skin='light' label='Home' color='primary' />,
    content: (
      <Box>
        <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
          4135 Parkway Street, Los Angeles, CA, 90017.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/' passHref>
            <Box
              component='a'
              onClick={(e: SyntheticEvent) => e.preventDefault()}
              sx={{ mr: 2, color: 'primary.main', textDecoration: 'none' }}
            >
              Edit
            </Box>
          </Link>
          <Link href='/' passHref>
            <Box
              component='a'
              onClick={(e: SyntheticEvent) => e.preventDefault()}
              sx={{ color: 'primary.main', textDecoration: 'none' }}
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
    title: 'ACME Inc.',
    gridProps: { sm: 6, xs: 12 },
    meta: <CustomChip rounded size='small' skin='light' label='Office' color='success' />,
    content: (
      <Box>
        <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
          87 Hoffman Avenue, New York, NY, 10016.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/' passHref>
            <Box
              component='a'
              onClick={(e: SyntheticEvent) => e.preventDefault()}
              sx={{ mr: 2, color: 'primary.main', textDecoration: 'none' }}
            >
              Edit
            </Box>
          </Link>
          <Link href='/' passHref>
            <Box
              component='a'
              onClick={(e: SyntheticEvent) => e.preventDefault()}
              sx={{ color: 'primary.main', textDecoration: 'none' }}
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
        <Typography sx={{ mt: 1, mb: 4 }}>Select your preferable address</Typography>
        <CustomRadioBasic value='home' name='custom-radios-address' data={data} />
        <Button variant='outlined' sx={{ mt: 4.5 }}>
          Add new address
        </Button>
        <Typography sx={{ mt: 8, mb: 4 }}>Choose Delivery Speed</Typography>
        <CustomRadioIcons value='standard' name='custom-radios-delivery' data={dataIcons} />
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
                <Typography variant='body2'>Google - Google Home - White</Typography>
                <Typography variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                  18th Nov 2021
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ mr: 4 }}>
                <img width={50} src='/images/products/iphone-11.png' alt='iphone 11' />
              </Box>
              <Box>
                <Typography variant='body2'>Apple iPhone 11 (64GB, Black)</Typography>
                <Typography variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                  20th Nov 2021
                </Typography>
              </Box>
            </Box>
          </CardContent>
          <Divider sx={{ mt: 4, mb: 0 }} />
          <CardContent sx={{ p: 4 }}>
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Price Details</Typography>
            <Grid container>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography>Order Total</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ textAlign: 'right' }}>$1100.00</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Delivery Charges</Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Typography sx={{ mr: 2, textDecoration: 'line-through' }}>$5.00</Typography>
                  <CustomChip rounded size='small' skin='light' color='success' label='Free' />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Divider sx={{ m: 0 }} />
          <CardContent sx={{ p: theme => `${theme.spacing(4)} !important` }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 700 }}>Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ textAlign: 'right' }}>$1100.00</Typography>
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
