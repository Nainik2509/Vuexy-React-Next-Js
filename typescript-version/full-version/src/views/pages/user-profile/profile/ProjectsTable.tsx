// ** React Imports
import { useState, useEffect, MouseEvent } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import { DataGrid } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import AvatarGroup from '@mui/material/AvatarGroup'
import LinearProgress from '@mui/material/LinearProgress'

// ** Third Party Imports
import axios from 'axios'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { ProjectTableRowType } from 'src/@fake-db/types'

interface CellType {
  row: ProjectTableRowType
}

const RowOptions = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton size='small' onClick={e => handleRowOptionsClick(e)}>
        <DotsVertical fontSize='small' />
      </IconButton>
      <Menu
        keepMounted
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
        <MenuItem>Details</MenuItem>
        <MenuItem>Archive</MenuItem>
        <Divider />
        <MenuItem sx={{ color: 'error.main' }}>Delete</MenuItem>
      </Menu>
    </>
  )
}

// ** renders name column
const renderName = (row: ProjectTableRowType) => {
  if (row.avatar.length) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 2, width: 32, height: 32 }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={(row.avatarColor as ThemeColor) || ('primary' as ThemeColor)}
        sx={{ mr: 2, width: 32, height: 32, fontSize: '1rem' }}
      >
        {getInitials(row.name || 'John Doe')}
      </CustomAvatar>
    )
  }
}

const columns = [
  {
    flex: 0.1,
    field: 'name',
    minWidth: 250,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => {
      const { name, date } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderName(row)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap sx={{ color: 'text.primary', fontWeight: 700 }}>
              {name}
            </Typography>
            <Typography noWrap variant='caption' sx={{ color: 'text.disabled' }}>
              {date}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: 'leader',
    headerName: 'Leader',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: 'team',
    headerName: 'Team',
    renderCell: ({ row }: CellType) => (
      <AvatarGroup className='pull-up'>
        {row.avatarGroup.map((src, index) => (
          <CustomAvatar key={index} src={src} sx={{ height: 26, width: 26 }} />
        ))}
      </AvatarGroup>
    )
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }: CellType) => (
      <>
        <Box sx={{ mr: 5, width: '100%' }}>
          <LinearProgress
            color='primary'
            value={row.status}
            variant='determinate'
            sx={{
              height: 6,
              borderRadius: 8,
              backgroundColor: 'background.default',
              '& .MuiLinearProgress-bar': {
                borderRadius: 8
              }
            }}
          />
        </Box>
        {row.status}
      </>
    )
  },

  {
    flex: 0.1,
    minWidth: 80,
    field: 'actions',
    headerName: 'Actions',
    renderCell: () => <RowOptions />
  }
]

const ProfileTable = () => {
  // ** State
  const [data, setData] = useState([])
  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(7)

  useEffect(() => {
    axios.get('/pages/profile-table', { params: { q: value } }).then(response => {
      setData(response.data)
    })
  }, [value])

  const handleFilter = (val: string) => {
    setValue(val)
  }

  return data.length ? (
    <Card>
      <CardHeader
        title='Projects'
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2' sx={{ mr: 2 }}>
              Search:
            </Typography>
            <TextField size='small' value={value} onChange={e => handleFilter(e.target.value)} />
          </Box>
        }
      />
      <DataGrid
        autoHeight
        pagination
        rows={data}
        columns={columns}
        checkboxSelection
        pageSize={pageSize}
        disableSelectionOnClick
        rowsPerPageOptions={[5, 7, 10]}
        onPageSizeChange={size => setPageSize(size)}
      />
    </Card>
  ) : null
}

export default ProfileTable
