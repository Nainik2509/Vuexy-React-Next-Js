// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'

const ChipsDisabled: FC = () => {
  return (
    <div className='demo-space-x'>
      <Chip label='Basic' disabled />
      <Chip label='Outlined' variant='outlined' disabled />
    </div>
  )
}

export default ChipsDisabled
