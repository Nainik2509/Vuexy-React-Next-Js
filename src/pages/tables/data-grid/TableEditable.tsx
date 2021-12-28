// ** MUI Imports
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import CardHeader from '@mui/material/CardHeader'

// ** Data Import
import { rows, editableCols } from './data'

// ** Styled Wrapper
import DataGridWrapper from 'src/@core/styles/mui/components/datagrid'

const TableEditable = () => {
  return (
    <Card>
      <CardHeader title='Editable' />
      <DataGridWrapper sx={{ height: 500 }}>
        <DataGrid rows={rows} columns={editableCols} autoPageSize />
      </DataGridWrapper>
    </Card>
  )
}

export default TableEditable
