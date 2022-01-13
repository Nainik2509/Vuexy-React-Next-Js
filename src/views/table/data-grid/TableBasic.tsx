// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import CardHeader from '@mui/material/CardHeader'

// ** Data Import
import { rows } from 'src/@fake-db/table/static-data'

const columns = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 110,
    headerName: 'ID'
  },
  {
    flex: 0.3,
    minWidth: 180,
    field: 'full_name',
    headerName: 'Name'
  },
  {
    flex: 0.3,
    minWidth: 230,
    field: 'email',
    headerName: 'Email'
  },
  {
    flex: 0.2,
    minWidth: 140,
    field: 'start_date',
    headerName: 'Date'
  },
  {
    flex: 0.2,
    minWidth: 160,
    field: 'experience',
    headerName: 'Experience'
  },
  {
    flex: 0.15,
    field: 'age',
    minWidth: 120,
    headerName: 'Age'
  }
]

const TableBasic = () => {
  return (
    <Card>
      <CardHeader title='Basic' />
      <Box sx={{ height: 500 }}>
        <DataGrid columns={columns} rows={rows.slice(0, 10)} />
      </Box>
    </Card>
  )
}

export default TableBasic
