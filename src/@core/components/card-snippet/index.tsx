// ** React Imports
import { useState, useEffect } from 'react'

// ** Primsjs
import Prism from 'prismjs'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import CodeTags from 'mdi-material-ui/CodeTags'
import ContentCopy from 'mdi-material-ui/ContentCopy'

// ** Third Party Components
import toast, { Toaster } from 'react-hot-toast'

// ** Types
import { CardSnippetProps } from './types'

// ** Hooks
import useClipboard from 'src/@core/hooks/useClipboard'

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'

const CardSnippet = (props: CardSnippetProps) => {
  // ** Props
  const { id, sx, code, title, children, className } = props

  // ** States
  const [showCode, setShowCode] = useState<boolean>(false)

  // ** Hooks
  const clipboard = useClipboard()

  // ** Highlight code on mount
  useEffect(() => {
    Prism.highlightAll()
  }, [showCode])

  const handleClick = () => {
    clipboard.copy(code.props.children.props.children)
    toast.success('The source code has been copied to your clipboard.', {
      duration: 2000
    })
  }

  return (
    <Card
      className={className}
      sx={{ '& .MuiCardHeader-action': { lineHeight: 0.8 }, ...sx }}
      id={id || `card-snippet--${title.toLowerCase().replace(/ /g, '-')}`}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{ variant: 'h6' }}
        action={
          <IconButton onClick={() => setShowCode(!showCode)}>
            <CodeTags fontSize='small' />
          </IconButton>
        }
      />
      <CardContent>{children}</CardContent>
      <Collapse in={showCode}>
        <Divider sx={{ my: 0 }} />
        <CardContent sx={{ position: 'relative', '& pre': { m: '0 !important', maxHeight: 500 } }}>
          <Tooltip title='Copy the source' placement='top'>
            <IconButton
              onClick={handleClick}
              sx={{ top: '1.5rem', right: '2.5625rem', position: 'absolute', color: theme => theme.palette.grey[100] }}
            >
              <ContentCopy fontSize='small' />
            </IconButton>
          </Tooltip>
          <Box sx={{ '& pre, & code': { whiteSpace: 'break-spaces' } }}>{code}</Box>
        </CardContent>
      </Collapse>
      <ReactHotToast>
        <Toaster toastOptions={{ className: 'react-hot-toast' }} />
      </ReactHotToast>
    </Card>
  )
}

export default CardSnippet
