// ** React Imports
import { FC, createContext, useState, ReactNode, useEffect } from 'react'

// ** MUI Imports
import { PaletteMode, Direction } from '@mui/material'

// ** Third Party Imports
import { useTranslation } from 'react-i18next'

// ** ThemeConfig Import
import themeConfig from 'configs/themeConfig'

// ** Types Import
import { Skin, AppBar, Footer, Layout, ThemeColor, ContentWidth, VerticalNavToggle } from '@core/layouts/types'

export type Settings = {
  skin: Skin
  appBar?: AppBar
  footer?: Footer
  layout?: Layout
  language?: string
  mode: PaletteMode
  lastLayout?: Layout
  direction: Direction
  navCollapsed: boolean
  themeColor: ThemeColor
  contentWidth: ContentWidth
  verticalNavToggleType: VerticalNavToggle
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
  navCollapsed: themeConfig.navCollapsed,
  contentWidth: themeConfig.contentWidth,
  verticalNavToggleType: themeConfig.verticalNavToggleType
}

const staticSettings = {
  appBar: initialSettings.appBar,
  footer: initialSettings.footer,
  layout: initialSettings.layout,
  lastLayout: initialSettings.lastLayout
}

export const restoreSettings = (): Settings | null => {
  let settings = null

  try {
    const storedData: string | null = window.localStorage.getItem('settings')

    if (storedData) {
      settings = {...JSON.parse(storedData), ...staticSettings}
    } else {
      settings = initialSettings
    }
  } catch (err) {
    console.error(err)
  }

  return settings
}

// set settings in localStorage
export const storeSettings = (settings: Settings) => {
  const initSettings = Object.assign({}, settings)

  delete initSettings.appBar
  delete initSettings.footer
  delete initSettings.layout
  delete initSettings.lastLayout
  window.localStorage.setItem('settings', JSON.stringify(initSettings))
}

// ** Create Context
export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings
})

interface Props {
  children: ReactNode
}

export const SettingsProvider: FC<Props> = ({ children }: Props) => {
  // ** Hook
  const { i18n } = useTranslation()

  // ** State
  const [settings, setSettings] = useState<Settings>(initialSettings)

  useEffect(() => {
    const restoredSettings = restoreSettings()

    if (restoredSettings) {
      const initSettings: Settings = JSON.parse(window.localStorage.getItem('settings')!)
      const i18nCondition = (initSettings !== null) && (initSettings.language !== i18n.language)
      if (i18nCondition) {
        i18n.changeLanguage(initSettings.language)
      }

      setSettings({...restoredSettings, language: i18nCondition ? initSettings.language : i18n.language})
    }
  }, [i18n])

  const saveSettings = (updatedSettings: Settings) => {
    storeSettings(updatedSettings)
    setSettings(updatedSettings)
  }

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const SettingsConsumer = SettingsContext.Consumer
