# Radio

## Overview

Please visit [MUI Radio Docs](https://mui.com/material-ui/react-radio-button/) for a proper explanation of the `Radio` component.

Radio component is slightly modified to make it more beautiful and useable. Let's have a glance.

::: tip Note
We have only mentioned the extended props here but you can still use the default MUI Radio props.
:::

## Custom Radio Basic

Use the data format mentioned below to create a custom radio.

```tsx
// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CustomRadioBasic from 'src/@core/components/mui/radio/CustomRadioBasic'

const data = [
  {
    meta: 'Free',
    value: 'basic',
    title: 'Basic',
    gridProps: { sm: 6, xs: 12 },
    content: (
      <Typography variant='caption' sx={{ display: 'inline-block', lineHeight: 1.5 }}>
        Get 1 project with 1 teams members.
      </Typography>
    )
  },
  ...
]

 <CustomRadioBasic value='basic' name='custom-radios-basic' data={data} />

```

 Result:

<img alt='radio-basic' class='medium-zoom' :src="$withBase('/images/components/custom-radio-basic.png')" />

## Custom Radio Icon

Add a extra property `icon` property in data object to create a custom radio with icon.

```tsx
// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CustomRadioIcons from 'src/@core/components/mui/radio/CustomRadioIcons'

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

 <CustomRadioIcons value='starter' name='custom-radios-icons' data={data} />
```

 Result:

<img alt='radio-icons' class='medium-zoom' :src="$withBase('/images/components/custom-radio-icons.png')" />

## Custom Radio Images

use a `img` property in data object to create a custom radio with image.

```tsx
// ** Demo Components Imports
import CustomRadioImg from 'src/@core/components/mui/radio/CustomRadioImg'


const data = [
  {
    value: 'starter',
    gridProps: { sm: 4, xs: 12 },
    img: '/images/pages/background-3.jpg'
  },
  ...
]

 <CustomRadioImg value='starter' name='custom-radios-img' data={data} />
```
 Result:

<img alt='radio-img' class='medium-zoom' :src="$withBase('/images/components/custom-radio-img.png')" />

## Props

| Prop       | Type       | Required  | Description                                                         |
| :---       | :------    | :-------  | :---------------                                                    |
| name       | `string`   | yes       | name attribute of the radios                                        |
| value      | `string`   | No        | value for the radios                                                |
| onChange   | `function` | No        | function to get value of radio on change                            |
| data       | `data[]`   | yes       | Array of object to create radios. Refer below table for explanation |

## Data for basic radios

| Prop             | Type                    | Required  | Description                      |
| :---             | :------                 | :-------  | :---------------                 |
| value            | `string`                | yes       | value of radio                   |
| gridProps        | `object`                | yes       | Grid Component props             |
| meta             | `string` or `ReactNode` | No        | Meta that shows on top-right     |
| title            | `string` or `ReactNode` | yes       | Title of radios                  |
| content          | `string` or `ReactNode` | no        | Content of radios                |
| radioProps       | `object`                | no        | Radio component Props            |
| formControlLabel | `object`                | no        | FormControlLabel component props |

## Data for radios with icons

| Prop             | Type                   | Required  | Description                      |
| :---             | :------                | :-------  | :---------------                 |
| value            | `string`               | yes       | value of radio                   |
| gridProps        | `object`               | yes       | Grid Component props             |
| icon             | `string` or `ReactNode` | yes      | Radio Icon                       |
| title            | `string` or `ReactNode` | yes      | Title of radios                  |
| content          | `string` or `ReactNode` | no       | Content of radios                |
| radioProps       | `object`               | no        | Radio component Props            |
| formControlLabel | `object`               | no        | FormControlLabel component props |

## Data for radios with images

| Prop             | Type                    | Required  | Description                      |
| :---             | :------                 | :-------  | :---------------                 |
| value            | `string`                | yes       | value of radio                   |
| gridProps        | `object`                | yes       | Grid Component props             |
| img              | `string` or `ReactNode` | yes       | Radio Image                      |
| radioProps       | `object`                | no        | Radio component Props            |
| formControlLabel | `object`                | no        | FormControlLabel component props |
