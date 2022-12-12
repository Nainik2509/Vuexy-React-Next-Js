// ** Types
import { ApexOptions } from 'apexcharts'
import { SxProps, Theme } from '@mui/material'
import { ThemeColor } from 'src/@core/layouts/types'

export type CardStatsSquareProps = {
  icon: string
  stats: string
  title: string
  sx?: SxProps<Theme>
  avatarSize?: number
  avatarColor?: ThemeColor
  iconSize?: number | string
}

export type CardStatsHorizontalProps = {
  icon: string
  stats: string
  title: string
  sx?: SxProps<Theme>
  avatarSize?: number
  avatarColor?: ThemeColor
  iconSize?: number | string
}

export type CardStatsWithAreaChartProps = {
  stats: string
  title: string
  avatarIcon: string
  sx?: SxProps<Theme>
  avatarSize?: number
  chartColor?: ThemeColor
  avatarColor?: ThemeColor
  avatarIconSize?: number | string
  chartSeries: ApexOptions['series']
}

export type CardStatsVerticalProps = {
  stats: string
  title: string
  subtitle: string
  trendDiff: string
  avatarIcon: string
  sx?: SxProps<Theme>
  avatarSize?: number
  avatarColor?: ThemeColor
  iconSize?: number | string
  trend?: 'positive' | 'negative'
}
