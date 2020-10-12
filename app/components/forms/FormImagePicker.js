import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageURIS = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageURIS, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageURIS.filter((imageURI) => imageURI !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageURIs={imageURIS}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
