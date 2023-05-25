import { View, Image, TextInput, StyleSheet } from "react-native";

import { Colors } from "../constants/Colors";

function Search() {
  return (
    <View style={styles.searchBoxOuterContainer}>
      <Image source={require("../assets/search.png")} style={styles.image} />
      <TextInput
        placeholder="Search..."
        style={styles.input}
        selectionColor={Colors.secondary}
      />
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  searchBoxOuterContainer: {
    margin: 8,
    padding: 8,
    height: 50,
    width: "70%",
    backgroundColor: Colors.accent,
    borderColor: Colors.secondary,
    borderWidth: 2,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "90%",
    padding: 5,
    fontSize: 15,
  },
  image: {
    height: 30,
    width: 30,
    tintColor: Colors.secondary,
  },
});
