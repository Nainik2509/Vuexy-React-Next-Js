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

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { AbilityContext } from 'src/@core/context/Can'
import { Auth, AuthContext } from 'src/@core/context/AuthContext'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Types
import { AuthValuesType } from 'src/@core/context/types'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** Prismjs Styles
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

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

  const setConfig = Component.setConfig ?? null

  const router = useRouter()
  const AuthConsumer = Auth.Consumer

  useEffect(() => {
    setIsMounted(true)

    return () => setIsMounted(false)
  }, [])

  const handleRedirection = (auth: AuthValuesType, ability: any) => {
    if (!auth.isInitialized && !pageProps.publicPage) {
      router.push({
        pathname: '/login',
        query: { returnUrl: router.route }
      })
    } else {
      if (
        auth.user &&
        auth.user.routeMeta &&
        router.route !== '/not-authorized' &&
        !auth.user.routeMeta.canVisit.includes(router.route) &&
        !ability.can(auth.user.routeMeta.action || 'read', auth.user.routeMeta.resource)
      ) {
        router.push('/not-authorized')
      } else {
        console.log(
          auth.user &&
            auth.user.routeMeta &&
            router.route !== '/not-authorized' &&
            !auth.user.routeMeta.canVisit.includes(router.route)
        )

        return getLayout(<Component {...pageProps} />)
      }
    }
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
                      {isMounted ? <AuthConsumer>{auth => handleRedirection(auth, ability)}</AuthConsumer> : null}
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
