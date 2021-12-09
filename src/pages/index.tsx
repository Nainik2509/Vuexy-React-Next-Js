// ** NextJs Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// ** NextAuth Imports
import { useSession, signOut } from 'next-auth/react'

const Home = () => {
  // ** Hook
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <div>
      <Typography variant='h5' sx={{ mb: 2 }}>
        Home Page
      </Typography>

      {session ? (
        <Button variant='contained' onClick={() => signOut()}>
          Sign Out
        </Button>
      ) : (
        <>
          <Button sx={{ mr: 2 }} variant='contained' onClick={() => router.replace('/auth/login')}>
            Sign In
          </Button>
          <Button variant='contained' onClick={() => router.replace('/auth/register')}>
            Sign Up
          </Button>
        </>
      )}
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

export default Home
