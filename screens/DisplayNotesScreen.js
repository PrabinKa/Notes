import { View, Text, StyleSheet, FlatList } from "react-native";

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
      <View>
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
          renderItem={(item, index) => {
            const itemData = item.item;
            return (
              <NotesContainer data={itemData} />
            );
          }}
        />
      </View>
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
});
