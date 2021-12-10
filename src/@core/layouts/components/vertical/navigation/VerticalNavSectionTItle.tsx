// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiListSubheader, { ListSubheaderProps } from '@mui/material/ListSubheader'

// ** Icons Imports
import DotsHorizontal from 'mdi-material-ui/DotsHorizontal'

// ** Third Party Imports
import { useTranslation } from 'react-i18next'

// ** Configs Import
import themeConfig from 'configs/themeConfig'

// ** Types
import { NavSectionTitle } from './types'

interface Props {
  navHover: boolean
  item: NavSectionTitle
  navCollapsed: boolean
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

const VerticalNavSectionTitle: FC<Props> = ({ item, navHover, navCollapsed, navigationBorderWidth }: Props) => {
  // ** Hooks
  const { t } = useTranslation()

  return (
    <ListSubheader
      sx={
        navCollapsed && !navHover
          ? { pt: 3.375, pb: 2.875, pl: (themeConfig.collapsedNavigationSize - navigationBorderWidth - 24) / 8 }
          : { pl: 6 }
      }
    >
      {navCollapsed && !navHover ? (
        <DotsHorizontal />
      ) : (
        <TypographyHeaderText noWrap>{t(item.sectionTitle)}</TypographyHeaderText>
      )}
    </ListSubheader>
  )
}

export default VerticalNavSectionTitle
