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

  const handleReturnURL = () => {
    if (!router.query) {
      return '/'
    } else {
      if (router.asPath.startsWith('/login?returnUrl=')) {
        return router.asPath.replace('/login?returnUrl=', '').replace(/%2F/g, '/')
      } else {
        return router.asPath
      }
    }
  }

  useEffect(() => {
    if (auth.user === null && !window.localStorage.getItem('userData')) {
      router.replace({
        pathname: '/login',
        query: {
          returnUrl: router.replace(handleReturnURL() as string)
        }
      })
    }
  }, [router.route])

  if (auth.loading) {
    return <Spinner />
  }

  return <>{children}</>
}

export default AuthGuard
