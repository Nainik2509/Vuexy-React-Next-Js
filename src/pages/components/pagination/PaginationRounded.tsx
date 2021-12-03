// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationRounded: FC = () => {
  return (
    <div className='demo-space-y'>
      <Pagination count={10} shape='rounded' />
      <Pagination count={10} variant='outlined' shape='rounded' />
    </div>
  )
}

export default PaginationRounded
