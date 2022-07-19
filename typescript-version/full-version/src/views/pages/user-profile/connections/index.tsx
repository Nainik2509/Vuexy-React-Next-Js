// ** React Imports
import { useState, MouseEvent } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Menu from '@mui/material/Menu'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AccountCheckOutline from 'mdi-material-ui/AccountCheckOutline'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Types
import { ConnectionsTabType } from 'src/@fake-db/types'

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
        <MenuItem>Share Connection</MenuItem>
        <MenuItem>Block Connection</MenuItem>
        <Divider />
        <MenuItem sx={{ color: 'error.main' }}>Delete</MenuItem>
      </Menu>
    </>
  )
}

const Connections = ({ data }: { data: ConnectionsTabType[] }) => {
  return (
    <Grid container spacing={6}>
      {data &&
        Array.isArray(data) &&
        data.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <Card sx={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 12, right: 8 }}>
                  <RowOptions />
                </Box>
                <CardContent sx={{ pt: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Avatar src={item.avatar} sx={{ mb: 4, width: 100, height: 100 }} />
                    <Typography variant='h6' sx={{ fontWeight: 500 }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{item.designation}</Typography>
                    <Box sx={{ mt: 5, mb: 1.5, display: 'flex', alignItems: 'center' }}>
                      {item.chips &&
                        item.chips.map((chip, index) => (
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
                    <Box
                      sx={{
                        mb: 6,
                        mt: 4.5,
                        width: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                      }}
                    >
                      <Box>
                        <Typography variant='h5'>{item.projects}</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Projects</Typography>
                      </Box>
                      <Box>
                        <Typography variant='h5'>{item.tasks}</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Tasks</Typography>
                      </Box>
                      <Box>
                        <Typography variant='h5'>{item.connections}</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Connections</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Button
                        sx={{ mr: 4 }}
                        variant={item.isConnected ? 'contained' : 'text'}
                        startIcon={
                          item.isConnected ? (
                            <AccountCheckOutline fontSize='small' />
                          ) : (
                            <AccountPlusOutline fontSize='small' />
                          )
                        }
                      >
                        {item.isConnected ? 'Connected' : 'Connect'}
                      </Button>
                      <IconButton color='secondary'>
                        <EmailOutline />
                      </IconButton>
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

export default Connections
