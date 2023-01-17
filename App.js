import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/features/restaurants/infrastructure/theme";
import { useFonts as uselato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as uesoswal, Oswald_400Regular } from '@expo-google-fonts/oswald';

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
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

