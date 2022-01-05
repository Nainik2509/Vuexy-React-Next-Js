// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// ** Data
import { countries } from 'src/@fake-db/autocomplete'

interface CountryType {
  code: string
  label: string
  phone: string
}

const countryToFlag = (isoCode: string) => {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode
}

const AutocompleteCountry = () => {
  return (
    <Autocomplete
      autoHighlight
      sx={{ width: 250 }}
      id='autocomplete-country-select'
      options={countries as CountryType[]}
      getOptionLabel={option => option.label}
      renderOption={(props, option) => (
        <Box component='li' sx={{ fontSize: 15, '& > span': { mr: '10px', fontSize: 18 } }} {...props}>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={params => (
        <TextField
          {...params}
          label='Choose a country'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password'
          }}
        />
      )}
    />
  )
}

export default AutocompleteCountry
