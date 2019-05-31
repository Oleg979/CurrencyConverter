import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require("./images/icon.png")}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string
};

export default ClearButton;
