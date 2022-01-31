declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      dark: string
      main: string
      light: string
      darkBg: string
      lightBg: string
    }
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string
      main?: string
      light?: string
      darkBg?: string
      lightBg?: string
    }
  }
}

export {}
