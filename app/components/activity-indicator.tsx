import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import loader from "../assets/animations/loader.json";
import { StyleSheet, View } from "react-native";

const ActivityIndicator = ({ visible = false }) => {
  const animation = useRef<LottieView>(null);

  if (!visible) return null;
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        loop
        source={loader}
        ref={animation}
        style={{
          width: 350,
          height: 350,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default ActivityIndicator;
