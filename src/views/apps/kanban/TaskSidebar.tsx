// ** React Imports
import { useState, useEffect, forwardRef, HTMLAttributes } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import { useDropzone } from 'react-dropzone'
import { useForm, Controller } from 'react-hook-form'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import { TaskSidebarProps, AssigneeMenuItems } from 'src/types/apps/kanbanTypes'

// ** Redux Imports
import { useDispatch } from 'react-redux'

// ** Actions
import { updateTask, handleSelectTask } from 'src/store/apps/kanban'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

interface PickerProps {
  label?: string
  error?: boolean
  registername?: string
}

interface FormData {
  title: string
}

const labelsArr = ['UX', 'Forms', 'Images', 'App', 'Code Review', 'Charts & Maps']

const assigneeArr = [
  {
    name: 'Ross Geller',
    value: 'ross',
    avatar: '/images/avatars/1.png'
  },
  {
    name: 'Pheobe Buffay',
    value: 'pheobe',
    avatar: '/images/avatars/2.png'
  },
  {
    name: 'Joey Tribbiani',
    value: 'joey',
    avatar: '/images/avatars/3.png'
  },
  {
    name: 'Rachel Green',
    value: 'rachel',
    avatar: '/images/avatars/4.png'
  },
  {
    name: 'Chandler Bing',
    value: 'chandler',
    avatar: '/images/avatars/5.png'
  },
  {
    name: 'Monica Geller',
    value: 'monica',
    avatar: '/images/avatars/8.png'
  }
]

const filter = createFilterOptions()

