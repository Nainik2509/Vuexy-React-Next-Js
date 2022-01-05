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
}

const themeConfig: ThemeConfig = {
  templateName: 'Master' /* App Name */,
  skin: 'default' /* default | bordered | semi-dark */,
  mode: 'light' /* light | dark */,
  direction: 'ltr' /* ltr | rtl */,
  routingLoader: true /* true | false */,
  routerTransition: 'none' /* fadeIn | zoomIn | fadeInLeft | none */,
  disableRipple: false /* true | false */,
  navCollapsed: false /* true | false */,
  navHidden: false /* true | false */,
  layout: 'vertical' /* vertical | horizontal */,
  verticalNavToggleType: 'accordion' /* accordion | collapse, */,
  menuTextTruncate: true /* true | false */,
  navigationSize: 260 /* Number in PX(Pixels) */,
  collapsedNavigationSize: 69 /* Number in PX(Pixels) */,
  contentWidth: 'boxed' /* full | boxed */,
  appBar: 'fixed' /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
  footer: 'static' /* fixed | static | hidden */,
  disableCustomizer: false /* true | false */,
  responsiveFontSizes: true /* true | false */,
  horizontalMenuToggle: 'hover' /* click | hover */,
  navSubItemIcon: CircleOutline /* Icon Element */,
  appBarHeight: 64 /* Number in PX(Pixels) [recommended height is 50px or greater] */
}

export default themeConfig
