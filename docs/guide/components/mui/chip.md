# Chip

## Overview

Please visit [MUI Chip Docs](https://mui.com/components/chips/) for a proper explanation of the `Chip` component.

Chip component is slightly modified to make it more beautiful and useable. Let's have a glance.

::: tip Note
We have only mentioned the extended props here but you can still use the default MUI chip props.
:::

## Chip Skins

There is only one chip skin `light`.

Here is an example of how to use the skin:

```tsx
// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

<CustomChip label='Primary' skin='light' color='primary' />
<CustomChip label='Secondary' skin='light' color='secondary' />
<CustomChip label='Success' skin='light' color='success' />
<CustomChip label='Error' skin='light' color='error' />
<CustomChip label='Warning' skin='light' color='warning' />
<CustomChip label='Info' skin='light' color='info' />
```

Result:

<img alt='chips-skins' class='medium-zoom' :src="$withBase('/images/components/chips-skin.png')" />

## Props

| Prop |  Type   | Required |      description |
| ---- | :------ | :------- | :--------------- |
| skin | `light` |       No | Skin of the chip |
