// ** React Imports
import { FC, Fragment, useEffect, useState } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Icons Imports
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { FaqType } from '@fake-db/types'

// ** Demo Imports
import FaqHeader from './FaqHeader'
import FaqFooter from './FaqFooter'
import FaqAccordions from './FaqAccordions'

// Styled Box component
const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(14.25, 24, 0, 24),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(14.25, 0, 0)
  },
  '& > :not(:first-of-type)': {
    marginTop: theme.spacing(13)
  }
}))

const FAQ: FC = () => {
  // ** States
  const [data, setData] = useState<FaqType[] | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    axios.get('/pages/faqs', { params: { q: searchTerm } }).then(response => {
      if (response.data && response.data.length) {
        setData(response.data)
      } else {
        setData(null)
      }
    })
  }, [searchTerm])

  const renderNoResult = (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <AlertCircleOutline sx={{ mr: 2 }} />
      <Typography variant='h6' sx={{ fontWeight: 600 }}>
        No Results Found!!
      </Typography>
    </Box>
  )

  return (
    <Fragment>
      <FaqHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <StyledBox>
        {data !== null ? <FaqAccordions data={data} /> : renderNoResult}
        <FaqFooter />
      </StyledBox>
    </Fragment>
  )
}

export default FAQ
