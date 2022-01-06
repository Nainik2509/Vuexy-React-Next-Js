// ** React Imports
import { useRef } from 'react'

// ** Next Imports
import Image from 'next/image'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'

// ** Icons Imports
import Paperclip from 'mdi-material-ui/Paperclip'
import MessageOutline from 'mdi-material-ui/MessageOutline'

// ** Third Party Imports
import { useDrag } from 'react-dnd'

// ** Redux Imports
import { useDispatch } from 'react-redux'

// ** Actions
import { handleSelectTask } from 'src/store/apps/kanban'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import { KanbanTasksProps } from 'src/types/apps/kanbanTypes'

const KanbanTasks = (props: KanbanTasksProps) => {
  // ** Props
  const { task, labelColors, handleTaskSidebarToggle } = props

  // ** Hooks
  const taskRef = useRef(null)
  const dispatch = useDispatch()
  const [, drag] = useDrag({
    type: 'task',
    item: { type: 'task', task },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const handleTaskClick = () => {
    dispatch(handleSelectTask(task))
    handleTaskSidebarToggle()
  }

  const renderLabels = () => {
    if (task.labels.length) {
      return (
        <Box sx={{ mb: 4 }}>
          {task.labels.map((label: string, index: number) => {
            const isLastChip = task.labels[task.labels.length - 1] === label

            return (
              <CustomChip
                key={index}
                size='small'
                skin='light'
                label={label}
                color={labelColors[label] as ThemeColor}
                sx={{ mb: 3, ...(!isLastChip ? { mr: 3 } : {}) }}
              />
            )
          })}
        </Box>
      )
    } else {
      return null
    }
  }

  const renderAttachmentsComments = () => {
    if ((task.attachments && task.attachments.length) || (task.comments && task.comments.length)) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {task.attachments && task.attachments.length ? (
            <Box sx={{ mr: 3, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <Paperclip fontSize='small' sx={{ mr: 1 }} />
              <Typography>{task.attachments.length}</Typography>
            </Box>
          ) : null}
          {task.comments && task.comments.length && (
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <MessageOutline fontSize='small' sx={{ mr: 2 }} />
              <Typography>{task.comments.length}</Typography>
            </Box>
          )}
        </Box>
      )
    } else {
      return null
    }
  }

  const renderTaskFooter = () => {
    return (task.attachments && task.attachments.length) ||
      (task.comments && task.comments.length) ||
      (task.assignedTo && task.assignedTo.length) ? (
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          alignItems: 'center',
          ...(task.comments && !task.comments.length && task.attachments && !task.attachments.length
            ? { justifyContent: 'flex-end' }
            : { justifyContent: 'space-between' })
        }}
      >
        {renderAttachmentsComments()}
        {task.assignedTo.length ? (
          <Box>
            {task.assignedTo.length ? (
              <AvatarGroup
                max={3}
                sx={{
                  cursor: 'pointer',
                  '& .MuiAvatar-root': { height: 28, width: 28, '&.MuiAvatar-colorDefault': { fontSize: '.85rem' } }
                }}
              >
                {task.assignedTo.map(assignee => {
                  return <Avatar key={assignee.name} alt={assignee.name} src={assignee.avatar} />
                })}
              </AvatarGroup>
            ) : null}
          </Box>
        ) : null}
      </Box>
    ) : null
  }

  drag(taskRef)

  return (
    <Card ref={taskRef} onClick={handleTaskClick} sx={{ my: 4, cursor: 'grab' }}>
      <CardContent>
        {renderLabels()}

        {task.coverImage ? (
          <Box sx={{ mb: 4, '& img': { borderRadius: 1 } }}>
            <Image
              width='100%'
              height='100%'
              alt={task.title}
              objectFit='cover'
              layout='responsive'
              src={task.coverImage}
            />
          </Box>
        ) : null}

        <Typography sx={{ fontWeight: 500 }}>{task.title}</Typography>

        {renderTaskFooter()}
      </CardContent>
    </Card>
  )
}

export default KanbanTasks
