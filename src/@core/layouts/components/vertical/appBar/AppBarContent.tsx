// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import MenuIcon from 'mdi-material-ui/Menu'

// ** Custom Components
import Autocomplete from '@core/layouts/components/shared-components/Autocomplete'

interface Props {
  hidden: boolean
  toggleNavVisibility: () => void
  setShowBackdrop: (val: boolean) => void
}

const AppBarContent: FC<Props> = (props: Props) => {
  // ** Props
  const { hidden, setShowBackdrop, toggleNavVisibility } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center', color: 'text.primary' }}>
        {hidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <MenuIcon />
          </IconButton>
        ) : null}
        <Autocomplete hidden={hidden} setShowBackdrop={setShowBackdrop} />
      </Box>
    </Box>
  )
}

export default AppBarContent
