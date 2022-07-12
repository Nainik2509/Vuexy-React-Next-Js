// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Alert from '@mui/material/Alert'
import TabPanel from '@mui/lab/TabPanel'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import AlertTitle from '@mui/material/AlertTitle'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Icons Imports
import TagOutline from 'mdi-material-ui/TagOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minWidth: 81,
    minHeight: 38,
    borderRadius: theme.shape.borderRadius
  }
}))

const StepPayment = ({ handleNext }: { handleNext: () => void }) => {
  // ** State
  const [value, setValue] = useState<string>('cc')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={8} xl={9}>
        <Alert severity='success' icon={<TagOutline />} sx={{ mb: 4 }}>
          <AlertTitle>Bank Offers</AlertTitle>
          <Box>
            <Typography sx={{ color: 'success.main' }}>
              - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards
            </Typography>
          </Box>
        </Alert>
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label='customized tabs example'>
            <Tab value='cc' label='Card' />
            <Tab value='cod' label='Cash On Delivery' />
            <Tab value='gc' label='Gift Card' />
          </TabList>
          <Grid container sx={{ mt: 5 }}>
            <Grid item lg={6} md={8} xs={12}>
              <TabPanel value='cc'>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextField fullWidth type='number' label='Card Number' placeholder='1356 3215 6548 7898' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth label='Name' placeholder='John Doe' />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField fullWidth label='Expiry Date' placeholder='MM/YY' />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      fullWidth
                      label='CVV'
                      placeholder='654'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='start'>
                            <Tooltip title='Card Verification Value'>
                              <HelpCircleOutline fontSize='small' sx={{ cursor: 'pointer' }} />
                            </Tooltip>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label='Save Card for future billing?'
                      sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant='contained' sx={{ mr: 3.5 }} onClick={handleNext}>
                      Save Changes
                    </Button>
                    <Button type='reset' variant='outlined' color='secondary'>
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value='cod'>
                <Typography sx={{ mb: 4 }}>
                  Cash on Delivery is a type of payment method where the recipient make payment for the order at the
                  time of delivery rather than in advance.
                </Typography>
                <Button variant='contained' onClick={handleNext}>
                  Pay On Delivery
                </Button>
              </TabPanel>
              <TabPanel value='gc'>
                <Typography sx={{ mb: 4, fontWeight: 500 }}>Enter Gift Card Details</Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextField fullWidth type='number' label='Gift Card Number' placeholder='Gift Card Number' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth type='number' label='Gift Card Pin' placeholder='Gift Card Pin' />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant='contained' onClick={handleNext}>
                      Redeem Gift Card
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
            </Grid>
          </Grid>
        </TabContext>
      </Grid>
      <Grid item xs={12} lg={4} xl={3}>
        <Card sx={{ mb: 4, background: 'transparent', boxShadow: 'none', border: '1px solid', borderColor: 'divider' }}>
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
          <Divider sx={{ my: '0 !important' }} />
          <CardContent sx={{ p: 4 }}>
            <Grid container sx={{ mb: 4 }}>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ fontWeight: 700 }}>Total</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ textAlign: 'right' }}>$1100.00</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 700 }}>Deliver to:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ textAlign: 'right' }}>
                  <CustomChip rounded size='small' skin='light' color='primary' label='Home' />
                </Box>
              </Grid>
            </Grid>

            <Box component='address' sx={{ mb: 4.5, fontStyle: 'normal' }}>
              <Box component='span' sx={{ fontWeight: 600 }}>
                {' '}
                John Doe (Default),
              </Box>
              <br />
              4135 Parkway Street,
              <br />
              Los Angeles, CA, 90017.
              <br />
              Mobile : +1 906 568 2332
            </Box>
            <Link href='/' passHref>
              <Box
                component='a'
                onClick={(e: SyntheticEvent) => e.preventDefault()}
                sx={{ mr: 2, color: 'primary.main', textDecoration: 'none' }}
              >
                Change address
              </Box>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default StepPayment
