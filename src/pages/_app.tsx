// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

// ** Store Imports
import { store } from 'src/redux/store'
import { Provider } from 'react-redux'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import 'src/configs/i18n'
import ability from 'src/configs/acl/ability'

// ** Fake-DB Import
import 'src/@fake-db'

// ** CLSX Import
import clsx from 'clsx'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { AbilityContext } from 'src/@core/context/Can'
import { Auth, AuthContext } from 'src/@core/context/AuthContext'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Types
import { AuthValuesType } from 'src/@core/context/types'
import { RouterTransitions } from 'src/@core/layouts/types'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** Prismjs Styles
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

// ** Animate CSS
import 'animate.css/animate.css'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode
//   setConfig?: () => void
// }

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const [isMounted, setIsMounted] = useState<boolean>()

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  const setConfig = Component.setConfig ?? undefined

  const router = useRouter()
  const AuthConsumer = Auth.Consumer

  useEffect(() => {
    setIsMounted(true)

    return () => setIsMounted(false)
  }, [])

  const handleRedirection = (auth: AuthValuesType, ability: any, routerTransition: RouterTransitions | undefined) => {
    if (auth.user === null && router.route !== '/login') {
      router.push({
        pathname: '/login',
        query: { returnUrl: router.route }
      })
    }

    // if (auth.user !== null && pageProps && pageProps.restrictedPage) {
    //   router.push(authConfig.redirectURL(auth.user.role))
    // }

    if (
      auth.user &&
      !pageProps.restrictedPage &&
      router.route !== '/not-authorized' &&
      !ability.can(pageProps.action, pageProps.subject)
    ) {
      router.push('/not-authorized')
    }

    return getLayout(
      <div
        className={clsx('animation-wrapper', {
          [`animate__animated animate__${routerTransition}`]:
            routerTransition !== 'none' || routerTransition !== undefined
        })}
        key={router.route}
      >
        <Component {...pageProps} />
      </div>
    )
  }

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Master React Admin Template With MUI & NextJS</title>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <AbilityContext.Provider value={ability}>
          <AuthContext>
            <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
              <SettingsConsumer>
                {({ settings }) => {
                  return (
                    <ThemeComponent settings={settings}>
                      {isMounted ? (
                        <AuthConsumer>
                          {auth => handleRedirection(auth, ability, settings.routerTransition)}
                        </AuthConsumer>
                      ) : null}
                    </ThemeComponent>
                  )
                }}
              </SettingsConsumer>
            </SettingsProvider>
          </AuthContext>
        </AbilityContext.Provider>
      </CacheProvider>
    </Provider>
  )
}

export default App
