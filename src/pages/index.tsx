// ** Next Imports
import { NextPage } from 'next'

// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Third Party Imports
import axios from 'axios'

const Home: NextPage = ({ navData }: any) => {
  console.log(`navData`, navData)

  return (
    <div>
      <Typography variant='h5' sx={{ mb: 2 }}>
        Home Page
      </Typography>

      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
      <Typography>Typography</Typography>
    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  const res = await axios.get('/navigation/data')
  const navData = res.data

  return {
    props: {
      navData
    }
  }
}

export default Home
