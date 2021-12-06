// ** React Imports
import { FC, createContext, useState, ReactNode, useEffect } from 'react'

// ** MUI Imports
import { PaletteMode, Direction } from '@mui/material'

// ** ThemeConfig Import
import themeConfig from 'configs/themeConfig'

// ** Types Import
import { Skin, AppBar, Footer, Layout, ThemeColor, ContentWidth, VerticalNavToggle } from '@core/layouts/types'

export type Settings = {
  skin: Skin
  appBar?: AppBar
  footer?: Footer
  layout?: Layout
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
  mode: 'light',
  skin: 'default',
  appBar: 'fixed',
  footer: 'static',
  direction: 'ltr',
  layout: 'vertical',
  navCollapsed: false,
  themeColor: 'primary',
  contentWidth: 'boxed',
  lastLayout: themeConfig.layout,
  verticalNavToggleType: 'accordion'
}

export const restoreSettings = (): Settings | null => {
  let settings = null

  try {
    const storedData: string | null = window.localStorage.getItem('settings')

    if (storedData) {
      settings = JSON.parse(storedData)
    } else {
      settings = {
        mode: 'light',
        skin: 'default',
        appBar: 'fixed',
        footer: 'static',
        direction: 'ltr',
        layout: 'vertical',
        navCollapsed: false,
        themeColor: 'primary',
        contentWidth: 'boxed',
        lastLayout: themeConfig.layout,
        verticalNavToggleType: 'accordion'
      }
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
  // ** State
  const [settings, setSettings] = useState<Settings>(initialSettings)

  useEffect(() => {
    const restoredSettings = restoreSettings()

    if (restoredSettings) {
      setSettings(restoredSettings)
    }
  }, [])

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
