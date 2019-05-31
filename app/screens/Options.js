import React, { Component } from "react";
import { ScrollView, StatusBar, Platform, Linking, Alert } from "react-native";
import { ListItem, Separator } from "../components/List";
import { Ionicons } from "@expo/vector-icons";
import { connectAlert } from "../components/Alert";

const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";
const ICON_SIZE = 23;
const ICON_COLOR = "#868686";

class Options extends Component {
  handleThemesPress = () => {
    console.log("themes pressed");
    this.props.navigation.navigate("Themes");
  };
  handleFixerPress = () => {
    console.log("fixed pressed");
    Linking.openURL("https://github.com/Oleg979").catch(() =>
      this.props.alertWithType("error", "Error!", "This page can't be opened.")
    );
  };

  handleAboutPress = () =>
    Alert.alert(
      "About this app",
      "Currency converter is developed by SiltStrider. For more information visit my GitHub page."
    );

  render() {
    return (
      <ScrollView>
        <StatusBar hidden={true} />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          }
        />
        <Separator />
        <ListItem
          text="Developed by SiltStrider"
          onPress={this.handleFixerPress}
          customIcon={
            <Ionicons name="logo-github" size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator />
        <ListItem
          text="About this app"
          onPress={this.handleAboutPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-document`}
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
