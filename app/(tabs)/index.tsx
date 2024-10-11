/* @tutinfo Import the <CODE>Image</CODE> component. */ import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

/* @tutinfo Import the image from the "assets/images/" directory. Since this picture is a static resource, you have to reference it using <CODE>require</CODE>. */
const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      {/* @tutinfo Wrap the <CODE>Image</CODE> component inside a container.
      Also, add the image component to display the placeholder image. */}
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    /* @tutinfo Modify container styles to remove <CODE>justifyContent</CODE> property. */
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  /* @tutinfo Add styles for the image. */
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
