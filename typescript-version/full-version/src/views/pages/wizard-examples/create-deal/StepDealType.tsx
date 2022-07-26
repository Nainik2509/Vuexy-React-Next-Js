// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Icons Imports
import TagOutline from 'mdi-material-ui/TagOutline'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

const data = [
  {
    value: 'percentage',
    title: 'Percentage',
    gridProps: { sm: 4, xs: 12 },
    content: 'Create a deal which offer uses some % off (i.e 5% OFF) on total.',
    icon: <TagOutline sx={{ mb: 2, fontSize: '2rem', color: 'text.secondary' }} />
  },
  {
    value: 'flat-amount',
    title: 'Flat Amount',
    gridProps: { sm: 4, xs: 12 },
    content: 'Create a deal which offer uses flat $ off (i.e $5 OFF) on the total.',
    icon: <CurrencyUsd sx={{ mb: 2, fontSize: '2rem', color: 'text.secondary' }} />
  },
  {
    value: 'prime-member',
    title: 'Prime Member',
    gridProps: { sm: 4, xs: 12 },
    content: 'Create prime member only deal to encourage the prime members.',
    icon: <AccountOutline sx={{ mb: 2, fontSize: '2rem', color: 'text.secondary' }} />
  }
]

const regionArray = ['Asia', 'Europe', 'Africa', 'Australia', 'North America', 'South America']

const Img = styled('img')({
  width: '100%',
  height: 'auto',
  maxWidth: '100%'
})

const StepDealType = () => {
  // ** State
  const [region, setRegion] = useState<string[]>([])

  // ** Hooks
  const theme = useTheme()

  const handleChange = (event: SelectChangeEvent<typeof region>) => {
    const {
      target: { value }
    } = event
    setRegion(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box sx={{ borderRadius: 1, display: 'flex', border: theme => `1px solid ${theme.palette.divider}` }}>
          <Img alt='illustration' src={`/images/pages/shopping-girl-${theme.palette.mode}.png`} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <CustomRadioIcons data={data} value='percentage' name='custom-radios-deal' />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <TextField type='number' label='Discount' placeholder='25' />
          <FormHelperText>Enter the discount percentage. 10 = 10%</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id='select-region'>Region</InputLabel>
          <Select
            multiple
            value={region}
            labelId='select-region'
            onChange={handleChange}
            input={<OutlinedInput label='Region' />}
            renderValue={selected => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map(value => (
                  <CustomChip rounded key={value} label={value} skin='light' />
                ))}
              </Box>
            )}
          >
            {regionArray.map(reg => (
              <MenuItem key={reg} value={reg}>
                {reg}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Select applicable regions for the deal.</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default StepDealType
