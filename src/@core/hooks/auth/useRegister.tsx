// ** React Imports
import { useCallback } from 'react'

// ** Axios
import axios from 'axios'

// ** Default Config
import authConfig from 'src/configs/auth'

// ** Types
import { RegisterParams, ErrCallbackType } from 'src/@core/context/types'

// ** Auth Hooks
import useLogin from './useLogin'
import useAuthProvider from './useAuthProvider'

const useRegister = (): Register => {
  const authProvider = useAuthProvider()
  const login = useLogin()

  const register = useCallback(
    (params: RegisterParams, errorCallback: ErrCallbackType) =>
      authProvider.register(params).then(() => {
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
    [authProvider, login]
  )

  return register
}

type Register = (params: RegisterParams, errorCallback?: (err: { [key: string]: string }) => void) => Promise<void>

export default useRegister
