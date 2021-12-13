// ** MUI imports
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

// ** Util Imports
// import { hexToRGBA } from '@core/utils/hex-to-rgba'

const DataGridWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',

  '& .MuiDataGrid-root': {
    border: 0,
    '& .MuiDataGrid-columnHeaders': {
      '& .MuiDataGrid-columnHeader': {
        fontWeight: 600,
        padding: `0 ${theme.spacing(4.1)}`,
        color: theme.palette.text.primary,
        borderColor: theme.palette.divider,
        backgroundColor: `rgba(${theme.palette.customColors.main}, .14)`,

        '& .MuiDataGrid-columnHeaderTitleContainer': {
          padding: 0,
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 600,
            color: theme.palette.text.primary
          }
        }
      }
    },

    '& .MuiDataGrid-columnSeparator': {
      display: 'none'
    },

    '& .MuiDataGrid-cell': {
      maxHeight: '50px !important',
      borderColor: theme.palette.divider,
      padding: `0 ${theme.spacing(4.1)}`
    },
    '& .MuiDataGrid-columnHeaderCheckbox': {
      height: '56px'
    },
    '& .MuiDataGrid-virtualScrollerRenderZone': {
      '& .MuiDataGrid-row:last-child': {
        '& .MuiDataGrid-cell': {
          border: 0
        }
      }
    }
  },

  '& .MuiDataGrid-footerContainer': {
    borderTop: `1px solid ${theme.palette.divider}`
  }
}))

export default DataGridWrapper
