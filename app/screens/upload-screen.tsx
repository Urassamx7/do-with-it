import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import Apptext from "../components/text";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import done from "../assets/animations/done.json";
import { colors } from "../config/colors";

const UploadScreen = ({
  onDone,
  progress = 0,
  visible = false,
}: {
  onDone: () => void;

  progress: number;
  visible: boolean;
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={done}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  animation: { width: 150, height: 150, flex: 1 },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
