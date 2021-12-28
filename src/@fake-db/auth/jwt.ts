// ** JWT import
import jwt from 'jsonwebtoken'

// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { UserDataType } from 'src/@core/context/types'

const users: UserDataType[] = [
  {
    id: 1,
    fullName: 'John Doe',
    username: 'johndoe',
    password: 'admin',
    email: 'admin@materio.com',
    role: 'admin',
    ability: [
      {
        action: 'manage',
        subject: 'all'
      }
    ]
  },
  {
    id: 2,
    fullName: 'Jane Doe',
    username: 'janedoe',
    password: 'client',
    email: 'client@materio.com',
    role: 'client',
    ability: [
      {
        action: 'read',
        subject: 'ACL'
      },
      {
        action: 'read',
        subject: 'analytics'
      }
    ]
  }
]

// ! These two secrets should be in .env file and not in any other file
const jwtConfig = {
  secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
  refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767'
}

mock.onPost('/jwt/login').reply(request => {
  const { email, password } = JSON.parse(request.data)

  let error = {
    email: ['Something went wrong']
  }

  const user = users.find(u => u.email === email && u.password === password)

  if (user) {
    const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret)

    const response = {
      accessToken
    }

    return [200, response]
  } else {
    error = {
      email: ['email or Password is Invalid']
    }

    return [400, { error }]
  }
})

mock.onPost('/jwt/register').reply(request => {
  if (request.data.length > 0) {
    const { email, password, username } = JSON.parse(request.data)
    const isEmailAlreadyInUse = users.find(user => user.email === email)
    const isUsernameAlreadyInUse = users.find(user => user.username === username)
    const error = {
      email: isEmailAlreadyInUse ? 'This email is already in use.' : null,
      username: isUsernameAlreadyInUse ? 'This username is already in use.' : null
    }

    if (!error.username && !error.email) {
      const { length } = users
      let lastIndex = 0
      if (length) {
        lastIndex = users[length - 1].id
      }
      const userData = {
        id: lastIndex + 1,
        email,
        password,
        username,
        fullName: '',
        avatar: null,
        role: 'admin' as 'admin' | 'client',
        ability: [
          {
            subject: 'all',
            action: 'manage'
          }
        ]
      }

      users.push(userData)

      const accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret)

      const user = { ...userData }
      delete user.password

      const response = { accessToken }

      return [200, response]
    }

    return [200, { error }]
  } else {
    return [401, { error: 'Invalid Data' }]
  }
})

mock.onGet('/auth/me').reply(config => {
  // @ts-ignore
  const token = config.headers.Authorization

  // get the decoded payload and header
  const decoded = jwt.decode(token, { complete: true })

  // @ts-ignore
  const { id: userId } = decoded.payload

  const userData = JSON.parse(JSON.stringify(users.find((u: UserDataType) => u.id === userId)))

  delete userData.password

  return [200, { userData }]
})
