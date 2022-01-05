export const AccordionControlledCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icons Imports
import ChevronDown from 'mdi-material-ui/ChevronDown'

const AccordionControlled = () => {
  // ** State
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='controlled-panel-header-1'
          aria-controls='controlled-panel-content-1'
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='controlled-panel-header-2'
          aria-controls='controlled-panel-content-2'
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='controlled-panel-header-3'
          aria-controls='controlled-panel-content-3'
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
            dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionControlled
`}</code></pre>) 
export const AccordionActionsCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Checkbox from '@mui/material/Checkbox'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import FormControlLabel from '@mui/material/FormControlLabel'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icons Imports
import ChevronDown from 'mdi-material-ui/ChevronDown'

const AccordionActions = () => {
  // ** State
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='actions-panel-header-1'
          expandIcon={<ChevronDown />}
          aria-controls='actions-panel-content-1'
        >
          <FormControlLabel
            label='Accordion 1'
            aria-label='Acknowledge'
            control={<Checkbox disableRipple />}
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          id='actions-panel-header-2'
          expandIcon={<ChevronDown />}
          aria-controls='actions-panel-content-2'
        >
          <FormControlLabel
            label='Accordion 2'
            aria-label='Acknowledge'
            control={<Checkbox disableRipple />}
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          id='actions-panel-header-3'
          expandIcon={<ChevronDown />}
          aria-controls='actions-panel-content-3'
        >
          <FormControlLabel
            label='Accordion 3'
            aria-label='Acknowledge'
            control={<Checkbox disableRipple />}
            onClick={event => event.stopPropagation()}
            onFocus={event => event.stopPropagation()}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
            dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionActions
`}</code></pre>) 
export const AccordionSimpleCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icons Imports
import ChevronDown from 'mdi-material-ui/ChevronDown'

const AccordionSimple = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ChevronDown />} aria-controls='panel-content-1' id='panel-header-1'>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ChevronDown />} aria-controls='panel-content-2' id='panel-header-2'>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ChevronDown />} aria-controls='panel-content-3' id='panel-header-3'>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
            dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionSimple
`}</code></pre>) 
export const AccordionCustomizedCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails'

// ** Icons Imports
import Plus from 'mdi-material-ui/Plus'
import Minus from 'mdi-material-ui/Minus'

// Styled component for Accordion component
const Accordion = styled(MuiAccordion)<AccordionProps>(({ theme }) => ({
  boxShadow: 'none !important',
  border:
    theme.palette.mode === 'light' ? 1px solid {theme.palette.grey[300]} : 1px solid {theme.palette.divider},
  '&:not(:last-of-type)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    margin: 'auto'
  },
  '&:first-of-type': {
    '& .MuiButtonBase-root': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    }
  },
  '&:last-of-type': {
    '& .MuiAccordionSummary-root:not(.Mui-expanded)': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    }
  }
}))

// Styled component for AccordionSummary component
const AccordionSummary = styled(MuiAccordionSummary)<AccordionSummaryProps>(({ theme }) => ({
  marginBottom: -1,
  padding: theme.spacing(0, 4),
  minHeight: theme.spacing(12),
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.default,
  borderBottom:
    theme.palette.mode === 'light' ? 1px solid {theme.palette.grey[300]} : 1px solid {theme.palette.divider},
  '&.Mui-expanded': {
    minHeight: theme.spacing(12)
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: '12px 0'
  }
}))

// Styled component for AccordionDetails component
const AccordionDetails = styled(MuiAccordionDetails)<AccordionDetailsProps>(({ theme }) => ({
  padding: {theme.spacing(4)} !important
}))

const AccordionCustomized = () => {
  // ** State
  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const expandIcon = (value: string) => (expanded === value ? <Minus /> : <Plus />)

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='customized-panel-header-1'
          expandIcon={expandIcon('panel1')}
          aria-controls='customized-panel-content-1'
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          id='customized-panel-header-2'
          expandIcon={expandIcon('panel2')}
          aria-controls='customized-panel-content-2'
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          id='customized-panel-header-3'
          expandIcon={expandIcon('panel3')}
          aria-controls='customized-panel-content-3'
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
            dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionCustomized
`}</code></pre>) 
export const DateTimePickersCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import DateTimePicker from '@mui/lab/DateTimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

