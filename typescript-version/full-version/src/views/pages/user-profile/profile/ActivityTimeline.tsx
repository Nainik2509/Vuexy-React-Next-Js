// ** React Imports
import { useState } from 'react'

// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import FormatListBulleted from 'mdi-material-ui/FormatListBulleted'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

const ActivityTimeline = () => {
  // ** State
  const [anchorElTimeline, setAnchorElTimeline] = useState<null | HTMLElement>(null)

  const openTimelineMenu = Boolean(anchorElTimeline)

  const handleTimelineMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTimeline(event.currentTarget)
  }
  const handleTimelineMenuClose = () => {
    setAnchorElTimeline(null)
  }

  return (
    <Card sx={{ mb: 6 }}>
      <CardHeader
        title='Activity Timeline'
        sx={{ '& .MuiCardHeader-avatar': { mr: 2.5 } }}
        avatar={<FormatListBulleted sx={{ fontSize: '1.125rem' }} />}
        titleTypographyProps={{ sx: { color: 'text.primary' } }}
        action={
          <>
            <IconButton size='small' onClick={handleTimelineMenuClick}>
              <DotsVertical sx={{ fontSize: '1.125rem' }} />
            </IconButton>
            <Menu
              open={openTimelineMenu}
              anchorEl={anchorElTimeline}
              onClose={handleTimelineMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem onClick={handleTimelineMenuClose}>Share timeline</MenuItem>
              <MenuItem onClick={handleTimelineMenuClose}>Suggest edits</MenuItem>
              <Divider />
              <MenuItem onClick={handleTimelineMenuClose}>Report Bug</MenuItem>
            </Menu>
          </>
        }
      />
      <CardContent>
        <Timeline sx={{ my: 0, py: 0 }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='warning' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(2)} !important` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Client Meeting</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  Today
                </Typography>
              </Box>
              <Typography sx={{ mb: 2, color: 'text.secondary' }}>Project meeting with john @10:15am</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='/images/avatars/2.png' sx={{ mr: 4, width: 38, height: 38 }} />
                <Box>
                  <Typography sx={{ fontWeight: 500 }}>Lester McCarthy (Client)</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>CEO of Infibeam</Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='info' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Create a new project for client</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  2 Days Ago
                </Typography>
              </Box>
              <Typography sx={{ color: 'text.secondary' }}>Add files to new design folder</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(2)} !important` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Shared 2 New Project Files</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  6 Days Ago
                </Typography>
              </Box>
              <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ color: 'text.secondary' }}>Sent by Mollie Dixon avatar</Typography>
                <Avatar src='/images/avatars/3.png' sx={{ ml: 5, width: 20, height: 20 }} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 6, display: 'flex', alignItems: 'center' }}>
                  <img width={20} height={20} alt='app-guidelines' src='/images/icons/file-icons/pdf.png' />
                  <Typography sx={{ ml: 3, fontWeight: 500 }}>App Guidelines</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img width={20} height={20} alt='testing-results' src='/images/icons/file-icons/doc.png' />
                  <Typography sx={{ ml: 3, fontWeight: 500 }}>Testing Results</Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Project status updated</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  10 Days Ago
                </Typography>
              </Box>
              <Typography sx={{ color: 'text.secondary' }}>Woocommerce iOS App Completed</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ActivityTimeline
