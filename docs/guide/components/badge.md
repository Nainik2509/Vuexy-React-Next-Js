# Badge

## Overview

Badge component is slightly modified to make it more beautiful and useable. Let's have a glance.

::: tip Note
We have only mentioned the extended props here you can still use the default mui Badge props.
:::

## Badge Skins

There is only one badge skin `light`.

Here is the example of how to use the skin:

```jsx
// ** MUI Imports
import Avatar from '@mui/material/Avatar'

// ** Custom Components Imports
import CustomBadge from 'src/@core/components/mui/badge'

<CustomBadge skin='light' color='primary' badgeContent={4}>
  <Avatar src='/images/avatars/3.png' alt='User Avatar' />
</CustomBadge>
<CustomBadge skin='light' color='secondary' badgeContent={4}>
  <Avatar src='/images/avatars/3.png' alt='User Avatar' />
</CustomBadge>
<CustomBadge skin='light' color='success' badgeContent={4}>
  <Avatar src='/images/avatars/3.png' alt='User Avatar' />
</CustomBadge>
<CustomBadge skin='light' color='error' badgeContent={4}>
  <Avatar src='/images/avatars/3.png' alt='User Avatar' />
</CustomBadge>
<CustomBadge skin='light' color='warning' badgeContent={4}>
  <Avatar src='/images/avatars/3.png' alt='User Avatar' />
</CustomBadge>
<CustomBadge skin='light' color='info' badgeContent={4}>
  <Avatar src='/images/avatars/3.png' alt='User Avatar' />
</CustomBadge>
```

Result:

<img alt='badge-skins' class='medium-zoom' :src="$withBase('/images/components/badge-skin.png')" />

## Props

| Prop |  Type   | Required |       description |
| ---- | :-----: | -------: | ----------------: |
| skin | `light` |       No | Skin of the Badge |
