// ** React Import
import { FC } from 'react'

// ** Type Import
import { Settings } from '@core/context/settingsContext'

// ** Navigation Drawer Import
import Drawer from './Drawer'

interface Props {
  hidden: boolean
  navWidth: number
  settings: Settings
  navVisible: boolean
  collapsedNavWidth: number
  setNavVisible: (value: boolean) => void
  saveSettings: (values: Settings) => void
}

const Navigation: FC<Props> = (props: Props) => {
  const { hidden, navWidth, settings, navVisible, saveSettings, setNavVisible, collapsedNavWidth } = props

  return (
    <Drawer
      hidden={hidden}
      navWidth={navWidth}
      settings={settings}
      navVisible={navVisible}
      saveSettings={saveSettings}
      setNavVisible={setNavVisible}
      collapsedNavWidth={collapsedNavWidth}
    />
  )
}

export default Navigation
