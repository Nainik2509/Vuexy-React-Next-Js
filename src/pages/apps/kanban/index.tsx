// ** React Imports
import { useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// ** Kanban App Component Imports
import KanbanBoardLayout from './KanbanBoardLayout'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Types
import { RootState } from 'src/redux/store'

// ** Actions
import { fetchBoards, fetchTasks } from './store'

const Kanban = () => {
  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector((state: RootState) => state.kanban)

  useEffect(() => {
    dispatch(fetchBoards())
    dispatch(fetchTasks())
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ display: 'flex' }}>{store && <KanbanBoardLayout store={store} />}</Box>
    </DndProvider>
  )
}

export default Kanban
