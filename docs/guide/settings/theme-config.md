# Theme Configurations

## Overview

To configure your template, we will be using `/src/configs/themeConfig.ts` file, which has all the template configurations listed with their valid values. Just change the configurations as per your requirement and you are done.

## Properties

Following are the properties with their values that we have used in the theme:

```jsx
const themeConfig = {
  templateName: 'Master',
  skin: 'default',
  mode: 'light',
  direction: 'ltr',
  routerTransition: 'fadeIn',
  disableRipple: false,
  navCollapsed: false,
  navHidden: false,
  layout: 'vertical',
  verticalNavToggleType: 'accordion',
  menuTextTruncate: true,
  navigationSize: 260,
  collapsedNavigationSize: 69,
  contentWidth: 'boxed',
  appBar: 'fixed',
  footer: 'static',
  disableCustomizer: false,
  responsiveFontSizes: true,
  horizontalMenuToggle: 'hover',
  navSubItemIcon: CircleOutline,
  appBarHeight: 64
}
```

## Property Options

Following is the table of all the properties and their possible values that are available in the theme configurations:

| Properties              | Values                                     | Description                                                                 |
| ----------------------- | ------------------------------------------ | --------------------------------------------------------------------------- |
| templateName            | `string`                                   | Name of the template, project or company                                    |
| skin                    | `'default'`, `'bordered'`, `'semi-dark'`   | Change template skin                                                        |
| mode                    | `'light'`, `'dark'`                        | Set Light or Dark mode for the template                                     |
| direction               | `'ltr'`, `'rtl'`                           | Content direction                                                           |
| routerTransition        | `'fadeIn', 'zoomIn', 'fadeInLeft', 'none'` | Router transition                                                           |
| disableRipple           | `true`, `false`                            | If `true`, the Ripple effect is disabled                                    |
| navCollapsed            | `true`, `false`                            | If `true`, the vertical navigation menu is collapsed                        |
| navHidden               | `true`, `false`                            | If `true`, the navigation menu is hidden                                    |
| layout                  | `'vertical'`, `'horizontal'`               | Set Vertical or Horizontal layout for the template                          |
| verticalNavToggleType   | `'accordion'`, `'collapse'`                | Set behavior of menu group in the vertical navigation menu                  |
| menuTextTruncate        | `true`, `false`                            | If `true`, text truncate in the navigation menu is enabled                  |
| navigationSize          | `number`                                   | Width of navigation menu when menu is not collapsed                         |
| collapsedNavigationSize | `number`                                   | Width of navigation menu when menu is collapsed                             |
| contentWidth            | `'full'`, `'boxed'`                        | Full or container width of AppBar, Content and Footer                       |
| appBar                  | `'fixed'`, `'static'`, `'hidden'`          | Change appBar position                                                      |
| footer                  | `'fixed'`, `'static'`, `'hidden'`          | Change footer position                                                      |
| disableCustomizer       | `true`, `false`                            | If `true`, customizer is disabled as right sidebar to configure in live app |
| responsiveFontSizes     | `true`, `false`                            | If `true`, responsive font sizes are enabled                                |
| horizontalMenuToggle    | `'click'`, `'hover'`                       | Set behavior of menu group in the horizontal navigation menu                |
| navSubItemIcon          | `ReactNode`                                | Change icon element for the sub menus in the navigation menu                |
| appBarHeight            | `number`                                   | Height of the AppBar                                                        |
