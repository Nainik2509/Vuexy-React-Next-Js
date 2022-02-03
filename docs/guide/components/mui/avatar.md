# Avatar

## Overview

Please visit [MUI Avatar Docs](https://mui.com/components/avatars/) for a proper explanation of the `Avatar` component.

Avatar component is slightly modified to make it more beautiful and useable. Let's have a glance.

::: tip Note
We have only mentioned the extended props here you can still use the default MUI avatar props.
:::

## Avatar Colors

Use the `color` prop so you don't have to use the `sx` prop and write the styles inside it.

Use the MUI colors `primary` | `secondary` | `success` | `error` | `warning` | `info` to create colored avatars.

Here is the example of how to use the colors mentioned above:

```tsx
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

<img alt='avatar-colors' class='medium-zoom' :src="$withBase('/images/components/avatar-colors.png')" />

## Avatar Skins

There are three skins avatar skins `filled` | `light` | `light-static`.

**Please Note:** The difference between `light` & `light-static` can only be seen in `dark-layout`.

Here is the example of how to use the skins mentioned above:

```tsx
// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

<CustomAvatar skin='filled'>N</CustomAvatar> // OR <CustomAvatar>N</CustomAvatar>
<CustomAvatar skin='light' color='error'>OP</CustomAvatar>
<CustomAvatar skin='light-static' color='error'>AB</CustomAvatar>
```

Result:

<img alt='avatar-skins' class='medium-zoom' :src="$withBase('/images/components/avatar-skins.png')" />

## Props

| Prop  |                             Type                              | Default | Required |        Description |
| ----- | :------------------------------------------------------------ | :------- | :------- | :----------------- |
| skin  |               `filled`, `light`, `light-static`               |       `filled` |       No | Skin of the avatar |
| color | `primary`, `secondary`, `success`, `error`, `warning`, `info` |       `primary` |       No |       Background color of the avatar |
