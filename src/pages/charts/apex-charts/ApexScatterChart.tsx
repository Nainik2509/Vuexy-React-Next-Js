// ** React Imports
import { MouseEvent, useState } from 'react'

// ** Next Import
import dynamic from 'next/dynamic'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// ** Styled Components
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const scatterColors = {
  series1: '#ff9f43',
  series2: '#7367f0',
  series3: '#28c76f'
}

// ! To avoid Window is not defined Error
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ApexScatterChart = () => {
  // ** State
  const [active, setActive] = useState<string | null>('daily')

  const handleActive = (event: MouseEvent<HTMLElement>, newActive: string | null) => {
    setActive(newActive)
  }

  const options = {
    chart: {
      zoom: {
        enabled: true,
        type: 'xy'
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'start'
    },
    colors: [scatterColors.series1, scatterColors.series2, scatterColors.series3],
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter(val: string) {
          return parseFloat(val).toFixed(1)
        }
      }
    }
  }

  const series = [
    {
      name: 'Angular',
      data: [
        [5.4, 170],
        [5.4, 100],
        [6.3, 170],
        [5.7, 140],
        [5.9, 130],
        [7.0, 150],
        [8.0, 120],
        [9.0, 170],
        [10.0, 190],
        [11.0, 220],
        [12.0, 170],
        [13.0, 230]
      ]
    },
    {
      name: 'Vue',
      data: [
        [14.0, 220],
        [15.0, 280],
        [16.0, 230],
        [18.0, 320],
        [17.5, 280],
        [19.0, 250],
        [20.0, 350],
        [20.5, 320],
        [20.0, 320],
        [19.0, 280],
        [17.0, 280],
        [22.0, 300],
        [18.0, 120]
      ]
    },
    {
      name: 'React',
      data: [
        [14.0, 290],
        [13.0, 190],
        [20.0, 220],
        [21.0, 350],
        [21.5, 290],
        [22.0, 220],
        [23.0, 140],
        [19.0, 400],
        [20.0, 200],
        [22.0, 90],
        [20.0, 120]
      ]
    }
  ]

  return (
    <Card>
      <CardHeader
        title='New Technologies Data'
        titleTypographyProps={{ variant: 'h6' }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { marginBottom: 0 },
          '& .MuiCardHeader-content': { marginBottom: [2, 0] }
        }}
        action={
          <ToggleButtonGroup exclusive value={active} onChange={handleActive}>
            <ToggleButton value='daily'>Daily</ToggleButton>
            <ToggleButton value='monthly'>Monthly</ToggleButton>
            <ToggleButton value='yearly'>Yearly</ToggleButton>
          </ToggleButtonGroup>
        }
      />
      <CardContent>
        <ApexChartWrapper>
          <Chart options={options} series={series} type='scatter' height={400} />
        </ApexChartWrapper>
      </CardContent>
    </Card>
  )
}

export default ApexScatterChart
