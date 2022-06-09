# Checkbox

## Overview

Please visit [MUI Checkbox Docs](https://mui.com/material-ui/react-checkbox/) for a proper explanation of the `Checkbox` component.

Checkbox component is slightly modified to make it more beautiful and useable. Let's have a glance.

::: tip Note
We have only mentioned the extended props here but you can still use the default MUI Checkbox props.
:::

## Custom Checkbox Basic

Use the data format mentioned below to create a custom Checkbox.

```tsx
// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CustomCheckboxBasic from 'src/@core/components/mui/checkbox/CustomCheckboxBasic'

const data = [
  {
    meta: '20%',
    value: 'discount',
    title: 'Discount',
    gridProps: { sm: 6, xs: 12 },
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        wow Get 20% off on your next purchases!
      </Typography>
    )
  },
  ...
]

 <CustomCheckboxBasic value={['discount']} name='custom-checkbox-basic' data={data} />

```

 Result:

<img alt='checkbox-basic' class='medium-zoom' :src="$withBase('/images/components/custom-checkbox-basic.png')" />

## Custom Checkbox Icon

Add a extra property `icon` property in data object to create a custom checkbox with icon.

```tsx
// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CustomCheckboxIcons from 'src/@core/components/mui/checkbox/CustomCheckboxIcons'

// ** Icons Import
import CrownOutline from 'mdi-material-ui/CrownOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import RocketLaunchOutline from 'mdi-material-ui/RocketLaunchOutline'

const data = [
  {
    value: 'starter',
    title: 'Starter',
    gridProps: { sm: 4, xs: 12 },
    icon: <RocketLaunchOutline fontSize='large' />,
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        A simple start for everyone.
      </Typography>
    )
  },
  ...
]

 <CustomCheckboxIcons name='custom-checkbox-icons' data={data} />
```

 Result:

<img alt='checkbox-icons' class='medium-zoom' :src="$withBase('/images/components/custom-checkbox-icons.png')" />

## Custom Checkbox Images

use a `img` property in data object to create a custom checkbox with image.

```tsx
// ** Demo Components Imports
import CustomCheckboxImg from 'src/@core/components/mui/checkbox/CustomCheckboxImg'


const data = [
  {
    value: 'starter',
    gridProps: { sm: 4, xs: 12 },
    img: '/images/pages/background-3.jpg'
  },
  ...
]

 <CustomCheckboxImg name='custom-checkbox-img' data={data} />
```
 Result:

<img alt='checkbox-img' class='medium-zoom' :src="$withBase('/images/components/custom-checkbox-img.png')" />

## Props

| Prop       | Type       | Required  | Description                                                           |
| :---       | :------    | :-------  | :---------------                                                      |
| name       | `string`   | yes       | name attribute of the checkbox                                        |
| value      | `string[]` | No        | selected for the checkbox                                             |
| onChange   | `function` | No        | function to get value of checkbox on change                           |
| data       | `data[]`   | yes       | Array of object to create checkbox. Refer below table for explanation |

## Data for basic checkbox

| Prop             | Type                    | Required  | Description                      |
| :---             | :------                 | :-------  | :---------------                 |
| value            | `string`                | yes       | value of checkbox                |
| gridProps        | `object`                | yes       | Grid Component props             |
| meta             | `string` or `ReactNode` | No        | Meta that shows on top-right     |
| title            | `string` or `ReactNode` | yes       | Title of checkbox                |
| content          | `string` or `ReactNode` | no        | Content of checkbox              |
| checkboxProps    | `object`                | no        | Checkbox component Props         |
| formControlLabel | `object`                | no        | FormControlLabel component props |

## Data for checkbox with icons

| Prop             | Type                    | Required  | Description                      |
| :---             | :------                 | :-------  | :---------------                 |
| value            | `string`                | yes       | value of checkbox                |
| gridProps        | `object`                | yes       | Grid Component props             |
| icon             | `string` or `ReactNode` | yes      | Checkbox Icon                     |
| title            | `string` or `ReactNode` | yes      | Title of checkbox                 |
| content          | `string` or `ReactNode` | no       | Content of checkbox               |
| checkboxProps    | `object`                | no        | Checkbox component Props         |
| formControlLabel | `object`                | no        | FormControlLabel component props |

## Data for checkbox with images

| Prop             | Type                    | Required  | Description                      |
| :---             | :------                 | :-------  | :---------------                 |
| value            | `string`                | yes       | value of checkbox                |
| gridProps        | `object`                | yes       | Grid Component props             |
| img              | `string` or `ReactNode` | yes       | Checkbox Image                   |
| checkboxProps    | `object`                | no        | Checkbox component Props         |
| formControlLabel | `object`                | no        | FormControlLabel component props |
