// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import CardMedia from '@mui/material/CardMedia'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'

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

const CardActivityTimeline = () => {
  return (
    <Card>
      <CardMedia title='Activity Timeline' sx={{ height: '12.875rem' }} image='/images/cards/activity-timeline.png' />
      <CardContent>
        <Typography variant='h6' sx={{ mb: 1 }}>
          Activity Timeline
        </Typography>

        <Timeline sx={{ marginBottom: 0, paddingBottom: 0 }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='error' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography variant='body2' sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
                  8 Invoices have been paid
                </Typography>
                <Typography variant='caption'>Wednesday</Typography>
              </Box>
              <Typography variant='body2'>Invoices have been paid to the company.</Typography>
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <img width={28} height={28} alt='invoice.pdf' src='/images/icons/file-icons/pdf.png' />
                <Typography variant='subtitle2' sx={{ ml: 2, fontWeight: 600 }}>
                  bookingCard.pdf
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography variant='body2' sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
                  Create a new project for client 😎
                </Typography>
                <Typography variant='caption'>April, 18</Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                Invoices have been paid to the company.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src='/images/avatars/1.png' sx={{ width: '2rem', height: '2rem', marginRight: 2 }} />
                <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>John Doe (Client)</Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem sx={{ minHeight: 0 }}>
            <TimelineSeparator>
              <TimelineDot color='info' />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography variant='body2' sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
                  Order #37745 from September
                </Typography>
                <Typography variant='caption'>January, 10</Typography>
              </Box>
              <Typography variant='body2'>Invoices have been paid to the company.</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default CardActivityTimeline
