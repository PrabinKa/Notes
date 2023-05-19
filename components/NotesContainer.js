import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";

import { Colors } from "../constants/Colors";

function NotesContainer({ data }) {
  return (
    <View  style={styles.container}>
      <Pressable>
        <View>
          <Text style={styles.date}>5/18/2023</Text>
          <Text style={styles.title}>{data.title}</Text>
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
    padding: 8,
    margin: 8,
    borderRadius: 8,
    backgroundColor: Colors.secondary,
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
});
