import { Image, Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const NextToNewNote = ({ onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Image source={require("../assets/plus.png")} style={styles.image} />
    </Pressable>
  );
};

export default NextToNewNote;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.2,
  },
  image: {
    height: 30,
    width: 30,
    tintColor: Colors.accent,
  },
});
