/* eslint-disable prefer-spread */
// ** React Imports
import { useEffect, useState, forwardRef, SyntheticEvent, ForwardedRef } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import TableRow from '@mui/material/TableRow'
import Collapse from '@mui/material/Collapse'
import TableBody from '@mui/material/TableBody'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Box, { BoxProps } from '@mui/material/Box'
import { styled, alpha } from '@mui/material/styles'
import Grid, { GridProps } from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import TableCell, { TableCellBaseProps } from '@mui/material/TableCell'
import CardContent, { CardContentProps } from '@mui/material/CardContent'

// ** Icon Imports
import Plus from 'mdi-material-ui/Plus'
import Close from 'mdi-material-ui/Close'

// ** Third Party Imports
import axios from 'axios'
import DatePicker from 'react-datepicker'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Types
import { InvoiceType, InvoiceClientType } from 'src/pages/apps/invoice/types'
import { DateType } from 'src/pages/forms/form-elements/pickers/react-datepicker/types'

// ** Custom Component Imports
import Repeater from 'src/@core/components/repeater'

// ** Styles
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

interface PickerProps {
  label?: string
}

interface Props {
  toggleAddCustomerDrawer: () => void
  clients: InvoiceClientType[] | undefined
  selectedClient: InvoiceClientType | null
  setClients: (val: InvoiceClientType[]) => void
  setSelectedClient: (val: InvoiceClientType | null) => void
}

const CustomInput = forwardRef(({ ...props }: PickerProps, ref: ForwardedRef<HTMLElement>) => {
  return <TextField size='small' inputRef={ref} sx={{ width: { sm: '250px', xs: '170px' } }} {...props} />
})

const MUITableCell = styled(TableCell)<TableCellBaseProps>(({ theme }) => ({
  borderBottom: 0,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  paddingTop: `${theme.spacing(1)} !important`,
  paddingBottom: `${theme.spacing(1)} !important`
}))

const CalcWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))

const RepeatingContent = styled(Grid)<GridProps>(({ theme }) => ({
  paddingRight: 0,
  display: 'flex',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  '& .col-title': {
    top: '-1.5rem',
    position: 'absolute'
  },
  [theme.breakpoints.down('lg')]: {
    '& .col-title': {
      top: '0',
      position: 'relative'
    }
  }
}))

const RepeaterWrapper = styled(CardContent)<CardContentProps>(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  '& .repeater-wrapper + .repeater-wrapper': {
    marginTop: theme.spacing(12)
  }
}))

const InvoiceAction = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: theme.spacing(2, 1),
  borderLeft: `1px solid ${theme.palette.divider}`
}))

const CustomSelectItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  backgroundColor: 'transparent !important',
  '&:hover': { backgroundColor: `${alpha(theme.palette.success.main, 0.1)} !important` }
}))

