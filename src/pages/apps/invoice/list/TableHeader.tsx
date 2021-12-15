// ** React Imports
import { memo } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Box, { BoxProps } from '@mui/material/Box'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface TableHeaderProps {
  value: string
  userView?: boolean
  selectedRows: any[]
  rowsPerPage: string | undefined
  handleFilter: (val: string) => void
  handlePerPage: (e: SelectChangeEvent) => void
}

const ActionsRight = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-start',

  [theme.breakpoints.up('lg')]: {
    flexWrap: 'nowrap',
    justifyContent: 'flex-end'
  }
}))

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { value, userView, selectedRows, rowsPerPage, handleFilter, handlePerPage } = props

  return (
    <Box
      sx={{
        py: 4,
        px: 5,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <Select
          displayEmpty
          size='small'
          defaultValue=''
          sx={{ mr: 4, mb: 2 }}
          disabled={selectedRows.length === 0}
          renderValue={selected => (selected.length === 0 ? 'Actions' : selected)}
        >
          <MenuItem value='' disabled>
            Actions
          </MenuItem>
          <MenuItem value='delete'>Delete</MenuItem>
          <MenuItem value='edit'>Edit</MenuItem>
          <MenuItem value='send'>Send</MenuItem>
        </Select>
        <Select size='small' sx={{ mr: 4, mb: 2 }} value={rowsPerPage} onChange={handlePerPage}>
          <MenuItem value='10'>10</MenuItem>
          <MenuItem value='25'>25</MenuItem>
          <MenuItem value='50'>50</MenuItem>
        </Select>
      </Box>
      <ActionsRight sx={{ ...(userView ? { justifyContent: 'flex-start !important' } : {}) }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 4, mb: 2 }}
          placeholder='Search Invoice'
          onChange={e => handleFilter(e.target.value)}
        />

        <Link href='/apps/invoice/add' passHref>
          <Button component='a' sx={{ mb: 2 }} variant='contained'>
            Create Invoice
          </Button>
        </Link>
      </ActionsRight>
    </Box>
  )
}

export default memo(TableHeader)
