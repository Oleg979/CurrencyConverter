import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

const styles = EStyleSheet.create({
  $underlayColor: "$darkText",
  row: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "$white"
  },
  text: {
    fontSize: 16,
    color: "$darkText"
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20,
    backgroundColor: "$border"
  },
  iconVisible: {
    backgroundColor: "$primaryBlue"
  },
  icon: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  checkIcon: {
    width: 18
  }
});

export default styles;
