// ** React Imports
import { useState, MouseEvent } from 'react'

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

// ** Icons Imports
import StarOutline from 'mdi-material-ui/StarOutline'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Types
import { TeamsTabType } from 'src/@fake-db/types'

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
        <DotsVertical sx={{ fontSize: 20, color: 'text.primary' }} />
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
        <MenuItem sx={{ color: 'error.main' }}>Delete Team</MenuItem>
      </Menu>
    </>
  )
}

const Teams = ({ data }: { data: TeamsTabType[] }) => {
  return data && data.length ? (
    <Grid container spacing={6}>
      {data.map((item, index) => {
        return (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={item.avatar} sx={{ mr: 4, height: 32, width: 32 }} />
                    <Typography variant='h6' sx={{ fontSize: '1.125rem' }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarOutline sx={{ mr: 0.5, fontSize: 20, cursor: 'pointer' }} />
                    <RowOptions />
                  </Box>
                </Box>
                <Typography sx={{ my: 4 }}>{item.description}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AvatarGroup className='pull-up'>
                      {item.avatarGroup.map((person, index) => {
                        return (
                          <Tooltip key={index} title={person.name}>
                            <Avatar src={person.avatar} alt={person.name} sx={{ height: 32, width: 32 }} />
                          </Tooltip>
                        )
                      })}
                    </AvatarGroup>
                    <Typography variant='body2' sx={{ ml: 1 }}>
                      +{item.extraMembers}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {item.chips.map((chip, index) => (
                      <CustomChip
                        rounded
                        key={index}
                        size='small'
                        skin='light'
                        color={chip.color}
                        label={chip.title}
                        sx={{ '&:not(:last-of-type)': { mr: 3 } }}
                      />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  ) : null
}

export default Teams
