import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { colors } from "../config/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ListDeleteAction = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListDeleteAction;
