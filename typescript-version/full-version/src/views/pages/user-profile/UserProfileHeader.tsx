// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import axios from 'axios'

// ** Icons Imports
import FountainPenTip from 'mdi-material-ui/FountainPenTip'
import MapMarkerOutline from 'mdi-material-ui/MapMarkerOutline'
import BriefcaseOutline from 'mdi-material-ui/BriefcaseOutline'
import AccountCheckOutline from 'mdi-material-ui/AccountCheckOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'

// ** Types
import { ProfileHeaderType } from 'src/@fake-db/types'

const designationIconObj = {
  FountainPenTip
}

const ProfilePicture = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: theme.shape.borderRadius,
  border: `5px solid ${theme.palette.common.white}`,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  }
}))

const UserProfileHeader = () => {
  // ** State
  const [data, setData] = useState<ProfileHeaderType | null>(null)

  useEffect(() => {
    axios.get('/pages/profile-header').then(response => {
      setData(response.data)
    })
  }, [])

  const IconTag = designationIconObj[data?.designationIcon as keyof typeof designationIconObj] || BriefcaseOutline

  return data !== null ? (
    <Card>
      <CardMedia
        component='img'
        alt='profile-header'
        image={data.coverImg}
        sx={{
          height: { xs: 150, md: 250 }
        }}
      />
      <CardContent
        sx={{
          pt: 0,
          mt: -8,
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}
      >
        <ProfilePicture src={data.profileImg} alt='profile-picture' />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            ml: { xs: 0, md: 6 },
            alignItems: 'flex-end',
            flexWrap: ['wrap', 'nowrap'],
            justifyContent: ['center', 'space-between']
          }}
        >
          <Box sx={{ mb: [6, 0], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
            <Typography variant='h5' sx={{ mb: 4, fontSize: '1.375rem' }}>
              {data.fullName}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: ['center', 'flex-start']
              }}
            >
              <Box sx={{ mr: 4, display: 'flex', alignItems: 'center' }}>
                <IconTag sx={{ mr: 1, fontSize: '1.125rem', color: 'text.secondary' }} />
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>{data.designation}</Typography>
              </Box>
              <Box sx={{ mr: 4, display: 'flex', alignItems: 'center' }}>
                <MapMarkerOutline sx={{ mr: 1, fontSize: '1.125rem', color: 'text.secondary' }} />
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>{data.location}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarBlankOutline sx={{ mr: 1, fontSize: '1.125rem', color: 'text.secondary' }} />
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>Joined {data.joiningDate}</Typography>
              </Box>
            </Box>
          </Box>
          <Button variant='contained' startIcon={<AccountCheckOutline fontSize='small' />}>
            Connected
          </Button>
        </Box>
      </CardContent>
    </Card>
  ) : null
}

export default UserProfileHeader
