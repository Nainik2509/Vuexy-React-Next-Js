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
    editable: true,
    headerName: 'ID'
  },
  {
    flex: 0.3,
    minWidth: 180,
    editable: true,
    field: 'full_name',
    headerName: 'Name'
  },
  {
    flex: 0.3,
    minWidth: 230,
    field: 'email',
    editable: true,
    headerName: 'Email'
  },
  {
    flex: 0.2,
    minWidth: 140,
    editable: true,
    headerName: 'Date',
    field: 'start_date'
  },
  {
    flex: 0.2,
    minWidth: 160,
    editable: true,
    field: 'experience',
    headerName: 'Experience'
  },
  {
    flex: 0.15,
    field: 'age',
    minWidth: 120,
    editable: true,
    headerName: 'Age'
  }
]

const TableEditable = () => {
  return (
    <Card>
      <CardHeader title='Editable' />
      <Box sx={{ height: 500 }}>
        <DataGrid columns={columns} rows={rows.slice(0, 10)} />
      </Box>
    </Card>
  )
}

export default TableEditable
