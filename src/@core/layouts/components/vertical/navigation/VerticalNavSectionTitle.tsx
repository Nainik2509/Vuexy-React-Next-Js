// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
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
  const { item, navHover, settings, navigationBorderWidth } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const { skin, navCollapsed } = settings

  const conditionalStyling = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return {
        color: `rgba(${theme.palette.customColors.dark}, 0.38)`
      }
    } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return {
        color: `rgba(${theme.palette.customColors.light}, 0.38)`
      }
    } else {
      return {
        color: theme.palette.text.disabled
      }
    }
  }

  return (
    <ListSubheader
      className='nav-section-title'
      sx={{
        ...conditionalStyling(),
        ...(navCollapsed && !navHover
          ? { pt: 3.12, pb: 2.875, pl: (themeConfig.collapsedNavigationSize - navigationBorderWidth - 24) / 8 }
          : { pl: 6 })
      }}
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
