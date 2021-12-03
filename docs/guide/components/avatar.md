# Avatar

## Overview

Avatar component is slightly modified to make it more beautiful and useable. Let's have a glance.

:::tip Note
We have only mentioned the extended props here you can still use the default mui avatar props.
:::

## Avatar Skins

There are three skins avatar skins `filled` | `light` | `light-static`.

Here is the example of how to use the skins mentioned above:

```jsx
import BellOutline from 'mdi-material-ui/BellOutline'
import CustomAvatar from '@core/components/mui/avatar'

<CustomAvatar skin='filled'>
  <BellOutline />
</CustomAvatar>
<CustomAvatar skin='light'>
  <BellOutline />
</CustomAvatar>
<CustomAvatar skin='light-static'>
  <BellOutline />
</CustomAvatar>
```

## Avatar Colors

Use `color` prop so you don't have to use `sx` and write the styles.

Use the mui colors `primary` | `secondary` | `success` | `error` | `warning` | `info` to create colored avatars.

Here is the example of how to use the colors mentioned above:

```jsx
import BellOutline from 'mdi-material-ui/BellOutline'
import CustomAvatar from '@core/components/mui/avatar'

<CustomAvatar color='primary'>
  <BellOutline />
</CustomAvatar>
<CustomAvatar color='secondary'>
  <BellOutline />
</CustomAvatar>
<CustomAvatar color='success'>
  <BellOutline />
</CustomAvatar>
<CustomAvatar color='error'>
  <BellOutline />
</CustomAvatar>
<CustomAvatar color='warning'>
  <BellOutline />
</CustomAvatar>
<CustomAvatar color='info'>
  <BellOutline />
</CustomAvatar>
```

## Props

| Prop  |                             Type                              |        description |
| ----- | :-----------------------------------------------------------: | -----------------: |
| skin  |               `filled`, `light`, `light-static`               | Skin of the avatar |
| color | `primary`, `secondary`, `success`, `error`, `warning`, `info` |       Avatar Color |
