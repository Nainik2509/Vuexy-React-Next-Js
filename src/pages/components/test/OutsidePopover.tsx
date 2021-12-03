// ** React Imports
import { FC, MouseEvent, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

const OutsidePopover: FC = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // ** Hook
  const open = Boolean(anchorEl)

  return (
    <div>
      <Button aria-describedby='simple-popover' variant='outlined' onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        open={open}
        id='simple-popover'
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Typography sx={{ padding: 4 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  )
}

export default OutsidePopover
