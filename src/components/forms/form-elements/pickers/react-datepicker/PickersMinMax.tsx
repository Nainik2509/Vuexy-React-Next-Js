// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'
import DatePicker from 'react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const PickersMinMax = () => {
  // ** States
  const [minDate, setMinDate] = useState<DateType>(new Date())
  const [maxDate, setMaxDate] = useState<DateType>(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePickerWrapper>
        <DatePicker
          id='min-date'
          selected={minDate}
          minDate={subDays(new Date(), 5)}
          onChange={(date: Date) => setMinDate(date)}
          customInput={<CustomInput label='Min Date' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          id='max-date'
          selected={maxDate}
          maxDate={addDays(new Date(), 5)}
          onChange={(date: Date) => setMaxDate(date)}
          customInput={<CustomInput label='Max Date' />}
        />
      </DatePickerWrapper>
    </Box>
  )
}

export default PickersMinMax
