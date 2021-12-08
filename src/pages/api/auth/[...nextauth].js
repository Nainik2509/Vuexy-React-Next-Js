// ** Next Imports
import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

// ** ThirdParty Imports
import axios from 'axios'

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      authorize: async credentials => {
        const authorizeUser = async () => {
          if (credentials.isNewUser) {
            return axios.post('/api/auth/register', {
              email: credentials.email,
              username: credentials.username,
              password: credentials.password
            })
          } else {
            return axios.post('/api/auth/login', {
              email: credentials.email,
              password: credentials.password
            })
          }
        }

        const res = authorizeUser()
        if (res) {
          return authorizeUser().then(response => {
            return {
              id: response.data.id,
              role: response.data.role,
              email: response.data.email,
              name: response.data.fullName,
              token: response.data.accessToken,
              username: response.data.username
            }
          })
        } else {
          // login failed
          return null
        }
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id
        token.token = user.token
      }

      return token
    },
    session: async ({ session, token }) => {
      const response = await axios.get('/api/auth/me', { token: token.token })
      if (response.status === 200) {
        session.id = token.id
        if (response.data.userData) {
          session.user = {
            ...response.data.userData
          }
        }
        return session
      } else {
        return null
      }
    }
  },
  secret: process.env.JWT_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true
  },

  pages: {
    signIn: '/auth/login'
  }
})
