# Page Specific Settings

## Overview

You can have a specific settings depending on your needs.

## Usage

To change a setting for a specific page use `setConfig` method and return a object with your settings like show below:

```tsx
const AnalyticsDashboard = () => <h1>Analytics Dashboard</h1>

AnalyticsDashboard.setConfig = () => {
  return {
    mode: 'dark'
    ...
  }
}

export default AnalyticsDashboard
```

::: tip Note
Configurations are same as settings you can refer the [Settings Context](/guide/settings/context/) guide for more info.
:::

::: danger Note
Setting `layout` or `rtl` for a specific page will throw a memory leak error.
:::
