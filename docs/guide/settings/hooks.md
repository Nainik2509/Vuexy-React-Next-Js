# useSettings Hook

## Overview

useSettings hook is created to get the values from the Settings context and set the values to the Settings context. useSettings hook must be used inside a functional component. The values that are accessible in the useSettings hook is mentioned in the [Settings Context](/guide/settings/context.html#properties).

## Read values from Settings Context

Below is the example of how to get template skin. You can get any other values by replacing `skin` with any other property that is available in the [Settings Context](/guide/settings/context.html#properties).

```tsx
import Box from '@mui/material/Box'
import { useSettings } from 'src/@core/hooks/useSettings'

const SomeComponent = () => {
  const { settings } = useSettings()

  return <Box sx={{ boxShadow: theme => theme.shadows[settings.skin === 'bordered' ? 0 : 7] }}>...</Box>
}

export default SomeComponent
```

## Update single value in Settings Context

Below is the example of how to change template mode, i.e. Light or Dark mode. You can change any other values by replacing `mode` with any other property that is available in the [Settings Context](/guide/settings/context.html#properties).

```tsx
import { PaletteMode } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import WeatherNight from 'mdi-material-ui/WeatherNight'
import WeatherSunny from 'mdi-material-ui/WeatherSunny'
import { useSettings } from 'src/@core/hooks/useSettings'

const ModeToggler = () => {
  const { settings, saveSettings } = useSettings()

  const handleModeChange = (mode: PaletteMode) => {
    saveSettings({ ...settings, mode })
  }

  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark')
    } else {
      handleModeChange('light')
    }
  }

  return (
    <IconButton color='inherit' aria-haspopup='true' onClick={handleModeToggle}>
      {settings.mode === 'dark' ? <WeatherSunny /> : <WeatherNight />}
    </IconButton>
  )
}

export default ModeToggler
```

## Update multiple values in Settings Context

Below is the example of how to change content width (i.e. Full or Container width) and template layout (i.e. Vertical or Horizontal layout). You can change any other values that are available in the [Settings Context](/guide/settings/context.html#properties).

```tsx
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useSettings } from 'src/@core/hooks/useSettings'
import { Settings } from 'src/@core/context/settingsContext'

const SomeComponent = () => {
  const { settings, saveSettings } = useSettings()

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]): void => {
    saveSettings({ ...settings, [field]: value })
  }

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography>Content Width</Typography>
        <RadioGroup
          row
          value={settings.contentWidth}
          onChange={e => handleChange('contentWidth', e.target.value as Settings['contentWidth'])}
        >
          <FormControlLabel value='full' label='Full' control={<Radio />} />
          <FormControlLabel value='boxed' label='Boxed' control={<Radio />} />
        </RadioGroup>
      </Box>

      <Box>
        <Typography>Menu Layout</Typography>
        <RadioGroup
          row
          value={settings.layout}
          onChange={e => handleChange('layout', e.target.value as Settings['layout'])}
        >
          <FormControlLabel value='vertical' label='Vertical' control={<Radio />} />
          <FormControlLabel value='horizontal' label='Horizontal' control={<Radio />} />
        </RadioGroup>
      </Box>
    </>
  )
}

export default SomeComponent
```
