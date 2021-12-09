// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'

// ** Types
import { ThemeColor } from '@core/layouts/types'

// ** Custom Components
import CustomChip from '@core/components/mui/chip'

interface DataType {
  src: string
  title: string
  subtitle: string
  chipText: string
  chipColor: ThemeColor
}

const data: DataType[] = [
  {
    chipText: 'Business',
    chipColor: 'primary',
    title: 'Call with Woods',
    subtitle: '21 Jul | 08:20-10:30',
    src: '/assets/images/avatars/4.png'
  },
  {
    chipColor: 'success',
    chipText: 'Meditation',
    title: 'Call with hilda',
    subtitle: '24 Jul | 11:30-12:00',
    src: '/assets/images/avatars/8.png'
  },
  {
    chipText: 'Dinner',
    chipColor: 'error',
    title: 'Conference call',
    subtitle: '28 Jul | 05:00-6:45',
    src: '/assets/images/avatars/7.png'
  },
  {
    chipText: 'Meetup',
    chipColor: 'secondary',
    title: 'Meeting with Mark',
    subtitle: '03 Aug | 07:00-8:30',
    src: '/assets/images/avatars/3.png'
  },
  {
    chipText: 'Business',
    chipColor: 'primary',
    title: 'Meeting in Oakland',
    subtitle: '14 Aug | 04:15-05:30',
    src: '/assets/images/avatars/2.png'
  },
  {
    chipText: 'Party',
    chipColor: 'warning',
    title: 'Meeting with Carl',
    subtitle: '05 Oct | 10:00-12:45',
    src: '/assets/images/avatars/1.png'
  }
]

const CardMeetingSchedule: FC = () => {
  return (
    <Card>
      <CardHeader
        title='Meeting Schedule'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: index !== data.length - 1 ? 6 : undefined
              }}
            >
              <Avatar src={item.src} sx={{ mr: 3, width: 38, height: 38 }} />
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', marginBottom: 0.4, flexDirection: 'column' }}>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarBlankOutline
                      sx={{
                        mr: 1,
                        color: 'text.secondary',
                        verticalAlign: 'middle',
                        fontSize: theme => theme.typography.caption.fontSize
                      }}
                    />
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
                </Box>
                <CustomChip
                  skin='light'
                  size='small'
                  label={item.chipText}
                  color={item.chipColor}
                  sx={{ height: 20, marginTop: 0.4, fontSize: '0.75rem', fontWeight: 600 }}
                />
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardMeetingSchedule
