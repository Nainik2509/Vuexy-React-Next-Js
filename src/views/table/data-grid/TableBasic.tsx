// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import CardHeader from '@mui/material/CardHeader'

// ** Data Import
import { rows, basicCols } from 'src/@fake-db/table/static-data'

const TableBasic = () => {
  return (
    <Card>
      <CardHeader title='Basic' />
      <Box sx={{ height: 500 }}>
        <DataGrid rows={rows} columns={basicCols} autoPageSize />
      </Box>
    </Card>
  )
}

export default TableBasic
