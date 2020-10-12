import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" size={50} color={"white"} />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
    backgroundColor: colors.danger,
    bottom: 35,
    justifyContent: "center",
  },
});
