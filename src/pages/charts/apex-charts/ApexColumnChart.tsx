// ** React Imports
import { forwardRef, useState } from 'react'

// ** Next Import
import dynamic from 'next/dynamic'

// ** MUI Imports
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'

// ** Icons Imports
import BellOutline from 'mdi-material-ui/BellOutline'
import ChevronDown from 'mdi-material-ui/ChevronDown'

// ** Types
import { DateType } from 'views/forms/forms/form-elements/pickers/react-datepicker/types'

// ** Styled Components
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const columnColors = {
  bg: '#f8d3ff',
  series1: '#826af9',
  series2: '#d2b0ff'
}

// ! To avoid Window is not defined Error
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ApexColumnChart = () => {
  // ** States
  const [endDate, setEndDate] = useState<DateType>(null)
  const [startDate, setStartDate] = useState<DateType>(new Date())

  const options = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '15%',
        colors: {
          backgroundBarRadius: 10,
          backgroundBarColors: [columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg]
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'top',
      horizontalAlign: 'start'
    },
    colors: [columnColors.series1, columnColors.series2],
    stroke: {
      show: true,
      colors: ['transparent']
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12']
    },
    fill: {
      opacity: 1
    }
  }

  const series = [
    {
      name: 'Apple',
      data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 180]
    },
    {
      name: 'Samsung',
      data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20]
    }
  ]

  const CustomInput = forwardRef(({ ...props }: any, ref) => {
    const startDate = format(props.start, 'MM/dd/yyyy')
    const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return (
      <TextField
        label=''
        {...props}
        size='small'
        value={value}
        inputRef={ref}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <BellOutline />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <ChevronDown />
            </InputAdornment>
          )
        }}
      />
    )
  })

  const handleOnChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <Card>
      <CardHeader
        title='Data Science'
        titleTypographyProps={{ variant: 'h6' }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { marginBottom: 0 },
          '& .MuiCardHeader-content': { marginBottom: [2, 0] }
        }}
        action={
          <DatePickerWrapper>
            <DatePicker
              selectsRange
              endDate={endDate}
              selected={startDate}
              id='apexchart-column'
              startDate={startDate}
              onChange={handleOnChange}
              placeholderText='Click to select a date'
              customInput={<CustomInput start={startDate} end={endDate} />}
            />
          </DatePickerWrapper>
        }
      />
      <CardContent>
        <ApexChartWrapper>
          <Chart options={options} series={series} type='bar' height={400} />
        </ApexChartWrapper>
      </CardContent>
    </Card>
  )
}

export default ApexColumnChart
