import React, { useState } from "react";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as FormPicker,
  SubmitButton,
} from "../components/forms";
import { Screen } from "../components/screen";
import CategoryPickerItem from "../components/category-picker-item";
import FormImagePicker from "../components/forms/form-image-picker";
import useLocation from "../hooks/use-location";
import listingsApi from "../api/listings";
import { PostListing } from "../api/model";
import UploadScreen from "./upload-screen";
const initialValues = {
  imageUris: [],
  title: "",
  price: "",
  category: null,
  description: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];
const ListingEditScreen = () => {
  const location = useLocation();
  const [isUploadVisible, setIsUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing: PostListing, { resetForm }) => {
    setProgress(0);
    setIsUploadVisible(true);
    const result = await listingsApi.addListings(
      { ...listing, location },
      (progress: number) => setProgress(progress)
    );

    if (!result.ok) {
      setIsUploadVisible(false);
      return alert("Could not save the listing.");
    }

    resetForm(initialValues);
  };

  return (
    <Screen>
      <UploadScreen
        onDone={() => setIsUploadVisible(false)}
        progress={progress}
        visible={isUploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormImagePicker name="images" />

        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          width={180}
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          name="category"
          placeholder="Category"
        />
        <FormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
          icon="note-text-outline"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;
