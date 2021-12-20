export const ChipsArrayCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC, useState } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

interface ChipData {
  key: number
  label: string
  avatar?: string
  avatarAlt?: string
}

const ChipsArray: FC = () => {
  // ** State
  const [chipData, setChipData] = useState<ChipData[]>([
    { key: 0, avatar: '/images/avatars/1.png', avatarAlt: 'User Avatar', label: 'Norman Santiago' },
    { key: 1, avatar: '/images/avatars/2.png', avatarAlt: 'User Avatar', label: 'Cecelia Tucker' },
    { key: 2, label: 'Max Burns' },
    { key: 3, avatar: '/images/avatars/4.png', avatarAlt: 'User Avatar', label: 'Ellen Nguyen' },
    { key: 4, avatar: '/images/avatars/5.png', avatarAlt: 'User Avatar', label: 'Edward Francis' }
  ])

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
  }

  return (
    <div className='demo-space-x'>
      {chipData.map(data => (
        <Chip
          key={data.key}
          label={data.label}
          avatar={<Avatar src={data.avatar} alt={data.avatarAlt} />}
          onDelete={data.key === 2 ? undefined : handleDelete(data)}
        />
      ))}
    </div>
  )
}

export default ChipsArray
`}</code>
  </pre>
)
export const ChipsColorsCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC, Fragment } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const ChipsColors: FC = () => {
  return (
    <Fragment>
      <Typography sx={{ fontWeight: 500 }}>Filled Chips</Typography>
      <div className='demo-space-x'>
        <Chip label='Primary' color='primary' />
        <Chip label='Secondary' color='secondary' />
        <Chip label='Success' color='success' />
        <Chip label='Error' color='error' />
        <Chip label='Warning' color='warning' />
        <Chip label='Info' color='info' />
      </div>
      <Typography sx={{ marginTop: 4, fontWeight: 500 }}>Outlined Chips</Typography>
      <div className='demo-space-x'>
        <Chip label='Primary' color='primary' variant='outlined' />
        <Chip label='Secondary' color='secondary' variant='outlined' />
        <Chip label='Success' color='success' variant='outlined' />
        <Chip label='Error' color='error' variant='outlined' />
        <Chip label='Warning' color='warning' variant='outlined' />
        <Chip label='Info' color='info' variant='outlined' />
      </div>
    </Fragment>
  )
}

export default ChipsColors
`}</code>
  </pre>
)
export const ChipsClickableCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'

const ChipsClickable: FC = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.')
  }

  return (
    <div className='demo-space-x'>
      <Chip label='Clickable' onClick={handleClick} />
      <Chip label='Clickable Link' component='a' href='https://themeselection.com/' target='_blank' clickable />
    </div>
  )
}

export default ChipsClickable
`}</code>
  </pre>
)
export const ChipsAvatarCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

// ** Icons Imports
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'

const ChipsAvatar: FC = () => {
  return (
    <div className='demo-space-x'>
      <Chip label='Default' avatar={<Avatar />} />
      <Chip label='Howard Paul' avatar={<Avatar src='/images/avatars/7.png' alt='User Avatar' />} />
      <Chip label='Maurice Bell' avatar={<Avatar>M</Avatar>} />
      <Chip
        label='Archived'
        avatar={
          <Avatar>
            <ArchiveOutline fontSize='small' />
          </Avatar>
        }
      />
    </div>
  )
}

export default ChipsAvatar
`}</code>
  </pre>
)
export const ChipsIconCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'

// ** Icons Imports
import Battery10 from 'mdi-material-ui/Battery10'
import BatteryCharging30 from 'mdi-material-ui/BatteryCharging30'

const ChipsIcon: FC = () => {
  return (
    <div className='demo-space-x'>
      <Chip label='Battery Low' icon={<Battery10 fontSize='small' />} />
      <Chip label='Charging' color='primary' variant='outlined' icon={<BatteryCharging30 fontSize='small' />} />
    </div>
  )
}

export default ChipsIcon
`}</code>
  </pre>
)
export const ChipsOnDeleteCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC, Fragment } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import DeleteOutline from 'mdi-material-ui/DeleteOutline'

const ChipsOnDelete: FC = () => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }

  return (
    <Fragment>
      <Typography sx={{ fontWeight: 500 }}>Default</Typography>
      <div className='demo-space-x'>
        <Chip label='Basic' variant='outlined' onDelete={handleDelete} />
        <Chip label='Primary' color='primary' variant='outlined' onDelete={handleDelete} />
        <Chip label='Secondary' color='secondary' variant='outlined' onDelete={handleDelete} />
      </div>
      <Typography sx={{ marginTop: 4, fontWeight: 500 }}>Custom</Typography>
      <div className='demo-space-x'>
        <Chip label='Basic' onDelete={handleDelete} deleteIcon={<DeleteOutline />} />
        <Chip label='Primary' color='primary' onDelete={handleDelete} deleteIcon={<DeleteOutline />} />
        <Chip label='Secondary' color='secondary' onDelete={handleDelete} deleteIcon={<DeleteOutline />} />
      </div>
    </Fragment>
  )
}

export default ChipsOnDelete
`}</code>
  </pre>
)
export const ChipsDisabledCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'

const ChipsDisabled: FC = () => {
  return (
    <div className='demo-space-x'>
      <Chip label='Basic' disabled />
      <Chip label='Outlined' variant='outlined' disabled />
    </div>
  )
}

export default ChipsDisabled
`}</code>
  </pre>
)
export const ChipsLightCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

const ChipsCustomized: FC = () => {
  return (
    <div className='demo-space-x'>
      <CustomChip label='Primary' skin='light' color='primary' />
      <CustomChip label='Secondary' skin='light' color='secondary' />
      <CustomChip label='Success' skin='light' color='success' />
      <CustomChip label='Error' skin='light' color='error' />
      <CustomChip label='Warning' skin='light' color='warning' />
      <CustomChip label='Info' skin='light' color='info' />
    </div>
  )
}

export default ChipsCustomized
`}</code>
  </pre>
)
export const ChipsVariantsCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'

const ChipsVariants: FC = () => {
  return (
    <div className='demo-space-x'>
      <Chip label='Basic' />
      <Chip label='Outlined' variant='outlined' />
    </div>
  )
}

export default ChipsVariants
`}</code>
  </pre>
)
export const ChipsSizesCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Chip from '@mui/material/Chip'

const ChipsSizes: FC = () => {
  return (
    <div className='demo-space-x'>
      <Chip label='Default' />
      <Chip label='Small' size='small' />
    </div>
  )
}

export default ChipsSizes
`}</code>
  </pre>
)
