// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Components
import toast from 'react-hot-toast'

interface Props {
  activePosition: string
  setActivePosition: (value: string) => void
}

const ToastPositions = ({ activePosition, setActivePosition }: Props) => {
  const handleToast = async (position: string, text: string) => {
    if (position !== activePosition) {
      toast.dismiss(`toast-${activePosition}`)
      setActivePosition(position)
      toast.success(text, { id: `toast-${position}` })
    }
  }

  return (
    <Card>
      <CardHeader title='Positions' />
      <CardContent>
        <div className='demo-space-x'>
          <Button variant='contained' onClick={() => handleToast('top-left', 'Top Left')}>
            Top Left
          </Button>
          <Button variant='contained' onClick={() => handleToast('top-center', 'Top Center')}>
            Top Center
          </Button>
          <Button variant='contained' onClick={() => handleToast('top-right', 'Top Right')}>
            Top Right
          </Button>
          <Button variant='contained' onClick={() => handleToast('bottom-left', 'Bottom Left')}>
            Bottom Left
          </Button>
          <Button variant='contained' onClick={() => handleToast('bottom-center', 'Bottom Center')}>
            Bottom Center
          </Button>
          <Button variant='contained' onClick={() => handleToast('bottom-right', 'Bottom Right')}>
            Bottom Right
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ToastPositions
