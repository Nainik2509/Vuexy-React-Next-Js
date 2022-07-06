// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

// ** Third Party Imports
import axios from 'axios'

// ** Icons Imports
import BriefcaseOutline from 'mdi-material-ui/BriefcaseOutline'
import MapMarkerOutline from 'mdi-material-ui/MapMarkerOutline'
import AccountCheckOutline from 'mdi-material-ui/AccountCheckOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'

// ** Types
import { ProfileHeaderType } from 'src/@fake-db/types'

const ProfilePicture = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginTop: theme.spacing(-6),
  borderRadius: theme.shape.borderRadius,
  border: `5px solid ${theme.palette.common.white}`,
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(-10),
    marginLeft: theme.spacing(6)
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

  return data !== null ? (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardMedia
            component='img'
            alt='profile-header'
            image={data.coverImg}
            sx={{
              height: { xs: 150, md: 250 }
            }}
          />
          <Box
            sx={{
              px: 6,
              width: '100%',
              display: 'flex',
              pb: { xs: 6, md: 2.5 },
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
            <Box>
              <ProfilePicture src={data.profileImg} alt='profile-picture' />
            </Box>
            <Box
              sx={{
                ml: 6,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                justifyContent: { xs: 'center', md: 'space-between' }
              }}
            >
              <Box>
                <Typography
                  variant='h5'
                  sx={{ mb: 4, fontSize: '1.375rem', mt: { xs: 0, md: 5 }, textAlign: { xs: 'center', md: 'left' } }}
                >
                  {data.fullName}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    mb: { xs: 6, mb: 0 },
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}
                >
                  <Box sx={{ mr: 4, display: 'flex', alignItems: 'center' }}>
                    <BriefcaseOutline sx={{ mr: 1, fontSize: 18, color: 'text.secondary' }} />
                    <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>{data.designation}</Typography>
                  </Box>
                  <Box sx={{ mr: 4, display: 'flex', alignItems: 'center' }}>
                    <MapMarkerOutline sx={{ mr: 1, fontSize: 18, color: 'text.secondary' }} />
                    <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>{data.location}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarBlankOutline sx={{ mr: 1, fontSize: 18, color: 'text.secondary' }} />
                    <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>Joined {data.joiningDate}</Typography>
                  </Box>
                </Box>
              </Box>
              <Button variant='contained' startIcon={<AccountCheckOutline fontSize='small' />}>
                Connected
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  ) : null
}

export default UserProfileHeader
