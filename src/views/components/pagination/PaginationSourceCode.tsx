export const PaginationDisabledCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationDisabled = () => {
  return (
    <div className='demo-space-y'>
      <Pagination count={10} disabled />
      <Pagination count={10} variant='outlined' disabled />
    </div>
  )
}

export default PaginationDisabled
`}</code></pre>) 
export const PaginationButtonsCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationButtons = () => {
  return (
    <div className='demo-space-y'>
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </div>
  )
}

export default PaginationButtons
`}</code></pre>) 
export const PaginationOutlinedCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationOutlined = () => {
  return (
    <div className='demo-space-y'>
      <Pagination count={10} variant='outlined' />
      <Pagination count={10} variant='outlined' color='primary' />
      <Pagination count={10} variant='outlined' color='secondary' />
    </div>
  )
}

export default PaginationOutlined
`}</code></pre>) 
export const PaginationControlledCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'

const PaginationControlled = () => {
  // ** State
  const [page, setPage] = useState<number>(1)

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <div>
      <Typography sx={{ mb: 2 }}>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  )
}

export default PaginationControlled
`}</code></pre>) 
export const PaginationRoundedCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationRounded = () => {
  return (
    <div className='demo-space-y'>
      <Pagination count={10} shape='rounded' />
      <Pagination count={10} variant='outlined' shape='rounded' />
    </div>
  )
}

export default PaginationRounded
`}</code></pre>) 
export const PaginationRangesCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationRanges = () => {
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
`}</code></pre>) 
export const PaginationSimpleCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationSimple = () => {
  return (
    <div className='demo-space-y'>
      <Pagination count={10} />
      <Pagination count={10} color='primary' />
      <Pagination count={10} color='secondary' />
    </div>
  )
}

export default PaginationSimple
`}</code></pre>) 
export const PaginationSizesCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationSizes = () => {
  return (
    <div className='demo-space-y'>
      <Pagination count={10} size='small' />
      <Pagination count={10} />
      <Pagination count={10} size='large' />
    </div>
  )
}

export default PaginationSizes
`}</code></pre>) 
