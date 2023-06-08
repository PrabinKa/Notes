import React, { useRef, useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";

import Header from "../components/Header";
import DropdownButton from "../components/dropdownButton";
import { Colors } from "../constants/Colors";
import { dropdownList } from "../constants/DummyData";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { setData } from "../components/async-store/AsyncstorageFunction";
import Dropdown from "../components/Dropdown";

function CreatingNoteScreen({ navigation, route }) {
  const inputRef = useRef();
  const getNoteList = route.params;
  
  const [toggleDropdown, setToggleDropdown] = useState(false);

  let result = Array.isArray(getNoteList);
  let isEditing = route.params.isEditing ? route.params.isEditing : false;

  const [noteInputs, setNoteInputs] = useState({
    id: result ? Math.random().toString(16).slice(2) : getNoteList.note.id,
    title: result ? "" : getNoteList.note.title,
    note: result ? "" : getNoteList.note.note,
    category: result ? "" : getNoteList.note.category,
    date: JSON.stringify(new Date()).slice(1, 11),
  });

  const condition =
    noteInputs.title == "" ||
    noteInputs.note == "" ||
    noteInputs.category == "";

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setNoteInputs((curNoteInputs) => {
      return {
        ...curNoteInputs,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const backHandler = () => {
    navigation.goBack();
  };

  const dropdownToggler = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const chooseCategory = (cat) => {
    setNoteInputs({ ...noteInputs, category: cat });
    setToggleDropdown(!toggleDropdown);
  };

  const storeNewNotes = async () => {
    if (isEditing) {
      if (condition) {
        Alert.alert("Missing", "You are missing some field !");
      } else {
        const jsonValue = await AsyncStorage.getItem("Note");
        let newArr = JSON.parse(jsonValue).filter(function (item) {
          return item.id !== noteInputs.id;
        });
        await AsyncStorage.removeItem("Note");
        let finalData = [...newArr, noteInputs];
        try {
          const jsonValue = JSON.stringify(finalData);
          setData(jsonValue);
          navigation.navigate("NoteList", noteInputs);
        } catch (e) {
          Alert.alert("Error", e);
        }
      }
    } else {
      if (condition) {
        Alert.alert("Missing", "You are missing some field !");
      } else {
        try {
          const jsonValue = await AsyncStorage.getItem("Note");
          if (jsonValue == null) {
            let newNote = [noteInputs];
            try {
              const jsonValue = JSON.stringify(newNote);
              setData(jsonValue);
            } catch (e) {
              Alert.alert("Error", e);
            }
            navigation.navigate("NoteList", noteInputs);
          } else {
            let newNote = [...getNoteList, noteInputs];
            try {
              const jsonValue = JSON.stringify(newNote);
              setData(jsonValue);
            } catch (e) {
              Alert.alert("Error", e);
            }
            navigation.navigate("NoteList", noteInputs);
          }
        } catch (e) {
          Alert.alert("Error", e);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title={"New Notes"}
        firstIcon={require("../assets/arrow.png")}
        secondButton={"Save"}
        backButton={backHandler}
        onPress={() => storeNewNotes()}
      />
      <View style={styles.notesOuterContainer}>
        <View style={styles.notesInnerContainer}>
          <TextInput
            placeholder="Title"
            placeholderTextColor={Colors.accent}
            style={styles.input}
            selectionColor={Colors.accent}
            ref={inputRef}
            onLayout={() => inputRef.current.focus()}
            onChangeText={inputChangeHandler.bind(this, "title")}
            value={noteInputs.title}
          />
          <DropdownButton
            selectedCategory={noteInputs.category}
            onPress={dropdownToggler}
          >
            Category
          </DropdownButton>
          {toggleDropdown ? (
            <View style={styles.dropDown}>
              {dropdownList.map((data, index) => {
                return (
                  <Dropdown
                    key={index}
                    onPress={() => chooseCategory(data.list)}
                    data={data}
                  />
                );
              })}
            </View>
          ) : null}
        </View>
        <View style={{ padding: 8, zIndex: -10 }}>
          <TextInput
            placeholder="Type Your Note..."
            autoCapitalize="sentences"
            autoCorrect={true}
            selectionColor={Colors.accent}
            placeholderTextColor={Colors.accent}
            multiline={true}
            scrollEnabled={true}
            style={styles.noteInput}
            onChangeText={inputChangeHandler.bind(this, "note")}
            value={noteInputs.note}
          />
        </View>
      </View>
    </View>
  );
}

export default CreatingNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notesOuterContainer: {
    flex: 1,
    backgroundColor: Colors.main,
    margin: 10,
    borderRadius: 8,
  },
  input: {
    margin: 8,
    height: 40,
    width: "50%",
    fontSize: 22,
    fontWeight: "500",
    color: Colors.accent,
  },
  notesInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  noteInput: {
    color: Colors.accent,
    fontSize: 16,
    overflow: "hidden",
  },
  dropDown: {
    position: "absolute",
    right: 8,
    top: 48,
    height: 110,
    width: 100,
    zIndex: -1,
    backgroundColor: Colors.secondary,
    borderRadius: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