const EditCard = (props: Props) => {
  // ** Props
  const { clients, setClients, selectedClient, setSelectedClient, toggleAddCustomerDrawer } = props

  // ** States
  const [count, setCount] = useState<number>(1)
  const [selected, setSelected] = useState<string>('')
  const [dueDate, setDueDate] = useState<DateType>(new Date())
  const [invoiceNumber, setInvoiceNumber] = useState<number>(0)
  const [issueDate, setIssueDate] = useState<DateType>(new Date())

  useEffect(() => {
    axios.get('/apps/invoice/clients').then(response => {
      if (response.data && clients === undefined) {
        setClients(response.data)
      }
    })
  }, [clients, setClients])

  useEffect(() => {
    axios
      .get('/apps/invoice/invoices', {
        params: { q: '', status: '' }
      })
      .then(response => {
        if (response.data && invoiceNumber === 0) {
          const lastInvoiceNumber = Math.max.apply(
            Math,
            response.data.allData.map((i: InvoiceType) => i.id)
          )
          /* eslint-enable */
          setInvoiceNumber(lastInvoiceNumber + 1)
        }
      })
  }, [invoiceNumber])

  // ** Deletes form
  const deleteForm = (e: SyntheticEvent) => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-wrapper').remove()
  }

  // ** Handle Invoice To Change
  const handleInvoiceChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value)
    if (clients !== undefined) {
      setSelectedClient(clients.filter(i => i.name === event.target.value)[0])
    }
  }

  const handleAddNewCustomer = () => {
    toggleAddCustomerDrawer()
  }

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item lg={6} xs={12} sx={{ mb: { lg: 0, xs: 4 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
                <svg height='20px' viewBox='0 0 30 25' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                  <title>logo</title>
                  <g id='⚛️-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                    <g id='Menu-One' transform='translate(-26.000000, -29.000000)'>
                      <g id='logo' transform='translate(26.000000, 29.000000)'>
                        <path
                          d='M3.05044703,1.88276582 L6.30851155,3.89367518 C6.89872324,4.25795962 7.25806452,4.90202396 7.25806452,5.5956038 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 C-5.7935996e-16,2.48012494 0.8954305,1.58469444 2,1.58469444 C2.37101843,1.58469444 2.73472359,1.68789821 3.05044703,1.88276582 Z'
                          id='Rectangle'
                          fill='#9155FD'
                        />
                        <polygon
                          id='Rectangle'
                          fill='#000000'
                          opacity='0.077704'
                          points='0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646'
                        />
                        <polygon
                          id='Rectangle'
                          fill='#000000'
                          opacity='0.077704'
                          points='0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162'
                        />
                        <path
                          d='M25.7898301,1.87488682 L29.0478946,3.87905791 C29.6395606,4.24301628 30,4.88791238 30,5.58255928 L30,19.4422291 C30,20.1455972 29.6305248,20.7972624 29.0269645,21.1584295 L25.7689,23.1080366 C24.8210687,23.6752135 23.5929119,23.366632 23.0257351,22.4188007 C22.8400159,22.1084381 22.7419355,21.7535219 22.7419355,21.3918362 L22.7419355,3.57838819 C22.7419355,2.47381869 23.637366,1.57838819 24.7419355,1.57838819 C25.1119353,1.57838819 25.4746825,1.68102644 25.7898301,1.87488682 Z'
                          id='Rectangle'
                          fill='#9155FD'
                          transform='translate(26.370968, 12.459677) scale(-1, 1) translate(-26.370968, -12.459677) '
                        />
                        <polygon
                          id='Rectangle'
                          fill='#000000'
                          opacity='0.077704'
                          transform='translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) '
                          points='22.7419355 8.58870968 30 12.7417372 30 16.9537453'
                        />
                        <polygon
                          id='Rectangle'
                          fill='#000000'
                          opacity='0.077704'
                          transform='translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) '
                          points='22.7419355 8.58870968 30 12.6409734 30 15.2601969'
                        />
                        <path
                          d='M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z'
                          id='Rectangle'
                          fill='#9E69FD'
                        />
                        <path
                          d='M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z'
                          id='Rectangle'
                          fill='#B992FE'
                          transform='translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) '
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <Typography variant='h6' sx={{ ml: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
                  {themeConfig.templateName}
                </Typography>
              </Box>
              <Box>
                <Typography variant='body2' sx={{ mb: 1 }}>
                  Office 149, 450 South Brand Brooklyn
                </Typography>
                <Typography variant='body2' sx={{ mb: 1 }}>
                  San Diego County, CA 91905, USA
                </Typography>
                <Typography variant='body2'>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { lg: 'flex-end', xs: 'flex-start' } }}>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mr: 2, width: '105px', fontWeight: 500 }}>
                  Invoice
                </Typography>
                <TextField
                  size='small'
                  value={invoiceNumber}
                  sx={{ width: { sm: '250px', xs: '170px' } }}
                  InputProps={{
                    disabled: true,
                    startAdornment: <InputAdornment position='start'>#</InputAdornment>
                  }}
                />
              </Box>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Typography variant='body2' sx={{ mr: 3, width: '100px' }}>
                  Date Issued:
                </Typography>
                <DatePickerWrapper>
                  <DatePicker
                    id='issue-date'
                    selected={issueDate}
                    customInput={<CustomInput />}
                    onChange={(date: Date) => setIssueDate(date)}
                  />
                </DatePickerWrapper>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='body2' sx={{ mr: 3, width: '100px' }}>
                  Date Due:
                </Typography>
                <DatePickerWrapper>
                  <DatePicker
                    id='due-date'
                    selected={dueDate}
                    customInput={<CustomInput />}
                    onChange={(date: Date) => setDueDate(date)}
                  />
                </DatePickerWrapper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>

      <Divider />

      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={6} lg={8} sx={{ mb: { lg: 0, xs: 4 } }}>
            <Typography variant='body2' sx={{ mb: 3.5, color: 'text.primary', fontWeight: 600 }}>
              Invoice To:
            </Typography>
            <Select size='small' value={selected} onChange={handleInvoiceChange} sx={{ mb: 4, width: '200px' }}>
              <CustomSelectItem value=''>
                <Button
                  fullWidth
                  size='small'
                  color='success'
                  onClick={handleAddNewCustomer}
                  startIcon={<Plus fontSize='small' />}
                  sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                >
                  Add New Customer
                </Button>
              </CustomSelectItem>
              {clients !== undefined &&
                clients.map(client => (
                  <MenuItem key={client.name} value={client.name}>
                    {client.name}
                  </MenuItem>
                ))}
            </Select>
            {selectedClient !== null && selectedClient !== undefined ? (
              <Box>
                <Typography variant='body2' sx={{ mb: 1 }}>
                  {selectedClient.company}
                </Typography>
                <Typography variant='body2' sx={{ mb: 1 }}>
                  {selectedClient.address}
                </Typography>
                <Typography variant='body2' sx={{ mb: 1 }}>
                  {selectedClient.contact}
                </Typography>
                <Typography variant='body2' sx={{ mb: 1 }}>
                  {selectedClient.companyEmail}
                </Typography>
              </Box>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Typography variant='body2' sx={{ mb: 3.5, color: 'text.primary', fontWeight: 600 }}>
              Bill To:
            </Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <MUITableCell>Total Due:</MUITableCell>
                  <MUITableCell>$12,110.55</MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>Bank name:</MUITableCell>
                  <MUITableCell>American Bank</MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>Country:</MUITableCell>
                  <MUITableCell>United States</MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>IBAN:</MUITableCell>
                  <MUITableCell>ETD95476213874685</MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>SWIFT code:</MUITableCell>
                  <MUITableCell>BR91905</MUITableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </CardContent>

      <Divider />

      <RepeaterWrapper>
        <Repeater count={count}>
          {(i: number) => {
            const Tag = i === 0 ? Box : Collapse

            return (
              <Tag key={i} className='repeater-wrapper' {...(i !== 0 ? { in: true } : {})}>
                <Grid container>
                  <RepeatingContent item xs={12}>
                    <Grid container sx={{ py: 4, width: '100%', pr: { lg: 0, xs: 4 } }}>
                      <Grid item lg={6} md={5} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                        <Typography
                          variant='body2'
                          className='col-title'
                          sx={{ fontWeight: '600', mb: { md: 2, xs: 0 } }}
                        >
                          Item
                        </Typography>
                        <Select fullWidth size='small' defaultValue='App Design'>
                          <MenuItem value='App Design'>App Design</MenuItem>
                          <MenuItem value='App Customization'>App Customization</MenuItem>
                          <MenuItem value='ABC Template'>ABC Template</MenuItem>
                          <MenuItem value='App Development'>App Development</MenuItem>
                        </Select>
                        <TextField
                          rows={2}
                          fullWidth
                          multiline
                          size='small'
                          sx={{ mt: 3.5 }}
                          defaultValue='Customization & Bug Fixes'
                        />
                      </Grid>
                      <Grid item lg={2} md={3} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                        <Typography
                          variant='body2'
                          className='col-title'
                          sx={{ fontWeight: '600', mb: { md: 2, xs: 0 } }}
                        >
                          Cost
                        </Typography>
                        <TextField
                          size='small'
                          type='number'
                          placeholder='24'
                          defaultValue='24'
                          InputProps={{ inputProps: { min: 0 } }}
                        />
                        <Box sx={{ mt: 3.5 }}>
                          <Typography component='span' variant='body2'>
                            Discount:
                          </Typography>{' '}
                          <Typography component='span' variant='body2'>
                            0%
                          </Typography>
                          <Tooltip title='Tax 1' placement='top'>
                            <Typography component='span' variant='body2' sx={{ mx: 2 }}>
                              0%
                            </Typography>
                          </Tooltip>
                          <Tooltip title='Tax 2' placement='top'>
                            <Typography component='span' variant='body2'>
                              0%
                            </Typography>
                          </Tooltip>
                        </Box>
                      </Grid>
                      <Grid item lg={2} md={2} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                        <Typography
                          variant='body2'
                          className='col-title'
                          sx={{ fontWeight: '600', mb: { md: 2, xs: 0 } }}
                        >
                          Hours
                        </Typography>
                        <TextField
                          size='small'
                          type='number'
                          placeholder='1'
                          defaultValue='1'
                          InputProps={{ inputProps: { min: 0 } }}
                        />
                      </Grid>
                      <Grid item lg={2} md={1} xs={12} sx={{ px: 4, my: { lg: 0 }, mt: 2 }}>
                        <Typography
                          variant='body2'
                          className='col-title'
                          sx={{ fontWeight: '600', mb: { md: 2, xs: 0 } }}
                        >
                          Price
                        </Typography>
                        <Typography>$24.00</Typography>
                      </Grid>
                    </Grid>
                    <InvoiceAction>
                      <IconButton size='small' onClick={deleteForm}>
                        <Close fontSize='small' />
                      </IconButton>
                    </InvoiceAction>
                  </RepeatingContent>
                </Grid>
              </Tag>
            )
          }}
        </Repeater>

        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={12} sx={{ px: 0 }}>
            <Button
              size='small'
              variant='contained'
              startIcon={<Plus fontSize='small' />}
              onClick={() => setCount(count + 1)}
            >
              Add Item
            </Button>
          </Grid>
        </Grid>
      </RepeaterWrapper>

      <Divider />
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={9} sx={{ order: { sm: 1, xs: 2 } }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
              <Typography variant='body2' sx={{ mr: 2, fontWeight: 600 }}>
                Salesperson:
              </Typography>
              <TextField size='small' sx={{ maxWidth: '150px' }} defaultValue='Tommy Shelby' />
            </Box>
            <TextField size='small' sx={{ maxWidth: '300px' }} placeholder='Thanks for your business' />
          </Grid>
          <Grid item xs={12} sm={3} sx={{ mb: { sm: 0, xs: 4 }, order: { sm: 2, xs: 1 } }}>
            <CalcWrapper>
              <Typography variant='body2'>Subtotal:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                $1800
              </Typography>
            </CalcWrapper>
            <CalcWrapper>
              <Typography variant='body2'>Discount:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                $28
              </Typography>
            </CalcWrapper>
            <CalcWrapper>
              <Typography variant='body2'>Tax:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                21%
              </Typography>
            </CalcWrapper>
            <Divider />
            <CalcWrapper>
              <Typography variant='body2'>Total:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                $1690
              </Typography>
            </CalcWrapper>
          </Grid>
        </Grid>
      </CardContent>

      <Divider />

      <CardContent>
        <InputLabel htmlFor='invoice-note' sx={{ mb: 2 }}>
          Note:
        </InputLabel>
        <TextField
          rows={2}
          fullWidth
          multiline
          id='invoice-note'
          defaultValue='It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!'
        />
      </CardContent>
    </Card>
  )
}

export default EditCard
