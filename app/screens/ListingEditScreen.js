import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import listingApi from "../api/listings";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Cars", value: 2, backgroundColor: "orange", icon: "email" },
  { label: "Supplies", value: 3, backgroundColor: "brown", icon: "lock" },
  { label: "Sports", value: 4, backgroundColor: "green", icon: "apps" },
  { label: "Clothing", value: 5, backgroundColor: "blue", icon: "email" },
  { label: "Games", value: 6, backgroundColor: "grey", icon: "lock" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "purple",
    icon: "apps",
  },
  { label: "Books", value: 8, backgroundColor: "gold", icon: "email" },
  { label: "Other", value: 9, backgroundColor: "lavender", icon: "lock" },
];

function ListingEditScreen() {
  const location = useLocation();

  const handleSubmit = async (listing) => {
    const result = await listingApi.addListing({ ...listing, location });
    if (!result.ok) return alert("Could not save the listing.");
    alert("Success");
  }

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          // numberOfColumns={3}
          // PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          multiline
          maxLength={255}
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
