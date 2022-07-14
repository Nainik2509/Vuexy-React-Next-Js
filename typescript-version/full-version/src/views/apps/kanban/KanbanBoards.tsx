// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icons Imports
import Plus from 'mdi-material-ui/Plus'

// ** Third Party Imports
import { Droppable } from 'react-beautiful-dnd'
import { useForm, Controller } from 'react-hook-form'

// ** Redux Imports
import { useDispatch } from 'react-redux'

// ** Actions
import { clearTasks, deleteBoard, addTask } from 'src/store/apps/kanban'

// ** Types
import { AppDispatch } from 'src/store'
import { KanbanTaskType, KanbanBoardProps, AddNewTaskType } from 'src/types/apps/kanbanTypes'

// ** Kanban Component
import KanbanTasks from './KanbanTasks'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

const defaultValues = {
  taskTitle: ''
}

const KanbanBoard = (props: KanbanBoardProps) => {
  // ** Props
  const { store, board, isLastBoard, handleTaskSidebarToggle, labelColors } = props

  // ** States
  const [title, setTitle] = useState<string>('')
  const [showAddTask, setShowAddTask] = useState<string | null>(null)

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  useEffect(() => {
    setTitle(board.title)
  }, [board.title])

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
  }

  const handleDeleteBoard = () => {
    dispatch(deleteBoard(board.id))
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
                autoFocus
                value={value}
                label='Task Title'
                onChange={onChange}
                placeholder='Task Title'
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
      <Box sx={{ width: 300, ...(!isLastBoard ? { mr: 8 } : {}) }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              size='small'
              value={title}
              onChange={e => setTitle(e.target.value)}
              sx={{
                borderRadius: 1,
                '& fieldset': { border: 'none !important' },
                '&:hover': { backgroundColor: 'background.paper' }
              }}
            />
          </Box>
          <OptionsMenu
            iconProps={{ fontSize: 'small' }}
            iconButtonProps={{ size: 'small' }}
            menuProps={{ PaperProps: { style: { minWidth: '9rem' } } }}
            options={[
              {
                text: 'Clear Tasks',
                menuItemProps: { onClick: () => handleClearTasks() }
              },
              { text: 'Delete Board', menuItemProps: { onClick: () => handleDeleteBoard() } }
            ]}
          />
        </Box>
        <Box>
          <Droppable droppableId={board.id.toString()}>
            {(provided: any, snapshot: any) => (
              <Box ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver} {...provided.droppableProps}>
                {store.tasks.map((task: KanbanTaskType, index: number) => {
                  if (task.boardId === board.id) {
                    return (
                      <KanbanTasks
                        task={task}
                        index={index}
                        labelColors={labelColors}
                        key={`${task.boardId}-${index}`}
                        handleTaskSidebarToggle={handleTaskSidebarToggle}
                      />
                    )
                  }
                })}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>

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
