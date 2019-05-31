import React from "react";
import Navigator from "./config/routes";
import EStyleSheet from "react-native-extended-stylesheet";
import { AlertProvider } from "./components/Alert";
import { Provider } from "react-redux";
import store from "./config/store";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryGreen: "#00BD9D",
  $primaryOrange: "#D57A66",
  $primaryPurple: "#551A8B",

  $white: "#FFFFFF",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGray: "#F0F0F0",
  $darkText: "#343434"
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator />
    </AlertProvider>
  </Provider>
);
