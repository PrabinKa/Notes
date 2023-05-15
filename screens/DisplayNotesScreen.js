import { View, Text, StyleSheet } from "react-native";

import Header from "../components/Header";
import { Colors } from "../constants/Colors";

function DisplayNotesScreen() {
  return (
    <View style={styles.container}>
      <Header title={"Notes App"} />
        <View>
        <View style={styles.searchBoxOuterContainer}>

</View>
<View style={styles.noteListContainer}></View>
        </View>
    </View>
  );
}

export default DisplayNotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.accent
  },
  searchBoxOuterContainer: {
    height: 70,
    width: "100%",
  },
  noteListContainer: {
    flex: 1,
  }
});
