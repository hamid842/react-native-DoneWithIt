import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

import * as Progress from "react-native-progress";
import colors from "../config/colors";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar color={colors.primary} progress={progress} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            source={require("../assets/animation/loader.json")}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
