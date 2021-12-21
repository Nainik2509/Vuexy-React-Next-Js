// ** React Imports
import { useEffect, useContext, useCallback } from 'react'

// ** Axios
import axios from 'axios'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Redux Imports
import { useDispatch } from 'react-redux'

// import { handleLogin, handleLogout } from 'redux/authentication'

// ** Context
import { AuthProvider } from '@core/context/types'

// ** Default Config
import authConfig from 'configs/auth'

// ** Types
import { Auth } from '@core/context/AuthContext'
import { LoginParams, RegisterParams, ErrCallbackType } from '@core/context/types'

/**
 * Get the authProvider stored in the context
 */
const useAuth = (): AuthProvider => {
  // ** Hooks
  const router = useRouter()
  const dispatch = useDispatch()
  const {
    user,
    login,
    logout,
    setUser,
    register,
    isInitialized,
    isAuthenticated,
    setIsInitialized,
    setIsAuthenticated
  } = useContext(Auth)

  // const store = useSelector(store => store.authentication)

  const handleLogin = useCallback(
    (params: LoginParams, errorCallback?: ErrCallbackType) =>
      login(params).then(() => {
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

                // dispatch(handleLogin({ userData: response.data.userData }))

                setUser({ ...response.data.userData })
                setIsAuthenticated(true)

                // await ability.update(response.data.userData.ability)
                router.push(returnURL || authConfig.redirectURL(role))
              })
          })
          .catch(err => {
            if (errorCallback) errorCallback(err)
          })
      }),

    // [authProvider, dispatch, ability, router]
    [login, router, setUser]
  )

  const handleLogout = useCallback(
    () =>
      logout().then(() => {
        // dispatch(handleLogout())
        setIsAuthenticated(false)
        setUser(null)
        setIsInitialized(false)
        window.localStorage.removeItem('userData')
        window.localStorage.removeItem(authConfig.storageTokenKeyName)
      }),
    [logout, dispatch, router]
  )

  const handleRegister = useCallback(
    (params: RegisterParams, errorCallback: ErrCallbackType) =>
      register(params).then(() => {
        axios
          .post(authConfig.registerEndpoint, params)
          .then(res => {
            if (res.data.error) {
              if (errorCallback) errorCallback(res.data.error)
            } else {
              login({ email: params.email, password: params.password })
            }
          })
          .catch((err: { [key: string]: string }) => (errorCallback ? errorCallback(err) : null))
      }),
    [login, register]
  )

  // useEffect(() => {
  //   const initAuth = async () => {
  //     if (window) {
  //       const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
  //       if (storedToken) {
  //         setIsInitialized(true)
  //         setIsAuthenticated(true)
  //       }
  //     }
  //   }
  //   initAuth()
  // }, [])

  return {
    user,
    isInitialized,
    isAuthenticated,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }
}

export default useAuth
