// ** Next Import
import dynamic from 'next/dynamic'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Styled Components
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const radialBarColors = {
  series1: '#fdd835',
  series2: '#32baff',
  series3: '#00d4bd',
  series4: '#7367f0',
  series5: '#FFA1A1'
}

// ! To avoid Window is not defined Error
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ApexRadialBarChart = () => {
  const options = {
    colors: [radialBarColors.series1, radialBarColors.series2, radialBarColors.series4],
    plotOptions: {
      radialBar: {
        size: 185,
        hollow: {
          size: '30%'
        },
        track: {
          margin: 15
        },
        dataLabels: {
          name: {
            fontSize: '2rem',
            fontFamily: 'Montserrat'
          },
          value: {
            fontSize: '1rem',
            fontFamily: 'Montserrat'
          },
          total: {
            show: true,
            label: 'Comments',
            fontSize: '1.125rem'
          }
        }
      }
    },
    grid: {
      padding: {
        top: -35,
        bottom: -30
      }
    },
    legend: {
      show: true,
      position: 'bottom'
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Comments', 'Replies', 'Shares']
  }

  return (
    <Card>
      <CardHeader title='Statistics' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <ApexChartWrapper>
          <Chart options={options} series={[80, 50, 35]} type='radialBar' height={400} />
        </ApexChartWrapper>
      </CardContent>
    </Card>
  )
}

export default ApexRadialBarChart