// ** Third Party imports
import { Locale } from 'date-fns'
import fr from 'date-fns/locale/fr'
import ar from 'date-fns/locale/ar-SA'
import en from 'date-fns/locale/en-US'
import { useTranslation } from 'react-i18next'

const langObj: { [key: string]: Locale } = { fr, ar, en }

const DateTimePickers = () => {
  // ** State
  const [basicPicker, setBasicPicker] = useState<Date | null>(new Date())

  // ** Hooks
  const { i18n } = useTranslation()

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label='Basic'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          disabled
          label='Disabled'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          readOnly
          label='Readonly'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={langObj[i18n.language]}>
        <DateTimePicker
          label='Localization'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          value={basicPicker}
          minDateTime={new Date()}
          label='Ignore date and time'
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDateTimePicker
          label='For mobile'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  )
}

export default DateTimePickers
`}</code></pre>) 
export const DatePickersCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import DatePicker from '@mui/lab/DatePicker'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

// ** Third Party imports
import { Locale } from 'date-fns'
import fr from 'date-fns/locale/fr'
import ar from 'date-fns/locale/ar-SA'
import en from 'date-fns/locale/en-US'
import { useTranslation } from 'react-i18next'

const langObj: { [key: string]: Locale } = { fr, ar, en }

const DatePickers = () => {
  // ** State
  const [basicPicker, setBasicPicker] = useState<Date | null>(new Date())

  // ** Hook
  const { i18n } = useTranslation()

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label='Basic'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          disabled
          label='Disabled'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          readOnly
          label='Readonly'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={langObj[i18n.language]}>
        <DatePicker
          value={basicPicker}
          label='Localization'
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          openTo='year'
          disableFuture
          label='Responsive'
          value={basicPicker}
          views={['year', 'month', 'day']}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label='For mobile'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  )
}

export default DatePickers
`}</code></pre>) 
export const TimePickersCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TimePicker from '@mui/lab/TimePicker'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

// ** Third Party imports
import { Locale } from 'date-fns'
import fr from 'date-fns/locale/fr'
import ar from 'date-fns/locale/ar-SA'
import en from 'date-fns/locale/en-US'
import { useTranslation } from 'react-i18next'

const langObj: { [key: string]: Locale } = { fr, ar, en }

const TimePickers = () => {
  // ** State
  const [basicPicker, setBasicPicker] = useState<Date | null>(new Date())
  const [minMaxPicker, setMinMaxPicker] = useState<Date | null>(new Date())
  const [oddTimePicker, setOddTimePicker] = useState<Date | null>(new Date())

  // ** Hooks
  const { i18n } = useTranslation()

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label='Basic'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          disabled
          label='Disabled'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          readOnly
          label='ReadOnly'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          value={minMaxPicker}
          label='Min/Max Time'
          minTime={new Date(0, 0, 0, 8)}
          maxTime={new Date(0, 0, 0, 18, 45)}
          onChange={newValue => setMinMaxPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          value={oddTimePicker}
          label='Disable odd hours'
          onChange={newValue => setOddTimePicker(newValue)}
          renderInput={params => <TextField {...params} />}
          shouldDisableTime={(timeValue, clockType) => {
            if (clockType === 'hours' && timeValue % 2) {
              return true
            }

            return false
          }}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={langObj[i18n.language]}>
        <TimePicker
          label='Localization'
          value={basicPicker}
          onChange={newValue => setBasicPicker(newValue)}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  )
}

export default TimePickers
`}</code></pre>) 
