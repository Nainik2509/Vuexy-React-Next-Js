// ** React Imports
import { SyntheticEvent } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import AlertTitle from '@mui/material/AlertTitle'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import List, { ListProps } from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import TagOutline from 'mdi-material-ui/TagOutline'
import ChevronRight from 'mdi-material-ui/ChevronRight'

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  '& .MuiListItem-root': {
    padding: theme.spacing(4),
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

const StepCart = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <Grid container spacing={6}>
      <Grid item lg={8} xs={12}>
        <Alert severity='success' icon={<TagOutline />} sx={{ mb: 6 }}>
          <AlertTitle>Available Offers</AlertTitle>
          <Box>
            <Typography sx={{ color: 'success.main' }}>
              - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards
            </Typography>
            <Typography sx={{ color: 'success.main' }}>
              - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA
            </Typography>
          </Box>
        </Alert>
        <Typography sx={{ mb: 2, fontSize: '1.125rem', fontWeight: 600 }}>My Shopping Bag (2 Items)</Typography>
        <StyledList>
          <ListItem>
            <ListItemAvatar>
              <img width={100} src='/images/products/google-home.png' alt='Google Home' />
            </ListItemAvatar>
            <Close fontSize='small' className='remove-item' />
            <Grid container>
              <Grid item xs={12} md={8}>
                <ListItemText primary='Google - Google Home - White' />
                <Box>
                  <Box sx={{ mt: 4, display: 'flex' }}>
                    <Typography variant='body2'>Sold By:</Typography>
                    <Typography variant='body2' sx={{ mx: 2, color: 'primary.main', cursor: 'pointer' }}>
                      Google
                    </Typography>
                    <CustomChip rounded size='small' skin='light' color='success' label='In Stock' />
                  </Box>
                  <Rating name='google-nest-rating' value={4} readOnly />
                  <Box>
                    <TextField size='small' type='number' defaultValue='1' sx={{ mt: 3, maxWidth: 75 }} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: 'flex',
                    mt: { xs: 0, md: 4 },
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-start', md: 'flex-end' }
                  }}
                >
                  <Box sx={{ display: 'flex', my: { xs: 3, md: 6 } }}>
                    <Typography sx={{ color: 'primary.main' }}>$299</Typography>
                    <Typography sx={{ color: 'secondary.main', textDecoration: 'line-through' }}>/$359</Typography>
                  </Box>
                  <Box>
                    <Button variant='outlined' size='small' color='secondary'>
                      Move to wishlist
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <img width={100} src='/images/products/iphone-11.png' alt='iphone 11' />
            </ListItemAvatar>
            <Grid container>
              <Grid item xs={12} md={8}>
                <ListItemText primary='Apple iPhone 11 (64GB, Black)' />
                <Box>
                  <Box sx={{ mt: 4, display: 'flex' }}>
                    <Typography variant='body2'>Sold By:</Typography>
                    <Typography variant='body2' sx={{ mx: 2, color: 'primary.main', cursor: 'pointer' }}>
                      Apple
                    </Typography>
                    <CustomChip rounded size='small' skin='light' color='success' label='In Stock' />
                  </Box>
                  <Rating name='iphone-11-rating' value={4} readOnly />
                  <Box>
                    <TextField size='small' type='number' defaultValue='1' sx={{ mt: 3, maxWidth: 75 }} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Close fontSize='small' className='remove-item' />
                <Box
                  sx={{
                    mt: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-start', md: 'flex-end' }
                  }}
                >
                  <Box sx={{ display: 'flex', my: 6 }}>
                    <Typography sx={{ color: 'primary.main' }}>$299</Typography>
                    <Typography sx={{ color: 'secondary.main', textDecoration: 'line-through' }}>/$359</Typography>
                  </Box>
                  <Box>
                    <Button variant='outlined' size='small' color='secondary'>
                      Move to wishlist
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ListItem>
        </StyledList>
        <StyledList>
          <ListItem sx={{ py: theme => `${theme.spacing(2.5)} !important`, justifyContent: 'space-between' }}>
            <Link href='/' passHref>
              <Box
                component='a'
                onClick={(e: SyntheticEvent) => e.preventDefault()}
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                Add more products from wishlist
              </Box>
            </Link>
            <ChevronRight />
          </ListItem>
        </StyledList>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Card sx={{ mb: 4, background: 'transparent', boxShadow: 'none', border: '1px solid', borderColor: 'divider' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Offer</Typography>
            <Grid container spacing={4} sx={{ mb: 4 }}>
              <Grid item xl={8} xs={12}>
                <TextField size='small' placeholder='Enter Promo Code' />
              </Grid>
              <Grid item xl={4} xs={12}>
                <Button variant='outlined'>Apply</Button>
              </Grid>
            </Grid>
            <Box sx={{ p: 4, borderRadius: '6px', backgroundColor: 'action.hover' }}>
              <Typography sx={{ mb: 4, fontWeight: 600 }}>Buying gift for a loved one?</Typography>
              <Typography variant='body2' sx={{ mb: 4 }}>
                Gift wrap and personalized message on card, Only for $2.
              </Typography>

              <Link href='/' passHref>
                <Box
                  component='a'
                  onClick={(e: SyntheticEvent) => e.preventDefault()}
                  sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 600 }}
                >
                  Add a gift wrap
                </Box>
              </Link>
            </Box>
          </CardContent>
          <Divider sx={{ my: 0 }} />
          <CardContent sx={{ p: 4 }}>
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Price Details</Typography>
            <Grid container>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography>Bag Total</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ textAlign: 'right' }}>$1198.00</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography>Coupon Discount</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ textAlign: 'right', color: 'success.main' }}>-$98.00</Typography>
              </Grid>
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
          <Divider sx={{ my: 0 }} />
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

export default StepCart
