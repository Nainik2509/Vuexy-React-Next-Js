// ** React Imports
import { memo, useMemo, useEffect, useCallback, useState, ReactElement } from 'react'

// ** Next Images
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { DataGrid } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { SelectChangeEvent } from '@mui/material/Select'

// ** Icons Imports
import Slack from 'mdi-material-ui/Slack'
import CogOutline from 'mdi-material-ui/CogOutline'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import DatabaseOutline from 'mdi-material-ui/DatabaseOutline'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomChip from '@core/components/mui/chip'
import CustomAvatar from '@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from '@core/utils/get-initials'

// ** Actions Imports
import { fetchData } from 'pages/apps/user/store'

// ** Styled Components
import DataGridWrapper from '@core/styles/mui/components/datagrid'

// ** Types Imports
import { RootState } from 'redux/store'
import { ThemeColor } from '@core/layouts/types'
import { UsersType } from 'pages/apps/user/types'

// ** Custom Components Imports
import TableHeader from './TableHeader'

interface UserRoleType {
  [key: string]: ReactElement
}

interface UserStatusType {
  [key: string]: ThemeColor
}

interface CellType {
  row: UsersType
}

// ** Vars
const userRoleObj: UserRoleType = {
  admin: <Slack fontSize='small' sx={{ mr: 3, color: 'error.main' }} />,
  editor: <PencilOutline fontSize='small' sx={{ mr: 3, color: 'info.main' }} />,
  author: <CogOutline fontSize='small' sx={{ mr: 3, color: 'warning.main' }} />,
  subscriber: <AccountOutline fontSize='small' sx={{ mr: 3, color: 'primary.main' }} />,
  maintainer: <DatabaseOutline fontSize='small' sx={{ mr: 3, color: 'success.main' }} />
}

const userStatusObj: UserStatusType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

// ** Styled component for the link for the avatar with image
const AvatarWithImageLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(3)
}))

// ** Styled component for the link for the avatar without image
const AvatarWithoutImageLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginRight: theme.spacing(3)
}))

// ** renders client column
const renderClient = (row: UsersType) => {
  if (row.avatar.length) {
    return (
      <AvatarWithImageLink href={`/apps/user/view/${row.id}`}>
        <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 30, height: 30 }} />
      </AvatarWithImageLink>
    )
  } else {
    return (
      <AvatarWithoutImageLink href={`/apps/user/view/${row.id}`}>
        <CustomAvatar skin='light' color={row.avatarColor} sx={{ mr: 3, width: 30, height: 30, fontSize: '.875rem' }}>
          {getInitials(row.fullName ? row.fullName : 'John Doe')}
        </CustomAvatar>
      </AvatarWithoutImageLink>
    )
  }
}

const UserList = () => {
  // ** State
  const [plan, setPlan] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [rowsPerPage, setRowsPerPage] = useState<string>('10')

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(
      fetchData({
        role: '',
        q: value,
        status: '',
        currentPlan: plan
      })
    )
  }, [dispatch, plan, value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const handlePerPage = useCallback((e: SelectChangeEvent) => {
    setRowsPerPage(e.target.value)
  }, [])

  const handlePlanChange = useCallback((e: SelectChangeEvent) => {
    setPlan(e.target.value)
  }, [])

  const defaultColumns = useMemo(
    () => [
      {
        flex: 1,
        headerName: 'User',
        minWidth: 250,
        field: 'fullName',
        renderCell: ({ row }: CellType) => {
          const { id, fullName, username } = row

          return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {renderClient(row)}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                <Link href={`/apps/user/view/${id}`} passHref>
                  <Typography
                    noWrap
                    component='a'
                    variant='body2'
                    sx={{ fontWeight: 600, color: 'text.primary', textDecoration: 'none' }}
                  >
                    {fullName}
                  </Typography>
                </Link>
                <Link href={`/apps/user/view/${id}`} passHref>
                  <Typography noWrap component='a' variant='caption' sx={{ textDecoration: 'none' }}>
                    @{username}
                  </Typography>
                </Link>
              </Box>
            </Box>
          )
        }
      },
      {
        flex: 1,
        headerName: 'Email',
        field: 'email',
        minWidth: 250,
        renderCell: ({ row }: CellType) => {
          return (
            <Typography variant='body2' noWrap>
              {row.email}
            </Typography>
          )
        }
      },
      {
        flex: 1,
        headerName: 'Role',
        field: 'role',
        minWidth: 200,
        renderCell: ({ row }: CellType) => {
          return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {userRoleObj[row.role]}
              <Typography variant='body2' noWrap sx={{ textTransform: 'capitalize' }}>
                {row.role}
              </Typography>
            </Box>
          )
        }
      },
      {
        flex: 1,
        headerName: 'Plan',
        minWidth: 200,
        field: 'currentPlan',
        renderCell: ({ row }: CellType) => {
          return (
            <Typography noWrap sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
              {row.currentPlan}
            </Typography>
          )
        }
      },
      {
        flex: 1,
        headerName: 'Status',
        minWidth: 130,
        field: 'status',
        renderCell: ({ row }: CellType) => {
          return (
            <CustomChip
              skin='light'
              size='small'
              label={row.status}
              color={userStatusObj[row.status]}
              sx={{ textTransform: 'capitalize' }}
            />
          )
        }
      },
      {
        field: '',
        headerName: 'Action',
        renderCell: ({ row }: CellType) => (
          <Link href={`/apps/user/view/${row.id}`} passHref>
            <IconButton component='a'>
              <EyeOutline />
            </IconButton>
          </Link>
        )
      }
    ],
    []
  )

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader
            plan={plan}
            value={value}
            rowsPerPage={rowsPerPage}
            handleFilter={handleFilter}
            handlePerPage={handlePerPage}
            handlePlanChange={handlePlanChange}
          />
          <DataGridWrapper sx={{ height: 'calc(100vh - 8rem)' }}>
            <DataGrid
              rows={store.data}
              rowsPerPageOptions={[]}
              columns={defaultColumns}
              pageSize={Number(rowsPerPage)}
            />
          </DataGridWrapper>
        </Card>
      </Grid>
    </Grid>
  )
}

export default memo(UserList)
