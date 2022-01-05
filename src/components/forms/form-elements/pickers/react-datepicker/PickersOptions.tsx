// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const PickersOptions = () => {
  // ** States
  const [dateOpen, setDateOpen] = useState<DateType>(null)
  const [dateClear, setDateClear] = useState<DateType>(new Date())
  const [dateTodayBtn, setDateTodayBtn] = useState<DateType>(null)
  const [dateFilter, setDateFilter] = useState<DateType>(new Date())
  const [dateWeekNum, setDateWeekNum] = useState<DateType>(new Date())

  const isWeekday = (date: Date) => {
    const day = new Date(date).getDay()

    return day !== 0 && day !== 6
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePickerWrapper>
        <DatePicker
          isClearable
          id='picker-clear'
          selected={dateClear}
          customInput={<CustomInput label='Clear' />}
          onChange={(date: Date) => setDateClear(date)}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          showWeekNumbers
          id='picker-week-num'
          selected={dateWeekNum}
          onChange={(date: Date) => setDateWeekNum(date)}
          customInput={<CustomInput label='Week Numbers' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          id='picker-filter'
          selected={dateFilter}
          filterDate={isWeekday}
          onChange={(date: Date) => setDateFilter(date)}
          customInput={<CustomInput label='Filter Dates' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          selected={dateOpen}
          id='picker-open-date'
          openToDate={new Date('1993/09/28')}
          onChange={(date: Date) => setDateOpen(date)}
          customInput={<CustomInput label='Open To Date' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          todayButton='Today'
          selected={dateTodayBtn}
          id='picker-date-today-btn'
          onChange={(date: Date) => setDateTodayBtn(date)}
          customInput={<CustomInput label='Date Today Button' />}
        />
      </DatePickerWrapper>
    </Box>
  )
}

export default PickersOptions
