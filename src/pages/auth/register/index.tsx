// ** React Imports
import { useState } from 'react'

// ** Next Imports
import { signIn, getSession } from 'next-auth/react'
import type { NextPage, GetServerSideProps } from 'next'

// ** MUI Components
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const Register: NextPage = () => {
  const [password, setPassword] = useState('admin')
  const [username, setUsername] = useState('ronak')
  const [email, setEmail] = useState('ronak@materio.com')

  const handleRegister = async () => {
    await signIn('credentials', {
      email,
      password,
      username,
      isNewUser: true,
      redirect: false
    })
    signIn('credentials', {
      email,
      password
    })
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <TextField label='email' value={email} placeholder='ronak@materio.com' onChange={e => setEmail(e.target.value)} />
      <TextField label='Username' value={username} placeholder='ronak' onChange={e => setUsername(e.target.value)} />
      <TextField label='Password' value={password} placeholder='.....' onChange={e => setPassword(e.target.value)} />
      <div>
        <Button onClick={handleRegister}>Sign Up</Button>
      </div>
    </form>
  )
}

export default Register

export const getServerSideProps: GetServerSideProps = async context => {
  const { req } = context
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: { destination: '/' }
    }
  }

  return {
    props: {}
  }
}
