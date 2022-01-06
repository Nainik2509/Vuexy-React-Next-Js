// ** Mock Adapter
import mock from 'src/@fake-db/mock'

const now = new Date()
const dayAfterTomorrow = now.setDate(now.getDate() + 2)

const data = {
  boards: [
    {
      id: 'todo',
      title: 'TODO'
    },
    {
      id: 'in-progress',
      title: 'In Progress'
    },
    {
      id: 'done',
      title: 'Done'
    }
  ],
  tasks: [
    {
      id: 1,
      labels: ['UX'],
      boardId: 'todo',
      attachments: [],
      description: 'lorem',
      dueDate: dayAfterTomorrow,
      title: 'Research FAQ page UX',
      comments: [
        {
          name: 'Joey Tribbiani',
          avatar: '/images/avatars/3.png',
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          name: 'Ross Geller',
          avatar: '/images/avatars/1.png'
        },
        {
          name: 'Pheobe Buffay',
          avatar: '/images/avatars/2.png'
        }
      ]
    },
    {
      id: 2,
      labels: ['App'],
      attachments: [
        {
          name: 'documentation.pdf',
          img: '/images/icons/file-icons/pdf.png'
        }
      ],
      boardId: 'in-progress',
      description: 'description',
      dueDate: dayAfterTomorrow,
      title: 'Review completed Apps',
      comments: [
        {
          name: 'Chandler Bing',
          avatar: '/images/avatars/5.png',
          comment: 'Complete this on priority'
        },
        {
          name: 'Monica Geller',
          avatar: '/images/avatars/6.png',
          comment: 'Complete this on priority'
        }
      ],
      assignedTo: [
        {
          name: 'Joey Tribbiani',
          avatar: '/images/avatars/3.png'
        },
        {
          name: 'Rachel Green',
          avatar: '/images/avatars/4.png'
        }
      ]
    },
    {
      id: 3,
      labels: ['Images'],
      boardId: 'done',
      attachments: [],
      coverImage: '/images/cards/cafe-badilico.png',
      description: 'lorem',
      dueDate: dayAfterTomorrow,
      title: 'Find new images for the apps',
      comments: [],
      assignedTo: [
        {
          name: 'Chandler Bing',
          avatar: '/images/avatars/5.png'
        }
      ]
    }
  ]
}

// ------------------------------------------------
// GET: Returns Boards
// ------------------------------------------------
mock.onGet('/apps/kanban/boards').reply(() => {
  return [200, data.boards]
})

// ------------------------------------------------
// GET: Returns Tasks
// ------------------------------------------------
mock.onGet('/apps/kanban/tasks').reply(() => {
  return [200, data.tasks]
})

// ------------------------------------------------
// POST: Adds Task
// ------------------------------------------------
mock.onPost('/apps/kanban/add-task').reply(config => {
  const task = JSON.parse(config.data).data

  const { length } = data.tasks

  let lastIndex = 0

  if (length) {
    lastIndex = data.tasks[length - 1].id
  }

  task.id = lastIndex + 1

  const newTask = {
    ...task,
    labels: [],
    attachments: [],
    dueDate: dayAfterTomorrow,
    comments: [],
    assignedTo: []
  }

  data.tasks.push(newTask)

  return [200, { newTask }]
})

// ------------------------------------------------
// POST: Adds Board
// ------------------------------------------------
mock.onPost('/apps/kanban/add-board').reply(config => {
  const task = JSON.parse(config.data).data

  data.boards.push(task)

  return [200, { task }]
})

// ------------------------------------------------
// POST: Update Task
// ------------------------------------------------
mock.onPost('/apps/kanban/update-task').reply(config => {
  const taskData = JSON.parse(config.data).data
  const task = data.tasks.find(task => task.id === taskData.id)
  Object.assign(task, taskData)

  return [200, { task }]
})

// ------------------------------------------------
// Delete: Deletes Boards
// ------------------------------------------------
mock.onDelete('/apps/kanban/delete-board').reply(config => {
  const Id = config.data

  const filteredBoards = data.boards.filter(b => b.id !== Id)
  const filteredTasks = data.tasks.filter(t => t.boardId !== Id)

  data.tasks = filteredTasks
  data.boards = filteredBoards

  return [200]
})

// ------------------------------------------------
// Delete: Clears Tasks
// ------------------------------------------------
mock.onDelete('/apps/kanban/clear-tasks').reply(config => {
  const Id = config.data
  const filteredTasks = data.tasks.filter(t => t.boardId !== Id)
  data.tasks = filteredTasks

  return [200]
})
