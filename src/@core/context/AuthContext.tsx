// ** React Imports
import { createContext, FC, useEffect, useState, ReactNode, useContext } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Context
import { AbilityContext } from 'src/@core/context/Can'

// ** Types
import { AuthValuesType, RegisterParams, LoginParams, ErrCallbackType } from './types'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  setUser: () => {},
  isInitialized: false,
  isAuthenticated: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  register: () => Promise.resolve(),
  setIsAuthenticated: () => Boolean
}

const Auth = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthContext: FC<Props> = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<any>(defaultProvider.user)
  const [isInitialized, setIsInitialized] = useState<boolean>(defaultProvider.isInitialized)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(defaultProvider.isAuthenticated)

  // ** Hooks
  const router = useRouter()
  const ability = useContext(AbilityContext)

  // const handleACL = (url: string) => {
  //   if (user !== null && user.routeMeta) {
  //     const routeMeta = user.routeMeta
  //     if (!routeMeta.canVisit.includes(url) && !ability.can(routeMeta.action || 'read', routeMeta.resource)) {
  //       router.push('/login')
  //     }
  //   }
  // }

  useEffect(() => {
    const initAuth = async () => {
      if (window) {
        const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
        if (storedToken) {
          setIsInitialized(true)
          setIsAuthenticated(true)
          if (user === null) {
            axios
              .get('/auth/me', {
                headers: {
                  Authorization: window.localStorage.getItem(authConfig.storageTokenKeyName)!
                }
              })
              .then(response => {
                // const { role } = response.data.userData
                // dispatch(handleLogin({ userData: response.data.userData }))
                setUser({ ...response.data.userData })

                // await ability.update(response.data.userData.ability)
                router.push(router.route)
              })
          }
        } else {
          setIsInitialized(false)
          setIsAuthenticated(false)
          setUser(null)
        }
      }
    }
    initAuth()
  }, [router, user])

  // useEffect(() => {
  //   router.events.on('routeChangeStart', handleACL)

  //   return () => router.events.off('routeChangeStart', () => console.log('OFF'))
  // }, [user, router.events])

  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    axios
      .post(authConfig.loginEndpoint, params)
      .then(async res => {
        window.localStorage.setItem(authConfig.storageTokenKeyName, res.data.accessToken)
      })
      .then(() => {
        axios
          .get('/auth/me', {
            headers: {
              Authorization: window.localStorage.getItem(authConfig.storageTokenKeyName)!
            }
          })
          .then(async response => {
            const { role } = response.data.userData
            const returnURL = router.query.returnUrl

            setUser({ ...response.data.userData })
            setIsAuthenticated(true)
            await window.localStorage.setItem('userData', JSON.stringify(response.data.userData))
            await ability.update(response.data.userData.ability)
            router.push(returnURL || authConfig.redirectURL(role))
          })
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    // dispatch(handleLogout())
    setIsAuthenticated(false)
    setUser(null)
    setIsInitialized(false)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
  }

  const handleRegister = (params: RegisterParams, errorCallback: ErrCallbackType) => {
    axios
      .post(authConfig.registerEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch((err: { [key: string]: string }) => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    setUser,
    isInitialized,
    isAuthenticated,
    setIsInitialized,
    setIsAuthenticated,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <Auth.Provider value={values}>{children}</Auth.Provider>
}

export { Auth, AuthContext }
