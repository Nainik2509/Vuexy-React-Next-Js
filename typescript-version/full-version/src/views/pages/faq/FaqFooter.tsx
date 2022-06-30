// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Icons Imports
import PhoneOutline from 'mdi-material-ui/PhoneOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// Styled Box component
const StyledBox1 = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  borderRadius: '5px',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(6.5, 6),
  marginRight: theme.spacing(3.125),
  backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
  [theme.breakpoints.down('md')]: {
    marginRight: 0,
    marginBottom: theme.spacing(3.125)
  }
}))

// Styled Box component
const StyledBox2 = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  borderRadius: '5px',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(6.5, 6),
  marginLeft: theme.spacing(3.125),
  backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
    marginTop: theme.spacing(3.125)
  }
}))

const FaqFooter = () => {
  return (
    <Box sx={{ mt: 13 }}>
      <Box sx={{ textAlign: 'center' }}>
        <CustomChip rounded size='small' skin='light' color='primary' label='Question' />
        <Typography variant='h6' sx={{ my: 2 }}>
          You still have a question?
        </Typography>
        <Typography variant='body2' sx={{ mb: 11 }}>
          If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!
        </Typography>
      </Box>

      <Grid container>
        <Grid item xs={12} md={6}>
          <StyledBox1>
            <CustomAvatar skin='light' variant='rounded' sx={{ mt: 1.5, height: 38, width: 38 }}>
              <PhoneOutline />
            </CustomAvatar>
            <Typography variant='h6' sx={{ mt: 4 }}>
              + (810) 2548 2568
            </Typography>
            <Typography sx={{ mt: 2, color: 'text.secondary' }}>We are always happy to help!</Typography>
          </StyledBox1>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledBox2>
            <CustomAvatar skin='light' variant='rounded' sx={{ mt: 1.5, height: 38, width: 38 }}>
              <EmailOutline />
            </CustomAvatar>
            <Typography variant='h6' sx={{ mt: 4 }}>
              hello@help.com
            </Typography>
            <Typography sx={{ mt: 2, color: 'text.secondary' }}>Best way to get answer faster!</Typography>
          </StyledBox2>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FaqFooter
