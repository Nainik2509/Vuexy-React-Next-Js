// ** React Imports
import { useState } from 'react'

// ** Next Imports
import type { GetServerSideProps } from 'next'
import { getProviders, signIn, getSession } from 'next-auth/react'

// ** MUI Components
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const Login = ({ providers }) => {
  const [password, setPassword] = useState('admin')
  const [email, setEmail] = useState('admin@materio.com')
  return (
    <form onSubmit={e => e.preventDefault()}>
      <TextField label='email' value={email} placeholder='admin@materio.com' onChange={e => setEmail(e.target.value)} />
      <TextField label='Password' value={password} placeholder='.....' onChange={e => setPassword(e.target.value)} />
      {Object.keys(providers).length &&
        Object.values(providers).map(provider => {
          return (
            <div key={provider.name}>
              <Button
                onClick={() =>
                  signIn(provider.id, {
                    email,
                    password
                  })
                }
              >
                Sign in with {provider.name}
              </Button>
            </div>
          )
        })}
    </form>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async context => {
  const { req } = context
  const session = await getSession({ req })

  const providers = await getProviders()

  if (session) {
    return {
      redirect: { destination: '/' }
    }
  }

  return {
    props: {
      providers
    }
  }
}
