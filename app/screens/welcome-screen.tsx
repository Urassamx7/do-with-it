import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import bg from "./assets/background.jpg";
import icon from "./assets/logo-red.png";
function WelcomeScreen() {
  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={icon} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: { position: "absolute", top: 70, alignItems: "center" },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
