import { View, Text, StyleSheet, StatusBar, Pressable } from "react-native";

import { Colors } from "../constants/Colors";
import ImageButton from "./ImageButton";

const Header = ({ title, firstIcon, secondIcon, secondButton, backButton, onPress, selected }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerMainContainer}>
        <ImageButton image={firstIcon} onPress={backButton} />
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        {secondIcon ? (
          <ImageButton image={require("../assets/delete.png")} onPress={onPress} />
        ) : (
          <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress} >
          <Text style={styles.save}>{secondButton}</Text>
          </Pressable>
        )}
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
  save: {
    color: Colors.accent,
    fontSize: 16,
    fontWeight: "700",
    marginHorizontal: 10
  },
  pressed: {
    opacity: 0.3
  }
});
