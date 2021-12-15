// ** React Imports
import { useState, Fragment, useEffect, MouseEvent, ReactElement } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import { DataGrid } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { SelectChangeEvent } from '@mui/material/Select'

// ** Icons Imports
import Send from 'mdi-material-ui/Send'
import Check from 'mdi-material-ui/Check'
import ChartPie from 'mdi-material-ui/ChartPie'
import Download from 'mdi-material-ui/Download'
import ArrowDown from 'mdi-material-ui/ArrowDown'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import ContentCopy from 'mdi-material-ui/ContentCopy'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'
import ContentSaveOutline from 'mdi-material-ui/ContentSaveOutline'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'pages/apps/invoice/store'

// ** Types Imports
import { RootState } from 'redux/store'
import { ThemeColor } from '@core/layouts/types'
import { InvoiceType } from 'pages/apps/invoice/types'

// ** Utils Import
import { getInitials } from '@core/utils/get-initials'

// ** Custom Components Imports
import TableHeader from './TableHeader'
import CustomChip from '@core/components/mui/chip'
import CustomAvatar from '@core/components/mui/avatar'

// ** Styled Components
import DataGridWrapper from '@core/styles/mui/components/datagrid'

interface InvoiceListProps {
  userView?: boolean
}
interface InvoiceStatusObj {
  [key: string]: {
    color: ThemeColor
    icon: ReactElement
  }
}

interface CellType {
  // eslint-disable-next-line react/no-unused-prop-types
  row: InvoiceType
}

// ** Styled component for the link in the dataTable
const StyledLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

// ** Styled component for the link inside menu
const MenuItemLink = styled(Link)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  padding: theme.spacing(1.5, 4),
  color: theme.palette.text.primary
}))

const RowOptions = ({ id }: { id: number | string }) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<any>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <IconButton size='small' sx={{ color: 'text.secondary' }} onClick={handleRowOptionsClick}>
        <DotsVertical fontSize='small' />
      </IconButton>
      <Menu
        keepMounted
        disablePortal
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>
          <Download fontSize='small' sx={{ mr: 2 }} />
          Download
        </MenuItem>
        <MenuItemLink href={`/apps/invoice/edit/${id}`} passHref>
          <MenuItem component='a'>
            <PencilOutline fontSize='small' sx={{ mr: 2 }} />
            Edit
          </MenuItem>
        </MenuItemLink>
        <MenuItem>
          <ContentCopy fontSize='small' sx={{ mr: 2 }} />
          Duplicate
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

// ** Vars
const invoiceStatusObj: InvoiceStatusObj = {
  Sent: { color: 'secondary', icon: <Send sx={{ fontSize: '1rem' }} /> },
  Paid: { color: 'success', icon: <Check sx={{ fontSize: '1rem' }} /> },
  Draft: { color: 'primary', icon: <ContentSaveOutline sx={{ fontSize: '1rem' }} /> },
  'Partial Payment': { color: 'warning', icon: <ChartPie sx={{ fontSize: '1rem' }} /> },
  'Past Due': { color: 'error', icon: <InformationOutline sx={{ fontSize: '1rem' }} /> },
  Downloaded: { color: 'info', icon: <ArrowDown sx={{ fontSize: '1rem' }} /> }
}

