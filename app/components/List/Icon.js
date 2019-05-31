import React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import styles from "./styles";

const Icon = ({ checkmark, visible, iconBackground }) => {
  const iconStyles = [
    styles.icon,
    visible ? styles.iconVisible : {},
    iconBackground ? { backgroundColor: iconBackground } : {}
  ];
  return (
    <View style={iconStyles}>
      {checkmark && (
        <Image
          resizeMode="contain"
          source={require("./images/check.png")}
          style={styles.checkIcon}
        />
      )}
    </View>
  );
};

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
  iconBackground: PropTypes.string
};

export default Icon;
