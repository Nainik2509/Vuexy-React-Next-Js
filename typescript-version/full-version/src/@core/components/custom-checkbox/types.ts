// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { GridProps } from '@mui/material/Grid'

// ** Type Import
import { ThemeColor } from 'src/@core/layouts/types'

export type CustomCheckboxBasicData = {
  name?: string
  value: string
  meta?: ReactNode
  title: ReactNode
  content?: ReactNode
  gridProps: GridProps
}

export type CustomCheckboxIconsData = {
  name?: string
  value: string
  icon: ReactNode
  title: ReactNode
  content?: ReactNode
  gridProps: GridProps
}

export type CustomCheckboxImgData = {
  alt?: string
  name?: string
  value: string
  img: ReactNode
  gridProps: GridProps
}

export type CustomCheckboxBasicProps = {
  name: string
  value?: string[]
  color?: ThemeColor
  data: CustomCheckboxBasicData[]
  onChange?: (value: string[]) => void
}

export type CustomCheckboxIconsProps = {
  name: string
  value?: string[]
  color?: ThemeColor
  data: CustomCheckboxIconsData[]
  onChange?: (value: string[]) => void
}

export type CustomCheckboxImgProps = {
  name: string
  value?: string[]
  color?: ThemeColor
  data: CustomCheckboxImgData[]
  onChange?: (value: string[]) => void
}
