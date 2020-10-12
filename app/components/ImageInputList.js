import React, { useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import ImageInput from "./ImageInput";

const ImageInputList = ({ imageURIs = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.conatainer}>
          {imageURIs.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageURI={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}

          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  conatainer: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
