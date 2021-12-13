// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Custom Components
import Autocomplete from '@core/layouts/components/shared-components/Autocomplete'

interface Props {
  hidden: boolean
  setShowBackdrop: (val: boolean) => void
}

const AppBarContent: FC<Props> = ({ hidden, setShowBackdrop }: Props) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center', color: 'text.primary' }}>
        <Autocomplete hidden={hidden} setShowBackdrop={setShowBackdrop} />
      </Box>
    </Box>
  )
}

export default AppBarContent
