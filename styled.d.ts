// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      primary: string
      secondary: string
      tertiary: string
      dark: string
      light: string
    }
  }
}
