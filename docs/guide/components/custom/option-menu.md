# Option Menu

## Overview

Use this component to add an [`IconButton`](https://mui.com/material-ui/react-button/#icon-button) which opens a [menu/dropdown](https://mui.com/material-ui/react-menu/). You can use it anywhere in your project.

## Usage

```tsx
import Typography from '@mui/material/Typography'
import Send from 'mdi-material-ui/Send'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import OptionMenu from 'src/@core/components/option-menu'

const SomeComponent = () => {
  return (
    <OptionMenu
      rightAlignMenu
      icon={<ChevronDown />}
      iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
      options={[
        { text: <Typography>Send</Typography>, icon: <Send sx={{ mr: 2, color: 'text.secondary' }} /> },
        { text: 'Styled Item', menuItemProps: { sx: { color: 'error.main' } } },
        { text: 'Item with Object' },
        { text: 'Selected Menu', menuItemProps: { selected: true } },
        'Item with String',
        { text: 'Disabled Menu', menuItemProps: { disabled: true } }
      ]}
    />
  )
}

export default SomeComponent
```

Result:

<img alt='option-menu' class='medium-zoom' :src="$withBase('/images/components/custom-option-menu.png')" />

## Props

| Props           | Type              | Required | Description                                   |
| :-------------- | :---------------- | :------- | :-------------------------------------------- |
| options         | `OptionType[]`    | Yes      | Add all the menu items                        |
| icon            | `ReactNode`       | No       | Change the icon in the `IconButton` component |
| menuProps       | `MenuProps`       | No       | Add props of the `Menu` component             |
| rightAlignMenu  | `boolean`         | No       | If `true`, menu will align to right side      |
| iconButtonProps | `IconButtonProps` | No       | Add props of the `IconButtonProps` component  |

```ts
export type OptionType =
  | string
  | {
      icon?: ReactNode
      text: string | ReactNode
      menuItemProps?: MenuItemProps
    }
```
