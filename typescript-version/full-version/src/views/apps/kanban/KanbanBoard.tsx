// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icons Imports
import Plus from 'mdi-material-ui/Plus'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Redux Imports
import { useDispatch } from 'react-redux'

// ** Actions
import { addBoard } from 'src/store/apps/kanban'

// ** Types
import { BoardType, LabelColorsType, KanbanBoardLayoutProps, AddNewBoardType } from 'src/types/apps/kanbanTypes'

// ** Kanban Component
import TaskSidebar from './TaskSidebar'
import KanbanBoards from './KanbanBoards'

const defaultValues = {
  boardTitle: ''
}

const labelColors: LabelColorsType = {
  App: 'info',
  UX: 'success',
  Images: 'warning',
  Forms: 'success',
  'Code Review': 'error',
  'Charts & Maps': 'primary'
}

const KanbanBoard = (props: KanbanBoardLayoutProps) => {
  // ** Props
  const { store } = props

  // ** States
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const [showAddBoard, setShowAddBoard] = useState<boolean>(false)

  // ** Hooks
  const dispatch = useDispatch()
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const handleAddBoardReset = () => {
    reset()
    setShowAddBoard(false)
  }

  const handleOpenAddBoard = () => {
    reset()
    setShowAddBoard(true)
  }
  const handleAddBoardFormSubmit = (data: AddNewBoardType) => {
    dispatch(addBoard({ title: data.boardTitle, id: data.boardTitle }))
    handleAddBoardReset()
  }

  const handleTaskSidebarToggle = () => setSidebarOpen(!sidebarOpen)

  const renderBoards = () => {
    return store.boards.map((board: BoardType, index: number) => {
      const isLastBoard = store.boards[store.boards.length - 1].id === board.id

      return (
        <KanbanBoards
          key={index}
          store={store}
          index={index}
          board={board}
          labelColors={labelColors}
          isLastBoard={isLastBoard}
          handleTaskSidebarToggle={handleTaskSidebarToggle}
        />
      )
    })
  }

  const renderAddBoardForm = () => {
    return showAddBoard ? (
      <form onSubmit={handleSubmit(handleAddBoardFormSubmit)}>
        <FormControl fullWidth>
          <Controller
            name='boardTitle'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                autoFocus
                size='small'
                value={value}
                label='Board Title'
                onChange={onChange}
                placeholder='Board Title'
                error={Boolean(errors.boardTitle)}
                aria-describedby='validation-add-board'
              />
            )}
          />
          {errors.boardTitle && (
            <FormHelperText sx={{ color: 'error.main' }} id='validation-add-board'>
              Please enter a valid Board Title
            </FormHelperText>
          )}
        </FormControl>
        <Box sx={{ mt: 3 }}>
          <Button size='small' type='submit' variant='contained' sx={{ mr: 3 }}>
            Add
          </Button>
          <Button size='small' color='secondary' variant='outlined' onClick={handleAddBoardReset}>
            Cancel
          </Button>
        </Box>
      </form>
    ) : null
  }

  return store.boards.length ? (
    <>
      {renderBoards()}

      <Box sx={{ minWidth: 150, ml: 4 }}>
        {!showAddBoard ? (
          <Button startIcon={<Plus fontSize='small' />} onClick={handleOpenAddBoard}>
            Add Board
          </Button>
        ) : (
          renderAddBoardForm()
        )}
      </Box>

      <TaskSidebar
        labelColors={labelColors}
        sidebarOpen={sidebarOpen}
        selectedTask={store.selectedTask}
        handleTaskSidebarToggle={handleTaskSidebarToggle}
      />
    </>
  ) : (
    <></>
  )
}

export default KanbanBoard
