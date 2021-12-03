// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'

const ChipsVariants: FC = () => {
  return (
    <div className='demo-space-x'>
      <Chip label='Basic' />
      <Chip label='Outlined' variant='outlined' />
    </div>
  )
}

export default ChipsVariants
