// ** Next Import
import Image from 'next/image'

// ** MUI Imports
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

const BlankLayoutAppBar = () => {
  return (
    <AppBar elevation={3} color='default' position='sticky'>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          padding: theme => `${theme.spacing(0, 6)} !important`,
          minHeight: `${themeConfig.appBarHeight}px !important`
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image alt='logo' width={30} height={25} src={themeConfig.templateLogo} />
          <Typography
            variant='h6'
            sx={{
              marginLeft: 3,
              lineHeight: 'normal',
              textTransform: 'uppercase',
              fontWeight: theme => theme.typography.fontWeightBold
            }}
          >
            {themeConfig.templateName}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default BlankLayoutAppBar
