// ** Mock Adapter
import mock from '@fake-db/mock'

// ** JWT import
import jwt from 'jsonwebtoken'

const users = [
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
      }
    ]
  }
]

mock.onPost('/api/auth/login').reply(request => {
  const { email, password } = JSON.parse(request.data)
  let error = {
    email: ['Something went wrong']
  }

  const user = users.find(u => u.email === email && u.password === password)

  if (user) {
    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
    const response = {
      ...user,
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

mock.onPost('/api/auth/register').reply(request => {
  if (request.data) {
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
        role: 'admin',
        ability: [
          {
            subject: 'all',
            action: 'manage'
          }
        ]
      }

      users.push(userData)
      const accessToken = jwt.sign({ id: userData.id }, process.env.JWT_SECRET)
      const user = { ...userData }
      delete user.password

      return [200, { ...user, accessToken }]
    } else {
      return [200, { error }]
    }
  } else {
    return [401, { error: 'Invalid Data' }]
  }
})

mock.onGet('/api/auth/me').reply(config => {
  const token = config.token

  // get the decoded payload and header
  const decoded = jwt.decode(token, { complete: true })
  const { id: userId } = decoded.payload

  const userData = JSON.parse(JSON.stringify(users.find(u => u.id === userId)))

  delete userData.password

  return [200, { userData }]
})
