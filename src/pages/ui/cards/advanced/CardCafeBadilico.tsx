// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

const CardCafe = () => {
  return (
    <Card>
      <CardMedia title='Cafe Badilico' sx={{ height: '12.25rem' }} image='/images/cards/cafe-badilico.png' />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='h6'>Cafe Badilico</Typography>
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Rating name='cafe-ratings' value={5} readOnly />
          <Typography variant='body2' sx={{ marginLeft: 1.25 }}>
            5 Star (245)
          </Typography>
        </Box>

        <Typography variant='body2' sx={{ my: 3.5 }}>
          Italian Cafe
        </Typography>

        <Typography variant='body2'>
          The refrigerated dairy aisle of your local grocery store can be a great source tasty, convenient selections
          for your.
        </Typography>

        <Divider sx={{ mt: 3.75, mb: 3.5 }} />

        <Typography sx={{ marginBottom: 2.5 }}>Tonight’s availability</Typography>

        <Chip size='small' label='5:30PM' sx={{ marginRight: 3, fontSize: '0.875rem', color: 'text.secondary' }} />
        <Chip size='small' label='7:00AM' sx={{ marginRight: 3, fontSize: '0.875rem', color: 'text.secondary' }} />
        <Chip size='small' label='7:15PM' sx={{ fontSize: '0.875rem', color: 'text.secondary' }} />
      </CardContent>

      <CardActions className='card-action-dense'>
        <Button>Book Now</Button>
      </CardActions>
    </Card>
  )
}

export default CardCafe
