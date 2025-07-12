import React from "react";
import { View, StyleSheet, Keyboard, Alert } from "react-native";
import messagesApi from "@/app/api/messages";
import * as Notification from "expo-notifications";
import { ListingProps } from "@/app/utils/types";
import Form from "./form";
import * as Yup from "yup";
import FormField from "./form-field";
import SubmitButton from "./submit-button";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

const ContactSellerForm = ({ listing }: ListingProps) => {
  const handleSubmit = async (message: string, { resetForm }) => {
    Keyboard.dismiss();
    const result = await messagesApi.send({
      message,
      listingId: listing.id.toString(),
    });

    if (!result.ok) {
      console.log("Error:", result);
      return Alert.alert("Error", "Could not send the message to seller");
    }
    resetForm();
    Notification.presentNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller",
    });
  };

  return (
    <View>
      <Form
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          maxLength={255}
          multiline
          name="message"
          numberOfLines={3}
          placeholder="Message..."
        />
        <SubmitButton title="Contact Seller" />
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ContactSellerForm;
