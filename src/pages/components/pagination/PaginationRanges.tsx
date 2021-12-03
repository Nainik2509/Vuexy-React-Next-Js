// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationRanges: FC = () => {
  return (
    <div className='demo-space-y'>
      <Pagination count={11} defaultPage={6} siblingCount={0} />
      <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
      <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />
      <Pagination count={11} defaultPage={6} boundaryCount={2} />
    </div>
  )
}

export default PaginationRanges
