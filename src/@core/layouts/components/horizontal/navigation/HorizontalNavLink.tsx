// ** React Imports
import { FC, memo, ElementType, Fragment } from 'react'

// ** Next Import
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
import themeConfig from 'configs/themeConfig'

// ** Types
import { NavLink } from '@core/layouts/types'

// ** Util Import
import { hexToRGBA } from '@core/utils/hex-to-rgba'

interface Props {
  parentId?: string
  item: NavLink
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

const HorizontalNavLink: FC<Props> = (props: Props) => {
  // ** Props
  const { item, hasParent, parentId, handleGroupMouseLeave } = props

  const IconTag = item.icon ? item.icon : themeConfig.navSubItemIcon

  const Wrapper = !hasParent ? List : Fragment

  // ** Hook
  const router = useRouter()

  return (
    <Wrapper {...(!hasParent ? { sx: { py: 3 } } : {})}>
      <Link href={`${item.path}`} passHref>
        <ListItem
          component={'a'}
          className={router.pathname === item.path ? 'active' : ''}
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
                {/* @ts-ignore */}
                <IconTag sx={IconTag === CircleOutline ? { fontSize: '1rem' } : { fontSize: '1.125rem' }} />
              </ListItemIcon>
              <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>{item.title}</Typography>
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

export default memo(HorizontalNavLink)
