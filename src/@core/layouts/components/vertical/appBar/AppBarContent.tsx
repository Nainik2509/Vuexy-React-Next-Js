// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import MenuIcon from 'mdi-material-ui/Menu'

// ** Type Import
import { Settings } from '@core/context/settingsContext'

// ** Components
import ModeToggler from '../../shared-components/ModeToggler'
import UserDropdown from '../../shared-components/UserDropdown'
import NotificationDropdown from '../../shared-components/NotificationDropdown'
import Autocomplete from '@core/layouts/components/shared-components/Autocomplete'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  setShowBackdrop: (val: boolean) => void
  saveSettings: (values: Settings) => void
}

const AppBarContent: FC<Props> = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, setShowBackdrop, toggleNavVisibility } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center', color: 'text.primary' }}>
        {hidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <MenuIcon />
          </IconButton>
        ) : null}
        <Autocomplete hidden={hidden} setShowBackdrop={setShowBackdrop} />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center', color: 'text.primary' }}>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <NotificationDropdown settings={settings} saveSettings={saveSettings} />
        <UserDropdown settings={settings} saveSettings={saveSettings} />
      </Box>
    </Box>
  )
}

export default AppBarContent
