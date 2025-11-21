import { DefaultTheme as PaperDarkTheme } from 'react-native-paper';

export const THEMES = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    background: '#0D0D0D',
    surface: '#1A1A1A',
    primary: '#00A8E8',
    text: '#FFFFFF',
    muted: '#999999',
    card: '#121212',
    delete: '#ff4d4d',
  },
} as const;

type Theme = typeof THEMES;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}

export type ThemeColors = keyof typeof THEMES.colors;

export default THEMES;
