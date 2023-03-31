// this component allows users to select multipe images

import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

// for props: this interface is a collection of img inputs so we should have imgUris which we can set to
// an empty array by default and then map it to imginput components
function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View key={uri} style={styles.image}>
          <ImageInput
            imageUri={uri}
            key={uri}
            onChangeImage={() => onRemoveImage(uri)}
          />
        </View>
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
