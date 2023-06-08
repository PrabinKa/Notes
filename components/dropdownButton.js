import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { Colors } from "../constants/Colors";

function DropdownButton({children, onPress, selectedCategory}) {

  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed} >
    <View style={styles.buttonContainer}>
      <Text style={styles.category} >{ selectedCategory ? selectedCategory : children}</Text>
      <Image source={require("../assets/dropdown.png")} style={styles.image} />
    </View>
    </Pressable>
  );
}

export default DropdownButton;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 8,
    paddingHorizontal: 8,
    height: 30,
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  image: {
    height: 25,
    width: 25,
    tintColor: Colors.accent,
  },
  category: {
    color: Colors.accent,
    fontWeight: "600"
  },
  pressed: {
    opacity: 0.3
  }
});
