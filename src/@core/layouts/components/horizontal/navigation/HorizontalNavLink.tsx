// ** React Imports
import { ElementType, Fragment } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import MuiListItem, { ListItemProps } from '@mui/material/ListItem'

// ** Icon Imports
import CircleOutline from 'mdi-material-ui/CircleOutline'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Types
import { NavLink } from 'src/@core/layouts/types'
import { Settings } from 'src/@core/context/settingsContext'

// ** Custom Components Imports
import UserIcon from 'src/layouts/components/UserIcon'
import Translations from 'src/layouts/components/Translations'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

interface Props {
  item: NavLink
  parentId?: string
  settings: Settings
  hasParent: boolean
  handleGroupMouseLeave: (value: string) => void
}

const ListItem = styled(MuiListItem)<ListItemProps & { component?: ElementType; target?: '_blank' | undefined }>(
  ({ theme }) => ({
    width: 'auto',
    color: theme.palette.text.primary,
    '&:hover': {
      background: theme.palette.action.hover
    },
    '&.active, &.active:hover': {
      background: hexToRGBA(theme.palette.primary.main, 0.08)
    },
    '&.active .MuiTypography-root, &.active:hover .MuiTypography-root': {
      color: theme.palette.primary.main
    },
    '&.active, &.active .MuiSvgIcon-root': {
      color: theme.palette.primary.main
    }
  })
)

const HorizontalNavLink = (props: Props) => {
  // ** Props
  const { item, settings, hasParent, parentId, handleGroupMouseLeave } = props

  const IconTag = item.icon ? item.icon : themeConfig.navSubItemIcon

  const Wrapper = !hasParent ? List : Fragment

  // ** Hook
  const router = useRouter()

  const handleURLQueries = () => {
    if (Object.keys(router.query).length && item.path) {
      const arr = Object.keys(router.query)

      return router.asPath.includes(item.path) && router.asPath.includes(router.query[arr[0]] as string)
    }
  }

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries()) {
      return true
    } else {
      return false
    }
  }

  return (
    <Wrapper {...(!hasParent ? { sx: { py: settings.skin === 'bordered' ? 2.875 : 3 } } : {})}>
      <Link href={`${item.path}`} passHref>
        <ListItem
          component={'a'}
          className={isNavLinkActive() ? 'active' : ''}
          disabled={item.disabled}
          target={item.openInNewTab ? '_blank' : undefined}
          onClick={e => {
            if (item.path === undefined) {
              e.preventDefault()
              e.stopPropagation()
            }
            if (parentId) {
              handleGroupMouseLeave(parentId)
            }
          }}
          sx={{
            ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
            ...(!hasParent
              ? {
                  borderRadius: 1,
                  '&.active, &.active:hover': {
                    background: theme => theme.palette.primary.main,
                    '& .MuiTypography-root, & .MuiListItemIcon-root, & .MuiSvgIcon-root': {
                      color: 'common.white'
                    }
                  }
                }
              : {})
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
              }}
            >
              <ListItemIcon sx={{ mr: 2 }}>
                <UserIcon
                  icon={IconTag}
                  componentType='horizontal-menu'
                  iconProps={{ sx: IconTag === CircleOutline ? { fontSize: '1rem' } : { fontSize: '1.125rem' } }}
                />
              </ListItemIcon>
              <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>
                <Translations text={item.title} />
              </Typography>
            </Box>
            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{
                  ml: 1.6,
                  height: 20,
                  fontWeight: 500,
                  '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' }
                }}
              />
            ) : null}
          </Box>
        </ListItem>
      </Link>
    </Wrapper>
  )
}

export default HorizontalNavLink
