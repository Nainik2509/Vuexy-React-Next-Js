# Theme Configurations

## Overview

To configure your template, we will be using `/src/configs/themeConfig.ts` file, which has all the template configurations listed with their valid values. Just change the configurations as per your requirement and you are done.

If you are looking to match up one of our demo then please read [demo configs](/guide/development/demo-config.html) doc.
## Properties

Following are the properties with their values that we have used in the theme:

```tsx
const themeConfig = {
  templateName: 'Master',
  layout: 'vertical',
  mode: 'light',
  direction: 'ltr',
  skin: 'default',
  contentWidth: 'boxed',
  footer: 'static',
  routingLoader: true,
  navHidden: false,
  menuTextTruncate: true,
  navSubItemIcon: CircleOutline,
  verticalNavToggleType: 'accordion',
  navCollapsed: false,
  navigationSize: 260,
  collapsedNavigationSize: 69,
  horizontalMenuToggle: 'hover',
  appBar: 'fixed',
  responsiveFontSizes: true,
  disableRipple: false,
  disableCustomizer: false,
  toastPosition: 'top-right'
}
```

## Property Options

Following is the table of all the properties and their possible values that are available in the theme configurations:

| Properties    | Values                                   | Description                                           |
| ------------- | ---------------------------------------- | ----------------------------------------------------- |
| templateName  | `string`                                 | Name of the template, project or company              |
| layout        | `'vertical'`, `'horizontal'`             | Set Vertical or Horizontal layout for the template    |
| mode          | `'light'`, `'dark'`                      | Set Light or Dark mode for the template               |
| direction     | `'ltr'`, `'rtl'`                         | Content direction                                     |
| skin          | `'default'`, `'bordered'`, `'semi-dark'` | Change template skin                                  |
| contentWidth  | `'full'`, `'boxed'`                      | Full or container width of AppBar, Content and Footer |
| footer        | `'fixed'`, `'static'`, `'hidden'`        | Change footer position                                |
| routingLoader | `true`, `false`                          | Loader on top of the app on route change              |
| navHidden | `true`, `false` | If `true`, the navigation menu is hidden |
| menuTextTruncate | `true`, `false` | If `true`, text truncate in the navigation menu is enabled |
| navSubItemIcon | `ReactNode` | Change icon element for the sub menus in the navigation menu |
| verticalNavToggleType | `'accordion'`, `'collapse'` | Set behavior of menu group in the vertical navigation menu |
| navCollapsed | `true`, `false` | If `true`, the vertical navigation menu is collapsed |
| navigationSize | `number` | Width of navigation menu when menu is not collapsed |
| collapsedNavigationSize | `number` | Width of navigation menu when menu is collapsed |
| horizontalMenuToggle | `'click'`, `'hover'` | Set behavior of menu group in the horizontal navigation menu |
| appBar | `'fixed'`, `'static'`, `'hidden'` | Change appBar position |
| responsiveFontSizes | `true`, `false` | If `true`, responsive font sizes are enabled |
| disableRipple | `true`, `false` | If `true`, the Ripple effect is disabled |
| disableCustomizer | `true`, `false` | If `true`, customizer is disabled as right sidebar to configure in live app |
| toastPosition | `'top-left'`, `'top-center'`, `'top-right'`, `'bottom-left'`, `'bottom-center'`, `'bottom-right'` | Set default toast position in the template |
