// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Box, { BoxProps } from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import DialogTitle from '@mui/material/DialogTitle'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormHelperText from '@mui/material/FormHelperText'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'

// ** Third Party Imports
import Payment from 'payment'
import Cards, { Focused } from 'react-credit-cards'
import { useForm, Controller } from 'react-hook-form'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Styled Component Imports
import CardWrapper from 'src/@core/styles/libs/react-credit-cards'

// ** Util Import
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from 'src/@core/utils/format'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

interface DataType {
  name: string
  imgSrc: string
  imgAlt: string
  cardCvc: string
  expiryDate: string
  cardNumber: string
  cardStatus?: string
  badgeColor?: ThemeColor
}

interface SelectedCardType {
  cvc: string
  name: string
  expiry: string
  cardId: number
  cardNumber: string
  focus: Focused | undefined
}

const defaultValues = {
  cardNumber: ''
}

const CreditCardWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    '& > div:first-of-type': {
      marginBottom: theme.spacing(6)
    }
  },
  [theme.breakpoints.up('xl')]: {
    alignItems: 'center',
    flexDirection: 'row',
    '& > div:first-of-type': {
      marginRight: theme.spacing(6)
    }
  }
}))

const data: DataType[] = [
  {
    cardCvc: '587',
    name: 'Tom McBride',
    expiryDate: '12/24',
    imgAlt: 'Mastercard',
    badgeColor: 'primary',
    cardStatus: 'Primary',
    cardNumber: '5577 0000 5577 9865',
    imgSrc: '/images/logos/mastercard.png'
  },
  {
    cardCvc: '681',
    imgAlt: 'Visa card',
    expiryDate: '02/24',
    name: 'Mildred Wagner',
    cardNumber: '4532 3616 2070 5678',
    imgSrc: '/images/logos/visa.png'
  }
]
const PaymentMethodCard = () => {
  // ** States
  const [name, setName] = useState<string>('')
  const [cvc, setCvc] = useState<string | number>('')
  const [cardNumber, setCardNumber] = useState<string>('')
  const [focus, setFocus] = useState<Focused | undefined>()
  const [expiry, setExpiry] = useState<string | number>('')
  const [openEditCard, setOpenEditCard] = useState<boolean>(false)
  const [paymentMethod, setPaymentMethod] = useState<string>('card')
  const [selectedCard, setSelectedCard] = useState<SelectedCardType | null>(null)

  // ** Hooks
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const handleEditCardClickOpen = (id: number) => {
    setSelectedCard({
      cardId: id,
      focus: undefined,
      name: data[id].name,
      cvc: data[id].cardCvc,
      expiry: data[id].expiryDate,
      cardNumber: data[id].cardNumber
    })
    setOpenEditCard(true)
  }

  const handleEditCardClose = () => {
    setSelectedCard(null)
    setOpenEditCard(false)
  }

  const handleBlur = () => setFocus(undefined)
  const handleSelectedCardBlur = () => setFocus(undefined)

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.name === 'cardNumber') {
      target.value = formatCreditCardNumber(target.value, Payment)
      setCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
      setExpiry(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value, cardNumber, Payment)
      setCvc(target.value)
    }
  }

  const onSubmit = () => {
    return true
  }

  const handleResetForm = () => {
    setCvc('')
    setName('')
    setExpiry('')
    setCardNumber('')
    reset()
  }

  return (
    <>
      <Card sx={{ mb: 4 }}>
        <CardHeader title='Payment Method' />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <FormControl>
                      <RadioGroup
                        row
                        value={paymentMethod}
                        aria-label='payment method'
                        name='account-settings-billing-radio'
                        onChange={e => setPaymentMethod(e.target.value)}
                      >
                        <FormControlLabel
                          value='card'
                          control={<Radio />}
                          label='Credit/Debit/ATM Card'
                          sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                        />
                        <FormControlLabel
                          value='cod'
                          label='COD/Cheque'
                          control={<Radio />}
                          sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  {paymentMethod === 'card' ? (
                    <>
                      <Grid item xs={12}>
                        <CreditCardWrapper>
                          <CardWrapper>
                            <Cards cvc={cvc} focused={focus} expiry={expiry} name={name} number={cardNumber} />
                          </CardWrapper>
                        </CreditCardWrapper>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <Controller
                            name='cardNumber'
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { value, onChange } }) => (
                              <TextField
                                value={value}
                                name='cardNumber'
                                label='Card Number'
                                onBlur={handleBlur}
                                placeholder='0000 0000 0000 0000'
                                error={Boolean(errors.cardNumber)}
                                onFocus={e => setFocus(e.target.name as Focused)}
                                onChange={e => {
                                  onChange(e)
                                  handleInputChange(e as ChangeEvent<HTMLInputElement>)
                                }}
                              />
                            )}
                          />
                          {errors.cardNumber && (
                            <FormHelperText sx={{ color: 'error.main' }}>This field is required</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          name='name'
                          value={name}
                          label='Name'
                          autoComplete='off'
                          onBlur={handleBlur}
                          placeholder='John Doe'
                          onFocus={e => setFocus(e.target.name as Focused)}
                          onChange={e => setName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          fullWidth
                          name='expiry'
                          value={expiry}
                          autoComplete='off'
                          label='Expiry Date'
                          placeholder='MM/YY'
                          onBlur={handleBlur}
                          onChange={handleInputChange}
                          inputProps={{ maxLength: '5' }}
                          onFocus={e => setFocus(e.target.name as Focused)}
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          fullWidth
                          name='cvc'
                          value={cvc}
                          label='CVC Code'
                          autoComplete='off'
                          onBlur={handleBlur}
                          onChange={handleInputChange}
                          onFocus={e => setFocus(e.target.name as Focused)}
                          placeholder={Payment.fns.cardType(cardNumber) === 'amex' ? '1234' : '123'}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Switch defaultChecked />}
                          label='Save Card for future billing?'
                          sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                        />
                      </Grid>
                    </>
                  ) : null}
                </Grid>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography sx={{ mb: 4, fontWeight: 500 }}>My Cards</Typography>
                {data.map((item: DataType, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      p: 5,
                      display: 'flex',
                      borderRadius: 1,
                      flexDirection: ['column', 'row'],
                      justifyContent: ['space-between'],
                      backgroundColor: 'action.hover',
                      alignItems: ['flex-start', 'center'],
                      mb: index !== data.length - 1 ? 4 : undefined
                    }}
                  >
                    <div>
                      <img height='25' alt={item.imgAlt} src={item.imgSrc} />
                      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 500 }}>{item.name}</Typography>
                        {item.cardStatus ? (
                          <CustomChip
                            skin='light'
                            size='small'
                            label={item.cardStatus}
                            color={item.badgeColor}
                            sx={{ height: 20, ml: 2, fontSize: '0.75rem', fontWeight: 600, borderRadius: '5px' }}
                          />
                        ) : null}
                      </Box>
                      <Typography sx={{ color: 'text.secondary' }}>
                        **** **** **** {item.cardNumber.substring(item.cardNumber.length - 4)}
                      </Typography>
                    </div>

                    <Box sx={{ mt: [3, 0], textAlign: ['start', 'end'] }}>
                      <Button variant='outlined' sx={{ mr: 3 }} onClick={() => handleEditCardClickOpen(index)}>
                        Edit
                      </Button>
                      <Button variant='outlined' color='secondary'>
                        Delete
                      </Button>
                      <Typography variant='caption' sx={{ mt: 8, display: 'block', color: 'text.secondary' }}>
                        Card expires at {item.expiryDate}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>

              <Grid item xs={12}>
                <Button type='submit' variant='contained' sx={{ mr: 5 }}>
                  Save Changes
                </Button>
                <Button type='reset' variant='outlined' color='secondary' onClick={handleResetForm}>
                  Reset
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Dialog
        open={openEditCard}
        onClose={handleEditCardClose}
        aria-labelledby='user-view-billing-edit-card'
        sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650, p: [2, 10] } }}
        aria-describedby='user-view-billing-edit-card-description'
      >
        <DialogTitle id='user-view-billing-edit-card' sx={{ textAlign: 'center', fontSize: '1.5rem !important' }}>
          Edit Card
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            variant='body2'
            id='user-view-billing-edit-card-description'
            sx={{ textAlign: 'center', mb: 7 }}
          >
            Edit your saved card details
          </DialogContentText>
          {selectedCard !== null && (
            <form>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <CardWrapper sx={{ '& .rccs': { m: '0 auto' } }}>
                    <Cards
                      cvc={selectedCard.cvc}
                      focused={selectedCard.focus}
                      expiry={selectedCard.expiry}
                      name={selectedCard.name}
                      number={selectedCard.cardNumber}
                    />
                  </CardWrapper>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={6}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name='number'
                        autoComplete='off'
                        label='Card Number'
                        onChange={handleInputChange}
                        onBlur={handleSelectedCardBlur}
                        placeholder='0000 0000 0000 0000'
                        defaultValue={selectedCard.cardNumber}
                        onFocus={e => setSelectedCard({ ...selectedCard, focus: e.target.name as Focused })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        fullWidth
                        name='name'
                        autoComplete='off'
                        label='Name on Card'
                        onBlur={handleSelectedCardBlur}
                        placeholder='John Doe'
                        defaultValue={selectedCard.name}
                        onChange={e => setName(e.target.value)}
                        onFocus={e => setSelectedCard({ ...selectedCard, focus: e.target.name as Focused })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        name='expiry'
                        label='Expiry'
                        placeholder='MM/YY'
                        defaultValue={expiry}
                        onBlur={handleSelectedCardBlur}
                        onChange={handleInputChange}
                        inputProps={{ maxLength: '5' }}
                        onFocus={e => setSelectedCard({ ...selectedCard, focus: e.target.name as Focused })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <FormControl fullWidth>
                        <InputLabel id='user-view-billing-edit-card-status-label'>Card Status</InputLabel>
                        <Select
                          label='Card Status'
                          id='user-view-billing-edit-card-status'
                          labelId='user-view-billing-edit-card-status-label'
                          defaultValue={
                            data[selectedCard.cardId].cardStatus ? data[selectedCard.cardId].cardStatus : ''
                          }
                        >
                          <MenuItem value='Primary'>Primary</MenuItem>
                          <MenuItem value='Expired'>Expired</MenuItem>
                          <MenuItem value='Active'>Active</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        name='cvc'
                        label='CVC'
                        defaultValue={cvc}
                        autoComplete='off'
                        onChange={handleInputChange}
                        onBlur={handleSelectedCardBlur}
                        onFocus={e => setSelectedCard({ ...selectedCard, focus: e.target.name as Focused })}
                        placeholder={Payment.fns.cardType(selectedCard.cardNumber) === 'amex' ? '1234' : '123'}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Switch defaultChecked />}
                        label='Save Card for future billing?'
                        sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button variant='contained' sx={{ mr: 1 }} onClick={handleEditCardClose}>
            Submit
          </Button>
          <Button variant='outlined' color='secondary' onClick={handleEditCardClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default PaymentMethodCard
