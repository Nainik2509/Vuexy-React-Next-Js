// ** React Imports
import { FC, memo, SyntheticEvent, useState, useEffect, Fragment } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import ListItem, { ListItemProps } from '@mui/material/ListItem'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'

// ** Third Party Imports
import clsx from 'clsx'

// ** Icons Imports
import ChevronDown from 'mdi-material-ui/ChevronDown'
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import ChevronRight from 'mdi-material-ui/ChevronRight'
import CircleOutline from 'mdi-material-ui/CircleOutline'

// ** Theme Config Import
import themeConfig from 'configs/themeConfig'

// ** Utils
import { hexToRGBA } from '@core/utils/hex-to-rgba'
import { hasActiveChild } from '@core/layouts/utils'

// ** Types
import { NavGroup } from '@core/layouts/types'
import { Settings } from '@core/context/settingsContext'

// ** Custom Navigation Components Imports
import HorizontalNavItems from './HorizontalNavItems'

interface Props {
  item: NavGroup
  openNav: string[]
  settings: Settings
  hasParent?: boolean
  handleGroupMouseLeave: (value: string) => void
  handleGroupMouseEnter: (value: string) => void
}

// ** Styled Components
const ListItemComponent = styled(ListItem)<ListItemProps>(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.action.hover
  }
}))

const NavigationMenu = styled((props: TooltipProps) => <Tooltip {...props} classes={{ popper: props.className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      overflowY: 'auto',
      overflowX: 'hidden',
      boxShadow: theme.shadows[4],
      padding: theme.spacing(2, 0),
      maxHeight: 'calc(100vh - 10rem)',
      backgroundColor: theme.palette.background.paper,
      ...(themeConfig.menuTextTruncate ? { width: 250 } : { minWidth: 250 }),

      '&::-webkit-scrollbar': {
        width: 6
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 20,
        background: hexToRGBA(theme.palette.mode === 'light' ? '#B0ACB5' : '#575468', 0.6)
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: 20,
        background: 'transparent'
      },
      '& .MuiList-root': {
        paddingTop: 0,
        paddingBottom: 0
      },
      '& .menu-group.Mui-selected': {
        borderRadius: 0,
        background: theme.palette.action.selected,
        '& .MuiTypography-root, & .MuiListItemIcon-root, & .MuiSvgIcon-root': {
          color: theme.palette.text.primary
        }
      }
    }
  })
)

const HorizontalNavGroup: FC<Props> = (props: Props) => {
  // ** Props
  const { item, hasParent, settings, handleGroupMouseLeave, handleGroupMouseEnter } = props
  console.log(`settings`, settings)

  // ** Hooks & Vars
  const router = useRouter()
  const { direction } = settings
  const currentURL = router.pathname

  // ** States
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const handleGroupOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
    handleGroupMouseEnter(item.title)
    setMenuOpen(true)
  }

  const handleGroupClose = () => {
    setAnchorEl(null)
    handleGroupMouseLeave(item.title)
    setMenuOpen(false)
  }

  const handleMenuToggleOnClick = (event: SyntheticEvent) => {
    if (anchorEl) {
      handleGroupClose()
    } else {
      handleGroupOpen(event)
    }
  }

  useEffect(() => {
    handleGroupClose()
  }, [router.asPath]) // eslint-disable-line

  const tooltipPosition = direction === 'rtl' ? 'left' : 'right'
  const IconTag = item.icon ? item.icon : themeConfig.navSubItemIcon
  const ToggleIcon = direction === 'rtl' ? ChevronLeft : ChevronRight

  const WrapperCondition = themeConfig.horizontalMenuToggle === 'click'
  const MainWrapper = WrapperCondition ? ClickAwayListener : 'div'
  const ChildWrapper = WrapperCondition ? 'div' : Fragment

  return (
    // eslint=disable-next-line
    // @ts-ignore
    <MainWrapper {...(WrapperCondition ? { onClickAway: handleGroupClose } : { onMouseLeave: handleGroupClose })}>
      <ChildWrapper>
        <NavigationMenu
          open={Boolean(anchorEl)}
          placement={!hasParent ? 'bottom-start' : tooltipPosition}
          disableHoverListener={themeConfig.horizontalMenuToggle === 'click'}
          PopperProps={{
            disablePortal: true,
            modifiers: [
              {
                name: 'flip',
                options: {
                  boundary: 'document',
                  fallbackPlacements: [direction === 'rtl' ? 'right' : 'left']
                }
              },
              {
                name: 'offset',
                options: {
                  offset: () => [0, -10]
                }
              }
            ]
          }}
          title={
            <HorizontalNavItems
              {...props}
              hasParent
              parentId={item.title}
              horizontalNavItems={item.children}
              handleGroupMouseEnter={handleGroupMouseEnter}
              handleGroupMouseLeave={handleGroupMouseLeave}
            />
          }
        >
          <List component='div' sx={{ py: 3 }}>
            <ListItemComponent
              aria-haspopup='true'
              {...(WrapperCondition ? {} : { onMouseEnter: handleGroupOpen })}
              sx={{
                ...(menuOpen ? { background: theme => theme.palette.action.selected } : {}),
                ...(!hasParent
                  ? {
                      borderRadius: 1,
                      '&.Mui-selected': {
                        background: theme => theme.palette.primary.main,
                        '& .MuiTypography-root, & .MuiListItemIcon-root, & .MuiSvgIcon-root': {
                          color: 'common.white'
                        }
                      }
                    }
                  : {})
              }}
              className={clsx('menu-group', { 'Mui-selected': hasActiveChild(item, currentURL) })}
              {...(themeConfig.horizontalMenuToggle === 'click' ? { onClick: handleMenuToggleOnClick } : {})}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
                  }}
                >
                  <ListItemIcon sx={{ mr: 2 }}>
                    {/* @ts-ignore */}
                    <IconTag sx={IconTag === CircleOutline ? { fontSize: '1rem' } : { fontSize: '1.125rem' }} />
                  </ListItemIcon>
                  <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>{item.title}</Typography>
                </Box>
                <Box sx={{ ml: 1.6, display: 'flex', alignItems: 'center' }}>
                  {item.badgeContent ? (
                    <Chip
                      label={item.badgeContent}
                      color={item.badgeColor || 'primary'}
                      sx={{
                        mr: 1.6,
                        height: 20,
                        fontWeight: 500,
                        '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' }
                      }}
                    />
                  ) : null}
                  {hasParent ? (
                    <ToggleIcon sx={{ width: 18, height: 18, color: 'text.primary' }} />
                  ) : (
                    <ChevronDown sx={{ width: 18, height: 18, color: 'text.primary' }} />
                  )}
                </Box>
              </Box>
            </ListItemComponent>
          </List>
        </NavigationMenu>
      </ChildWrapper>
    </MainWrapper>
  )
}

export default memo(HorizontalNavGroup)
