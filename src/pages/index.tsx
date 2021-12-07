// ** NextJs Imports
import type { NextPage } from 'next'

// ** MUI Imports
import Radio from '@mui/material/Radio'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import { useTranslation } from 'react-i18next'

// ** Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// ** Type Imports
import { Settings } from '@core/context/settingsContext'

const Home: NextPage = () => {
  // ** Hook
  const { i18n } = useTranslation()
  const { settings, saveSettings } = useSettings()

  const handleChange = (field: keyof Settings, value: any): void => {
    saveSettings({ ...settings, [field]: value })
  }

  return (
    <div>
      <div>
        <Typography>{`mode: ${settings.mode}`}</Typography>
        <RadioGroup row aria-label="mode" name="mode" value={settings.mode} onChange={event => {handleChange('mode', event.target.value)}}>
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </div>
      <div>
        <Typography>{`skin: ${settings.skin}`}</Typography>
        <RadioGroup row aria-label="skin" name="skin" value={settings.skin} onChange={event => {handleChange('skin', event.target.value)}}>
          <FormControlLabel value="default" control={<Radio />} label="Default" />
          <FormControlLabel value="bordered" control={<Radio />} label="Bordered" />
          <FormControlLabel value="semi-dark" control={<Radio />} label="Semi Dark" />
        </RadioGroup>
      </div>
      <div>
        <Typography>{`appBar: ${settings.appBar}`}</Typography>
        <RadioGroup row aria-label="appBar" name="appBar" value={settings.appBar} onChange={event => {handleChange('appBar', event.target.value)}}>
          <FormControlLabel value="fixed" control={<Radio />} label="Fixed" />
          <FormControlLabel value="static" control={<Radio />} label="Static" />
          <FormControlLabel value="hidden" control={<Radio />} label="Hidden" />
        </RadioGroup>
      </div>
      <div>
        <Typography>{`footer: ${settings.footer}`}</Typography>
        <RadioGroup row aria-label="footer" name="footer" value={settings.footer} onChange={event => {handleChange('footer', event.target.value)}}>
          <FormControlLabel value="fixed" control={<Radio />} label="Fixed" />
          <FormControlLabel value="static" control={<Radio />} label="Static" />
          <FormControlLabel value="hidden" control={<Radio />} label="Hidden" />
        </RadioGroup>
      </div>
      <div>
        <Typography>{`direction: ${settings.direction}`}</Typography>
        <RadioGroup row aria-label="direction" name="direction" value={settings.direction} onChange={event => {handleChange('direction', event.target.value)}}>
          <FormControlLabel value="ltr" control={<Radio />} label="LTR" />
          <FormControlLabel value="rtl" control={<Radio />} label="RTL" />
        </RadioGroup>
      </div>
      <div>
        <Typography>{`layout: ${settings.layout}`}</Typography>
        <RadioGroup row aria-label="layout" name="layout" value={settings.layout} onChange={event => {handleChange('layout', event.target.value)}}>
          <FormControlLabel value="vertical" control={<Radio />} label="Vertical" />
          <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
        </RadioGroup>
      </div>
      <div>
        <Typography>{`themeColor: ${settings.themeColor}`}</Typography>
        <RadioGroup row aria-label="themeColor" name="themeColor" value={settings.themeColor} onChange={event => {handleChange('themeColor', event.target.value)}}>
          <FormControlLabel value="primary" control={<Radio />} label="Primary" />
          <FormControlLabel value="secondary" control={<Radio />} label="Secondary" />
          <FormControlLabel value="success" control={<Radio />} label="Success" />
          <FormControlLabel value="error" control={<Radio />} label="Error" />
          <FormControlLabel value="warning" control={<Radio />} label="Warning" />
          <FormControlLabel value="info" control={<Radio />} label="Info" />
        </RadioGroup>
      </div>
      <div>
        <Typography>{`contentWidth: ${settings.contentWidth}`}</Typography>
        <RadioGroup row aria-label="contentWidth" name="contentWidth" value={settings.contentWidth} onChange={event => {handleChange('contentWidth', event.target.value)}}>
          <FormControlLabel value="full" control={<Radio />} label="Full" />
          <FormControlLabel value="boxed" control={<Radio />} label="Boxed" />
        </RadioGroup>
      </div>
      <div>
        <Typography>{`verticalNavToggleType: ${settings.verticalNavToggleType}`}</Typography>
        <RadioGroup row aria-label="verticalNavToggleType" name="verticalNavToggleType" value={settings.verticalNavToggleType} onChange={event => {handleChange('verticalNavToggleType', event.target.value)}}>
          <FormControlLabel value="accordion" control={<Radio />} label="Accordion" />
          <FormControlLabel value="collapse" control={<Radio />} label="Collapse" />
        </RadioGroup>
      </div>
      <div>
        <Typography>{`navCollapsed: ${settings.navCollapsed}`}</Typography>
        <FormControlLabel control={<Switch checked={settings.navCollapsed} onChange={event => {handleChange('navCollapsed', event.target.checked)}} />} label="Menu Collapsed" />
      </div>
      {settings.language ? (
        <div>
          <Typography>{`language: ${settings.language}`}</Typography>
          <RadioGroup row aria-label="language" name="language" value={settings.language} onChange={event => {
            i18n.changeLanguage(event.target.value)
            handleChange('language', event.target.value)
          }}>
            <FormControlLabel value="en" control={<Radio />} label="EN" />
            <FormControlLabel value="fr" control={<Radio />} label="FR" />
          </RadioGroup>
        </div>
      ) : null}
    </div>
  )
}

export default Home
