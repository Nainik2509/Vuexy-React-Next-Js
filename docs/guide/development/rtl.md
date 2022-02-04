# RTL

## Change to RTL

We provide Left to Right (LTR) by default but you can change it to Right to Left (RTL) very easily.

To change the whole template to RTL, you need to go to the `src/configs/themeConfig.ts` file and change the `direction` property from `ltr` to `rtl`.

## RTL Toggler

You can also make a direction toggler which toggle between LTR and RTL directions. Look at the following code to make one:

```tsx
import Switch from '@mui/material/Switch'
import { Direction } from '@mui/material'
import { useSettings } from 'src/@core/hooks/useSettings'
import FormControlLabel from '@mui/material/FormControlLabel'

const DirectionToggler = () => {
  const { settings, saveSettings } = useSettings()

  const handleDirectionChange = (value: Direction) => {
    saveSettings({ ...settings, direction: value })
  }

  return (
    <FormControlLabel
      label='RTL'
      control={
        <Switch
          checked={settings.direction === 'rtl'}
          onChange={e => handleDirectionChange(e.target.checked ? 'rtl' : 'ltr')}
        />
      }
    />
  )
}

export default DirectionToggler
```

## Get current direction

You might need to render some code conditionally based on the current direction of the template. You can write the following code to do so:

```tsx
import { useSettings } from 'src/@core/hooks/useSettings'

const SomeComponent = () => {
  const { settings } = useSettings()

  if (settings.direction === 'rtl') {
    return (
      {/* Some code */}
    )
  } else {
    return (
      {/* Some other code */}
    )
  }
}

export default SomeComponent
```

If you need to style something conditionally based on the current direction of the template, do the following:

```tsx
import Box from '@mui/material/Box'
import { useSettings } from 'src/@core/hooks/useSettings'

const SomeComponent = () => {
  const { settings } = useSettings()

  return (
    <Box sx={{ backgroundColor: settings.direction === 'rtl' ? 'red' : 'blue' }}>
      ...
    </Box>
  )
}

export default SomeComponent
```
