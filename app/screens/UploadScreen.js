import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import AppText from "../components/Text";

import * as Progress from "react-native-progress";
import colors from "../config/colors";

const UploadScreen = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AppText>{progress * 100}%</AppText>
        <Progress.Bar color={colors.danger} progress={progress} />
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
