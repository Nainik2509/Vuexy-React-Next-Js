---
sidebarDepth: 0
---

# React Datepicker

## Overview

You may visit [React Datepicker Docs](https://reactdatepicker.com/) for a proper explanation of how to use it.

We have created a portal for any datepicker component which is to be rendered outside the content area but inside the DOM.

::: tip
If you are using datepicker component near the footer (near the bottom of any page), then you need to open those datepicker components in the portal that we have created; otherwise, the datepicker will open behind the footer.
:::

## Usage

You just need to add the `portalId='react-datepicker-portal'` prop with your `DatePicker` component to open it in the portal.

```tsx
import DatePicker from 'react-datepicker'

<DatePicker
  {...} // other props
  portalId='react-datepicker-portal'
/>
```
