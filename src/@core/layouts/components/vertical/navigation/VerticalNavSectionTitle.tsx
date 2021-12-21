// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiListSubheader, { ListSubheaderProps } from '@mui/material/ListSubheader'

// ** Icons Imports
import DotsHorizontal from 'mdi-material-ui/DotsHorizontal'

// ** Configs Import
import themeConfig from 'src/configs/themeConfig'

// ** Types
import { NavSectionTitle } from 'src/@core/layouts/types'
import { Settings } from 'src/@core/context/settingsContext'

interface Props {
  navHover: boolean
  settings: Settings
  item: NavSectionTitle
  navigationBorderWidth: number
}

// ** Styled Components
const ListSubheader = styled((props: ListSubheaderProps) => <MuiListSubheader component='li' {...props} />)(
  ({ theme }) => ({
    lineHeight: 1,
    display: 'flex',
    position: 'relative',
    padding: theme.spacing(4),
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(4.5),
    color: theme.palette.text.disabled,
    transition: 'padding-left .25s ease'
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
  const { item, navHover, settings, navigationBorderWidth } = props

  // ** Vars
  const navCollapsed = settings.navCollapsed

  return (
    <ListSubheader
      sx={
        navCollapsed && !navHover
          ? { pt: 3.12, pb: 2.875, pl: (themeConfig.collapsedNavigationSize - navigationBorderWidth - 24) / 8 }
          : { pl: 6 }
      }
    >
      {navCollapsed && !navHover ? (
        <DotsHorizontal />
      ) : (
        <TypographyHeaderText noWrap>{item.sectionTitle}</TypographyHeaderText>
      )}
    </ListSubheader>
  )
}

export default VerticalNavSectionTitle
