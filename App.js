import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import { UsersProvider } from './src/context/UsersContext';
import { CurrentUserProvider } from './src/context/CurrentUserContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <UsersProvider>
        <CurrentUserProvider>
        <AppNavigator />
      </CurrentUserProvider>
      </UsersProvider>
    </ThemeProvider>
  );
}
