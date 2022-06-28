// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Hooks Imports
import useBgColor, { UseBgColorType } from 'src/@core/hooks/useBgColor'

const Timeline = (theme: Theme) => {
  // ** Hook
  const bgColors: UseBgColorType = useBgColor()

  return {
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          '&:not(:last-of-type)': {
            '& .MuiTimelineContent-root': {
              marginBottom: theme.spacing(4)
            }
          }
        }
      }
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider
        }
      }
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(0.5)
        }
      }
    },
    MuiTimelineDot: {
      styleOverrides: {
        filledPrimary: {
          boxShadow: `0 0 0 3px ${bgColors.primaryLight.backgroundColor}`
        },
        filledSecondary: {
          boxShadow: `0 0 0 3px ${bgColors.secondaryLight.backgroundColor}`
        },
        filledSuccess: {
          boxShadow: `0 0 0 3px ${bgColors.successLight.backgroundColor}`
        },
        filledError: {
          boxShadow: `0 0 0 3px ${bgColors.errorLight.backgroundColor}`
        },
        filledWarning: {
          boxShadow: `0 0 0 3px ${bgColors.warningLight.backgroundColor}`
        },
        filledInfo: {
          boxShadow: `0 0 0 3px ${bgColors.infoLight.backgroundColor}`
        },
        filledGrey: {
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.grey[400], 0.12)}`
        },
        outlinedPrimary: {
          '& svg': { color: theme.palette.primary.main }
        },
        outlinedSecondary: {
          '& svg': { color: theme.palette.secondary.main }
        },
        outlinedSuccess: {
          '& svg': { color: theme.palette.success.main }
        },
        outlinedError: {
          '& svg': { color: theme.palette.error.main }
        },
        outlinedWarning: {
          '& svg': { color: theme.palette.warning.main }
        },
        outlinedInfo: {
          '& svg': { color: theme.palette.info.main }
        },
        outlinedGrey: {
          '& svg': { color: theme.palette.grey[400] }
        }
      }
    }
  }
}

export default Timeline
