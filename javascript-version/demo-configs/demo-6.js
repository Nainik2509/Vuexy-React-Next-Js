// ** Icon Import
import CircleOutline from 'mdi-material-ui/CircleOutline'

const themeConfig = {
  // ** Layout Configs
  templateName: 'Master' /* App Name */,
  layout: 'horizontal' /* vertical | horizontal */,
  mode: 'dark' /* light | dark */,
  direction: 'ltr' /* ltr | rtl */,
  skin: 'bordered' /* default | bordered | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
  contentWidth: 'boxed' /* full | boxed */,
  footer: 'static' /* fixed | static | hidden */,
  // ** Routing Configs
  routingLoader: true /* true | false */,
  // ** Navigation (Menu) Configs
  navHidden: false /* true | false */,
  menuTextTruncate: true /* true | false */,
  navSubItemIcon: CircleOutline /* Icon Element */,
  verticalNavToggleType: 'accordion' /* accordion | collapse /*! Note: This is for Vertical navigation menu only */,
  navCollapsed: false /* true | false /*! Note: This is for Vertical navigation menu only */,
  navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  collapsedNavigationSize: 69 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  horizontalMenuToggle: 'hover' /* click | hover /*! Note: This is for Horizontal navigation menu only */,
  // ** AppBar Configs
  appBar: 'fixed' /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */,
  disableCustomizer: false /* true | false */,
  toastPosition: 'top-right' /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */
}

export default themeConfig
