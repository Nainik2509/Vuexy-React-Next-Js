// ** React Imports
import { forwardRef } from 'react'

// ** MUI Imports
import TextField from '@mui/material/TextField'

interface PickerProps {
  label?: string
}

const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
  return <TextField inputRef={ref} {...props} label={props.label || ''} />
})

export default PickersComponent
