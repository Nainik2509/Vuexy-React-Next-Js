# Checkbox

## Overview

We have made the custom checkbox components for you to make it easy for you and you don't have to waste your precious time.

Please visit [MUI Checkbox Docs](https://mui.com/material-ui/react-checkbox/) for a proper explanation of the `Checkbox` component.

## Basic Custom Checkbox

<br />
<img alt='checkbox-basic' class='medium-zoom' :src="$withBase('/images/components/custom-checkbox-basic.png')" />

Usage:

<code-group>
<code-block title="TSX" active>
```tsx
import { CustomCheckboxBasicData } from 'src/@core/components/custom-checkbox/types'
import CustomCheckboxBasic from 'src/@core/components/custom-checkbox/basic'

const data: CustomCheckboxBasicData[] = [
  {
    meta: '20%',
    value: 'discount',
    title: 'Discount',
    gridProps: { sm: 6, xs: 12 },
    content: 'Wow! Get 20% off on your next purchase!'
  },
  {
    meta: 'Free',
    value: 'updates',
    title: 'Updates',
    gridProps: { sm: 6, xs: 12 },
    content: 'Get Updates regarding related products.'
  }
]

const Component = () => {
  return <CustomCheckboxBasic data={data} value={['discount']} name='custom-checkbox-basic' />
}

export default Component
```
</code-block>

<code-block title="JSX">
```jsx
import CustomCheckboxBasic from 'src/@core/components/custom-checkbox/basic'

const data = [
  {
    meta: '20%',
    value: 'discount',
    title: 'Discount',
    gridProps: { sm: 6, xs: 12 },
    content: 'Wow! Get 20% off on your next purchase!'
  },
  {
    meta: 'Free',
    value: 'updates',
    title: 'Updates',
    gridProps: { sm: 6, xs: 12 },
    content: 'Get Updates regarding related products.'
  }
]

const Component = () => {
  return <CustomCheckboxBasic data={data} value={['discount']} name='custom-checkbox-basic' />
}

export default Component
```
</code-block>
</code-group>

### Props

| Prop       | Type                                                          | Required | Description                              |
| :--------- | :------------------------------------------------------------ | :------- | :--------------------------------------- |
| name       | `string`                                                      | Yes      | Name attribute of the checkbox group     |
| data       | `CustomCheckboxBasicData[]`                                   | Yes      | Array of object to create checkboxes     |
| value      | `string[]`                                                    | No       | To select the default checkboxes         |
| color      | `primary`, `secondary`, `error`, `warning`, `info`, `success` | No       | Color of the selected checkboxes         |
| onChange   | `(value: string | null) => void`                              | No       | Run a function when an option is changed |

#### The type of `CustomCheckboxBasicData` is as follows:

| Property   | Type                                                          | Required | Description                                |
| :--------- | :------------------------------------------------------------ | :------- | :----------------------------------------- |
| value      | `string`                                                      | Yes      | Value to identify a particular checkbox    |
| title      | `ReactNode`                                                   | Yes      | Title for the checkbox component           |
| gridProps  | `GridProps`                                                   | Yes      | Add props of the MUI's `Grid` component    |
| meta       | `ReactNode`                                                   | No       | Add content to the right side of the title |
| content    | `ReactNode`                                                   | No       | Add content below the title                |
| name       | `string`                                                      | No       | Name attribute for a particular checkbox   |

## Custom Checkbox with Icons

<br />
<img alt='checkbox-icons' class='medium-zoom' :src="$withBase('/images/components/custom-checkbox-icons.png')" />

Usage:

<code-group>
<code-block title="TSX" active>
```tsx
import Server from 'mdi-material-ui/Server'
import LockOutline from 'mdi-material-ui/LockOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'
import { CustomCheckboxIconsData } from 'src/@core/components/custom-checkbox/types'
import CustomCheckboxIcons from 'src/@core/components/custom-checkbox/icons'

const data: CustomCheckboxIconsData[] = [
  {
    value: 'backup',
    title: 'Backup',
    gridProps: { sm: 4, xs: 12 },
    content: 'Backup every file from your project.',
    icon: <Server sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'encrypt',
    title: 'Encrypt',
    gridProps: { sm: 4, xs: 12 },
    content: 'Translate your data to encrypted text.',
    icon: <ShieldOutline sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'site-lock',
    title: 'Site Lock',
    gridProps: { sm: 4, xs: 12 },
    content: 'Security tool to protect your website.',
    icon: <LockOutline sx={{ mb: 2, fontSize: '2rem' }} />
  }
]

const Component = () => {
  return <CustomCheckboxIcons data={data} value={['backup']} name='custom-checkbox-icons' />
}

export default Component
```
</code-block>

<code-block title="JSX">
```jsx
import Server from 'mdi-material-ui/Server'
import LockOutline from 'mdi-material-ui/LockOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'
import CustomCheckboxIcons from 'src/@core/components/custom-checkbox/icons'

const data = [
  {
    value: 'backup',
    title: 'Backup',
    gridProps: { sm: 4, xs: 12 },
    content: 'Backup every file from your project.',
    icon: <Server sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'encrypt',
    title: 'Encrypt',
    gridProps: { sm: 4, xs: 12 },
    content: 'Translate your data to encrypted text.',
    icon: <ShieldOutline sx={{ mb: 2, fontSize: '2rem' }} />
  },
  {
    value: 'site-lock',
    title: 'Site Lock',
    gridProps: { sm: 4, xs: 12 },
    content: 'Security tool to protect your website.',
    icon: <LockOutline sx={{ mb: 2, fontSize: '2rem' }} />
  }
]

const Component = () => {
  return <CustomCheckboxIcons data={data} value={['backup']} name='custom-checkbox-icons' />
}

export default Component
```
</code-block>
</code-group>

### Props

| Prop       | Type                                                          | Required | Description                              |
| :--------- | :------------------------------------------------------------ | :------- | :--------------------------------------- |
| name       | `string`                                                      | Yes      | Name attribute of the checkbox group     |
| data       | `CustomCheckboxIconsData[]`                                   | Yes      | Array of object to create checkboxes     |
| value      | `string[]`                                                    | No       | To select the default checkboxes         |
| color      | `primary`, `secondary`, `error`, `warning`, `info`, `success` | No       | Color of the selected checkboxes         |
| onChange   | `(value: string | null) => void`                              | No       | Run a function when an option is changed |

#### The type of `CustomCheckboxIconsData` is as follows:

| Property   | Type                                                          | Required | Description                                |
| :--------- | :------------------------------------------------------------ | :------- | :----------------------------------------- |
| value      | `string`                                                      | Yes      | Value to identify a particular checkbox    |
| title      | `ReactNode`                                                   | Yes      | Title for the checkbox component           |
| icon       | `ReactNode`                                                   | Yes      | Icon for the checkbox component            |
| gridProps  | `GridProps`                                                   | Yes      | Add props of the MUI's `Grid` component    |
| content    | `ReactNode`                                                   | No       | Add content below the title                |
| name       | `string`                                                      | No       | Name attribute for a particular checkbox   |

## Custom Checkbox with Images

<br />
<img alt='checkbox-img' class='medium-zoom' :src="$withBase('/images/components/custom-checkbox-img.png')" />

Usage:

<code-group>
<code-block title="TSX" active>
```tsx
import { CustomCheckboxImgData } from 'src/@core/components/custom-checkbox/types'
import CustomCheckboxImg from 'src/@core/components/custom-checkbox/image'

const data: CustomCheckboxImgData[] = [
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
  return <CustomCheckboxImg data={data} value={['starter']} name='custom-checkbox-img' />
}

export default Component
```
</code-block>

<code-block title="JSX">
```jsx
import CustomCheckboxImg from 'src/@core/components/custom-checkbox/image'

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
  return <CustomCheckboxImg data={data} value={['starter']} name='custom-checkbox-img' />
}

export default Component
```
</code-block>
</code-group>

### Props

| Prop       | Type                                                          | Required | Description                              |
| :--------- | :------------------------------------------------------------ | :------- | :--------------------------------------- |
| name       | `string`                                                      | Yes      | Name attribute of the checkbox group     |
| data       | `CustomCheckboxImgData[]`                                     | Yes      | Array of object to create checkboxes     |
| value      | `string[]`                                                    | No       | To select the default checkboxes         |
| color      | `primary`, `secondary`, `error`, `warning`, `info`, `success` | No       | Color of the selected checkboxes         |
| onChange   | `(value: string | null) => void`                              | No       | Run a function when an option is changed |

#### The type of `CustomCheckboxImgData` is as follows:

| Property   | Type                                                          | Required | Description                                |
| :--------- | :------------------------------------------------------------ | :------- | :----------------------------------------- |
| value      | `string`                                                      | Yes      | Value to identify a particular checkbox    |
| img        | `ReactNode`                                                   | Yes      | Image for the checkbox component           |
| gridProps  | `GridProps`                                                   | Yes      | Add props of the MUI's `Grid` component    |
| alt        | `string`                                                      | No       | Alternate text for the image               |
| name       | `string`                                                      | No       | Name attribute for a particular checkbox   |
