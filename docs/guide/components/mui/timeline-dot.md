# Timeline Dot

## Overview

Please visit [MUI Timeline Docs](https://mui.com/components/timeline/) for a proper explanation of the `TimelineDot` component.

TimelineDot component is slightly modified to make it more beautiful and useable. Let's have a glance.

::: tip Note
We have only mentioned the extended props here but you can still use the default MUI TimelineDot props.
:::

## Timeline Dot Skins

There is only one skin type of timeline dot: `light`.

Here is an example of how to use the skin:

```tsx
// ** Custom Components Imports
import CustomTimelineDot from 'src/@core/components/mui/timeline-dot'

// ** Icons Imports
import Airplane from 'mdi-material-ui/Airplane'
import CartOutline from 'mdi-material-ui/CartOutline'
import ClockOutline from 'mdi-material-ui/ClockOutline'
import FileEditOutline from 'mdi-material-ui/FileEditOutline'

<CustomTimelineDot skin='light' color='error'>
  <Airplane fontSize='small' />
</CustomTimelineDot>
<CustomTimelineDot skin='light' color='primary'>
  <ClockOutline fontSize='small' />
</CustomTimelineDot>
<CustomTimelineDot skin='light' color='warning'>
  <CartOutline fontSize='small' />
</CustomTimelineDot>
<CustomTimelineDot skin='light' color='success'>
  <FileEditOutline fontSize='small' />
</CustomTimelineDot>
```

Result:

<img alt='timeline-dot-skins' class='medium-zoom' :src="$withBase('/images/components/timeline-dot-skin.png')" />

## Props

| Prop |  Type   | Required |      description |
| ---- | :------ | :------- | :--------------- |
| skin | `light` |       No | Skin of the timeline dot |
