// ** React Imports
import { FC, useState } from 'react'

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** MUI Imports
import Radio from '@mui/material/Radio'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import CogOutline from 'mdi-material-ui/CogOutline'

// ** Type Import
import { Settings } from '@core/context/settingsContext'

// ** Hook Import
import { useSettings } from '@core/hooks/useSettings'

const Toggler = styled(Box)<BoxProps>(({ theme }) => ({
  right: 0,
  top: '50%',
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  padding: theme.spacing(2),
  zIndex: theme.zIndex.modal,
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.primary.main,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius
}))

const Drawer = styled(MuiDrawer)<DrawerProps>(({ theme }) => ({
  width: 400,
  zIndex: theme.zIndex.modal,
  '& .MuiFormControlLabel-root': {
    marginRight: '0.6875rem'
  },
  '& .MuiDrawer-paper': {
    border: 0,
    width: 400,
    zIndex: theme.zIndex.modal,
    boxShadow: theme.shadows[9]
  }
}))

const CustomizerSpacing = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 6)
}))

const ColorBox = styled(Box)<BoxProps>(({ theme }) => ({
  width: 45,
  height: 45,
  cursor: 'pointer',
  margin: theme.spacing(2.5, 1.75, 1.75),
  borderRadius: theme.shape.borderRadius,
  transition: 'margin .25s ease, width .25s ease, height .25s ease, box-shadow .25s ease',
  '&:hover': {
    boxShadow: theme.shadows[4]
  }
}))

