import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight } from "react-native";

import Icon from "./Icon";
import styles from "./styles";
import Separator from "./Separator";

const ListItem = ({
  text,
  selected,
  onPress,
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground
}) => (
  <View>
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected ? (
          <Icon
            checkmark={checkmark}
            visible={visible}
            iconBackground={iconBackground}
          />
        ) : (
          <Icon />
        )}
        {customIcon}
      </View>
    </TouchableHighlight>
  </View>
);

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string
};

export default ListItem;
