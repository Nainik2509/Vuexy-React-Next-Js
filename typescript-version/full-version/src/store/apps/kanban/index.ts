// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Types
import { KanbanTaskType } from 'src/types/apps/kanbanTypes'

// ** Fetch Boards
export const fetchBoards = createAsyncThunk('appKanban/fetchBoards', async () => {
  const response = await axios.get('/apps/kanban/boards')

  return response.data
})

export const fetchTasks = createAsyncThunk('appKanban/fetchTasks', async () => {
  const response = await axios.get('/apps/kanban/tasks')

  return response.data
})

export const updateTask = createAsyncThunk('appKanban/updateTask', async (data: KanbanTaskType, { dispatch }) => {
  const response = await axios.post('/apps/kanban/update-task', { data })
  await dispatch(fetchBoards())
  await dispatch(fetchTasks())

  return response.data
})

export const reorderTasks = createAsyncThunk('appKanban/reorderTasks', async (data: KanbanTaskType, { dispatch }) => {
  const response = await axios.post('/apps/kanban/reorder-tasks', { data })
  await dispatch(fetchBoards())
  await dispatch(fetchTasks())

  return response.data
})

export const addBoard = createAsyncThunk(
  'appKanban/addBoard',
  async (data: { [key: string]: string }, { dispatch }) => {
    const response = await axios.post('/apps/kanban/add-board', { data })
    await dispatch(fetchBoards())
    await dispatch(fetchTasks())

    return response.data
  }
)

export const addTask = createAsyncThunk(
  'appKanban/addTask',
  async (data: { [key: string]: number | string }, { dispatch }) => {
    const response = await axios.post('/apps/kanban/add-task', { data })
    await dispatch(fetchBoards())
    await dispatch(fetchTasks())

    return response.data
  }
)

export const clearTasks = createAsyncThunk('appKanban/clearTasks', async (id: string, { dispatch }) => {
  const response = await axios.delete('/apps/kanban/clear-tasks', { data: id })

  await dispatch(fetchBoards())
  await dispatch(fetchTasks())

  return response
})

export const deleteBoard = createAsyncThunk('appKanban/deleteBoard', async (id: string, { dispatch }) => {
  const response = await axios.delete('/apps/kanban/delete-board', { data: id })

  await dispatch(fetchBoards())
  await dispatch(fetchTasks())

  return response
})

export const appKanbanSlice = createSlice({
  name: 'appKanban',
  initialState: {
    tasks: [],
    boards: [],
    selectedTask: null
  },
  reducers: {
    handleSelectTask: (state, action) => {
      state.selectedTask = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.boards = action.payload
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload
      })
  }
})

export const { handleSelectTask } = appKanbanSlice.actions

export default appKanbanSlice.reducer
