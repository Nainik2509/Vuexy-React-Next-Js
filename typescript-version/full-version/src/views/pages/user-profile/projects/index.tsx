// ** React Imports
import { useState, MouseEvent, SyntheticEvent } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import MessageOutline from 'mdi-material-ui/MessageOutline'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Types
import { ProjectsTabType } from 'src/@fake-db/types'

const RowOptions = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton size='small' onClick={e => handleRowOptionsClick(e)}>
        <DotsVertical sx={{ fontSize: '1.125rem' }} />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>Rename Team</MenuItem>
        <MenuItem>View Details</MenuItem>
        <MenuItem>Add to Favorites</MenuItem>
        <Divider />
        <MenuItem sx={{ color: 'error.main' }}>Leave Project</MenuItem>
      </Menu>
    </>
  )
}

const Projects = ({ data }: { data: ProjectsTabType[] }) => {
  return (
    <Grid container spacing={6}>
      {data &&
        Array.isArray(data) &&
        data.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Box sx={{ mb: 7, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={item.avatar} sx={{ mr: 4, height: 38, width: 38 }} />
                      <Box>
                        <Typography
                          href='/'
                          component='a'
                          sx={{
                            fontSize: '1.125rem',
                            color: 'text.primary',
                            textDecoration: 'none',
                            '&:hover': { color: 'primary.main' }
                          }}
                          onClick={(e: SyntheticEvent) => e.preventDefault()}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant='body2' sx={{ mt: 1, fontSize: '1rem' }}>
                          <strong>Client:</strong> {item.client}
                        </Typography>
                      </Box>
                    </Box>
                    <RowOptions />
                  </Box>
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ p: 2, borderRadius: '6px', backgroundColor: 'action.hover' }}>
                      <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ fontWeight: 500 }}>{item.budgetSpent}</Typography> /{' '}
                        <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>{item.budget}</Typography>
                      </Box>
                      <Typography sx={{ color: 'text.secondary' }}>Total Budget</Typography>
                    </Box>
                    <Box>
                      <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ mr: 1, fontWeight: 500 }}>Start Date:</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>{item.startDate}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ mr: 1, fontWeight: 500 }}>Deadline:</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>{item.deadline}</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                </CardContent>
                <Divider sx={{ my: '0 !important' }} />
                <CardContent>
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ mr: 1, fontWeight: 500 }}>All Hours:</Typography>
                      <Typography>{item.hours}</Typography>
                    </Box>
                    <CustomChip
                      rounded
                      size='small'
                      skin='light'
                      color={item.chipColor}
                      label={`${item.daysLeft} days left`}
                    />
                  </Box>
                  <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                      Tasks: {item.tasks}
                    </Typography>
                    <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                      {item.completed}% Completed
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      mb: 3,
                      '& .MuiLinearProgress-root': {
                        height: 8,
                        borderRadius: 8,
                        backgroundColor: 'background.default',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 8
                        }
                      }
                    }}
                  >
                    <LinearProgress color='primary' value={Number(item.completed)} variant='determinate' />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AvatarGroup className='pull-up'>
                        {item.avatarGroup &&
                          item.avatarGroup.map((person, index) => {
                            return (
                              <Tooltip key={index} title={person.name}>
                                <Avatar src={person.avatar} alt={person.name} sx={{ height: 32, width: 32 }} />
                              </Tooltip>
                            )
                          })}
                      </AvatarGroup>
                      <Typography variant='caption' sx={{ ml: 1.5, color: 'text.disabled' }}>
                        {item.members}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <MessageOutline sx={{ mr: 1, fontSize: '1.125rem', color: 'text.secondary' }} />
                      <Typography sx={{ color: 'text.secondary' }}>{item.comments}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Projects
