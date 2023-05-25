import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";

import { Colors } from "../constants/Colors";
import { DummyData } from "../constants/DummyData";

import Header from "../components/Header";
import ImageButton from "../components/ImageButton";
import Search from "../components/Search";
import NotesContainer from "../components/NotesContainer";

function DisplayNotesScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        title={"Notes App"}
        firstIcon={require("../assets/menu.png")}
        secondIcon={require("../assets/delete.png")}
      />
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
          return <NotesContainer data={itemData} />;
        }}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={() => navigation.navigate('NewNote')} >
          <Image source={require("../assets/plus.png")} style={styles.image} />
        </Pressable>
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
    backgroundColor: Colors.accent,
    alignItems: "center",
    justifyContent: "space-between",
  },
  notesList: {
    backgroundColor: "red",
  },
  noteContainer: {
    backgroundColor: Colors.accent,
  },
  image: {
    height: 30,
    width: 30,
    tintColor: Colors.accent,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 50,
    width: 50,
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 8
  },
  pressed: {
    opacity: 0.2,
  },
});
