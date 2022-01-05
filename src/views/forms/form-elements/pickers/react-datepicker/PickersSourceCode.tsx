export const PickersCallbacksCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import toast, { Toaster } from 'react-hot-toast'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

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
            onCalendarOpen={() => handlePickerCallback(Selected Date: {new Date(date || '').toLocaleDateString()})}
            onCalendarClose={() => handlePickerCallback(Selected Date: {new Date(date || '').toLocaleDateString()})}
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
              handlePickerCallback(Selected Date: {new Date(date || '').toLocaleDateString()})
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
`}</code></pre>) 
export const PickersCustomizationCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
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

const PickersCustomization = () => {
  // ** States
  const [dateFormat, setDateFormat] = useState<DateType>(new Date())
  const [dateHighlight, setDateHighlight] = useState<DateType>(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePickerWrapper>
        <DatePicker
          id='custom-format'
          selected={dateFormat}
          dateFormat='MMMM d, yyyy h:mm aa'
          onChange={(date: Date) => setDateFormat(date)}
          customInput={<CustomInput label='Custom Date Format' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          id='highlight-dates'
          selected={dateHighlight}
          onChange={(date: Date) => setDateHighlight(date)}
          customInput={<CustomInput label='Highlight Dates' />}
          highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
        />
      </DatePickerWrapper>
    </Box>
  )
}

export default PickersCustomization
`}</code></pre>) 
export const PickersMinMaxCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
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
`}</code></pre>) 
export const PickersBasicCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const PickersBasic = () => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePickerWrapper>
        <DatePicker
          selected={date}
          id='basic-input'
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomInput label='Basic' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          disabled
          selected={date}
          id='disabled-input'
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomInput label='Disabled' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          readOnly
          selected={date}
          id='read-only-input'
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomInput label='Readonly' />}
        />
      </DatePickerWrapper>
    </Box>
  )
}

export default PickersBasic
`}</code></pre>) 
export const PickersCustomInputCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { forwardRef } from 'react'

// ** MUI Imports
import TextField from '@mui/material/TextField'

interface PickerProps {
  label?: string
}

const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
  return <TextField inputRef={ref} {...props} label={props.label || ''} />
})

export default PickersComponent
`}</code></pre>) 
export const PickersMonthYearDropdownsCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
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

const PickersMonthYearDropdowns = () => {
  // ** States
  const [year, setYear] = useState<DateType>(new Date())
  const [month, setMonth] = useState<DateType>(new Date())
  const [monthYear, setMonthYear] = useState<DateType>(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePickerWrapper>
        <DatePicker
          selected={month}
          showMonthDropdown
          id='month-dropdown'
          placeholderText='MM-DD-YYYY'
          onChange={(date: Date) => setMonth(date)}
          customInput={<CustomInput label='Month Dropdown' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          selected={year}
          showYearDropdown
          id='year-dropdown'
          placeholderText='MM-DD-YYYY'
          onChange={(date: Date) => setYear(date)}
          customInput={<CustomInput label='Year Dropdown' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          showYearDropdown
          showMonthDropdown
          selected={monthYear}
          id='month-year-dropdown'
          placeholderText='MM-DD-YYYY'
          onChange={(date: Date) => setMonthYear(date)}
          customInput={<CustomInput label='Month & Year Dropdown' />}
        />
      </DatePickerWrapper>
    </Box>
  )
}

export default PickersMonthYearDropdowns
`}</code></pre>) 
export const PickersIncludeExcludeCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'
import setHours from 'date-fns/setHours'
import DatePicker from 'react-datepicker'
import setMinutes from 'date-fns/setMinutes'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const PickersIncludeExclude = () => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date())
  const [dateExclude, setDateExclude] = useState<DateType>(new Date())
  const [time, setTime] = useState<DateType>(setHours(setMinutes(new Date(), 30), 16))
  const [timeExclude, setTimeExclude] = useState<DateType>(setHours(setMinutes(new Date(), 30), 16))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePickerWrapper>
        <DatePicker
          selected={date}
          id='include-dates'
          onChange={(date: Date) => setDate(date)}
          customInput={<CustomInput label='Include Dates' />}
          includeDates={[new Date(), addDays(new Date(), 1)]}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          id='exclude-dates'
          selected={dateExclude}
          onChange={(date: Date) => setDateExclude(date)}
          customInput={<CustomInput label='Exclude Dates' />}
          excludeDates={[subDays(new Date(), 1), subDays(new Date(), 2)]}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          showTimeSelect
          selected={time}
          id='include-time'
          dateFormat='MM/dd/yyyy h:mm aa'
          onChange={(date: Date) => setTime(date)}
          customInput={<CustomInput label='Include Time' />}
          includeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17)
          ]}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          showTimeSelect
          id='exclude-time'
          selected={timeExclude}
          dateFormat='MM/dd/yyyy h:mm aa'
          onChange={(date: Date) => setTimeExclude(date)}
          customInput={<CustomInput label='Exclude Time' />}
          excludeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17)
          ]}
        />
      </DatePickerWrapper>
    </Box>
  )
}

export default PickersIncludeExclude
`}</code></pre>) 
export const PickersOptionsCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
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
`}</code></pre>) 
export const PickersMonthYearQuarterCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
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

