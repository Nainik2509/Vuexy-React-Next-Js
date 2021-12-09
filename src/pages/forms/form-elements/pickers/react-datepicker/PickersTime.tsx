// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Types
import { DateType } from './types'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Styled Components
import DatePickerWrapper from '@core/styles/libs/react-datepicker'

const PickersTime = () => {
  // ** States
  const [time, setTime] = useState<DateType>(new Date())
  const [dateTime, setDateTime] = useState<DateType>(new Date())
  const [customTime, setCustomTime] = useState<DateType>(new Date())

  const CustomTimeInput = (props: any) => {
    return (
      <TextField
        {...props}
        size='small'
        value={props.value}
        sx={{ maxWidth: '190px' }}
        onChange={e => props.onChange(e.target.value)}
      />
    )
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePickerWrapper>
        <DatePicker
          showTimeSelect
          selected={time}
          timeIntervals={15}
          showTimeSelectOnly
          dateFormat='h:mm aa'
          id='time-only-picker'
          timeCaption='Time Picker'
          onChange={(date: Date) => setTime(date)}
          customInput={<CustomInput label='Time Only' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          selected={dateTime}
          id='date-time-picker'
          timeCaption='Time Picker'
          dateFormat='MM/dd/yyyy h:mm aa'
          onChange={(date: Date) => setDateTime(date)}
          customInput={<CustomInput label='Date & Time' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          showTimeInput
          selected={customTime}
          id='custom-time-input'
          customTimeInput={<CustomTimeInput />}
          onChange={(date: Date) => setCustomTime(date)}
          customInput={<CustomInput label='Custom Time Input' />}
        />
      </DatePickerWrapper>
    </Box>
  )
}

export default PickersTime
