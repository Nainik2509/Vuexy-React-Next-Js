// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

interface DataType {
  title: string
  imgAlt: string
  imgSrc: string
  subtitle: string
  imgWidth: number
  imgHeight: number
  avatarColor: ThemeColor
}

const data: DataType[] = [
  {
    imgWidth: 22,
    imgHeight: 20,
    title: '42.8k',
    imgAlt: 'heart',
    avatarColor: 'primary',
    subtitle: 'Number of like',
    imgSrc: '/assets/images/cards/heart-medical.png'
  },
  {
    imgWidth: 20,
    imgHeight: 21,
    title: '21.2k',
    imgAlt: 'bar-graph',
    avatarColor: 'warning',
    subtitle: 'Number of Followers',
    imgSrc: '/assets/images/cards/graph-bar.png'
  },
  {
    imgWidth: 20,
    title: '2.4k',
    imgHeight: 19,
    imgAlt: 'comments',
    avatarColor: 'info',
    subtitle: 'Number of Comments',
    imgSrc: '/assets/images/cards/comment-alt-lines.png'
  },
  {
    imgWidth: 20,
    imgHeight: 20,
    imgAlt: 'user',
    title: '389.50k',
    avatarColor: 'success',
    subtitle: 'Number of Visits',
    imgSrc: '/assets/images/cards/user.png'
  }
]

const CardSocialAnalytics: FC = () => {
  return (
    <Card>
      <CardHeader
        title='Social Analytics'
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
                justifyContent: 'space-between',
                marginBottom: index !== data.length - 1 ? 6 : undefined
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CustomAvatar
                  skin='light'
                  color={item.avatarColor}
                  sx={{ mr: 3.75, width: '2.5rem', height: '2.5rem' }}
                >
                  <img alt={item.imgAlt} src={item.imgSrc} width={item.imgWidth} height={item.imgHeight} />
                </CustomAvatar>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h6' sx={{ lineHeight: 1.2, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant='body2'>{item.subtitle}</Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardSocialAnalytics
