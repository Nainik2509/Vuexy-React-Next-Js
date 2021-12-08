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
  Layout,
  ContentWidth,
  VerticalNavToggle,
  HorizontalMenuToggle
} from '@core/layouts/types'

type ThemeConfig = {
  skin: Skin
  appBar: AppBar
  footer: Footer
  layout: Layout
  mode: PaletteMode
  direction: Direction
  templateName: string
  templateLogo: string
  navCollapsed: boolean
  disableRipple: boolean
  menuTextTruncate: boolean
  navSubItemIcon: ReactNode
  contentWidth: ContentWidth
  disableCustomizer: boolean
  responsiveFontSizes: boolean
  verticalNavToggleType: VerticalNavToggle
  horizontalMenuToggle: HorizontalMenuToggle
}

const themeConfig: ThemeConfig = {
  templateName: 'Materio' /* App Name */,
  templateLogo: '/logo.svg' /* App Logo */,
  skin: 'default' /* default | bordered | semi-dark */,
  mode: 'light' /* light | dark */,
  direction: 'ltr' /* ltr | rtl */,
  disableRipple: false /* true | false */,
  navCollapsed: false /* true | false */,
  layout: 'vertical' /* vertical | horizontal */,
  verticalNavToggleType: 'accordion' /* accordion | collapse, */,
  menuTextTruncate: true /* true | false */,
  contentWidth: 'boxed' /* full | boxed */,
  appBar: 'fixed' /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
  footer: 'static' /* fixed | static | hidden */,
  disableCustomizer: false /* true | false */,
  responsiveFontSizes: true /* true | false */,
  horizontalMenuToggle: 'hover' /* click | hover */,
  navSubItemIcon: CircleOutline /* Icon Element */
}

export default themeConfig
