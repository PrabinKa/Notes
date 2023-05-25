import {View, StyleSheet, Pressable, Image} from "react-native";

import { Colors } from "../constants/Colors";

function ImageButton({image, overImage, marginStyle, onPress}) {
    return(
        <View style={[styles.imageContainer, marginStyle]}>
          <Pressable
            onPress={onPress}
            style={({pressed}) => pressed ? styles.pressed : styles.unpressed }
          >
            <View style={styles.imageInnerContainer}>
              <Image
                source={image}
                style={[styles.image, overImage]}
              />
            </View>
          </Pressable>
        </View>
    )
}

export default ImageButton;

const styles = StyleSheet.create({
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
      image: {
        height: 30,
        width: 30,
        tintColor: Colors.accent,
      },
      pressed: {
        flex: 1,
        opacity: 0.5
      },
      unpressed: {
        flex: 1
      }
})