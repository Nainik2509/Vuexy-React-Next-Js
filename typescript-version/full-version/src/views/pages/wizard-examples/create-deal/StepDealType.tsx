// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomRadioIcons from 'src/@core/components/mui/radio/CustomRadioIcons'

// ** Icons Imports
import TagOutline from 'mdi-material-ui/TagOutline'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import AccountOutline from 'mdi-material-ui/AccountOutline'

const dataIcons = [
  {
    value: 'percentage',
    title: 'Percentage',
    gridProps: { sm: 4, xs: 12 },
    icon: <TagOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Create a deal which offer uses some % off (i.e 5% OFF) on total.
      </Typography>
    )
  },
  {
    value: 'flat-amount',
    title: 'Flat Amount',
    gridProps: { sm: 4, xs: 12 },
    icon: <CurrencyUsd fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Create a deal which offer uses flat $ off (i.e $5 OFF) on the total.
      </Typography>
    )
  },
  {
    value: 'prime-member',
    title: 'Prime Member',
    gridProps: { sm: 4, xs: 12 },
    icon: <AccountOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Create prime member only deal to encourage the prime members.
      </Typography>
    )
  }
]

const regionArray = ['Asia', 'Europe', 'Africa', 'Australia', 'North America', 'South America']

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
        <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: '6px' }}>
          <img src={`/images/pages/shopping-girl-${theme.palette.mode}.png`} alt='illustration' />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <CustomRadioIcons value='percentage' name='custom-radios-deal' data={dataIcons} />
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
