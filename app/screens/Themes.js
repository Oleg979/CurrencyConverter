import React, { Component } from "react";
import { ScrollView, StatusBar } from "react-native";
import { ListItem, Separator } from "../components/List";
import { connect } from "react-redux";
import { changePrimaryColor } from "../actions/theme";

import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  $blue: "$primaryBlue",
  $orange: "$primaryOrange",
  $green: "$primaryGreen",
  $purple: "$primaryPurple"
});

class Themes extends Component {
  handleThemePress = color => {
    console.log(`press theme: ${color}`);
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack();
  };
  render() {
    return (
      <ScrollView>
        <StatusBar hidden={true} />
        <ListItem
          text="Blue"
          onPress={() => this.handleThemePress(styles.$blue)}
          selected
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handleThemePress(styles.$green)}
          selected
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handleThemePress(styles.$orange)}
          selected
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handleThemePress(styles.$purple)}
          selected
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connect()(Themes);
