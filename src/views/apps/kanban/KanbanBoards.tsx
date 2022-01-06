// ** React Imports
import { useState, useEffect, useRef, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icons Imports
import Plus from 'mdi-material-ui/Plus'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Third Party Imports
import { useDrop } from 'react-dnd'
import { useForm, Controller } from 'react-hook-form'

// ** Redux Imports
import { useDispatch } from 'react-redux'

// ** Actions
import { clearTasks, deleteBoard, addTask, updateTask } from 'src/store/apps/kanban'

// ** Types
import { KanbanTaskType, KanbanBoardProps, AddNewTaskType } from 'src/types/apps/kanbanTypes'

// ** Kanban Component
import KanbanTasks from './KanbanTasks'

const defaultValues = {
  taskTitle: ''
}

interface DropItemType {
  type: string
  task: KanbanTaskType
}

const KanbanBoard = (props: KanbanBoardProps) => {
  // ** Props
  const { store, board, isLastBoard, handleTaskSidebarToggle, labelColors } = props

  // ** States
  const [title, setTitle] = useState<string>('')
  const [showAddTask, setShowAddTask] = useState<string | null>(null)
  const [optionsAnchorEl, setOptionsAnchorEl] = useState<null | HTMLElement>(null)

  // ** Vars
  const openOptionsMenu = Boolean(optionsAnchorEl)

  // ** Hooks
  const boardRef = useRef(null)
  const dispatch = useDispatch()
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const [, drop] = useDrop({
    accept: 'task',
    drop(item: DropItemType) {
      dispatch(updateTask({ ...item.task, boardId: board.id }))
    }
  })

  drop(boardRef)

  useEffect(() => {
    setTitle(board.title)
  }, [board.title])

  const handleOptionsMenuClick = (event: SyntheticEvent) => {
    setOptionsAnchorEl(event.currentTarget as HTMLElement)
  }
  const handleOptionsMenuClose = () => {
    setOptionsAnchorEl(null)
  }

  const handleAddTaskReset = () => {
    reset()
    setShowAddTask(null)
  }

  const handleOpenAddTask = () => {
    reset()
    setShowAddTask(board.id)
  }

  const handleClearTasks = () => {
    dispatch(clearTasks(board.id))
    handleOptionsMenuClose()
  }

  const handleDeleteBoard = () => {
    dispatch(deleteBoard(board.id))
    handleOptionsMenuClose()
  }

  const handleAddTaskFormSubmit = (data: AddNewTaskType) => {
    dispatch(addTask({ title: data.taskTitle, boardId: board.id }))
    handleAddTaskReset()
  }

  const renderAddTaskForm = () => {
    return board.id === showAddTask ? (
      <form onSubmit={handleSubmit(handleAddTaskFormSubmit)}>
        <FormControl fullWidth>
          <Controller
            name='taskTitle'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                value={value}
                label='Task Title'
                onChange={onChange}
                placeholder='Task Title'
                inputProps={{ autoFocus: true }}
                error={Boolean(errors.taskTitle)}
                aria-describedby='validation-add-task'
              />
            )}
          />
          {errors.taskTitle && (
            <FormHelperText sx={{ color: 'error.main' }} id='validation-add-task'>
              Please enter a valid Task Title
            </FormHelperText>
          )}
        </FormControl>
        <Box sx={{ mt: 3 }}>
          <Button size='small' type='submit' variant='contained' sx={{ mr: 3 }}>
            Add
          </Button>
          <Button size='small' color='secondary' variant='outlined' onClick={handleAddTaskReset}>
            Cancel
          </Button>
        </Box>
      </form>
    ) : null
  }

  return (
    <>
      <Box ref={boardRef} sx={{ width: 300, ...(!isLastBoard ? { mr: 8 } : {}) }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              size='small'
              value={title}
              onChange={e => setTitle(e.target.value)}
              sx={{
                '&:hover': { backgroundColor: 'background.paper' },
                '& fieldset': { border: 'none !important' }
              }}
            />
          </Box>
          <IconButton size='small' onClick={handleOptionsMenuClick}>
            <DotsVertical fontSize='small' />
          </IconButton>
          <Menu
            open={openOptionsMenu}
            anchorEl={optionsAnchorEl}
            onClose={handleOptionsMenuClose}
            PaperProps={{ style: { minWidth: '9rem' } }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
          >
            <MenuItem onClick={handleClearTasks}>
              <Typography>Clear Tasks</Typography>
            </MenuItem>
            <MenuItem onClick={handleDeleteBoard}>
              <Typography>Delete Board</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Box>
          {store.tasks.map((task: KanbanTaskType, index: number) => {
            if (task.boardId === board.id) {
              return (
                <KanbanTasks
                  task={task}
                  labelColors={labelColors}
                  key={`${task.boardId}-${index}`}
                  handleTaskSidebarToggle={handleTaskSidebarToggle}
                />
              )
            }
          })}
          {showAddTask === null || (showAddTask !== null && showAddTask !== board.id) ? (
            <Button startIcon={<Plus fontSize='small' />} onClick={handleOpenAddTask}>
              Add New Task
            </Button>
          ) : (
            renderAddTaskForm()
          )}
        </Box>
      </Box>
    </>
  )
}

export default KanbanBoard
