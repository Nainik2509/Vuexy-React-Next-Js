// ** React Imports
import { ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface Props {
  value: string
  clearSearch: () => void
  onChange: (e: ChangeEvent) => void
}

const StyledGridToolbarContainer = styled(GridToolbarContainer)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${theme.spacing(2, 5, 4, 5)} !important`
}))

const ServerSideToolbar = (props: Props) => {
  return (
    <StyledGridToolbarContainer>
      <Box>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </Box>
      <TextField
        size='small'
        value={props.value}
        onChange={props.onChange}
        placeholder='Search…'
        InputProps={{
          startAdornment: <Icon icon='mdi:magnify' fontSize={20} />,
          endAdornment: (
            <IconButton size='small' title='Clear' aria-label='Clear' onClick={props.clearSearch}>
              <Icon icon='mdi:close' fontSize={20} />
            </IconButton>
          )
        }}
        sx={{
          width: {
            xs: 1,
            sm: 'auto'
          },
          '& .MuiInputBase-root > svg': {
            mr: 2
          }
        }}
      />
    </StyledGridToolbarContainer>
  )
}

export default ServerSideToolbar
