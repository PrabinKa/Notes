import React, { useRef, useState } from "react";
import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";

import Header from "../components/Header";
import DropdownButton from "../components/dropdownButton";
import { Colors } from "../constants/Colors";

const dropdownList = [
  { id: 1, list: "Health" },
  { id: 2, list: "Wealth" },
  { id: 3, list: "Career" },
];

function CreatingNoteScreen({ navigation }) {
  const inputRef = useRef();

  const [noteTitle, setNoteTitle] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");

  const [toggleDropdown, setToggleDropdown] = useState(false);

  const backHandler = () => {
    navigation.goBack();
  };

  const dropdownToggler = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const chooseCategory = (cat) => {
    console.warn(cat)
  };

  return (
    <View style={styles.container}>
      <Header
        title={"New Notes"}
        firstIcon={require("../assets/arrow.png")}
        secondButton={"Save"}
        backButton={backHandler}
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
            onChangeText={(text) => setNoteTitle(text)}
            value={noteTitle}
          />
          <DropdownButton onPress={dropdownToggler}>Category</DropdownButton>
          {toggleDropdown ? (
            <View style={styles.dropDown}>
              {dropdownList.map((data, index) => {
                return (
                  <Pressable onPress={() => chooseCategory(data.list)} >
                    <View key={index} style={styles.dropdownListContainer}>
                      <Text style={styles.dropdownText}>{data.list}</Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          ) : null}
        </View>
        <View style={{ padding: 8 }}>
          <TextInput
            placeholder="Type Your Note..."
            autoCapitalize="sentences"
            autoCorrect={true}
            selectionColor={Colors.accent}
            placeholderTextColor={Colors.accent}
            multiline={true}
            scrollEnabled={true}
            style={styles.noteInput}
            onChangeText={(text) => setNote(text)}
            value={note}
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
    top: 45,
    height: 100,
    width: 100,
    backgroundColor: Colors.secondary,
    borderRadius: 5,
  },
  dropdownListContainer: {
    height: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownText: {
    color: Colors.accent,
    fontWeight: "700",
    fontSize: 12,
  },
});
