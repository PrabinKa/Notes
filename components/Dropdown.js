import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

export default function Dropdown({ onPress, data }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.dropdownListContainer}>
        <Text style={styles.dropdownText}>{data.list}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dropdownListContainer: {
    height: 30,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownText: {
    color: Colors.accent,
    fontWeight: "700",
    fontSize: 12,
  },
  pressed: {
    opacity: 0.5,
  },
});
