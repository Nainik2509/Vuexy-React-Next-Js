// ** React Imports
import { useState } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Types
import { ProfileTeamsTechType, ProfileConnectionsType } from 'src/@fake-db/types'

interface Props {
  teams: ProfileTeamsTechType[]
  connections: ProfileConnectionsType[]
}

const ConnectionsTeams = ({ connections, teams }: Props) => {
  // ** State
  const [anchorElTeams, setAnchorElTeams] = useState<null | HTMLElement>(null)
  const [anchorElConnections, setAnchorElConnections] = useState<null | HTMLElement>(null)

  const openTeams = Boolean(anchorElTeams)
  const openConnections = Boolean(anchorElConnections)

  const handleConnectionsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElConnections(event.currentTarget)
  }
  const handleConnectionsClose = () => {
    setAnchorElConnections(null)
  }

  const handleTeamsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTeams(event.currentTarget)
  }
  const handleTeamsClose = () => {
    setAnchorElTeams(null)
  }

  return (
    <Grid container spacing={6} sx={{ mb: 6 }}>
      <Grid item md={6} xs={12}>
        <Card>
          <CardHeader
            title='Connections'
            action={
              <>
                <IconButton size='small' onClick={handleConnectionsClick}>
                  <DotsVertical sx={{ fontSize: 18 }} />
                </IconButton>
                <Menu
                  open={openConnections}
                  anchorEl={anchorElConnections}
                  onClose={handleConnectionsClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                >
                  <MenuItem onClick={handleConnectionsClose}>Share connections</MenuItem>
                  <MenuItem onClick={handleConnectionsClose}>Suggest edits</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleConnectionsClose}>Report Bug</MenuItem>
                </Menu>
              </>
            }
          />
          <CardContent>
            {connections &&
              connections.map((connection: ProfileConnectionsType, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      '&:not(:last-of-type)': { mb: 4 }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={connection.avatar} sx={{ mr: 4, width: 38, height: 38 }} />
                      <Box>
                        <Typography sx={{ lineHeight: 1.1, fontWeight: 500 }}>{connection.name}</Typography>
                        <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                          {connection.connections} Connections
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      size='small'
                      color='primary'
                      sx={{ minWidth: 28, p: theme => `${theme.spacing(1.25, 1)} !important` }}
                      variant={connection.isFriend ? 'contained' : 'text'}
                    >
                      <AccountOutline sx={{ fontSize: 18 }} />
                    </Button>
                  </Box>
                )
              })}
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12}>
        <Card>
          <CardHeader
            title='Connections'
            action={
              <>
                <IconButton size='small' onClick={handleTeamsClick}>
                  <DotsVertical sx={{ fontSize: 18 }} />
                </IconButton>
                <Menu
                  open={openTeams}
                  anchorEl={anchorElTeams}
                  onClose={handleTeamsClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                >
                  <MenuItem onClick={handleTeamsClose}>Share connections</MenuItem>
                  <MenuItem onClick={handleTeamsClose}>Suggest edits</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleTeamsClose}>Report Bug</MenuItem>
                </Menu>
              </>
            }
          />
          <CardContent>
            {teams &&
              teams.map((team: ProfileTeamsTechType, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      '&:not(:last-of-type)': { mb: 4 }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={team.avatar} sx={{ mr: 4, width: 38, height: 38 }} />
                      <Box>
                        <Typography sx={{ lineHeight: 1.1, fontWeight: 500 }}>{team.title}</Typography>
                        <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                          {team.members} Members
                        </Typography>
                      </Box>
                    </Box>
                    <CustomChip rounded size='small' skin='light' color={team.ChipColor} label={team.chipText} />
                  </Box>
                )
              })}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ConnectionsTeams
