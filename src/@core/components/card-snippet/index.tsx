// ** React Imports
import { FC, useState, useEffect, SyntheticEvent, MouseEvent } from 'react'

// ** Primsjs
import Prism from 'prismjs'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import Snackbar from '@mui/material/Snackbar'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import CodeTags from 'mdi-material-ui/CodeTags'
import ContentCopy from 'mdi-material-ui/ContentCopy'

// ** Hooks
// import useClipboard from 'hooks/misc/useClipboard'

// ** Types
import { CardSnippetProps } from './types'

const CardSnippet: FC<CardSnippetProps> = (props: CardSnippetProps) => {
  // ** Props
  const { id, title, children, className, code, sx } = props

  // ** States
  const [showCode, setShowCode] = useState<boolean>(false)
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false)

  // ** Hooks
  // const clipboard = useClipboard()

  // ** Highlight code on mount
  useEffect(() => {
    Prism.highlightAll()
  }, [showCode])

  const handleClick = () => {
    // clipboard.copy(code.props.children.props.children)
    setShowSnackbar(true)
  }

  const handleClose = (event: SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setShowSnackbar(false)
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
          <Box sx={{ 'pre *, code *': { whiteSpace: 'pre-wrap' } }}>{code}</Box>
        </CardContent>
      </Collapse>
      <Snackbar
        open={showSnackbar}
        onClose={handleClose}
        autoHideDuration={2000}
        message='The source code has been copied to your clipboard.'
        action={
          <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
            <Close fontSize='small' />
          </IconButton>
        }
      />
    </Card>
  )
}

export default CardSnippet
