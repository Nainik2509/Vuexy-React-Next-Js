// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Type Import
import { Settings } from '@core/context/settingsContext'

// ** Theme Config Import
import themeConfig from 'configs/themeConfig'

// ** Components
import ModeToggler from '@core/layouts/components/shared-components/ModeToggler'
import Autocomplete from '@core/layouts/components/shared-components/Autocomplete'
import UserDropdown from '@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from '@core/layouts/components/shared-components/NotificationDropdown'

interface Props {
  hidden: boolean
  settings: Settings
  setShowBackdrop: (val: boolean) => void
  saveSettings: (values: Settings) => void
}

const AppBarContent: FC<Props> = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, setShowBackdrop } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography
        variant='h6'
        sx={{
          lineHeight: 'normal',
          textTransform: 'uppercase',
          fontWeight: (theme: Theme) => theme.typography.fontWeightBold
        }}
      >
        {themeConfig.templateName}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Autocomplete hidden={hidden} setShowBackdrop={setShowBackdrop} />
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <NotificationDropdown settings={settings} saveSettings={saveSettings} />
        <UserDropdown settings={settings} saveSettings={saveSettings} />
      </Box>
    </Box>
  )
}

export default AppBarContent
