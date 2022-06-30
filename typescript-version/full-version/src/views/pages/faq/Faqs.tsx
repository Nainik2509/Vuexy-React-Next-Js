// ** React Imports
import { SyntheticEvent } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

// ** Icons Imports
import ChevronDown from 'mdi-material-ui/ChevronDown'
import CartOutline from 'mdi-material-ui/CartOutline'
import RotateRight from 'mdi-material-ui/RotateRight'
import CameraOutline from 'mdi-material-ui/CameraOutline'
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types
import { FaqType } from 'src/@fake-db/types'

interface Props {
  activeTab: string
  data: { faqData: FaqType }
  handleChange: (event: SyntheticEvent, newValue: string) => void
}

// Styled TabList component
const MuiBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}))

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  overflow: 'visible',
  '& .MuiTabs-flexContainer': {
    flexDirection: 'column'
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minHeight: 40,
    minWidth: 280,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: theme.shape.borderRadius,
    '& .MuiSvgIcon-root': {
      marginBottom: 0,
      marginRight: theme.spacing(4)
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%'
    }
  }
}))

const icons = {
  CartOutline,
  RotateRight,
  CameraOutline,
  ArchiveOutline,
  CreditCardOutline
}

const Faqs = ({ data, activeTab, handleChange }: Props) => {
  const renderTabContent = () => {
    return Object.values(data.faqData).map(tab => {
      const IconTag = icons[tab.icon as keyof typeof icons]

      return (
        <TabPanel key={tab.id} value={tab.id} sx={{ pt: 0, pl: { xs: 3, md: 12 }, width: '100%' }}>
          <Box key={tab.id}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' variant='rounded' sx={{ height: 50, width: 50 }}>
                <IconTag fontSize='large' />
              </CustomAvatar>
              <Box sx={{ ml: 4 }}>
                <Typography sx={{ fontWeight: 500, fontSize: '1.375rem', lineHeight: 1.1 }}>{tab.title}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{tab.subtitle}</Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
              {tab.qandA.map((item, index) => {
                return (
                  <Accordion key={item.id}>
                    <AccordionSummary expandIcon={<ChevronDown />}>
                      <Typography sx={{ fontWeight: '500' }}>
                        Q{index + 1}: {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ color: 'text.secondary' }}>{item.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </Box>
          </Box>
        </TabPanel>
      )
    })
  }

  const renderTabs = () => {
    if (data !== null) {
      return Object.values(data.faqData).map(tab => {
        if (tab.qandA.length) {
          const IconTag = icons[tab.icon as keyof typeof icons]

          return <Tab key={tab.id} value={tab.id} label={tab.title} icon={<IconTag fontSize='small' />} />
        } else {
          return null
        }
      })
    } else {
      return null
    }
  }

  return (
    <MuiBox>
      <TabContext value={activeTab}>
        <TabList onChange={handleChange}>
          {renderTabs()}
          <Box sx={{ mt: 12, '& img': { maxWidth: '100%', display: { xs: 'none', md: 'block' } } }}>
            <img src='/images/cards/illustration-john.png' alt='illustration' width='250' />
          </Box>
        </TabList>
        {renderTabContent()}
      </TabContext>
    </MuiBox>
  )
}

export default Faqs
