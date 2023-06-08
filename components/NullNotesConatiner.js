import {View, Text} from "react-native"
import { Colors } from "../constants/Colors";

export default function NullNotesContainer() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{ color: Colors.secondary, fontSize: 20, fontWeight: "600" }}
      >
        Create some notes !!
      </Text>
    </View>
  );
}