// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'

const ChipsSizes: FC = () => {
  return (
    <div className='demo-space-x'>
      <Chip label='Default' />
      <Chip label='Small' size='small' />
    </div>
  )
}

export default ChipsSizes
