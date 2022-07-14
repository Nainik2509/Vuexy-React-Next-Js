// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Component Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

interface YRange {
  min: number
  max: number
}

const generateDataHeat = (count: number, yrange: YRange) => {
  let i = 0
  const series = []
  while (i < count) {
    const x = `w${(i + 1).toString()}`
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    series.push({
      x,
      y
    })
    i += 1
  }

  return series
}

const ApexHeatmapChart = () => {
  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 10,
              name: '0-10',
              color: '#b9b3f8'
            },
            {
              from: 11,
              to: 20,
              name: '10-20',
              color: '#aba4f6'
            },
            {
              from: 21,
              to: 30,
              name: '20-30',
              color: '#9d95f5'
            },
            {
              from: 31,
              to: 40,
              name: '30-40',
              color: '#8f85f3'
            },
            {
              from: 41,
              to: 50,
              name: '40-50',
              color: '#8176f2'
            },
            {
              from: 51,
              to: 60,
              name: '50-60',
              color: '#7367f0'
            }
          ]
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'bottom'
    },
    grid: {
      padding: {
        top: -20
      }
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    }
  }

  const series = [
    {
      name: 'SUN',
      data: generateDataHeat(24, {
        min: 0,
        max: 60
      })
    },
    {
      name: 'MON',
      data: generateDataHeat(24, {
        min: 0,
        max: 60
      })
    },
    {
      name: 'TUE',
      data: generateDataHeat(24, {
        min: 0,
        max: 60
      })
    },
    {
      name: 'WED',
      data: generateDataHeat(24, {
        min: 0,
        max: 60
      })
    },
    {
      name: 'THU',
      data: generateDataHeat(24, {
        min: 0,
        max: 60
      })
    },
    {
      name: 'FRI',
      data: generateDataHeat(24, {
        min: 0,
        max: 60
      })
    },
    {
      name: 'SAT',
      data: generateDataHeat(24, {
        min: 0,
        max: 60
      })
    }
  ]

  return (
    <Card>
      <CardHeader
        title='Daily Sales States'
        action={
          <OptionsMenu
            iconProps={{ fontSize: 'small' }}
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', className: 'card-more-options', sx: { color: 'text.secondary' } }}
          />
        }
      />
      <CardContent>
        <ReactApexcharts options={options} series={series} type='heatmap' height={400} />
      </CardContent>
    </Card>
  )
}

export default ApexHeatmapChart
