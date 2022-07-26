# Radio

## Overview

We have made the custom radio components for you to make it easy for you and you don't have to waste your precious time.

Please visit [MUI Radio Docs](https://mui.com/material-ui/react-radio-button/) for a proper explanation of the `Radio` component.

## Basic Custom Radio

<br />
<img alt='radio-basic' class='medium-zoom' :src="$withBase('/images/components/custom-radio-basic.png')" />

Usage:

<code-group>
<code-block title="TSX" active>
```tsx
import { CustomRadioBasicData } from 'src/@core/components/custom-radio/types'
import CustomRadioBasic from 'src/@core/components/custom-radio/basic'

const data: CustomRadioBasicData[] = [
  {
    meta: 'Free',
    title: 'Basic',
    value: 'basic',
    gridProps: { sm: 6, xs: 12 },
    content: 'Get 1 project with 1 team member.'
  },
  {
    meta: '$5.00',
    title: 'Premium',
    value: 'premium',
    gridProps: { sm: 6, xs: 12 },
    content: 'Get 5 projects with 5 team members.'
  }
]

const Component = () => {
  return <CustomRadioBasic data={data} value='basic' name='custom-radios-basic' />
}

export default Component
```
</code-block>

<code-block title="JSX">
```jsx
import CustomRadioBasic from 'src/@core/components/custom-radio/basic'

const data = [
  {
    meta: 'Free',
    title: 'Basic',
    value: 'basic',
    gridProps: { sm: 6, xs: 12 },
    content: 'Get 1 project with 1 team member.'
  },
  {
    meta: '$5.00',
    title: 'Premium',
    value: 'premium',
    gridProps: { sm: 6, xs: 12 },
    content: 'Get 5 projects with 5 team members.'
  }
]

const Component = () => {
  return <CustomRadioBasic data={data} value='basic' name='custom-radios-basic' />
}

export default Component
```
</code-block>
</code-group>

### Props

| Prop       | Type                                                          | Required | Description                              |
| :--------- | :------------------------------------------------------------ | :------- | :--------------------------------------- |
| name       | `string`                                                      | Yes      | Name attribute of the radio group        |
| data       | `CustomRadioBasicData[]`                                      | Yes      | Array of object to create radios         |
| value      | `string`                                                      | No       | To select a default radio                |
| color      | `primary`, `secondary`, `error`, `warning`, `info`, `success` | No       | Color of the selected radio              |
| onChange   | `(value: string | null) => void`                              | No       | Run a function when an option is changed |

#### The type of `CustomRadioBasicData` is as follows:

| Property   | Type                                                          | Required | Description                                |
| :--------- | :------------------------------------------------------------ | :------- | :----------------------------------------- |
| value      | `string`                                                      | Yes      | Value to identify a particular radio       |
| title      | `ReactNode`                                                   | Yes      | Title for the radio component              |
| gridProps  | `GridProps`                                                   | Yes      | Add props of the MUI's `Grid` component    |
| meta       | `ReactNode`                                                   | No       | Add content to the right side of the title |
| content    | `ReactNode`                                                   | No       | Add content below the title                |

## Custom Radio with Icons

<br />
<img alt='radio-icons' class='medium-zoom' :src="$withBase('/images/components/custom-radio-icons.png')" />

Usage:

<code-group>
<code-block title="TSX" active>
```tsx
import CrownOutline from 'mdi-material-ui/CrownOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import RocketLaunchOutline from 'mdi-material-ui/RocketLaunchOutline'
import { CustomRadioIconsData } from 'src/@core/components/custom-radio/types'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

const data: CustomRadioIconsData[] = [
  {
    value: 'starter',
    title: 'Starter',
    gridProps: { sm: 4, xs: 12 },
    content: 'A simple start for everyone.',
    icon: <RocketLaunchOutline sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'standard',
    title: 'Standard',
    gridProps: { sm: 4, xs: 12 },
    content: 'For small to medium businesses.',
    icon: <AccountOutline sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    gridProps: { sm: 4, xs: 12 },
    content: 'Solution for big organizations.',
    icon: <CrownOutline sx={{ mb: 2, fontSize: '2rem' }} />
  }
]

const Component = () => {
  return <CustomRadioIcons data={data} value='starter' name='custom-radios-icons' />
}

export default Component
```
</code-block>

<code-block title="JSX">
```jsx
import CrownOutline from 'mdi-material-ui/CrownOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import RocketLaunchOutline from 'mdi-material-ui/RocketLaunchOutline'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

const data = [
  {
    value: 'starter',
    title: 'Starter',
    gridProps: { sm: 4, xs: 12 },
    content: 'A simple start for everyone.',
    icon: <RocketLaunchOutline sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'standard',
    title: 'Standard',
    gridProps: { sm: 4, xs: 12 },
    content: 'For small to medium businesses.',
    icon: <AccountOutline sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    gridProps: { sm: 4, xs: 12 },
    content: 'Solution for big organizations.',
    icon: <CrownOutline sx={{ mb: 2, fontSize: '2rem' }} />
  }
]

const Component = () => {
  return <CustomRadioIcons data={data} value='starter' name='custom-radios-icons' />
}

export default Component
```
</code-block>
</code-group>

### Props

| Prop       | Type                                                          | Required | Description                              |
| :--------- | :------------------------------------------------------------ | :------- | :--------------------------------------- |
| name       | `string`                                                      | Yes      | Name attribute of the radio group        |
| data       | `CustomRadioIconsData[]`                                      | Yes      | Array of object to create radios         |
| value      | `string`                                                      | No       | To select a default radio                |
| color      | `primary`, `secondary`, `error`, `warning`, `info`, `success` | No       | Color of the selected radio              |
| onChange   | `(value: string | null) => void`                              | No       | Run a function when an option is changed |

#### The type of `CustomRadioIconsData` is as follows:

| Property   | Type                                                          | Required | Description                             |
| :--------- | :------------------------------------------------------------ | :------- | :-------------------------------------- |
| value      | `string`                                                      | Yes      | Value to identify a particular radio    |
| title      | `ReactNode`                                                   | Yes      | Title for the radio component           |
| icon       | `ReactNode`                                                   | Yes      | Icon for the radio component            |
| gridProps  | `GridProps`                                                   | Yes      | Add props of the MUI's `Grid` component |
| content    | `ReactNode`                                                   | No       | Add content below the title             |

## Custom Radio with Images

<br />
<img alt='radio-img' class='medium-zoom' :src="$withBase('/images/components/custom-radio-img.png')" />

Usage:

<code-group>
<code-block title="TSX" active>
```tsx
import { CustomRadioImgData } from 'src/@core/components/custom-radio/types'
import CustomRadioImg from 'src/@core/components/custom-radio/image'

const data: CustomRadioImgData[] = [
  {
    img: '...',
    value: 'clock',
    gridProps: { sm: 4, xs: 12 }
  },
  {
    img: '...',
    value: 'donut',
    gridProps: { sm: 4, xs: 12 }
  },
  {
    img: '...',
    value: 'flower-vase',
    gridProps: { sm: 4, xs: 12 }
  }
]

const Component = () => {
  return <CustomRadioImg data={data} value='clock' name='custom-radios-img' />
}

export default Component
```
</code-block>

<code-block title="JSX">
```jsx
import CustomRadioImg from 'src/@core/components/custom-radio/image'

const data = [
  {
    img: '...',
    value: 'clock',
    gridProps: { sm: 4, xs: 12 }
  },
  {
    img: '...',
    value: 'donut',
    gridProps: { sm: 4, xs: 12 }
  },
  {
    img: '...',
    value: 'flower-vase',
    gridProps: { sm: 4, xs: 12 }
  }
]

const Component = () => {
  return <CustomRadioImg data={data} value='clock' name='custom-radios-img' />
}

export default Component
```
</code-block>
</code-group>

### Props

| Prop       | Type                                                          | Required | Description                              |
| :--------- | :------------------------------------------------------------ | :------- | :--------------------------------------- |
| name       | `string`                                                      | Yes      | Name attribute of the radio group        |
| data       | `CustomRadioImgData[]`                                        | Yes      | Array of object to create radios         |
| value      | `string`                                                      | No       | To select a default radio                |
| color      | `primary`, `secondary`, `error`, `warning`, `info`, `success` | No       | Color of the selected radio              |
| onChange   | `(value: string | null) => void`                              | No       | Run a function when an option is changed |

#### The type of `CustomRadioImgData` is as follows:

| Property   | Type                                                          | Required | Description                             |
| :--------- | :------------------------------------------------------------ | :------- | :-------------------------------------- |
| value      | `string`                                                      | Yes      | Value to identify a particular radio    |
| img        | `ReactNode`                                                   | Yes      | Image for the radio component           |
| gridProps  | `GridProps`                                                   | Yes      | Add props of the MUI's `Grid` component |
| alt        | `string`                                                      | No       | Alternate text for the image            |
