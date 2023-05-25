import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import DisplayNotesScreen from "./screens/DisplayNotesScreen";
import CreatingNoteScreen from "./screens/CreatingNotesScreen";
import { Colors } from "./constants/Colors";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={Colors.main} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }} >
          <Stack.Screen name="NoteList" component={DisplayNotesScreen} />
          <Stack.Screen name="NewNote" component={CreatingNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
