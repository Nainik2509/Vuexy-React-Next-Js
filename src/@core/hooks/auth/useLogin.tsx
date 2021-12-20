// ** React Imports
import { useCallback } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { handleLogin } from 'src/redux/authentication'

// ** Default Config
import authConfig from 'src/configs/auth'

// ** Types
import { LoginParams, ErrCallbackType } from 'src/@core/context/types'

// ** Provider & Context
// import { AbilityContext } from 'utility/context/Can'
import useAuthProvider from './useAuthProvider'

/**
 * Get a callback for calling the authProvider.login() method
 * and redirect to the previous authenticated page (or the home page) on success.
 *
 * @see useAuthProvider
 *
 * @returns {Function} login callback
 */

type Login = (params: LoginParams, errorCallback?: ErrCallbackType) => Promise<void>

const useLogin = (): Login => {
  // ** Hooks
  const router = useRouter()
  const dispatch = useDispatch()
  const authProvider = useAuthProvider()

  // const ability = useContext(AbilityContext)

  const login = useCallback(
    (params: LoginParams, errorCallback: ErrCallbackType) =>
      authProvider.login(params).then(() => {
        axios
          .post(authConfig.loginEndpoint, params)
          .then(async res => {
            window.localStorage.setItem(authConfig.storageTokenKeyName, res.data.accessToken)
          })
          .then(() => {
            axios
              .get('/auth/me', {
                headers: {
                  Authorization: window.localStorage.getItem(authConfig.storageTokenKeyName)
                }
              })
              .then(async response => {
                const { role } = response.data.userData
                const returnURL = router.query.returnUrl
                dispatch(handleLogin({ userData: response.data.userData }))

                // await ability.update(response.data.userData.ability)
                router.push(returnURL || authConfig.redirectURL(role))
              })
          })
          .catch(err => {
            if (errorCallback) errorCallback(err)
          })
      }),

    // [authProvider, dispatch, ability, router]
    [authProvider, dispatch, router]
  )

  return login
}

export default useLogin
