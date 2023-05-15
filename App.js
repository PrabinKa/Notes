import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import DisplayNotesScreen from "./screens/DisplayNotesScreen";
import { Colors } from "./constants/Colors";

export default function App() {
  return (
    <>
    <StatusBar style="light" backgroundColor={Colors.main} />
      <DisplayNotesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
