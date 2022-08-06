// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiListSubheader, { ListSubheaderProps } from '@mui/material/ListSubheader'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { NavSectionTitle } from 'src/@core/layouts/types'
import { Settings } from 'src/@core/context/settingsContext'

// ** Custom Components Imports
import Translations from 'src/layouts/components/Translations'
import CanViewNavSectionTitle from 'src/layouts/components/acl/CanViewNavSectionTitle'

interface Props {
  navHover: boolean
  settings: Settings
  item: NavSectionTitle
  collapsedNavWidth: number
  navigationBorderWidth: number
}

// ** Styled Components
const ListSubheader = styled((props: ListSubheaderProps) => <MuiListSubheader component='li' {...props} />)(
  ({ theme }) => ({
    lineHeight: 1,
    display: 'flex',
    position: 'static',
    padding: theme.spacing(4),
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(4.5),
    backgroundColor: 'transparent',
    color: theme.palette.text.disabled,
    transition: 'padding-left .25s ease-in-out'
  })
)

const TypographyHeaderText = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '0.75rem',
  lineHeight: 'normal',
  letterSpacing: '0.21px',
  textTransform: 'uppercase',
  color: theme.palette.text.disabled,
  fontWeight: theme.typography.fontWeightMedium
}))

const VerticalNavSectionTitle = (props: Props) => {
  // ** Props
  const { item, navHover, settings, collapsedNavWidth, navigationBorderWidth } = props

  // ** Vars
  const { navCollapsed } = settings

  // const conditionalStyling = () => {
  //   if (skin === 'semi-dark' && theme.palette.mode === 'light') {
  //     return {
  //       color: `rgba(${theme.palette.customColors.dark}, 0.38)`
  //     }
  //   } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
  //     return {
  //       color: `rgba(${theme.palette.customColors.light}, 0.38)`
  //     }
  //   } else {
  //     return {
  //       color: theme.palette.text.disabled
  //     }
  //   }
  // }

  return (
    <CanViewNavSectionTitle navTitle={item}>
      <ListSubheader
        className='nav-section-title'
        sx={{
          // ...conditionalStyling(),

          color: 'text.disabled',

          ...(navCollapsed && !navHover
            ? { pt: 3.375, pb: 2.875, pl: (collapsedNavWidth - navigationBorderWidth - 24) / 8 }
            : { pl: 6 })
        }}
      >
        {navCollapsed && !navHover ? (
          <Icon icon='mdi:dots-horizontal' />
        ) : (
          <TypographyHeaderText noWrap>
            <Translations text={item.sectionTitle} />
          </TypographyHeaderText>
        )}
      </ListSubheader>
    </CanViewNavSectionTitle>
  )
}

export default VerticalNavSectionTitle
