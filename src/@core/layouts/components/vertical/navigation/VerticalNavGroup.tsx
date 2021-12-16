// ** React Imports
import { FC, useEffect, Fragment } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'
import Collapse from '@mui/material/Collapse'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'

// ** Third Party Imports
import clsx from 'clsx'

// ** Icons Imports
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import ChevronRight from 'mdi-material-ui/ChevronRight'

// ** Configs Import
import themeConfig from 'configs/themeConfig'

// ** Utils
import { hasActiveChild, removeChildren } from '@core/layouts/utils'

// ** Types
import { NavGroup } from '@core/layouts/types'
import { Settings } from '@core/context/settingsContext'

// ** Custom Components Imports
import VerticalNavItems from './VerticalNavItems'

interface Props {
  item: NavGroup
  navHover: boolean
  parent?: NavGroup
  settings: Settings
  navVisible?: boolean
  groupActive: string[]
  currentActiveGroup: string[]
  navigationBorderWidth: number
  isSubToSub?: NavGroup | undefined
  saveSettings: (values: Settings) => void
  setGroupActive: (values: string[]) => void
  setCurrentActiveGroup: (items: string[]) => void
}

const MenuItemTextWrapper = styled(Box)<BoxProps>(() => ({
  width: '100%',
  display: 'flex',
  transition: 'opacity .25s ease',
  justifyContent: 'space-between',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
}))

const MenuGroupToggleRightIcon = styled(ChevronRight)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: 'transform .25s ease'
}))

const MenuGroupToggleLeftIcon = styled(ChevronLeft)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: 'transform .25s ease'
}))

