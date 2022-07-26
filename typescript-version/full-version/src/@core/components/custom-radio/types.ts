// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { GridProps } from '@mui/material/Grid'

// ** Type Import
import { ThemeColor } from 'src/@core/layouts/types'

export type CustomRadioBasicData = {
  value: string
  meta?: ReactNode
  title: ReactNode
  content?: ReactNode
  gridProps: GridProps
}

export type CustomRadioIconsData = {
  value: string
  icon: ReactNode
  title: ReactNode
  content?: ReactNode
  gridProps: GridProps
}

export type CustomRadioImgData = {
  alt?: string
  value: string
  img: ReactNode
  gridProps: GridProps
}

export type CustomRadioBasicProps = {
  name: string
  value?: string
  color?: ThemeColor
  data: CustomRadioBasicData[]
  onChange?: (value: string | null) => void
}

export type CustomRadioIconsProps = {
  name: string
  value?: string
  color?: ThemeColor
  data: CustomRadioIconsData[]
  onChange?: (value: string | null) => void
}

export type CustomRadioImgProps = {
  name: string
  value?: string
  color?: ThemeColor
  data: CustomRadioImgData[]
  onChange?: (value: string | null) => void
}
