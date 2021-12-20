// ** React Imports
import { FC, useEffect, useState, ReactElement, ReactNode } from 'react'

// ** Next Imports
import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Store imports
import { Provider } from 'react-redux'
import { store } from 'src/redux/store'

// ** i18n Config Import
import 'src/configs/i18n'

// ** Fake-DB Import
import 'src/@fake-db'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { AuthContext } from 'src/@core/context/AuthContext'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

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
const App: FC<ExtendedAppProps> = props => {
  const [isMounted, setIsMounted] = useState<boolean>()

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  const setConfig = Component.setConfig ?? null

  const router = useRouter()

  // useEffect(() => {
  //   if (!window.localStorage.getItem('accessToken') && router.route !== '/login' && !pageProps.publicPage) {
  //     if (typeof window !== undefined) {
  //       router.push({
  //         pathname: '/login',
  //         query: { returnUrl: router.route }
  //       })
  //     }
  //   }
  // }, [router])
  useEffect(() => {
    setIsMounted(true)

    return () => setIsMounted(false)
  }, [])

  const handleRedirection = () => {
    if (
      typeof window !== undefined &&
      !window.localStorage.getItem('accessToken') &&
      router.route !== '/login' &&
      !pageProps.publicPage
    ) {
      router.push({
        pathname: '/login',
        query: { returnUrl: router.route }
      })
    } else {
      return getLayout(<Component {...pageProps} />)
    }
  }

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Master React Admin Template With MUI & NextJS</title>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <AuthContext>
          <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
            <SettingsConsumer>
              {({ settings }) => {
                return <ThemeComponent settings={settings}>{isMounted ? handleRedirection() : null}</ThemeComponent>
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </AuthContext>
      </CacheProvider>
    </Provider>
  )
}

export default App
