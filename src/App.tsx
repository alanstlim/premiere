import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import AppNavigator from './navigation';
import { THEMES } from './theme';

export default function App() {
  return (
    <PaperProvider theme={THEMES}>
      <ThemeProvider theme={THEMES}>
        <AppNavigator />
      </ThemeProvider>
    </PaperProvider>
  );
}
