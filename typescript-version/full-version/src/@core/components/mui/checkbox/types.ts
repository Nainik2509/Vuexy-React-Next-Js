// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { GridProps } from '@mui/material/Grid'
import { CheckboxProps } from '@mui/material/Checkbox'
import { FormControlLabelProps } from '@mui/material/FormControlLabel'

export type customCheckboxProps = {
  value: string
  checkboxProps?: any
  gridProps: GridProps
  formControlLabel?: any
  meta?: string | ReactNode
  title: string | ReactNode
  content?: string | ReactNode
}

export type customCheckboxIconsProps = {
  value: string
  icon: ReactNode
  gridProps: GridProps
  title: string | ReactNode
  content?: string | ReactNode
  checkboxProps?: CheckboxProps
  formControlLabel?: FormControlLabelProps
}

export type customCheckboxImgProps = {
  value: string
  img: ReactNode
  gridProps: GridProps
  checkboxProps?: CheckboxProps
  formControlLabel?: FormControlLabelProps
}

export type CustomCheckboxProps = {
  name: string
  value?: string[]
  data: customCheckboxProps[]
  onChange?: (value: string[]) => void
}

export type CustomCheckboxIconsProps = {
  name: string
  value?: string[]
  data: customCheckboxIconsProps[]
  onChange?: (value: string[]) => void
}

export type CustomCheckboxImgProps = {
  name: string
  value?: string[]
  data: customCheckboxImgProps[]
  onChange?: (value: string[]) => void
}
