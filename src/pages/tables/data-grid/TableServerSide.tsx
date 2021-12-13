// ** React Imports
import { useEffect, useState, useCallback } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridColDef, GridRenderCellParams, GridSortModel } from '@mui/x-data-grid'

// ** ThirdParty Components
import axios from 'axios'

// ** Custom Components
import CustomChip from '@core/components/mui/chip'
import ServerSideToolbar from './ServerSideToolbar'
import CustomAvatar from '@core/components/mui/avatar'

// ** Types Imports
import { ThemeColor } from '@core/layouts/types'

// ** Utils Import
import { getInitials } from '@core/utils/get-initials'

// ** Styled Wrapper
import DataGridWrapper from '@core/styles/mui/components/datagrid'

interface StatusObj {
  [key: number]: {
    title: string
    color: ThemeColor
  }
}

// ** renders client column
const renderClient = (params: GridRenderCellParams) => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]

  if (row.avatar.length) {
    return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={color as ThemeColor}
        sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}
      >
        {getInitials(row.full_name ? row.full_name : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const statusObj: StatusObj = {
  1: { title: 'current', color: 'primary' },
  2: { title: 'professional', color: 'success' },
  3: { title: 'rejected', color: 'error' },
  4: { title: 'resigned', color: 'warning' },
  5: { title: 'applied', color: 'info' }
}

const Columns: GridColDef[] = [
  {
    minWidth: 250,
    field: 'full_name',
    editable: true,
    headerName: 'Name',
    renderCell: (params: GridRenderCellParams) => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(params)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.full_name}
            </Typography>
            <Typography noWrap variant='caption'>
              {row.email}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 1,
    field: 'email',
    headerName: 'Email',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.full_name}
      </Typography>
    )
  },
  {
    flex: 1,
    headerName: 'Date',
    field: 'start_date',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.start_date}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'salary',
    headerName: 'Salary',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.salary}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'age',
    headerName: 'Age',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 1,
    field: 'status',
    headerName: 'Status',
    renderCell: (params: GridRenderCellParams) => {
      const status = statusObj[params.row.status]

      return (
        <CustomChip
          size='small'
          skin='light'
          color={status.color}
          label={status.title}
          sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
        />
      )
    }
  }
]

const TableServerSide = () => {
  // ** State
  const [rows, setRows] = useState([])
  const [total, setTotal] = useState(1)
  const [sort, setSort] = useState<'asc' | 'desc'>('asc')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [searchValue, setSearchValue] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<string>('full_name')

  const fetchTableData = useCallback((sort, q, page, column, perPage) => {
    axios
      .get('/api/table/data', {
        q,
        sort,
        page,
        column,
        perPage
      })
      .then(res => {
        setRows(res.data.data)
        setTotal(res.data.total)
      })
  }, [])

  useEffect(() => {
    fetchTableData(sort, searchValue, currentPage, sortColumn, rowsPerPage)
  }, [])

  const handlePerPageChange = (newPageSize: number) => {
    setRowsPerPage(newPageSize + 1)
    fetchTableData(sort, searchValue, currentPage, sortColumn, newPageSize + 1)
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    fetchTableData(sort, searchValue, newPage, sortColumn, rowsPerPage)
  }

  const handleSortModel = (newModel: GridSortModel) => {
    if (newModel.length) {
      setSort(newModel[0].sort)
      setSortColumn(newModel[0].field)
      fetchTableData(newModel[0].sort, searchValue, currentPage, newModel[0].field, rowsPerPage)
    } else {
      setSort('asc')
      setSortColumn('full_name')
    }
  }

  const handleSearch = (value: string) => {
    setSearchValue(value)
    fetchTableData(sort, value, currentPage, sortColumn, rowsPerPage)
  }

  return (
    <Card>
      <CardHeader title='Server Side' />
      <DataGridWrapper sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          rowCount={total}
          columns={Columns}
          checkboxSelection
          page={currentPage}
          sortingMode='server'
          pageSize={rowsPerPage}
          paginationMode='server'
          onPageChange={handlePageChange}
          rowsPerPageOptions={[10, 25, 50]}
          onSortModelChange={handleSortModel}
          onPageSizeChange={handlePerPageChange}
          components={{ Toolbar: ServerSideToolbar }}
          componentsProps={{
            toolbar: {
              value: searchValue,

              // @ts-ignore
              onChange: (event: ChangeEvent) => handleSearch(event.target.value),
              clearSearch: () => handleSearch('')
            }
          }}
        />
      </DataGridWrapper>
    </Card>
  )
}

export default TableServerSide

// export async function getStaticProps() {
//   const res = await axios.get('/api/table/data', {
//     q: 'test',
//     perPage: 10,
//     page: 1,
//     column: '',
//     sort: 'asc'
//   })

//   return {
//     props: { data: res.data, test: 'test' }
//   }
// }
