// ** React Imports
import { FC, memo } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Box, { BoxProps } from '@mui/material/Box'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Icons Imports
import ExportVariant from 'mdi-material-ui/ExportVariant'

interface TableHeaderProps {
  value: string
  toggle: () => void
  rowsPerPage: number
  handleFilter: (val: string) => void
  handlePerPage: (e: SelectChangeEvent) => void
}

const ActionsRight = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-start',

  [theme.breakpoints.up('md')]: {
    flexWrap: 'nowrap',
    justifyContent: 'flex-end'
  }
}))

const TableHeader: FC<TableHeaderProps> = props => {
  // ** Props
  const { handleFilter, toggle, value, handlePerPage, rowsPerPage } = props

  return (
    <Box sx={{ p: 4, width: '100%' }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Select size='small' value={String(rowsPerPage)} onChange={handlePerPage} sx={{ mr: 4 }}>
            <MenuItem value='10'>10</MenuItem>
            <MenuItem value='25'>25</MenuItem>
            <MenuItem value='50'>50</MenuItem>
          </Select>
          <Button color='secondary' variant='outlined' startIcon={<ExportVariant fontSize='small' />}>
            Export
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <ActionsRight>
            <TextField
              size='small'
              value={value}
              sx={{ mr: 4 }}
              placeholder='Search User'
              onChange={e => handleFilter(e.target.value)}
            />

            <Button variant='contained' onClick={toggle} sx={{ '@media(max-width: 457px)': { mt: 4 } }}>
              Add User
            </Button>
          </ActionsRight>
        </Grid>
      </Grid>
    </Box>
  )
}

export default memo(TableHeader)
