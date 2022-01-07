// ** React Imports
import { ReactNode, useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/@core/hooks/useAuth'

// ** Spinner Import
// import Spinner from 'src/@core/components/spinner'

interface AuthGuardProps {
  pageProps: any
  children: ReactNode
}

export const AuthGuard = (props: AuthGuardProps) => {
  const { pageProps, children } = props
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (auth.user === null && !pageProps.restrictedPage && !window.localStorage.getItem('userData')) {
      router.replace({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      })
    }
    if (window.localStorage.getItem('userData') && pageProps.restrictedPage) {
      if (router.query && router.query.returnUrl) {
        router.replace(router.query.returnUrl as string)
      }
    }
  }, [router.route, pageProps.restrictedPage])

  if (auth.loading || (auth.user === null && !pageProps.restrictedPage)) {
    return null
  }

  return <>{children}</>
}
