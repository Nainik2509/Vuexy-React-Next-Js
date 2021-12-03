// ** React Imports
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
    { key: 0, avatar: '/assets/images/avatars/1.png', avatarAlt: 'User Avatar', label: 'Norman Santiago' },
    { key: 1, avatar: '/assets/images/avatars/2.png', avatarAlt: 'User Avatar', label: 'Cecelia Tucker' },
    { key: 2, label: 'Max Burns' },
    { key: 3, avatar: '/assets/images/avatars/4.png', avatarAlt: 'User Avatar', label: 'Ellen Nguyen' },
    { key: 4, avatar: '/assets/images/avatars/5.png', avatarAlt: 'User Avatar', label: 'Edward Francis' }
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
