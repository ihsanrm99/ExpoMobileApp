/* @tutinfo Import <CODE>Link</CODE> component from <CODE>expo-router</CODE>. */ import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      {/* @tutinfo Add <CODE>Link</CODE> component after <CODE>Text</CODE> component and pass the <CODE>href</CODE> prop with <CODE>/about</CODE> route. */}
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  /* @tutinfo Add the style of <CODE>fontSize</CODE>, <CODE>textDecorationLine</CODE>, and <CODE>color</CODE> to <CODE>Link</CODE> component. */
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
