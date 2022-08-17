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

// ** Icon Imports
import Icon from 'src/@core/components/icon'

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
      return <Icon fontSize={20} icon={row.pro ? 'mdi:check-circle' : 'mdi:close-circle'} />
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
    <div>
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
                        justifyContent: index === 0 ? 'left' : 'center',
                        '& svg': { mt: -2, color: 'primary.main' }
                      }}
                    >
                      <Typography sx={{ mr: 1, fontSize: '.75rem', fontWeight: 600, letterSpacing: '.17px' }}>
                        {head.title}
                      </Typography>
                      {head.isPro ? <Icon icon='mdi:star-circle' /> : null}
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
                  <TableCell
                    align='center'
                    sx={{ '& svg': { verticalAlign: 'middle', color: row.starter ? 'primary.main' : 'text.disabled' } }}
                  >
                    <Icon fontSize={20} icon={row.starter ? 'mdi:check-circle' : 'mdi:close-circle'} />
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{ '& svg': { verticalAlign: 'middle', color: row.pro ? 'primary.main' : 'text.disabled' } }}
                  >
                    {renderTableCell(row)}
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      '& svg': { verticalAlign: 'middle', color: row.enterprise ? 'primary.main' : 'text.disabled' }
                    }}
                  >
                    <Icon fontSize={20} icon={row.enterprise ? 'mdi:check-circle' : 'mdi:close-circle'} />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ '& .MuiTableCell-root': { border: 0 } }}>
                <TableCell></TableCell>
                <TableCell
                  align='center'
                  sx={{ '& .MuiButton-root': { color: theme => `${theme.palette.primary.main} !important` } }}
                >
                  <Button variant='outlined'>Choose Plan</Button>
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ '& .MuiButton-root': { color: theme => `${theme.palette.common.white} !important` } }}
                >
                  <Button variant='contained'>Choose Plan</Button>
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ '& .MuiButton-root': { color: theme => `${theme.palette.primary.main} !important` } }}
                >
                  <Button variant='outlined'>Choose Plan</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  ) : null
}

export default PricingTable
