// ** MUI Imports
import { Theme } from '@mui/material'

const DataGrid = (theme: Theme) => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 0,
          color: theme.palette.text.primary
        },
        toolbarContainer: {
          paddingRight: `${theme.spacing(5)} !important`,
          paddingLeft: `${theme.spacing(3.25)} !important`
        },
        columnHeaders: {
          maxHeight: '54px !important',
          minHeight: '54px !important',
          lineHeight: '24px !important',
          backgroundColor: theme.palette.background.default
        },
        columnHeader: {
          height: '54px',
          '&:not(.MuiDataGrid-columnHeaderCheckbox)': {
            padding: theme.spacing(4),
            '&:first-of-type': {
              paddingLeft: theme.spacing(5)
            }
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(5)
          }
        },
        columnHeaderCheckbox: {
          maxWidth: '58px !important',
          minWidth: '58px !important'
        },
        columnHeaderTitleContainer: {
          padding: 0
        },
        columnSeparator: {
          display: 'none'
        },
        virtualScroller: {
          marginTop: '54px !important'
        },
        virtualScrollerRenderZone: {
          '& .MuiDataGrid-row': {
            maxHeight: '50px !important',
            minHeight: '50px !important'
          }
        },
        row: {
          '&:last-child': {
            '& .MuiDataGrid-cell': {
              borderBottom: 0
            }
          }
        },
        cell: {
          maxHeight: '50px !important',
          minHeight: '50px !important',
          lineHeight: '20px !important',
          borderColor: theme.palette.divider,
          '&:not(.MuiDataGrid-cellCheckbox)': {
            padding: theme.spacing(4),
            '&:first-of-type': {
              paddingLeft: theme.spacing(5)
            }
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(5)
          }
        },
        cellCheckbox: {
          maxWidth: '58px !important',
          minWidth: '58px !important'
        },
        editInputCell: {
          color: theme.palette.text.primary
        },
        footerContainer: {
          minHeight: '50px !important',
          borderTop: `1px solid ${theme.palette.divider}`,
          '& .MuiTablePagination-toolbar': {
            minHeight: '50px !important'
          },
          '& .MuiTablePagination-displayedRows, & .MuiTablePagination-selectLabel': {
            color: theme.palette.text.primary
          }
        }
      }
    }
  }
}

export default DataGrid
