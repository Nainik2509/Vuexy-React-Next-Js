---
sidebarDepth: 0
---

# React Datepicker

## Overview

You may visit [React Datepicker Docs](https://reactdatepicker.com/) for a proper explanation of how to use it.

::: tip
Wherever you use a Datepicker component, you need to import its styles from the plugin: `import 'react-datepicker/dist/react-datepicker.css'`
:::

## Usage

### General Usage

```tsx
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

<DatePicker
  {...} // all props
/>
```

### With Portal Usage

We have created a portal for any datepicker component which is to be rendered outside the content area but inside the DOM.

::: tip
If you are using datepicker component near the footer (near the bottom of any page), then you need to open those datepicker components in the portal that we have created; otherwise, the datepicker will open behind the footer.
:::

You just need to add the `portalId='react-datepicker-portal'` prop with your `DatePicker` component to open it in the portal.

```tsx
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

<DatePicker
  {...} // other props
  portalId='react-datepicker-portal'
/>
```
