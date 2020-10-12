import React, { useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

const ImageInput = ({ imageURI, onChangeImage }) => {
  const handlePress = () => {
    if (!imageURI) selectImage();
    else onChangeImage(null);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
      console.log(result.uri.toString());
    } catch (e) {
      console.log("Error Reading image.");
    }
  };

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access Image");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageURI ? (
          <MaterialCommunityIcons
            name={"camera"}
            size={40}
            color={colors.medium}
          />
        ) : (
          <Image
            source={{ uri: imageURI }}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    width: "100%",
  },
});
