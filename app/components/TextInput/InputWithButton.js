import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import color from "color";
import styles from "./styles";

const InputWithButton = props => {
  const { onPress, buttonText, editable = true, textColor } = props;
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );
  const buttonStyles = [
    styles.buttonText,
    textColor ? { color: textColor } : {}
  ];
  return (
    <View style={[styles.container, editable ? {} : styles.containerDisabled]}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.buttonContainer}
        underlayColor={underlayColor}
      >
        <Text style={buttonStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};

export default InputWithButton;
