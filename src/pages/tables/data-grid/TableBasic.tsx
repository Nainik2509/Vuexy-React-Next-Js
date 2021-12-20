// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import CardHeader from '@mui/material/CardHeader'

// ** Data Import
import { rows, basicCols } from './data'

// ** Styled Wrapper
import DataGridWrapper from 'src/@core/styles/mui/components/datagrid'

const TableBasic = () => {
  return (
    <Card>
      <CardHeader title='Basic' />
      <DataGridWrapper sx={{ height: 500 }}>
        <DataGrid rows={rows} columns={basicCols} autoPageSize />
      </DataGridWrapper>
    </Card>
  )
}

export default TableBasic
