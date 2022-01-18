// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { PaletteMode, Direction } from '@mui/material'

// ** Icon Import
import CircleOutline from 'mdi-material-ui/CircleOutline'

// ** Types
import {
  Skin,
  AppBar,
  Footer,
  ContentWidth,
  RouterTransitions,
  VerticalNavToggle,
  HorizontalMenuToggle
} from 'src/@core/layouts/types'

type ThemeConfig = {
  skin: Skin
  appBar: AppBar
  footer: Footer
  mode: PaletteMode
  navHidden: boolean
  direction: Direction
  appBarHeight: number
  templateName: string
  navCollapsed: boolean
  routingLoader: boolean
  disableRipple: boolean
  navigationSize: number
  menuTextTruncate: boolean
  navSubItemIcon: ReactNode
  contentWidth: ContentWidth
  disableCustomizer: boolean
  responsiveFontSizes: boolean
  collapsedNavigationSize: number
  layout: 'vertical' | 'horizontal'
  routerTransition: RouterTransitions
  verticalNavToggleType: VerticalNavToggle
  horizontalMenuToggle: HorizontalMenuToggle
  toastPosition: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
}

const themeConfig: ThemeConfig = {
  // ** Layout Configs
  templateName: 'Master' /* App Name */,
  layout: 'vertical' /* vertical | horizontal */,
  mode: 'light' /* light | dark */,
  direction: 'ltr' /* ltr | rtl */,
  skin: 'semi-dark' /* default | bordered | semi-dark */,
  contentWidth: 'boxed' /* full | boxed */,
  footer: 'static' /* fixed | static | hidden */,

  // ** Routing Configs
  routingLoader: true /* true | false */,
  routerTransition: 'fadeIn' /* fadeIn | zoomIn | fadeInLeft | none */,

  // ** Navigation (Menu) Configs
  navHidden: false /* true | false */,
  menuTextTruncate: true /* true | false */,
  navSubItemIcon: CircleOutline /* Icon Element */,
  verticalNavToggleType: 'accordion' /* accordion | collapse, */,
  navCollapsed: false /* true | false */,
  navigationSize: 260 /* Number in PX(Pixels) */,
  collapsedNavigationSize: 69 /* Number in PX(Pixels) */,
  horizontalMenuToggle: 'hover' /* click | hover */,

  // ** AppBar Configs
  appBar: 'fixed' /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
  appBarHeight: 64 /* Number in PX(Pixels) [recommended height is 50px or greater] */,

  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */,
  disableCustomizer: false /* true | false */,
  toastPosition: 'top-center' /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */
}

export default themeConfig
