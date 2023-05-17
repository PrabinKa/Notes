import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";

import { Colors } from "../constants/Colors";
import ImageButton from "./ImageButton";

const Header = ({title, firstIcon, secondIcon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerMainContainer}>
        <ImageButton image={require("../assets/menu.png")} />
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <ImageButton image={require("../assets/delete.png")} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 8,
    backgroundColor: Colors.main,
    marginTop: StatusBar.currentHeight,
  },
  innerMainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: Colors.accent,
    fontSize: 18,
    fontWeight: "600",
  },
});
