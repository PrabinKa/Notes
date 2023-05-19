import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

import { Colors } from "../constants/Colors";
import { DummyData } from "../constants/DummyData";

import Header from "../components/Header";
import ImageButton from "../components/ImageButton";
import Search from "../components/Search";
import NotesContainer from "../components/NotesContainer";

function DisplayNotesScreen() {
  return (
    <View style={styles.container}>
      <Header title={"Notes App"} />
      <View style={styles.outerFilterContainer}>
        <Search />
        <ImageButton
          image={require("../assets/filter.png")}
          overImage={{ tintColor: Colors.secondary }}
          marginStyle={{ marginHorizontal: 8 }}
        />
      </View>
        <FlatList
          data={DummyData}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.noteContainer}
          renderItem={(item, index) => {
            const itemData = item.item;
            return (
                <NotesContainer data={itemData} />
            );
          }}
        />
    </View>
  );
}

export default DisplayNotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notesList: {
    backgroundColor: "red",
  },
  noteContainer: {
    backgroundColor:  Colors.accent,
  }
});
