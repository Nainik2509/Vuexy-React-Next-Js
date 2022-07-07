// ** React Imports
import { SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import List, { ListProps } from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Icons Imports
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'
import MapMarkerOutline from 'mdi-material-ui/MapMarkerOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import ClockTimeFiveOutline from 'mdi-material-ui/ClockTimeFiveOutline'

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  '& .MuiListItem-root': {
    padding: theme.spacing(2, 4),
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6
    },
    '&:last-of-type': {
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6
    },
    '&:not(:last-of-type)': {
      borderBottom: 0
    },
    '& .MuiListItemText-root': {
      marginTop: 0,

      '& .MuiTypography-root': {
        fontWeight: 500,
        fontSize: '.9375rem'
      }
    },
    '& .remove-item': {
      top: '1rem',
      right: '1rem',
      position: 'absolute',
      color: theme.palette.text.secondary
    }
  }
}))

const HorizontalList = styled(List)<ListProps>(({ theme }) => ({
  padding: 0,
  display: 'flex',
  borderRadius: 6,
  border: `1px solid ${theme.palette.divider}`,
  '& .MuiListItem-root': {
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    '& .MuiListItem-root': {
      '&:not(:last-of-type)': {
        borderRight: 0,
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  }
}))

const StepConfirmation = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box
          sx={{
            pt: 4,
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            px: { lg: 30, xs: 6 },
            flexDirection: 'column'
          }}
        >
          <Typography variant='h6'>Thank You! 😇</Typography>
          <Typography sx={{ my: 4 }}>
            Your order{' '}
            <Box
              href='/'
              component='a'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => e.preventDefault()}
            >
              #1536548131
            </Box>{' '}
            has been placed!
          </Typography>
          <Typography>
            We sent an email to{' '}
            <Box
              href='/'
              component='a'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => e.preventDefault()}
            >
              john.doe@example.com
            </Box>{' '}
            with your order confirmation and receipt. If the email hasn't arrived within two minutes, please check your
            spam folder to see if the email was routed there.
          </Typography>
          <Typography sx={{ mt: 4 }}>
            <ClockTimeFiveOutline fontSize='small' sx={{ mr: 2, verticalAlign: 'middle' }} />
            <Box component='span' sx={{ fontWeight: 600 }}>
              Time placed:
            </Box>{' '}
            25/05/2020 13:35pm
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <HorizontalList>
          <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MapMarkerOutline fontSize='small' sx={{ mr: 1 }} />
              <Typography sx={{ fontWeight: 500 }}>Shipping</Typography>
            </Box>
            <Box component='address' sx={{ mt: 4, fontStyle: 'normal' }}>
              John Doe <br />
              4135 Parkway Street,
              <br />
              Los Angeles, CA 90017,
              <br />
              USA <br />
              +123456789
            </Box>
          </ListItem>
          <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CreditCardOutline fontSize='small' sx={{ mr: 1 }} />
              <Typography sx={{ fontWeight: 500 }}>Billing Address</Typography>
            </Box>
            <Box component='address' sx={{ mt: 4, fontStyle: 'normal' }}>
              John Doe <br />
              4135 Parkway Street,
              <br />
              Los Angeles, CA 90017,
              <br />
              USA <br />
              +123456789
            </Box>
          </ListItem>
          <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ArchiveOutline fontSize='small' sx={{ mr: 1 }} />
              <Typography sx={{ fontWeight: 500 }}>Shipping Method</Typography>
            </Box>
            <Typography sx={{ mt: 4, fontWeight: 600 }}>Preferred Method:</Typography>
            <Typography>Standard Delivery</Typography>
            <Typography>(Normally 3-4 business days)</Typography>
          </ListItem>
        </HorizontalList>
      </Grid>
      <Grid item xs={12} lg={8} xl={9}>
        <StyledList>
          <ListItem>
            <ListItemAvatar>
              <img width={75} src='/images/products/google-home.png' alt='Google Home' />
            </ListItemAvatar>
            <Grid container>
              <Grid item xs={12} md={8}>
                <ListItemText primary='Google - Google Home - White' />
                <Box sx={{ mt: 4, display: 'flex' }}>
                  <Typography variant='body2'>Sold By:</Typography>
                  <Typography variant='body2' sx={{ mx: 2, color: 'primary.main', cursor: 'pointer' }}>
                    Google
                  </Typography>
                  <CustomChip rounded size='small' skin='light' color='success' label='In Stock' />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    mt: { xs: 1, md: 0 },
                    alignItems: 'center',
                    justifyContent: { xs: 'flex-start', md: 'flex-end' }
                  }}
                >
                  <Typography sx={{ color: 'primary.main' }}>$299</Typography>
                  <Typography sx={{ color: 'secondary.main', textDecoration: 'line-through' }}>/$359</Typography>
                </Box>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <img width={75} src='/images/products/iphone-11.png' alt='iphone 11' />
            </ListItemAvatar>
            <Grid container>
              <Grid item xs={12} md={8}>
                <ListItemText primary='Apple iPhone 11 (64GB, Black)' />
                <Box sx={{ mt: 4, display: 'flex' }}>
                  <Typography variant='body2'>Sold By:</Typography>
                  <Typography variant='body2' sx={{ mx: 2, color: 'primary.main', cursor: 'pointer' }}>
                    Apple
                  </Typography>
                  <CustomChip rounded size='small' skin='light' color='success' label='In Stock' />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    mt: { xs: 1, md: 0 },
                    alignItems: 'center',
                    justifyContent: { xs: 'flex-start', md: 'flex-end' }
                  }}
                >
                  <Typography sx={{ color: 'primary.main' }}>$299</Typography>
                  <Typography sx={{ color: 'secondary.main', textDecoration: 'line-through' }}>/$359</Typography>
                </Box>
              </Grid>
            </Grid>
          </ListItem>
        </StyledList>
      </Grid>
      <Grid item xs={12} lg={4} xl={3}>
        <Card
          sx={{ mt: 1.5, background: 'transparent', boxShadow: 'none', border: '1px solid', borderColor: 'divider' }}
        >
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
          <Divider sx={{ m: '0 !important' }} />
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
      </Grid>
    </Grid>
  )
}

export default StepConfirmation