const TaskSidebar = (props: TaskSidebarProps) => {
  // ** Props
  const { sidebarOpen, labelColors, handleTaskSidebarToggle, selectedTask } = props

  // ** States
  const [desc, setDesc] = useState<string>('')
  const [dueDate, setDueDate] = useState(new Date())
  const [labels, setLabels] = useState<string[]>([])
  const [file, setFile] = useState<File[] | string[]>([])
  const [assignee, setAssignee] = useState<AssigneeMenuItems[]>([])
  const [upload, setUpload] = useState<any>('')

  // ** Hooks
  const dispatch = useDispatch()
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { title: '' } })
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: 'image/*',
    onDrop: (acceptedFiles: File[]) => {
      setFile(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  const onSubmit = (data: FormData) => {
    dispatch(
      updateTask({
        ...selectedTask,
        ...data,
        description: desc,
        dueDate,
        labels,
        assignedTo: assignee,
        ...(file.length && typeof file[0] !== 'string'
          ? {
              coverImage: URL.createObjectURL(file[0])
            }
          : {})
      })
    )
    handleTaskSidebarToggle()
  }

  const handleLabelsChange = (event: SelectChangeEvent<typeof labels>) => {
    const {
      target: { value }
    } = event
    setLabels(typeof value === 'string' ? value.split(',') : value)
  }

  const handleAssigneeDelete = (
    value: string,
    state: AssigneeMenuItems[],
    setState: (val: AssigneeMenuItems[]) => void
  ) => {
    const arr = state
    const index = arr.findIndex((i: AssigneeMenuItems) => i.value === value)
    arr.splice(index, 1)
    setState([...arr])
  }

  const addNewOption = (options: AssigneeMenuItems[], params: any): AssigneeMenuItems[] => {
    const filtered = filter(options, params)
    const { inputValue } = params
    const isExisting = options.some(option => inputValue === option.name)

    if (inputValue !== '' && !isExisting) {
      filtered.push({
        name: inputValue,
        value: inputValue,
        src: ''
      })
    }

    // @ts-ignore
    return filtered
  }

  const renderCustomChips = (
    array: AssigneeMenuItems[],
    getTagProps: ({ index }: { index: number }) => void,
    state: AssigneeMenuItems[],
    setState: (val: AssigneeMenuItems[]) => void
  ) => {
    return array.map((item, index) => (
      <Chip
        size='small'
        key={item.value}
        label={item.name}
        deleteIcon={<Close />}
        {...getTagProps({ index })}
        onDelete={() => handleAssigneeDelete(item.value, state, setState)}
      />
    ))
  }

  const renderListItem = (
    props: HTMLAttributes<HTMLLIElement>,
    option: AssigneeMenuItems,
    array: AssigneeMenuItems[],
    setState: (val: AssigneeMenuItems[]) => void
  ) => {
    return (
      <ListItem key={option.value} sx={{ cursor: 'pointer' }} onClick={() => setState([...array, option])}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {option.avatar.length ? (
            <CustomAvatar src={option.avatar} alt={option.name} sx={{ mr: 3, width: 22, height: 22 }} />
          ) : (
            <CustomAvatar skin='light' color='primary' sx={{ mr: 3, width: 22, height: 22, fontSize: '.75rem' }}>
              {getInitials(option.name)}
            </CustomAvatar>
          )}
          <Typography sx={{ fontSize: '0.875rem' }}>{option.name}</Typography>
        </Box>
      </ListItem>
    )
  }

  const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
    return (
      <TextField
        inputRef={ref}
        fullWidth
        {...props}
        label={props.label || ''}
        sx={{ width: '100%' }}
        error={props.error}
      />
    )
  })

  useEffect(() => {
    if (selectedTask !== null) {
      setValue('title', selectedTask.title)
      setDueDate(new Date(selectedTask.dueDate))
      setDesc(selectedTask.description)
      if (selectedTask.labels.length) {
        setLabels(selectedTask.labels)
      }
      if (selectedTask.coverImage) {
        setFile([selectedTask.coverImage])
      }
      if (selectedTask.assignedTo.length) {
        const arr = selectedTask.assignedTo.map(item => {
          return {
            ...item,
            value: item.name.split(' ')[0].toLowerCase()
          }
        })

        setAssignee([...arr])
      }
    }
  }, [selectedTask, setValue])

  const handleSidebarClosed = () => {
    handleTaskSidebarToggle()
    setValue('title', '')
    setDueDate(new Date())
    setDesc('')
    setLabels([])
    setUpload('')
    setFile([])
    setAssignee([])
    dispatch(handleSelectTask(null))
  }

  return (
    <Drawer
      anchor='right'
      open={sidebarOpen}
      onClose={handleSidebarClosed}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: ['100%', 400] } }}
    >
      <Box
        className='sidebar-header'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'background.default',
          padding: theme => theme.spacing(3, 3.255, 3, 5.255)
        }}
      >
        <Typography variant='h6' sx={{ fontWeight: 600 }}>
          Update Task
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Close fontSize='small' onClick={handleTaskSidebarToggle} sx={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box className='sidebar-body' sx={{ padding: theme => theme.spacing(5, 6) }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='title'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField label='Title' value={value} onChange={onChange} error={Boolean(errors.title)} />
              )}
            />
            {errors.title && (
              <FormHelperText sx={{ color: 'error.main' }} id='event-title-error'>
                Please enter a valid task title
              </FormHelperText>
            )}
          </FormControl>
          <DatePickerWrapper sx={{ mb: 6 }}>
            <DatePicker
              id='task-due-date'
              selected={dueDate}
              dateFormat='yyyy-MM-dd'
              onChange={(date: Date) => setDueDate(new Date(date))}
              customInput={<PickersComponent label='Start Date' registername='dueDate' />}
            />
          </DatePickerWrapper>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel id='labels'>Labels</InputLabel>
            <Select
              labelId='labels'
              multiple
              value={labels}
              onChange={handleLabelsChange}
              input={<OutlinedInput label='Labels' />}
              renderValue={selected => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value: string) => {
                    return (
                      <CustomChip
                        skin='light'
                        size='small'
                        key={value}
                        label={value}
                        color={labelColors[value] as ThemeColor}
                      />
                    )
                  })}
                </Box>
              )}

              // MenuProps={MenuProps}
            >
              {labelsArr.map(label => (
                <MenuItem key={label} value={label}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Autocomplete
              multiple
              freeSolo
              value={assignee}
              id='assignee-label'
              clearIcon={false}
              filterSelectedOptions
              options={assigneeArr}
              ListboxComponent={List}
              filterOptions={addNewOption}
              getOptionLabel={option => option.name}
              renderOption={(props, option) => renderListItem(props, option, assignee, setAssignee)}
              renderTags={(array: AssigneeMenuItems[], getTagProps) =>
                renderCustomChips(array, getTagProps, assignee, setAssignee)
              }
              renderInput={params => <TextField {...params} label='Assigned To' />}
            />
          </FormControl>
          <Box {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <TextField
              type='file'
              fullWidth
              value={upload}
              onClick={e => e.preventDefault()}
              onChange={(e: any) => setUpload(e.target.files)}
            />
          </Box>
          <FormControl fullWidth sx={{ my: 6 }}>
            <TextField
              multiline
              maxRows={4}
              minRows={4}
              value={desc}
              label='Description'
              id='textarea-outlined-controlled'
              onChange={e => setDesc(e.target.value)}
            />
          </FormControl>
          <Box>
            <Button type='submit' variant='contained' sx={{ mr: 3 }}>
              Update
            </Button>
            <Button color='secondary' variant='outlined'>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

export default TaskSidebar
