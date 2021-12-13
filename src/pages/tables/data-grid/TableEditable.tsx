// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import CardHeader from '@mui/material/CardHeader'

// ** Data Import
import { rows, editableCols } from './data'

const TableEditable = () => {
  return (
    <Card>
      <CardHeader title='Editable' />
      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={editableCols} autoPageSize />
      </Box>
    </Card>
  )
}

export default TableEditable
