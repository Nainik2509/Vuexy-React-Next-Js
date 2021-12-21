// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Component Imports
import { PieChart, Pie, ResponsiveContainer } from 'recharts'

interface CardStatsPieProps {
  title: string
  color?: string
  bgColor?: string
  subtitle: string
  data: { value: string | number }[]
}

const CardStatisticsPie = (props: CardStatsPieProps) => {
  // ** Props
  const { data, title, color, subtitle, bgColor } = props

  // ** Hook
  const theme = useTheme()

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, name } = props

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN) + 40

    return name !== 'data' ? (
      <text
        x={x}
        y={y}
        fontWeight='600'
        fontSize='1.25rem'
        textAnchor='middle'
        dominantBaseline='hanging'
        fill={`rgba(${theme.palette.customColors.main}, 0.87)`}
      >
        78%
      </text>
    ) : null
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h6' sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Box sx={{ height: 150 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                cx='50%'
                cy={100}
                labelLine={false}
                legendType='none'
                endAngle={0}
                dataKey='value'
                startAngle={180}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                data={[{ value: 100 }]}
                fill={bgColor || '#fafafa'}
                label={renderCustomizedLabel}
              />
              <Pie
                cx='50%'
                cy={100}
                labelLine={false}
                legendType='none'
                data={data}
                name='data'
                endAngle={50}
                dataKey='value'
                startAngle={180}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                fill={color || '#16b1ff'}
                label={renderCustomizedLabel}
              />
            </PieChart>
          </ResponsiveContainer>
        </Box>
        <Typography variant='body2' sx={{ fontWeight: 600, textAlign: 'center' }}>
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardStatisticsPie
