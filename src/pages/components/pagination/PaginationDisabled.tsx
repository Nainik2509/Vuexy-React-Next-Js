// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationDisabled: FC = () => {
  return (
    <div className='demo-space-y'>
      <Pagination count={10} disabled />
      <Pagination count={10} variant='outlined' disabled />
    </div>
  )
}

export default PaginationDisabled
