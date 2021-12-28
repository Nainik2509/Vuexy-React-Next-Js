// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import toast, { Toaster } from 'react-hot-toast'

// ** Types
import { DateType } from './types'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const PickersCallbacks = () => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date())

  const handlePickerCallback = (msg: string) => {
    toast(msg, { duration: 2000 })
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
      <ReactHotToast>
        <Toaster toastOptions={{ className: 'react-hot-toast' }} />
      </ReactHotToast>
    </Fragment>
  )
}

export default PickersCallbacks
