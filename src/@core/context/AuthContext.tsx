// ** React Imports
import { createContext, FC, useEffect, ReactNode } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Config
import authConfig from 'configs/auth'

// ** Axios
import axios from 'axios'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { handleLogin } from 'redux/authentication'

// ** Types
import { AuthProvider } from './types'

// ** Defaults
const defaultProvider: AuthProvider = {
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
}

const Auth = createContext(defaultProvider)

Auth.displayName = 'AuthContext'

type Props = {
  children: ReactNode
}

const AuthContext: FC<Props> = ({ children }: Props) => {
  // ** Hooks
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    if (window && window.localStorage.getItem(authConfig.storageTokenKeyName)) {
      axios
        .get('/auth/me', {
          headers: {
            Authorization: window.localStorage.getItem(authConfig.storageTokenKeyName)!
          }
        })
        .then(async response => {
          // const { role } = response.data.userData
          dispatch(handleLogin({ userData: response.data.userData }))

          // await ability.update(response.data.userData.ability)
          router.push(router.route)
        })
    }
  }, [])

  return <Auth.Provider value={defaultProvider}>{children}</Auth.Provider>
}

export { Auth, AuthContext }
