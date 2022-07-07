// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AccountCheckOutline from 'mdi-material-ui/AccountCheckOutline'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Types
import { ConnectionsTabType } from 'src/@fake-db/types'

const Connections = ({ data }: { data: ConnectionsTabType[] }) => {
  return (
    <Grid container spacing={6}>
      {data &&
        Array.isArray(data) &&
        data.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <Card>
                <CardContent sx={{ pt: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Avatar src={item.avatar} sx={{ mb: 4, width: 100, height: 100 }} />
                    <Typography variant='h6' sx={{ fontWeight: 500 }}>
                      {item.name}
                    </Typography>
                    <Typography variant='body2'>{item.designation}</Typography>
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
                        mt: 4,
                        mb: 6,
                        width: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                      }}
                    >
                      <Box>
                        <Typography variant='h5'>{item.projects}</Typography>
                        <Typography>Projects</Typography>
                      </Box>
                      <Box>
                        <Typography variant='h5'>{item.tasks}</Typography>
                        <Typography>Tasks</Typography>
                      </Box>
                      <Box>
                        <Typography variant='h5'>{item.connections}</Typography>
                        <Typography>Connections</Typography>
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
