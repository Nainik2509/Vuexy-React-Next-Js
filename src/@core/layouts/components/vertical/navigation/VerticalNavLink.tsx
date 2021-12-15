// ** React Imports
import { FC, ElementType, ReactNode } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton'

// ** Configs Import
import themeConfig from 'configs/themeConfig'

// ** Types
import { NavLink, NavGroup } from './types'

interface Props {
  parent?: boolean
  item: NavLink
  navHover?: boolean
  navVisible?: boolean
  navCollapsed?: boolean
  navigationBorderWidth: number
  toggleNavVisibility: () => void
  isSubToSub?: NavGroup | undefined
}

// ** Styled Components
const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & { component?: ElementType; target?: '_blank' | undefined }
>(({ theme }) => ({
  width: '100%',
  transition: 'opacity .25s ease',
  padding: theme.spacing(2.5, 4.5),
  color: theme.palette.text.primary,
  '&.active, &.active:hover': {
    backgroundColor: theme.palette.primary.light
  },
  '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
    color: `${theme.palette.common.white} !important`
  }
}))

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  transition: 'opacity .25s ease',
  justifyContent: 'space-between',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
})

const VerticalNavLink: FC<Props> = ({
  item,
  parent,
  navHover,
  navVisible,
  isSubToSub,
  navCollapsed,
  toggleNavVisibility,
  navigationBorderWidth
}: Props) => {
  const IconTag: ReactNode = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon

  return (
    <ListItem disablePadding sx={{ marginTop: 1, px: '0 !important' }} disabled={item.disabled || false}>
      <Link passHref href={item.path === undefined ? '/' : `${item.path}`}>
        <MenuNavLink
          component={'a'}
          {...(item.openInNewTab ? { target: '_blank' } : null)}
          onClick={e => {
            if (item.path === undefined) {
              e.preventDefault()
              e.stopPropagation()
            }
            if (navVisible) {
              toggleNavVisibility()
            }
          }}
          sx={{
            paddingLeft:
              navCollapsed && !navHover ? (themeConfig.collapsedNavigationSize - navigationBorderWidth - 24) / 8 : 5.5,
            ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' })
          }}
        >
          {isSubToSub ? null : (
            <ListItemIcon
              sx={{
                color: 'text.primary',
                transition: 'margin .25s ease',
                ...(navCollapsed && !navHover ? { marginRight: 0 } : { marginRight: 3.25 }),
                ...(parent ? { marginLeft: 1.25, marginRight: 4.75 } : {})
              }}
            >
              {/* @ts-ignore */}
              <IconTag
                sx={{
                  fontSize: '0.75rem',
                  ...(!parent ? { fontSize: '1.5rem' } : {}),
                  ...(parent && item.icon ? { fontSize: '0.875rem' } : {})
                }}
              />
            </ListItemIcon>
          )}

          <MenuItemTextMetaWrapper
            sx={{
              ...(isSubToSub ? { marginLeft: 9 } : {}),
              ...(navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 })
            }}
          >
            <Typography
              {...((themeConfig.menuTextTruncate || (!themeConfig.menuTextTruncate && navCollapsed && !navHover)) && {
                noWrap: true
              })}
            >
              {item.title}
            </Typography>
            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{
                  height: 20,
                  fontWeight: 500,
                  marginLeft: 1.25,
                  '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' }
                }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </Link>
    </ListItem>
  )
}

export default VerticalNavLink
