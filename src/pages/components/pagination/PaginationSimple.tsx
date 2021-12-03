// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationSimple: FC = () => {
  return (
    <div className='demo-space-y'>
      <Pagination count={10} />
      <Pagination count={10} color='primary' />
      <Pagination count={10} color='secondary' />
    </div>
  )
}

export default PaginationSimple
