// ** React Imports
import { ReactNode, useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/@core/hooks/useAuth'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

interface AuthGuardProps {
  children: ReactNode
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children } = props
  const auth = useAuth()
  const router = useRouter()

  useEffect(
    () => {
      if (!router.isReady) {
        return
      }

      if (auth.user === null && !window.localStorage.getItem('userData')) {
        router.replace({
          pathname: '/login',
          query: { returnUrl: router.asPath }
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  )

  if (auth.loading || auth.user === null) {
    return <Spinner />
  }

  return <>{children}</>
}

export default AuthGuard