// ** renders client column
const renderClient = (row: InvoiceType) => {
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]

  if (row.avatar.length) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={color as ThemeColor}
        sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}
      >
        {getInitials(row.client ? row.client.name : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const defaultColumns = [
  {
    field: 'id',
    minWidth: 100,
    headerName: '#',
    renderCell: ({ row }: CellType) => (
      <Link href={`/apps/invoice/preview/${row.id}`} passHref>
        <StyledLink>{`#${row.id}`}</StyledLink>
      </Link>
    )
  },
  {
    minWidth: 100,
    field: 'invoiceStatus',
    renderHeader: () => <TrendingUp fontSize='small' />,
    renderCell: ({ row }: CellType) => {
      const { dueDate, balance, invoiceStatus } = row

      const color = invoiceStatusObj[invoiceStatus] ? invoiceStatusObj[invoiceStatus].color : 'primary'
      const Icon = invoiceStatusObj[invoiceStatus] ? invoiceStatusObj[invoiceStatus].icon : null

      return (
        <Tooltip
          title={
            <div>
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                {invoiceStatus}
              </Typography>
              <br />
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                Balance:
              </Typography>{' '}
              {balance}
              <br />
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                Due Date:
              </Typography>{' '}
              {dueDate}
            </div>
          }
        >
          <CustomAvatar skin='light' color={color} sx={{ width: '1.875rem', height: '1.875rem' }}>
            {Icon}
          </CustomAvatar>
        </Tooltip>
      )
    }
  },
  {
    flex: 0.5,
    minWidth: 300,
    field: 'client.name',
    headerName: 'client',
    renderCell: ({ row }: CellType) => {
      const { name, companyEmail } = row.client

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(row)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {name}
            </Typography>
            <Typography noWrap variant='caption'>
              {companyEmail}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    minWidth: 150,
    field: 'total',
    headerName: 'Total',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>${row.total || 0}</Typography>
  },
  {
    flex: 0.3,
    minWidth: 150,
    field: 'issuedDate',
    headerName: 'Issued Date',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.issuedDate}</Typography>
  },
  {
    flex: 0.3,
    minWidth: 150,
    field: 'balance',
    headerName: 'Balance',
    renderCell: ({ row }: CellType) => {
      return row.balance !== 0 ? (
        <Typography variant='body2'>{row.balance}</Typography>
      ) : (
        <CustomChip size='small' skin='light' color='success' label='Paid' />
      )
    }
  }
]

const InvoiceList = (props: InvoiceListProps) => {
  // ** Props
  const { userView } = props

  // ** State
  const [value, setValue] = useState<string>('')
  const [statusValue, setStatusValue] = useState<string>('')
  const [rowsPerPage, setRowsPerPage] = useState<string>('10')
  const [selectedRows, setSelectedRows] = useState<any[]>([])

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector((state: RootState) => state.invoice)

  useEffect(() => {
    dispatch(
      fetchData({
        q: value,
        status: statusValue
      })
    )
  }, [dispatch, statusValue, value])

  const handleFilter = (val: string) => {
    setValue(val)
  }

  const handlePerPage = (e: SelectChangeEvent) => {
    setRowsPerPage(e.target.value)
  }

  const handleStatusValue = (e: SelectChangeEvent) => {
    setStatusValue(e.target.value)
  }

  const columns = [
    ...defaultColumns,
    {
      minWidth: 100,
      field: 'balance',
      headerName: 'Actions',
      renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title='Delete Invoice'>
            <IconButton size='small' sx={{ color: 'text.secondary' }} onClick={() => dispatch(deleteInvoice(row.id))}>
              <DeleteOutline fontSize='small' />
            </IconButton>
          </Tooltip>
          <Tooltip title='View'>
            <Box>
              <Link href={`/apps/invoice/preview/${row.id}`} passHref>
                <IconButton size='small' component='a' sx={{ color: 'text.secondary', textDecoration: 'none' }}>
                  <EyeOutline fontSize='small' />
                </IconButton>
              </Link>
            </Box>
          </Tooltip>
          <RowOptions id={row.id} />
        </Box>
      )
    }
  ]

  return (
    <Card>
      <TableHeader
        value={value}
        userView={userView}
        statusValue={statusValue}
        rowsPerPage={rowsPerPage}
        selectedRows={selectedRows}
        handleFilter={handleFilter}
        handlePerPage={handlePerPage}
        handleStatusValue={handleStatusValue}
      />
      <DataGridWrapper sx={{ height: `calc(100vh - 8rem)` }}>
        <DataGrid
          checkboxSelection
          columns={columns}
          rows={store.data}
          disableSelectionOnClick
          rowsPerPageOptions={[]}
          pageSize={Number(rowsPerPage)}
          onSelectionModelChange={rows => setSelectedRows(rows)}
        />
      </DataGridWrapper>
    </Card>
  )
}

export default InvoiceList
