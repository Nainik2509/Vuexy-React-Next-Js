// ** React Imports
import { useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import { DragDropContext } from 'react-beautiful-dnd'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions
import { fetchBoards, fetchTasks, updateTask, reorderTasks } from 'src/store/apps/kanban'

// ** Kanban App Component Imports
import KanbanBoard from 'src/views/apps/kanban/KanbanBoard'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Kanban = () => {
  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.kanban)
  useEffect(() => {
    dispatch(fetchBoards())
    dispatch(fetchTasks())
  }, [dispatch])

  const swapTask = (arr, i1, i2) => {
    const t = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = t

    return arr
  }

  const handleDragEnd = result => {
    const taskIndex = store.tasks.findIndex(t => t.id === Number(result.draggableId))
    const task = store.tasks[taskIndex]
    if (result.destination !== null) {
      if (result.destination.droppableId !== result.source.droppableId) {
        // @ts-ignore
        dispatch(updateTask({ ...task, boardId: result.destination.droppableId }))
      } else {
        const swappedTask = swapTask([...store.tasks], result.source.index, result.destination.index)

        // @ts-ignore
        dispatch(reorderTasks(swappedTask))
      }
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Box sx={{ display: 'flex' }}>{store && <KanbanBoard store={store} />}</Box>
    </DragDropContext>
  )
}

export default Kanban
