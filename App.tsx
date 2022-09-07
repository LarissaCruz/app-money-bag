import React from "react";
//costom font
//import AppLoadding from "expo-app-loading";
import { useFonts } from "expo-font";

import Welcome from "./src/screens/Welcome";
import RootStack from "./src/navigatiors/RootStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./src/assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./src/assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <RootStack />;
}
