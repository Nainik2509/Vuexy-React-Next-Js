// ** MUI imports
import { styled } from '@mui/material/styles'

const DataTableWrapper = styled('div')(({ theme }) => ({
  '& .rdt_Table': {
    backgroundColor: theme.palette.background.paper,
    '& > div:not(.rdt_TableHead):not(.rdt_TableBody)': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper
    },
    '& .rdt_TableHeadRow': {
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.action.selected,
      '& .rdt_TableCol': {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: '0.75rem',
        letterSpacing: '0.13px',
        padding: theme.spacing(4),
        textTransform: 'uppercase',
        color: theme.palette.text.primary,

        '&:first-child': {
          paddingLeft: theme.spacing(5)
        },
        '&:last-child': {
          paddingRight: theme.spacing(5)
        },
        '& [role="columnheader"]:hover': {
          color: theme.palette.text.primary
        }
      },
      '& .rdt_TableCol_Sortable': {
        color: theme.palette.text.primary
      }
    },
    '& .rdt_TableBody': {
      borderColor: theme.palette.divider,
      '& .rdt_TableRow': {
        borderColor: theme.palette.divider,
        backgroundColor: theme.palette.background.paper,
        '& .rdt_TableCell': {
          textAlign: 'left',
          fontSize: '0.875rem',
          padding: theme.spacing(4),
          color: theme.palette.text.secondary,
          '&:first-child': {
            paddingLeft: theme.spacing(5)
          },
          '&:last-child': {
            paddingRight: theme.spacing(5)
          }
        },

        '&:hover': {
          outlineColor: theme.palette.divider,
          backgroundColor: theme.palette.action.hover
        },
        '&.fIvAgi': {
          backgroundColor: theme.palette.action.selected
        },
        '& button[aria-label="Expand Row"] svg, & button[aria-label="Collapse Row"] svg': {
          color: theme.palette.text.primary,
          ...(theme.direction === 'rtl' ? { transform: 'rotate(-180deg)' } : {})
        }
      },
      '& .rdt_ExpanderRow': {
        backgroundColor: theme.palette.background.paper
      }
    }
  },
  '& .rdt_Pagination': {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    '& button': {
      fill: theme.palette.text.primary,
      color: theme.palette.text.primary,
      '&:disabled': {
        fill: theme.palette.text.disabled,
        color: theme.palette.text.disabled
      }
    }
  },
  '& .MuiPagination-root': {
    padding: theme.spacing(5)
  }
}))

export default DataTableWrapper
