# getLayout

## Overview

If you want to change the default layout for a particular page, you can use `getLayout` method with your component.

## Blank Layout

Here is the example of how to change the layout from default layout to blank layout for any page:

```jsx
import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'

const Login = () => {
  return {
    /* Your content */
  }
}

Login.getLayout = (page: ReactNode) => {
  return <BlankLayout>{page}</BlankLayout>
}

export default Login
```

## Blank Layout with AppBar

Here is the example of how to change the layout from default layout to blank layout with appBar for any page:

```jsx
import { ReactNode } from 'react'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'

const Login = () => {
  return {
    /* Your content */
  }
}

Login.getLayout = (page: ReactNode) => {
  return <BlankLayoutWithAppBar>{page}</BlankLayoutWithAppBar>
}

export default Login
```

## Custom Layout

Refer to the code below to create a blog like layout:

```jsx
import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import UserLayout from 'src/layouts/UserLayout'

const SidebarComponent = () => (
  <Box sx={{ px: 4, py: 2, height: 'calc(100vh - 12rem)', backgroundColor: 'background.paper' }}>
    <h1>Sidebar</h1>
  </Box>
)

const BlogLayout = () => <h1>Blogs</h1>

BlogLayout.getLayout = (page: ReactNode) => {
  return (
    <UserLayout>
      <Grid spacing={6} container>
        <Grid item md={9}>
          {page}
        </Grid>
        <Grid item md={3}>
          <SidebarComponent />
        </Grid>
      </Grid>
    </UserLayout>
  )
}

export default BlogLayout
```

Result:

![blog-layout](/images/layouts/blog-layout.png)
