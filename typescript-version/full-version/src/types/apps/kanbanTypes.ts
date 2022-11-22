export type LabelColorsType = {
  [key: string]: string
}

export type BoardType = {
  id: string
  title: string
}

export type CommentType = {
  name: string
  avatar: string
  comment: string
}

export type AttachmentType = {
  img: string
  name: string
}

export type AssignedToType = {
  name: string
  value?: string
  avatar: string
}

export type KanbanTaskType = {
  dueDate: Date
  title: string
  labels: string[]
  coverImage?: string
  description: string
  id?: number | undefined
  boardId?: string | undefined
  assignedTo: AssignedToType[]
  comments?: CommentType[] | undefined
  attachments?: AttachmentType[] | undefined
}

export type KanbanBoardLayoutProps = {
  store: {
    boards: BoardType[]
    tasks: KanbanTaskType[]
    selectedTask: null | KanbanTaskType
  }
}

export type KanbanBoardProps = {
  index: number
  board: BoardType
  isLastBoard: boolean
  labelColors: LabelColorsType
  handleTaskSidebarToggle: () => void
  store: {
    boards: BoardType[]
    tasks: KanbanTaskType[]
    selectedTask: null | KanbanTaskType
  }
}

export type KanbanTasksProps = {
  index: number
  task: KanbanTaskType
  labelColors: LabelColorsType
  handleTaskSidebarToggle: () => void
}

export type AddNewTaskType = {
  taskTitle: string
}

export type AddNewBoardType = {
  boardTitle: string
}

export type TaskSidebarProps = {
  sidebarOpen: boolean
  labelColors: LabelColorsType
  selectedTask: null | KanbanTaskType
  handleTaskSidebarToggle: () => void
}

export type AssigneeMenuItems = {
  name: string
  value: string
  avatar: string
}