const PickersMonthYear = () => {
  // ** States
  const [year, setYear] = useState<DateType>(new Date())
  const [month, setMonth] = useState<DateType>(new Date())
  const [quarter, setQuarter] = useState<DateType>(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePickerWrapper>
        <DatePicker
          selected={month}
          id='month-picker'
          showMonthYearPicker
          dateFormat='MM/yyyy'
          onChange={(date: Date) => setMonth(date)}
          customInput={<CustomInput label='Month Picker' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          showYearPicker
          selected={year}
          id='year-picker'
          dateFormat='MM/yyyy'
          onChange={(date: Date) => setYear(date)}
          customInput={<CustomInput label='Year Picker' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          selected={quarter}
          id='quarter-picker'
          showQuarterYearPicker
          dateFormat='yyyy, QQQ'
          onChange={(date: Date) => setQuarter(date)}
          customInput={<CustomInput label='Quarter Picker' />}
        />
      </DatePickerWrapper>
    </Box>
  )
}

export default PickersMonthYear
`}</code></pre>) 
export const PickersLocaleCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import { Locale } from 'date-fns'
import fr from 'date-fns/locale/fr'
import ar from 'date-fns/locale/ar-SA'
import en from 'date-fns/locale/en-US'
import { useTranslation } from 'react-i18next'
import DatePicker, { registerLocale } from 'react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const langObj: { [key: string]: Locale } = { fr, ar, en }

const PickersLocale = () => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date())
  const [time, setTime] = useState<DateType>(new Date())

  // ** Hooks
  const { i18n } = useTranslation()

  registerLocale(i18n.language, langObj[i18n.language])

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePickerWrapper>
        <DatePicker
          selected={date}
          id='locale-picker'
          locale={i18n.language}
          onChange={(date: Date) => setDate(date)}
          customInput={<CustomInput label='Locale Dates' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          showTimeSelect
          selected={time}
          id='locale-time'
          locale={i18n.language}
          dateFormat='MM/dd/yyyy h:mm aa'
          onChange={(date: Date) => setTime(date)}
          customInput={<CustomInput label='Locale Time' />}
        />
      </DatePickerWrapper>
    </Box>
  )
}

export default PickersLocale
`}</code></pre>) 
export const PickersRangeCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

interface PickerProps {
  label?: string
  end: Date | number
  start: Date | number
}

const PickersRange = () => {
  // ** States
  const [endDate, setEndDate] = useState<DateType>(null)
  const [startDate, setStartDate] = useState<DateType>(new Date())
  const [endDateRange, setEndDateRange] = useState<DateType>(null)
  const [startDateRange, setStartDateRange] = useState<DateType>(new Date())

  const handleOnChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const handleOnChangeRange = (dates: any) => {
    const [start, end] = dates
    setStartDateRange(start)
    setEndDateRange(end)
  }

  const CustomInput = forwardRef((props: PickerProps, ref) => {
    const startDate = format(props.start, 'MM/dd/yyyy')
    const endDate = props.end !== null ?  - {format(props.end, 'MM/dd/yyyy')} : null

    const value = {startDate}{endDate !== null ? endDate : ''}

    return <TextField inputRef={ref} label={props.label || ''} {...props} value={value} />
  })

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePickerWrapper>
        <DatePicker
          selectsRange
          endDate={endDate}
          selected={startDate}
          startDate={startDate}
          id='date-range-picker'
          onChange={handleOnChange}
          shouldCloseOnSelect={false}
          customInput={
            <CustomInput label='Date Range' start={startDate as Date | number} end={endDate as Date | number} />
          }
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          selectsRange
          monthsShown={2}
          endDate={endDateRange}
          selected={startDateRange}
          startDate={startDateRange}
          shouldCloseOnSelect={false}
          id='date-range-picker-months'
          onChange={handleOnChangeRange}
          customInput={
            <CustomInput
              label='Multiple Months'
              end={endDateRange as Date | number}
              start={startDateRange as Date | number}
            />
          }
        />
      </DatePickerWrapper>
    </Box>
  )
}

export default PickersRange
`}</code></pre>) 
export const PickersTimeCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

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
`}</code></pre>) 
export const PickersSpecificRangeCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import addDays from 'date-fns/addDays'
import setHours from 'date-fns/setHours'
import DatePicker from 'react-datepicker'
import setMinutes from 'date-fns/setMinutes'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const PickersSpecificRange = () => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date())
  const [time, setTime] = useState<DateType>(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <DatePickerWrapper>
        <DatePicker
          selected={date}
          id='specific-date'
          minDate={new Date()}
          maxDate={addDays(new Date(), 5)}
          onChange={(date: Date) => setDate(date)}
          customInput={<CustomInput label='Specific Date Range' />}
        />
      </DatePickerWrapper>
      <DatePickerWrapper>
        <DatePicker
          showTimeSelect
          selected={time}
          id='specific-time'
          dateFormat='MM/dd/yyyy h:mm aa'
          onChange={(date: Date) => setTime(date)}
          minTime={setHours(setMinutes(new Date(), 0), 17)}
          maxTime={setHours(setMinutes(new Date(), 30), 20)}
          customInput={<CustomInput label='Specific Time' />}
        />
      </DatePickerWrapper>
    </Box>
  )
}

export default PickersSpecificRange
`}</code></pre>) 
