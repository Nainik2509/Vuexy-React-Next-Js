// ** React Imports
import { useMemo, useState, useEffect, useCallback } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { DataGrid } from '@mui/x-data-grid'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AlertTitle from '@mui/material/AlertTitle'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import { SelectChangeEvent } from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import PencilOutline from 'mdi-material-ui/PencilOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import PageHeader from 'src/@core/components/page-header'
import TableHeader from 'src/pages/apps/permissions/TableHeader'

// ** Types Imports
import { RootState } from 'src/redux/store'
import { PermissionRowType } from 'src/pages/apps/permissions/types'

// ** Actions Imports
import { fetchData } from 'src/pages/apps/permissions/store'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Styled Components
import DataGridWrapper from 'src/@core/styles/mui/components/datagrid'

interface Colors {
  [key: string]: ThemeColor
}

interface CellType {
  row: PermissionRowType
}

const colors: Colors = {
  support: 'info',
  users: 'success',
  manager: 'warning',
  administrator: 'primary',
  'restricted-user': 'error'
}

const defaultColumns = [
  {
    flex: 1,
    field: 'name',
    minWidth: 200,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => <Typography>{row.name}</Typography>
  },
  {
    flex: 1,
    minWidth: 200,
    field: 'assignedTo',
    headerName: 'Assigned To',
    renderCell: ({ row }: CellType) => {
      return row.assignedTo.map((assignee: string, index: number) => (
        <CustomChip
          size='small'
          key={index}
          skin='light'
          color={colors[assignee]}
          label={assignee.replace('-', ' ')}
          sx={{ '& .MuiChip-label': { textTransform: 'capitalize' }, '&:not(:last-of-type)': { mr: 3 } }}
        />
      ))
    }
  },
  {
    flex: 1,
    minWidth: 200,
    field: 'createdDate',
    headerName: 'Created Date',
    renderCell: ({ row }: CellType) => <Typography>{row.createdDate}</Typography>
  }
]

const PermissionsTable = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [rowsPerPage, setRowsPerPage] = useState<string>('10')
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false)

  // ** Hooks
  const {
    control,
    setValue: setFormValue,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { name: '' } })
  const dispatch = useDispatch()
  const store = useSelector((state: RootState) => state.permissions)

  useEffect(() => {
    dispatch(
      fetchData({
        q: value
      })
    )
  }, [dispatch, value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const handlePerPage = useCallback((e: SelectChangeEvent) => {
    setRowsPerPage(e.target.value)
  }, [])

  const handleEditPermission = (name: string) => {
    setFormValue('name', name)
    setEditDialogOpen(true)
  }

  const handleDialogToggle = () => setEditDialogOpen(!editDialogOpen)

  const onSubmit = () => {
    setEditDialogOpen(false)
    setFormValue('name', '')
  }

  const columns = useMemo(
    () => [
      ...defaultColumns,
      {
        flex: 1,
        sortable: false,
        field: 'actions',
        headerName: 'Actions',
        renderCell: ({ row }: CellType) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => handleEditPermission(row.name)}>
              <PencilOutline fontSize='small' />
            </IconButton>
            <IconButton>
              <DeleteOutline fontSize='small' />
            </IconButton>
          </Box>
        )
      }
    ],
    [] // eslint-disable-line
  )

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <PageHeader
          title={<Typography variant='h5'>Permissions List</Typography>}
          subtitle={
            <Typography variant='body2'>
              Each category (Basic, Professional, and Business) includes the four predefined roles shown below.
            </Typography>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableHeader
            value={value}
            rowsPerPage={rowsPerPage}
            handleFilter={handleFilter}
            handlePerPage={handlePerPage}
          />
          <DataGridWrapper sx={{ height: 'calc(100vh - 11rem)' }}>
            <DataGrid columns={columns} rows={store.data} rowsPerPageOptions={[]} pageSize={Number(rowsPerPage)} />
          </DataGridWrapper>
          <Dialog maxWidth='sm' fullWidth onClose={handleDialogToggle} open={editDialogOpen}>
            <DialogTitle sx={{ mx: 'auto', textAlign: 'center' }}>
              <Typography variant='h4' component='span' sx={{ mb: 2 }}>
                Edit Permission
              </Typography>
              <Typography variant='body2'>Edit permission as per your requirements.</Typography>
            </DialogTitle>
            <DialogContent sx={{ mx: 'auto' }}>
              <Alert severity='warning' sx={{ maxWidth: '500px' }}>
                <AlertTitle>Warning!</AlertTitle>
                By editing the permission name, you might break the system permissions functionality. Please ensure
                you're absolutely certain before proceeding.
              </Alert>

              <Box component='form' sx={{ mt: 8 }} onSubmit={handleSubmit(onSubmit)}>
                <FormGroup sx={{ mb: 2, alignItems: 'center', flexDirection: 'row', flexWrap: ['wrap', 'nowrap'] }}>
                  <Controller
                    name='name'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        fullWidth
                        size='small'
                        value={value}
                        label='Permission Name'
                        onChange={onChange}
                        error={Boolean(errors.name)}
                        placeholder='Enter Permission Name'
                        sx={{ mr: [0, 4], mb: [3, 0] }}
                      />
                    )}
                  />

                  <Button type='submit' variant='contained'>
                    Update
                  </Button>
                </FormGroup>
                {errors.name && (
                  <FormHelperText sx={{ color: 'error.main' }}>Please enter a valid permission name</FormHelperText>
                )}
                <FormControlLabel control={<Checkbox />} label='Set as core permission' />
              </Box>
            </DialogContent>
          </Dialog>
        </Card>
      </Grid>
    </Grid>
  )
}

export default PermissionsTable
