import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/button";
import bg from "./assets/background.jpg";
import icon from "./assets/logo-red.png";
import { AuthScreenNavigationProp } from "../navigation/auth-navigator";

function WelcomeScreen({ navigation }: AuthScreenNavigationProp) {
  return (
    <ImageBackground blurRadius={10} source={bg} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={icon} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don&apos;t Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: { position: "absolute", top: 70, alignItems: "center" },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
