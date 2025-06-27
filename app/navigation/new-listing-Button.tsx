import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewListingButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={50}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    
    borderWidth: 10,
    bottom: 20,
    justifyContent: "center",

    height: 80,
    width: 80,
    zIndex: 10,
  },
});

export default NewListingButton;