const VerticalNavGroup: FC<Props> = (props: Props) => {
  // ** Props
  const {
    item,
    parent,
    settings,
    navHover,
    navVisible,
    isSubToSub,
    groupActive,
    setGroupActive,
    currentActiveGroup,
    setCurrentActiveGroup,
    navigationBorderWidth
  } = props

  // ** Hooks & Vars
  const router = useRouter()
  const currentURL = router.pathname
  const { direction, navCollapsed, verticalNavToggleType } = settings

  // ** Accordion menu group open toggle
  const toggleActiveGroup = (item: NavGroup, parent: NavGroup | undefined) => {
    let openGroup = groupActive

    // ** If Group is already open and clicked, close the group
    if (openGroup.includes(item.title)) {
      openGroup.splice(openGroup.indexOf(item.title), 1)

      // If clicked Group has open group children, Also remove those children to close those groups
      if (item.children) {
        removeChildren(item.children, openGroup, currentActiveGroup)
      }
    } else if (parent) {
      // ** If Group clicked is the child of a open group, first remove all the open groups under that parent
      if (parent.children) {
        removeChildren(parent.children, openGroup, currentActiveGroup)
      }

      // ** After removing all the open groups under that parent, add the clicked group to open group array
      if (!openGroup.includes(item.title)) {
        openGroup.push(item.title)
      }
    } else {
      // ** If clicked on another group that is not active or open, create openGroup array from scratch

      // ** Empty Open Group array
      openGroup = []

      // ** push Current Active Group To Open Group array
      if (currentActiveGroup.every(elem => groupActive.includes(elem))) {
        openGroup.push(...currentActiveGroup)
      }

      // ** Push current clicked group item to Open Group array
      if (!openGroup.includes(item.title)) {
        openGroup.push(item.title)
      }
    }
    setGroupActive([...openGroup])
  }

  // ** Menu Group Click
  const handleGroupClick = () => {
    const openGroup = groupActive
    if (verticalNavToggleType === 'collapse') {
      if (openGroup.includes(item.title)) {
        openGroup.splice(openGroup.indexOf(item.title), 1)
      } else {
        openGroup.push(item.title)
      }
      setGroupActive([...openGroup])
    } else {
      toggleActiveGroup(item, parent)
    }
  }

  useEffect(() => {
    if (hasActiveChild(item, currentURL)) {
      if (!groupActive.includes(item.title)) groupActive.push(item.title)
    } else {
      const index = groupActive.indexOf(item.title)
      if (index > -1) groupActive.splice(index, 1)
    }
    setGroupActive([...groupActive])
    setCurrentActiveGroup([...groupActive])
  }, [router.asPath]) // eslint-disable-line

  useEffect(() => {
    if (navCollapsed && !navHover) {
      setGroupActive([])
    }
    if (navCollapsed && navHover) {
      setGroupActive([...currentActiveGroup, ...groupActive])
    }
  }, [navCollapsed, navHover]) // eslint-disable-line

  // const IconTag = item.icon
  const IconTag = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon

  const menuGroupCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  return (
    <Fragment>
      <ListItem
        disablePadding
        onClick={handleGroupClick}
        className='menu-group-item'
        sx={{ mt: 1, px: '0 !important' }}
      >
        <ListItemButton
          className={clsx({
            'Mui-selected': groupActive.includes(item.title) || currentActiveGroup.includes(item.title)
          })}
          sx={{
            width: '100%',
            transition: 'padding .25s ease',
            ...(parent && !item.children ? { paddingLeft: 5 } : {}),
            padding: theme =>
              theme.spacing(
                2.5,
                4.5,
                2.5,
                navCollapsed && !navHover ? (themeConfig.collapsedNavigationSize - navigationBorderWidth - 24) / 8 : 5.5
              )
          }}
        >
          {isSubToSub ? null : (
            <ListItemIcon
              sx={{
                color: 'text.primary',
                transition: 'margin .25s ease',
                ...(parent && navCollapsed && !navHover ? {} : { marginRight: 3.25 }),
                ...(navCollapsed && !navHover ? { marginRight: 0 } : {}), // this condition should come after (parent && navCollapsed && !navHover) condition for proper transition
                ...(parent && item.children ? { marginLeft: 1.25, marginRight: 4.75 } : {})
              }}
            >
              {/* @ts-ignore */}
              <IconTag sx={{ ...(parent ? { fontSize: '0.75rem' } : {}) }} />
            </ListItemIcon>
          )}
          <MenuItemTextWrapper sx={{ ...menuGroupCollapsedStyles, ...(isSubToSub ? { marginLeft: 9 } : {}) }}>
            <Typography
              {...((themeConfig.menuTextTruncate || (!themeConfig.menuTextTruncate && navCollapsed && !navHover)) && {
                noWrap: true
              })}
            >
              {item.title}
            </Typography>
            <Box className='menu-item-meta' sx={{ ml: 0.8, display: 'flex', alignItems: 'center' }}>
              {item.badgeContent ? (
                <Chip
                  label={item.badgeContent}
                  color={item.badgeColor || 'primary'}
                  sx={{
                    mr: 0.8,
                    height: 20,
                    fontWeight: 500,
                    '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' }
                  }}
                />
              ) : null}
              {direction === 'ltr' ? (
                <MenuGroupToggleRightIcon
                  sx={{ ...(groupActive.includes(item.title) ? { transform: 'rotate(90deg)' } : {}) }}
                />
              ) : (
                <MenuGroupToggleLeftIcon
                  sx={{ ...(groupActive.includes(item.title) ? { transform: 'rotate(-90deg)' } : {}) }}
                />
              )}
            </Box>
          </MenuItemTextWrapper>
        </ListItemButton>
      </ListItem>
      <Collapse
        component='ul'
        in={groupActive.includes(item.title)}
        sx={{
          m: 0,
          pl: 0,
          transition: 'all .25s ease',
          ...menuGroupCollapsedStyles
        }}
      >
        <VerticalNavItems
          {...props}
          parent={item}
          navVisible={navVisible}
          verticalNavItems={item.children}
          isSubToSub={parent && item.children ? item : undefined}
        />
      </Collapse>
    </Fragment>
  )
}

export default VerticalNavGroup
