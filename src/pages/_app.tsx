// ** Next Imports
import Head from 'next/head'
import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

// ** Store Imports
import { store } from 'src/redux/store'
import { Provider } from 'react-redux'

// ** Loader Improt
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import 'src/configs/i18n'
import themeConfig from 'src/configs/themeConfig'

// ** Fake-DB Import
import 'src/@fake-db'

// ** CLSX Import
import clsx from 'clsx'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import { AuthGuard } from 'src/@core/components/auth'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { AuthProvider } from 'src/@core/context/AuthContext'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

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

if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  const setConfig = Component.setConfig ?? undefined

  const router = useRouter()

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Master React Admin Template With MUI & NextJS</title>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>

        <AuthProvider>
          <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    {/* {auth.loading ? (
                              'Loading...' // Splash screen
                            ) : (
                              <AuthGuard pageProps={pageProps} ability={ability}>
                                {getLayout(<Component {...pageProps} />)}
                              </AuthGuard>
                            )} */}
                    <AuthGuard pageProps={pageProps}>
                      {getLayout(
                        <div
                          key={router.route}
                          className={clsx('animation-wrapper', {
                            [`animate__animated animate__${settings.routerTransition}`]:
                              settings.routerTransition !== 'none' || settings.routerTransition !== undefined
                          })}
                        >
                          <Component {...pageProps} />
                        </div>
                      )}
                    </AuthGuard>
                    {/* <AuthGuard pageProps={pageProps}>{getLayout(<Component {...pageProps} />)}</AuthGuard> */}
                  </ThemeComponent>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </AuthProvider>
      </CacheProvider>
    </Provider>
  )
}

export default App
