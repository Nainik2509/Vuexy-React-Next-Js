// ** React Imports
import { memo } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Icons Imports
import ExportVariant from 'mdi-material-ui/ExportVariant'

interface TableHeaderProps {
  value: string
  plan: string
  rowsPerPage: string
  handleFilter: (val: string) => void
  handlePerPage: (e: SelectChangeEvent) => void
  handlePlanChange: (e: SelectChangeEvent) => void
}

const ActionsRight = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  [theme.breakpoints.up('md')]: {
    flexWrap: 'nowrap',
    justifyContent: 'flex-end'
  },
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
    flexDirection: 'row'
  }
}))

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { plan, handlePlanChange, handleFilter, value, handlePerPage, rowsPerPage } = props

  return (
    <Box sx={{ p: 4, width: '100%' }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Select size='small' value={rowsPerPage} onChange={handlePerPage} sx={{ mr: 4 }}>
            <MenuItem value='10'>10</MenuItem>
            <MenuItem value='25'>25</MenuItem>
            <MenuItem value='50'>50</MenuItem>
          </Select>
          <Button color='secondary' variant='outlined' startIcon={<ExportVariant />}>
            Export
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <ActionsRight>
            <TextField
              size='small'
              value={value}
              placeholder='Search User'
              sx={{ mr: 4, mb: [3, 0] }}
              onChange={e => handleFilter(e.target.value)}
            />
            <FormControl size='small'>
              <InputLabel id='plan-select'>Select Plan</InputLabel>
              <Select
                size='small'
                value={plan}
                id='select-plan'
                label='Select Plan'
                labelId='plan-select'
                onChange={handlePlanChange}
                inputProps={{ placeholder: 'Select Plan' }}
              >
                <MenuItem value=''>Select Plan</MenuItem>
                <MenuItem value='basic'>Basic</MenuItem>
                <MenuItem value='company'>Company</MenuItem>
                <MenuItem value='enterprise'>Enterprise</MenuItem>
                <MenuItem value='team'>Team</MenuItem>
              </Select>
            </FormControl>
          </ActionsRight>
        </Grid>
      </Grid>
    </Box>
  )
}

export default memo(TableHeader)
