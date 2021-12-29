// ** React Imports
import { createContext, useState, ReactNode, useEffect } from 'react'

// ** MUI Imports
import { PaletteMode, Direction } from '@mui/material'

// ** ThemeConfig Import
import themeConfig from 'src/configs/themeConfig'

// ** Types Import
import {
  Skin,
  AppBar,
  Footer,
  ThemeColor,
  ContentWidth,
  VerticalNavToggle,
  RouterTransitions
} from 'src/@core/layouts/types'

export type Settings = {
  skin: Skin
  appBar?: AppBar
  footer?: Footer
  mode: PaletteMode
  navHidden?: boolean // navigation menu
  direction: Direction
  navCollapsed: boolean
  themeColor: ThemeColor
  contentWidth: ContentWidth
  layout?: 'vertical' | 'horizontal'
  routerTransition?: RouterTransitions
  lastLayout?: 'vertical' | 'horizontal'
  verticalNavToggleType: VerticalNavToggle
}

export type PageSpecificSettings = {
  skin?: Skin
  appBar?: AppBar
  footer?: Footer
  mode?: PaletteMode
  navHidden?: boolean // navigation menu
  direction?: Direction
  navCollapsed?: boolean
  themeColor?: ThemeColor
  contentWidth?: ContentWidth
  layout?: 'vertical' | 'horizontal'
  routerTransition?: RouterTransitions
  lastLayout?: 'vertical' | 'horizontal'
  verticalNavToggleType?: VerticalNavToggle
}
export type SettingsContextValue = {
  settings: Settings
  saveSettings: (updatedSettings: Settings) => void
}

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  skin: themeConfig.skin,
  appBar: themeConfig.appBar,
  footer: themeConfig.footer,
  layout: themeConfig.layout,
  lastLayout: themeConfig.layout,
  direction: themeConfig.direction,
  navHidden: themeConfig.navHidden,
  navCollapsed: themeConfig.navCollapsed,
  contentWidth: themeConfig.contentWidth,
  routerTransition: themeConfig.routerTransition,
  verticalNavToggleType: themeConfig.verticalNavToggleType
}

const staticSettings = {
  appBar: initialSettings.appBar,
  footer: initialSettings.footer,
  layout: initialSettings.layout,
  navHidden: themeConfig.navHidden,
  lastLayout: initialSettings.lastLayout,
  routerTransition: themeConfig.routerTransition
}

const restoreSettings = (): Settings | null => {
  let settings = null

  try {
    const storedData: string | null = window.localStorage.getItem('settings')

    if (storedData) {
      settings = { ...JSON.parse(storedData), ...staticSettings }
    } else {
      settings = initialSettings
    }
  } catch (err) {
    console.error(err)
  }

  return settings
}

// set settings in localStorage
const storeSettings = (settings: Settings) => {
  const initSettings = Object.assign({}, settings)

  delete initSettings.appBar
  delete initSettings.footer
  delete initSettings.layout
  delete initSettings.navHidden
  delete initSettings.lastLayout
  delete initSettings.routerTransition
  window.localStorage.setItem('settings', JSON.stringify(initSettings))
}

// ** Create Context
export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings
})

interface Props {
  children: ReactNode
  pageSettings?: PageSpecificSettings
}

export const SettingsProvider = ({ children, pageSettings }: Props) => {
  // ** State
  const [settings, setSettings] = useState<Settings>({ ...initialSettings })

  useEffect(() => {
    const restoredSettings = restoreSettings()

    if (restoredSettings) {
      setSettings({ ...restoredSettings, ...pageSettings })
    }
  }, [pageSettings])

  const saveSettings = (updatedSettings: Settings) => {
    storeSettings(updatedSettings)
    setSettings(updatedSettings)
  }

  return <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>
}

export const SettingsConsumer = SettingsContext.Consumer
