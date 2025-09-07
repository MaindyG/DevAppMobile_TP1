import { ThemeProvider } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import 'react-native-gesture-handler';
import React from 'react';

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator/>
    </ThemeProvider>
  );
}



