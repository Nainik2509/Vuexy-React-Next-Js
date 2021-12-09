// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Types
import { DateType } from './types'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Styled Components
import DatePickerWrapper from '@core/styles/libs/react-datepicker'

const PickersCallbacks = () => {
  // ** States
  const [msg, setMsg] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const [date, setDate] = useState<DateType>(new Date())

  const handlePickerCallback = (msg: string) => {
    setOpen(true)
    setMsg(msg)
    setTimeout(() => {
      setOpen(false)
      setMsg('')
    }, 2000)
  }

  return (
    <Fragment>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
        <DatePickerWrapper>
          <DatePicker
            selected={date}
            id='callback-open'
            dateFormat='MM/dd/yyyy'
            onChange={(date: Date) => setDate(date)}
            customInput={<CustomInput label='Open & Closed' />}
            onCalendarOpen={() => handlePickerCallback(`Selected Date: ${new Date(date || '').toLocaleDateString()}`)}
            onCalendarClose={() => handlePickerCallback(`Selected Date: ${new Date(date || '').toLocaleDateString()}`)}
          />
        </DatePickerWrapper>
        <DatePickerWrapper>
          <DatePicker
            selected={date}
            id='callback-blur'
            onChange={(date: Date) => setDate(date)}
            customInput={<CustomInput label='Blur' />}
            onBlur={() => handlePickerCallback('Picker Closed')}
          />
        </DatePickerWrapper>
        <DatePickerWrapper>
          <DatePicker
            selected={date}
            id='callback-change'
            customInput={<CustomInput label='onChange' />}
            onChange={(date: Date) => {
              setDate(date)
              handlePickerCallback(`Selected Date: ${new Date(date || '').toLocaleDateString()}`)
            }}
          />
        </DatePickerWrapper>
      </Box>
      <Snackbar open={open} autoHideDuration={250}>
        <Alert variant='filled' severity='success'>
          {msg}
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

export default PickersCallbacks
