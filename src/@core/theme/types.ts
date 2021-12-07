declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      main: string
      semiDark: string
      darkColor: string
    }
  }
  interface PaletteOptions {
    customColors?: {
      main?: string
      semiDark?: string
      darkColor?: string
    }
  }
}

export {}