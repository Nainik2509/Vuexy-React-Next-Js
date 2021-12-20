# Blog Layout

## Overview

You can create Blog layout using the `getLayout` method.

## Usage

Refer to the code below to create a blog like layout:

```jsx
// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// ** User Layout Import
import UserLayout from 'src/layouts/UserLayout'

const SidebarComponent = () => (
  <Box sx={{ px: 4, py: 2, height: 'calc(100vh - 12rem)', backgroundColor: 'white' }}>
    <h1>Sidebar</h1>
  </Box>
)

const BlogLayout = () => <h1>Blogs</h1>

export default BlogLayout

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
```

<p>Result:</p>
<img :src="$withBase('/images/layouts/blog-layout.png')" alt="blog-layout" class="rounded">