const Customizer: FC = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  // ** Hook
  const { settings, saveSettings } = useSettings()

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]): void => {
    saveSettings({ ...settings, [field]: value })
  }

  return (
    <div className='customizer'>
      <Toggler className='customizer-toggler' onClick={() => setOpen(true)}>
        <CogOutline sx={{ height: 20, width: 20, color: 'common.white' }} />
      </Toggler>
      <Drawer open={open} hideBackdrop anchor='right' variant='temporary'>
        <Box
          className='customizer-header'
          sx={{
            position: 'relative',
            p: theme => theme.spacing(3.5, 5),
            borderBottom: theme => `1px solid ${theme.palette.divider}`
          }}
        >
          <Typography variant='h6' sx={{ fontWeight: 600, textTransform: 'uppercase' }}>
            Theme Customizer
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Customize & Preview in Real Time</Typography>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              right: 20,
              top: '50%',
              position: 'absolute',
              color: 'text.secondary',
              transform: 'translateY(-50%)'
            }}
          >
            <Close fontSize='small' />
          </IconButton>
        </Box>
        <PerfectScrollbar options={{ wheelPropagation: false }}>
          <CustomizerSpacing className='customizer-body'>
            <Typography
              component='p'
              variant='caption'
              sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
            >
              Theming
            </Typography>

            {/* Skin */}
            <Box sx={{ mb: 5 }}>
              <Typography>Skin</Typography>
              <RadioGroup
                row
                value={settings.skin}
                onChange={e => handleChange('skin', e.target.value as Settings['skin'])}
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
              >
                <FormControlLabel value='default' label='Default' control={<Radio />} />
                <FormControlLabel value='bordered' label='Bordered' control={<Radio />} />
                {settings.layout === 'horizontal' ? null : (
                  <FormControlLabel value='semi-dark' label='Semi Dark' control={<Radio />} />
                )}
              </RadioGroup>
            </Box>

            {/* Mode */}
            <Box sx={{ mb: 5 }}>
              <Typography>Mode</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InputLabel
                  htmlFor='change-mode'
                  sx={{ cursor: 'pointer', fontSize: '0.875rem', color: 'text.secondary' }}
                >
                  Light
                </InputLabel>
                <Switch
                  id='change-mode'
                  name='change-mode'
                  checked={settings.mode === 'dark'}
                  onChange={e => handleChange('mode', e.target.checked ? 'dark' : 'light')}
                />
                <InputLabel
                  htmlFor='change-mode'
                  sx={{ cursor: 'pointer', fontSize: '0.875rem', color: 'text.secondary' }}
                >
                  Dark
                </InputLabel>
              </Box>
            </Box>

            {/* Color Picker */}
            <Box>
              <Typography>Primary Color</Typography>
              <Box sx={{ display: 'flex' }}>
                <ColorBox
                  sx={{
                    backgroundColor: '#9155FD',
                    ...(settings.themeColor === 'primary'
                      ? { width: 53, height: 53, m: theme => theme.spacing(1.5, 0.75, 0) }
                      : {})
                  }}
                  onClick={() => handleChange('themeColor', 'primary')}
                />
                <ColorBox
                  sx={{
                    backgroundColor: 'secondary.main',
                    ...(settings.themeColor === 'secondary'
                      ? { width: 53, height: 53, m: theme => theme.spacing(1.5, 0.75, 0) }
                      : {})
                  }}
                  onClick={() => handleChange('themeColor', 'secondary')}
                />
                <ColorBox
                  sx={{
                    backgroundColor: 'success.main',
                    ...(settings.themeColor === 'success'
                      ? { width: 53, height: 53, m: theme => theme.spacing(1.5, 0.75, 0) }
                      : {})
                  }}
                  onClick={() => handleChange('themeColor', 'success')}
                />
                <ColorBox
                  sx={{
                    backgroundColor: 'error.main',
                    ...(settings.themeColor === 'error'
                      ? { width: 53, height: 53, m: theme => theme.spacing(1.5, 0.75, 0) }
                      : {})
                  }}
                  onClick={() => handleChange('themeColor', 'error')}
                />
                <ColorBox
                  sx={{
                    backgroundColor: 'warning.main',
                    ...(settings.themeColor === 'warning'
                      ? { width: 53, height: 53, m: theme => theme.spacing(1.5, 0.75, 0) }
                      : {})
                  }}
                  onClick={() => handleChange('themeColor', 'warning')}
                />
                <ColorBox
                  sx={{
                    backgroundColor: 'info.main',
                    ...(settings.themeColor === 'info'
                      ? { width: 53, height: 53, m: theme => theme.spacing(1.5, 0.75, 0) }
                      : {})
                  }}
                  onClick={() => handleChange('themeColor', 'info')}
                />
              </Box>
            </Box>
          </CustomizerSpacing>

          <Divider sx={{ m: 0 }} />

          <CustomizerSpacing className='customizer-body'>
            <Typography
              component='p'
              variant='caption'
              sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
            >
              Layout
            </Typography>

            {/* Content Width */}
            <Box sx={{ mb: 5 }}>
              <Typography>Content Width</Typography>
              <RadioGroup
                row
                value={settings.contentWidth}
                onChange={e => handleChange('contentWidth', e.target.value as Settings['contentWidth'])}
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
              >
                <FormControlLabel value='full' label='Full' control={<Radio />} />
                <FormControlLabel value='boxed' label='Boxed' control={<Radio />} />
              </RadioGroup>
            </Box>

            {/* AppBar */}
            <Box sx={{ mb: 5 }}>
              <Typography>AppBar Type</Typography>
              <RadioGroup
                row
                value={settings.appBar}
                onChange={e => handleChange('appBar', e.target.value as Settings['appBar'])}
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
              >
                <FormControlLabel value='fixed' label='Fixed' control={<Radio />} />
                <FormControlLabel value='static' label='Static' control={<Radio />} />
                <FormControlLabel value='hidden' label='Hidden' control={<Radio />} />
              </RadioGroup>
            </Box>

            {/* Footer */}
            <Box>
              <Typography>Footer Type</Typography>
              <RadioGroup
                row
                value={settings.footer}
                onChange={e => handleChange('footer', e.target.value as Settings['footer'])}
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
              >
                <FormControlLabel value='fixed' label='Fixed' control={<Radio />} />
                <FormControlLabel value='static' label='Static' control={<Radio />} />
                <FormControlLabel value='hidden' label='Hidden' control={<Radio />} />
              </RadioGroup>
            </Box>
          </CustomizerSpacing>

          <Divider sx={{ m: 0 }} />

          <CustomizerSpacing className='customizer-body'>
            <Typography
              component='p'
              variant='caption'
              sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
            >
              Menu
            </Typography>

            {/* Menu Layout */}
            <Box sx={{ mb: settings.layout === 'horizontal' && settings.appBar === 'hidden' ? {} : 5 }}>
              <Typography>Menu Layout</Typography>
              <RadioGroup
                row
                value={settings.layout}
                onChange={e => handleChange('layout', e.target.value as Settings['layout'])}
                sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
              >
                <FormControlLabel value='vertical' label='Vertical' control={<Radio />} />
                <FormControlLabel value='horizontal' label='Horizontal' control={<Radio />} />
              </RadioGroup>
            </Box>

            {/* Menu Toggle */}
            {settings.layout === 'horizontal' ? null : (
              <Box sx={{ mb: 5 }}>
                <Typography>Menu Toggle</Typography>
                <RadioGroup
                  row
                  value={settings.verticalNavToggleType}
                  onChange={e =>
                    handleChange('verticalNavToggleType', e.target.value as Settings['verticalNavToggleType'])
                  }
                  sx={{ '& .MuiFormControlLabel-label': { fontSize: '.875rem', color: 'text.secondary' } }}
                >
                  <FormControlLabel value='accordion' label='Accordion' control={<Radio />} />
                  <FormControlLabel value='collapse' label='Collapse' control={<Radio />} />
                </RadioGroup>
              </Box>
            )}

            {/* Menu Collapsed */}
            {settings.navHidden || settings.layout === 'horizontal' ? null : (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 5 }}>
                <Typography>Menu Collapsed</Typography>
                <Switch
                  name='navCollapsed'
                  checked={settings.navCollapsed}
                  onChange={e => handleChange('navCollapsed', e.target.checked)}
                />
              </Box>
            )}

            {/* Menu Hidden */}
            {settings.layout === 'horizontal' && settings.appBar === 'hidden' ? null : (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>Menu Hidden</Typography>
                <Switch
                  name='navHidden'
                  checked={settings.navHidden}
                  onChange={e => handleChange('navHidden', e.target.checked)}
                />
              </Box>
            )}
          </CustomizerSpacing>

          <Divider sx={{ m: 0 }} />

          <CustomizerSpacing className='customizer-body'>
            <Typography
              component='p'
              variant='caption'
              sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
            >
              Misc
            </Typography>

            {/* RTL */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>RTL</Typography>
              <Switch
                name='direction'
                checked={settings.direction === 'rtl'}
                onChange={e => handleChange('direction', e.target.checked ? 'rtl' : 'ltr')}
              />
            </Box>
          </CustomizerSpacing>
        </PerfectScrollbar>
      </Drawer>
    </div>
  )
}

export default Customizer
