# Avatar

## Overview

Avatar component is slightly modified to make it more beautiful and useable. Let's have a glance.

:::tip Note
We have only mentioned the extended props here you can still use the default mui avatar props.
:::

## Avatar Skins

There are three skins avatar skins `filled` | `light` | `light-static`.

**Please Note:** The difference between `light` & `light-static` can only be seen in `dark-layout`.

Here is the example of how to use the skins mentioned above:

```jsx
// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

<CustomAvatar skin='filled'>N</CustomAvatar>
<CustomAvatar skin='light'>OP</CustomAvatar>
<CustomAvatar skin='light-static'>AB</CustomAvatar>
```

Result:

![avatar-skins](/images/components/avatar-skins.png)

## Avatar Colors

Use `color` prop so you don't have to use `sx` and write the styles.

Use the mui colors `primary` | `secondary` | `success` | `error` | `warning` | `info` to create colored avatars.

Here is the example of how to use the colors mentioned above:

```jsx
// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Icon Import
import BellOutline from 'mdi-material-ui/BellOutline'

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

Result:

![avatar-colors](/images/components/avatar-colors.png)

## Props

| Prop  |                             Type                              | Required |        Description |
| ----- | :-----------------------------------------------------------: | -------: | -----------------: |
| skin  |               `filled`, `light`, `light-static`               |       No | Skin of the avatar |
| color | `primary`, `secondary`, `success`, `error`, `warning`, `info` |       No |       Avatar Color |
