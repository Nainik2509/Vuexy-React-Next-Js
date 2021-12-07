// ** React Imports
import { FC, ReactChild } from 'react'

// ** MUI Imports
import { deepmerge } from '@mui/utils'
import { Theme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'

// ** Type Import
import { Skin } from '@core/layouts/types'

// ** Theme Override Imports
import overrides from './overrides'
import typography from './typography'

// ** Theme
import UserThemeOptions from 'assets/UserThemeOptions'
import themeOptions from './ThemeOptions'

// ** Type Imports
import { Settings } from '@core/context/settingsContext'

// ** Global Styles
import GlobalStyling from './globalStyles'

interface Props {
  settings: Settings
  children: ReactChild
}

const ThemeComponent: FC<Props> = props => {
  // ** Props
  const { settings, children } = props

  // ** Merged ThemeOptions of Core and User
  const themeConfig = themeOptions(settings)

  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(themeConfig)

  // ** Deep Merge Component overrides of core and user
  const mergeComponentOverrides = (theme: Theme, settings: Settings) => (
    deepmerge({
      ...overrides(theme, settings)
    }, UserThemeOptions(settings)?.components)
  )
  
  // ** Deep Merge Typography of core and user
  const mergeTypography = (theme: Theme) => (
    deepmerge(typography(theme), UserThemeOptions(settings)?.typography)
  )

  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components: {
      ...mergeComponentOverrides(theme, settings)
    },
    typography: {
      ...mergeTypography(theme)
    }
  })

  // ** Set responsive font sizes to true
  theme = responsiveFontSizes(theme)

  const styles = GlobalStyling(theme, settings)

  console.log(`styles`, styles)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme, settings)} />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent
