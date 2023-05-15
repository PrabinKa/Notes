import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
} from "react-native";

import { Colors } from "../constants/Colors";

const Header = ({title, firstIcon, secondIcon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerMainContainer}>
        <View style={styles.imageContainer}>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => {}}
            android_ripple={{ color: "#545454" }}
          >
            <View style={styles.imageInnerContainer}>
              <Image
                source={require("../assets/menu.png")}
                style={styles.image}
              />
            </View>
          </Pressable>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => {}}
            android_ripple={{ color: "#545454" }}
          >
            <View style={styles.imageInnerContainer}>
              <Image
                source={require("../assets/filter.png")}
                style={styles.image}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: Colors.main,
    marginTop: StatusBar.currentHeight,
  },
  innerMainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: 30,
    width: 30,
    tintColor: Colors.accent,
  },
  title: {
    color: Colors.accent,
    fontSize: 18,
    fontWeight: "600",
  },
  imageContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  imageInnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
