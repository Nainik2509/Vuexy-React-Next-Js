// ** React Import
import { useCallback } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { handleLogout } from 'src/redux/authentication'

// ** Auth Provider Import
import useAuthProvider from './useAuthProvider'

const useLogout = () => {
  // ** hooks
  const router = useRouter()
  const dispatch = useDispatch()
  const authProvider = useAuthProvider()

  const logout = useCallback(
    () =>
      authProvider.logout().then(() => {
        dispatch(handleLogout())
        router.push('/login')
      }),
    [authProvider, router, dispatch]
  )

  return logout
}

export default useLogout
