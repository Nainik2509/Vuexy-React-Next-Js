// ** React Imports
import { FC, ReactElement, ReactNode  } from 'react'

// ** Next Imports
import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** i18n Config Import
import 'configs/i18n'

// ** Theme
import ThemeComponent from '@core/theme/ThemeComponent'

// ** Settings Context
import { SettingsConsumer, SettingsProvider } from '@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from '@core/utils/create-emotion-cache'

// ** Prismjs Styles
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

// ** Extend App Props with Emotion
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Configure JSS & ClassName
const App: FC<AppPropsWithLayout> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Master React Admin Template With MUI & NextJS</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => (
            <ThemeComponent settings={settings}>
              <Component {...pageProps} />
            </ThemeComponent>
          )}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>

  )
}

export default App
