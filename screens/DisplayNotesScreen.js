import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ToastAndroid, Alert } from "react-native";

import { Colors } from "../constants/Colors";

import Header from "../components/Header";
import ImageButton from "../components/ImageButton";
import Search from "../components/Search";
import NotesContainer from "../components/NotesContainer";
import NullNotesContainer from "../components/NullNotesConatiner";
import { setData } from "../components/async-store/AsyncstorageFunction";
import NextToNewNote from "../components/NextToNewNote";

import AsyncStorage from "@react-native-async-storage/async-storage";

function DisplayNotesScreen({ navigation, route }) {
  const [getNoteList, setGetNoteList] = useState("");
  const [selectedNotes, setSelectedNotes] = useState([]);
  const newNoteObject = route.params;

  useEffect(() => {
    getNotes();
  }, [newNoteObject]);

  const getNotes = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("Note");
      if (jsonValue != null) {
        setGetNoteList(JSON.parse(jsonValue));
      }
    } catch (e) {
      Alert.alert("Error", e);
    }
  };

  // const searchNotes = () => {
  //   const result = getNoteList.filter(o => o.info.title.includes(toSearch))
  // };

  const openOldNotes = (note) => {
    navigation.navigate("NewNote", { note: note, isEditing: true });
  };

  const onPressHandler = (data) => {
    if (selectedNotes.length !== 0) {
      longPressHandler(data);
    } else {
      openOldNotes(data);
    }
  };

  const longPressHandler = (data) => {
    if (selectedNotes.includes(data)) {
      const newListItems = selectedNotes.filter(
        (listItem) => listItem.id !== data.id
      );
      return setSelectedNotes([...newListItems]);
    } else {
      setSelectedNotes([...selectedNotes, data]);
    }
  };

  const getSelected = (note) => selectedNotes.includes(note);

  const deleteNotes = async () => {
    if (selectedNotes.length === 0) {
      ToastAndroid.show("Notes are not selected!", ToastAndroid.SHORT);
    } else {
      const jsonValue = await AsyncStorage.getItem("Note");
      const result = JSON.parse(jsonValue).filter(
        ({ id: id1 }) => !selectedNotes.some(({ id: id2 }) => id2 === id1)
      );
      await AsyncStorage.removeItem("Note");
      try {
        const jsonValue = JSON.stringify(result);
        setData(jsonValue);
        setGetNoteList(result);
      } catch (e) {
        Alert.alert("Error", e);
      }
    }
    setSelectedNotes([]);
  };

  return (
    <View style={styles.container}>
      <Header
        title={"Notes App"}
        firstIcon={require("../assets/menu.png")}
        secondIcon={require("../assets/delete.png")}
        onPress={() => deleteNotes()}
        selected={selectedNotes}
      />
      <View style={styles.outerFilterContainer}>
        <Search/>
        <ImageButton
          image={require("../assets/filter.png")}
          overImage={{ tintColor: Colors.secondary }}
          marginStyle={{ marginHorizontal: 8 }}
        />
      </View>
      {getNoteList.length != 0 ? (
        <FlatList
          data={getNoteList}
          keyExtractor={(item, index) => item.id}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.noteContainer}
          renderItem={(item, index) => {
            const itemData = item.item;
            return (
              <NotesContainer
                data={itemData}
                onPress={() => onPressHandler(itemData)}
                onLongPress={() => longPressHandler(itemData)}
                selected={getSelected(itemData)}
              />
            );
          }}
        />
      ) : (
        <NullNotesContainer />
      )}
      <View style={styles.buttonContainer}>
        <NextToNewNote
          onPress={() => navigation.navigate("NewNote", getNoteList)}
        />
      </View>
    </View>
  );
}

export default DisplayNotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent,
  },
  outerFilterContainer: {
    flexDirection: "row",
    backgroundColor: Colors.accent,
    alignItems: "center",
    justifyContent: "space-between",
  },
  noteContainer: {
    backgroundColor: Colors.accent,
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
    elevation: 5,
  },
});
