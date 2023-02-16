import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/features/restaurants/infrastructure/theme";
import { useFonts as uselato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as uesoswal, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/features/restaurants/infrastructure/navigation";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {

  let [laotoLoaded] = uselato({
    Lato_400Regular
  });

  let [oswaldLoaded] = uesoswal({
    Oswald_400Regular
  });

  if (!laotoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

