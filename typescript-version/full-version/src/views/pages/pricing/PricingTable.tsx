// ** MUI Imports
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Icons Imports
import StarCircle from 'mdi-material-ui/StarCircle'
import CheckCircle from 'mdi-material-ui/CheckCircle'
import CloseCircle from 'mdi-material-ui/CloseCircle'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Types
import { PricingDataType, PricingTableRowType } from 'src/@core/components/plan-details/types'

interface Props {
  data: PricingDataType | null
}

const PricingTable = ({ data }: Props) => {
  const renderTableCell = (row: PricingTableRowType) => {
    if (typeof row.pro === 'boolean') {
      if (row.pro) {
        return <CheckCircle fontSize='small' sx={{ verticalAlign: 'middle', color: 'primary.main' }} />
      } else {
        return <CloseCircle fontSize='small' sx={{ verticalAlign: 'middle', color: 'text.disabled' }} />
      }
    } else {
      return (
        <CustomChip
          size='small'
          skin='light'
          label={row.pro}
          color='primary'
          sx={{
            '& .MuiChip-label': {
              lineHeight: '18px',
              letterSpacing: '.16px',
              textTransform: 'uppercase'
            }
          }}
        />
      )
    }
  }

  return data && data.pricingTable ? (
    <Box>
      <Box sx={{ mb: 12, textAlign: 'center' }}>
        <Typography variant='h5' sx={{ mb: 2.5 }}>
          Pick a plan that works best for you
        </Typography>
        <Typography variant='body2'>Stay cool, we have a 48-hour money back guarantee!</Typography>
      </Box>

      <Box
        sx={{
          mt: 8,
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'divider',
          '& .MuiTableRow-root:nth-child(even)': { backgroundColor: 'customColors.bodyBg' }
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {data.pricingTable.header.map((head, index) => (
                  <TableCell key={index} align={index === 0 ? 'left' : 'center'} sx={{}}>
                    <Box
                      sx={{
                        display: 'flex',
                        position: 'relative',
                        alignItems: 'center',
                        justifyContent: index === 0 ? 'left' : 'center'
                      }}
                    >
                      <Typography sx={{ mr: 1, fontSize: '.75rem', fontWeight: 600, letterSpacing: '.17px' }}>
                        {head.title}
                      </Typography>
                      {head.isPro ? <StarCircle sx={{ mt: -2, color: 'primary.main' }} /> : null}
                    </Box>
                    <Typography sx={{ fontSize: '.75rem', letterSpacing: '.4px', textTransform: 'capitalize' }}>
                      {head.subtitle}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.pricingTable.rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.feature}</TableCell>
                  <TableCell align='center'>
                    {row.starter ? (
                      <CheckCircle fontSize='small' sx={{ verticalAlign: 'middle', color: 'primary.main' }} />
                    ) : (
                      <CloseCircle fontSize='small' sx={{ verticalAlign: 'middle', color: 'text.disabled' }} />
                    )}
                  </TableCell>
                  <TableCell align='center'>{renderTableCell(row)}</TableCell>
                  <TableCell align='center'>
                    {row.starter ? (
                      <CheckCircle fontSize='small' sx={{ verticalAlign: 'middle', color: 'primary.main' }} />
                    ) : (
                      <CloseCircle fontSize='small' sx={{ verticalAlign: 'middle', color: 'text.disabled' }} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ '& .MuiTableCell-root': { border: 0 } }}>
                <TableCell></TableCell>
                <TableCell sx={{ '& .MuiButton-root': { color: theme => `${theme.palette.primary.main} !important` } }}>
                  <Button variant='outlined'>Choose Plan</Button>
                </TableCell>
                <TableCell sx={{ '& .MuiButton-root': { color: theme => `${theme.palette.common.white} !important` } }}>
                  <Button variant='contained'>Choose Plan</Button>
                </TableCell>
                <TableCell sx={{ '& .MuiButton-root': { color: theme => `${theme.palette.primary.main} !important` } }}>
                  <Button variant='outlined'>Choose Plan</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  ) : null
}

export default PricingTable
