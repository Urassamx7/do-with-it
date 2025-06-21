import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { colors } from "../config/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ListDeleteAction = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.danger}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListDeleteAction;
