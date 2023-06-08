import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";

import { Colors } from "../constants/Colors";

function NotesContainer({ data, onPress, onLongPress, selected }) {

  return (
    <View style={[styles.container, {backgroundColor: selected ? Colors.main : Colors.secondary}]}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <View style={{ height: "100%", width: " 100%", padding: 8}}>
          {selected && (
            <View style={{ position: "absolute", left: 2, top: 2 }}>
              <Image
                source={require("../assets/checklist.png")}
                style={{ height: 20, width: 20, tintColor: Colors.accent }}
              />
            </View>
          )}
          <Text style={styles.date}>{data.date}</Text>
          <Text numberOfLines={1} style={styles.title}>
            {data.title}
          </Text>
          <Text style={styles.category}>{data.category}</Text>
          <Text numberOfLines={4} style={styles.note}>
            {data.note}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NotesContainer;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "45%",
    margin: 8,
    borderRadius: 8,
    elevation: 5,
  },
  date: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "right",
  },
  title: {
    color: Colors.accent,
    fontSize: 16,
    textAlign: "left",
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1,
  },
  category: {
    color: Colors.accent,
    fontSize: 12,
    textAlign: "left",
    fontWeight: "600",
  },
  note: {
    color: Colors.accent,
    fontSize: 14,
    marginVertical: 8,
  },
  pressed: {
    opacity: 0.2,
  },

});
