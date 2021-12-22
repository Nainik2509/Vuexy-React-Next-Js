// ** React Imports
import { useContext } from 'react'

// ** Next Imports
import Link from 'next/link'
import type { NextPage } from 'next'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Context
import { AbilityContext } from 'src/@core/context/Can'

const AccessControl: NextPage = () => {
  const ability = useContext(AbilityContext)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Common' />
          <CardContent>
            <Link href='/apps/email'>Email</Link>
            <Typography sx={{ mb: 4 }}>No ability is required to view this card</Typography>
            <Typography sx={{ color: 'primary.main' }}>This card is visible to 'client' and 'admin' both</Typography>
          </CardContent>
        </Card>
      </Grid>
      {ability.can('read', 'Ecommerce') ? (
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title='Analytics' />
            <CardContent>
              <Typography sx={{ mb: 4 }}>
                Client with 'Ecommerce' subject's 'Read' ability can view this card
              </Typography>
              <Typography sx={{ color: 'primary.main' }}>This card is visible to 'admin' only</Typography>
            </CardContent>
          </Card>
        </Grid>
      ) : null}
    </Grid>
  )
}

AccessControl.getInitialProps = () => {
  return {
    action: 'read',
    subject: 'ACL'
  }
}

export default AccessControl
