// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { GridProps } from '@mui/material/Grid'
import { RadioProps } from '@mui/material/Radio'
import { FormControlLabelProps } from '@mui/material/FormControlLabel'

export type customRadioBasicProps = {
  value: string
  gridProps: GridProps
  radioProps?: RadioProps
  meta?: string | ReactNode
  title: string | ReactNode
  content?: string | ReactNode
  formControlLabel?: FormControlLabelProps
}

export type customRadioIconsProps = {
  value: string
  icon: ReactNode
  gridProps: GridProps
  radioProps?: RadioProps
  title: string | ReactNode
  content?: string | ReactNode
  formControlLabel?: FormControlLabelProps
}
export type customRadioImgProps = {
  value: string
  gridProps: GridProps
  img: ReactNode | string
  radioProps?: RadioProps
  formControlLabel?: FormControlLabelProps
}

export type CustomRadioBasicProps = {
  name: string
  value?: string
  data: customRadioBasicProps[]
  onChange?: (value: string | null) => void
}

export type CustomRadioIconsProps = {
  name: string
  value?: string
  data: customRadioIconsProps[]
  onChange?: (value: string | null) => void
}

export type CustomRadioImgProps = {
  name: string
  value?: string
  data: customRadioImgProps[]
  onChange?: (value: string | null) => void
}
