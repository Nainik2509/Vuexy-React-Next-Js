# Chips

## Overview

Chip component is slightly modified to make it more beautiful and useable. Let's have a glance.

:::tip Note
We have only mentioned the extended props here you can still use the default mui Chips props.
:::

## Chips Skins

There is only one Chip skin `light`.

Here is the example of how to use the skin:

```jsx
// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

<CustomChip label='Primary' skin='light' color='primary' />
<CustomChip label='Secondary' skin='light' color='secondary' />
<CustomChip label='Success' skin='light' color='success' />
<CustomChip label='Error' skin='light' color='error' />
<CustomChip label='Warning' skin='light' color='warning' />
<CustomChip label='Info' skin='light' color='info' />
```

<p>Result:</p>
<img :src="$withBase('/images/components/chips-skin.png')" alt="chips-skins" class="rounded">

## Props

## Props

| Prop |  Type   | Required |      description |
| ---- | :-----: | -------: | ---------------: |
| skin | `light` |       No | Skin of the Chip |
