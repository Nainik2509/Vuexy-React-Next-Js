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
  collapsedNavWidth: number
  saveSettings: (values: Settings) => void
}

const Navigation: FC<Props> = (props: Props) => {
  const { hidden, navWidth, settings, saveSettings, collapsedNavWidth } = props

  return (
    <Drawer
      hidden={hidden}
      navWidth={navWidth}
      settings={settings}
      saveSettings={saveSettings}
      collapsedNavWidth={collapsedNavWidth}
    />
  )
}

export default Navigation
