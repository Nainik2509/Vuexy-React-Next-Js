// ** React Imports
import { useRef } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'
import TableCell, { TableCellBaseProps } from '@mui/material/TableCell'

// ** Third Party Imports
import ReactToPdf from 'react-to-pdf'

// ** Configs
import themeConfig from 'configs/themeConfig'

// ** Types
import { SingleInvoiceType } from 'pages/apps/invoice/types'

interface Props {
  data: SingleInvoiceType
}

const MUITableCell = styled(TableCell)<TableCellBaseProps>(({ theme }) => ({
  borderBottom: 0,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  paddingTop: `${theme.spacing(1)} !important`,
  paddingBottom: `${theme.spacing(1)} !important`
}))

const CalcWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))

const PreviewCard = ({ data }: Props) => {
  // ** Props
  const { invoice, paymentDetails } = data

  // ** Ref
  const PreviewRef = useRef(null)

  return (
    <Card>
      <Box ref={PreviewRef}>
        <CardContent>
          <Grid container>
            <Grid item sm={6} xs={12} sx={{ mb: { sm: 0, xs: 4 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
                  <svg height='20px' viewBox='0 0 30 25' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                    <title>logo</title>
                    <g id='⚛️-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                      <g id='Menu-One' transform='translate(-26.000000, -29.000000)'>
                        <g id='logo' transform='translate(26.000000, 29.000000)'>
                          <path
                            d='M3.05044703,1.88276582 L6.30851155,3.89367518 C6.89872324,4.25795962 7.25806452,4.90202396 7.25806452,5.5956038 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 C-5.7935996e-16,2.48012494 0.8954305,1.58469444 2,1.58469444 C2.37101843,1.58469444 2.73472359,1.68789821 3.05044703,1.88276582 Z'
                            id='Rectangle'
                            fill='#9155FD'
                          />
                          <polygon
                            id='Rectangle'
                            fill='#000000'
                            opacity='0.077704'
                            points='0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646'
                          />
                          <polygon
                            id='Rectangle'
                            fill='#000000'
                            opacity='0.077704'
                            points='0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162'
                          />
                          <path
                            d='M25.7898301,1.87488682 L29.0478946,3.87905791 C29.6395606,4.24301628 30,4.88791238 30,5.58255928 L30,19.4422291 C30,20.1455972 29.6305248,20.7972624 29.0269645,21.1584295 L25.7689,23.1080366 C24.8210687,23.6752135 23.5929119,23.366632 23.0257351,22.4188007 C22.8400159,22.1084381 22.7419355,21.7535219 22.7419355,21.3918362 L22.7419355,3.57838819 C22.7419355,2.47381869 23.637366,1.57838819 24.7419355,1.57838819 C25.1119353,1.57838819 25.4746825,1.68102644 25.7898301,1.87488682 Z'
                            id='Rectangle'
                            fill='#9155FD'
                            transform='translate(26.370968, 12.459677) scale(-1, 1) translate(-26.370968, -12.459677) '
                          />
                          <polygon
                            id='Rectangle'
                            fill='#000000'
                            opacity='0.077704'
                            transform='translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) '
                            points='22.7419355 8.58870968 30 12.7417372 30 16.9537453'
                          />
                          <polygon
                            id='Rectangle'
                            fill='#000000'
                            opacity='0.077704'
                            transform='translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) '
                            points='22.7419355 8.58870968 30 12.6409734 30 15.2601969'
                          />
                          <path
                            d='M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z'
                            id='Rectangle'
                            fill='#9E69FD'
                          />
                          <path
                            d='M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z'
                            id='Rectangle'
                            fill='#B992FE'
                            transform='translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) '
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <Typography variant='h6' sx={{ ml: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {themeConfig.templateName}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='body2' sx={{ mb: 1 }}>
                    Office 149, 450 South Brand Brooklyn
                  </Typography>
                  <Typography variant='body2' sx={{ mb: 1 }}>
                    San Diego County, CA 91905, USA
                  </Typography>
                  <Typography variant='body2'>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' } }}>
                <Table sx={{ maxWidth: '200px' }}>
                  <TableBody>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='h6' sx={{ fontWeight: 500 }}>
                          Invoice
                        </Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='h6' sx={{ fontWeight: 500 }}>
                          #{invoice.id}
                        </Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='body2'>Date Issued:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='body2' sx={{ fontWeight: 600 }}>
                          {invoice.issuedDate}
                        </Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='body2'>Date Due:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='body2' sx={{ fontWeight: 600 }}>
                          {invoice.dueDate}
                        </Typography>
                      </MUITableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Grid>
          </Grid>
        </CardContent>

        <Divider />

        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={6} lg={8} sx={{ mb: { lg: 0, xs: 4 } }}>
              <Typography variant='body2' sx={{ mb: 3.5, fontWeight: 600 }}>
                Invoice To:
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                {invoice.client.name}
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                {invoice.client.company}
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                {invoice.client.address}
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                {invoice.client.contact}
              </Typography>
              <Typography variant='body2' sx={{ mb: 2 }}>
                {invoice.client.companyEmail}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Typography variant='body2' sx={{ mb: 3.5, fontWeight: 600 }}>
                Bill To:
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <MUITableCell>Total Due:</MUITableCell>
                    <MUITableCell>{paymentDetails.totalDue}</MUITableCell>
                  </TableRow>
                  <TableRow>
                    <MUITableCell>Bank name:</MUITableCell>
                    <MUITableCell>{paymentDetails.bankName}</MUITableCell>
                  </TableRow>
                  <TableRow>
                    <MUITableCell>Country:</MUITableCell>
                    <MUITableCell>{paymentDetails.country}</MUITableCell>
                  </TableRow>
                  <TableRow>
                    <MUITableCell>IBAN:</MUITableCell>
                    <MUITableCell>{paymentDetails.iban}</MUITableCell>
                  </TableRow>
                  <TableRow>
                    <MUITableCell>SWIFT code:</MUITableCell>
                    <MUITableCell>{paymentDetails.swiftCode}</MUITableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </CardContent>

        <Divider />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>hours</TableCell>
                <TableCell>qty</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Premium Branding Package</TableCell>
                <TableCell>Branding & Promotion</TableCell>
                <TableCell>48</TableCell>
                <TableCell>1</TableCell>
                <TableCell>$32</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Social Media</TableCell>
                <TableCell>Social media templates</TableCell>
                <TableCell>42</TableCell>
                <TableCell>1</TableCell>
                <TableCell>$28</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Web Design</TableCell>
                <TableCell>Web designing package</TableCell>
                <TableCell>46</TableCell>
                <TableCell>1</TableCell>
                <TableCell>$24</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SEO</TableCell>
                <TableCell>Search engine optimization</TableCell>
                <TableCell>40</TableCell>
                <TableCell>1</TableCell>
                <TableCell>$22</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={7} lg={9} sx={{ order: { sm: 1, xs: 2 } }}>
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <Typography variant='body2' sx={{ mr: 2, fontWeight: 600 }}>
                  Salesperson:
                </Typography>
                <Typography variant='body2'>Tommy Shelby</Typography>
              </Box>

              <Typography variant='body2'>Thanks for your business</Typography>
            </Grid>
            <Grid item xs={12} sm={5} lg={3} sx={{ mb: { sm: 0, xs: 4 }, order: { sm: 2, xs: 1 } }}>
              <CalcWrapper>
                <Typography variant='body2'>Subtotal:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  $1800
                </Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography variant='body2'>Discount:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  $28
                </Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography variant='body2'>Tax:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  21%
                </Typography>
              </CalcWrapper>
              <Divider />
              <CalcWrapper>
                <Typography variant='body2'>Total:</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  $1690
                </Typography>
              </CalcWrapper>
            </Grid>
          </Grid>
        </CardContent>

        <Divider />

        <CardContent>
          <Typography variant='body2'>
            <strong>Note:</strong> It was a pleasure working with you and your team. We hope you will keep us in mind
            for future freelance projects. Thank You!
          </Typography>
        </CardContent>
      </Box>
      <CardContent>
        <Box sx={{ mt: 4, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <Link href={`/apps/invoice/print/${invoice.id}`} passHref>
            <Button sx={{ mr: 4 }} target='_blank' component='a' variant='contained'>
              Print
            </Button>
          </Link>

          <ReactToPdf scale={0.845} targetRef={PreviewRef} filename={`invoice-${invoice.id}.pdf`}>
            {({ toPdf }: any) => {
              return (
                <Button variant='contained' color='success' onClick={toPdf}>
                  Download
                </Button>
              )
            }}
          </ReactToPdf>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PreviewCard
