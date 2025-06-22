import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInputProps,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import Apptext from "./app-text";
import { Screen } from "./screen";
import PickerItem from "./picker-item";

interface AppTextInputProps extends TextInputProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  items: {
    label: string;
    value: number;
  }[];
  selectedItem: {
    label: string;
    value: number;
  };

  onSelectedItem: React.Dispatch<
    React.SetStateAction<{
      label: string;
      value: number;
    }>
  >;
}

const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectedItem,
}: AppTextInputProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(selectedItem.label);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsOpenModal(!isOpenModal)}>
        <View style={styles.container}>
          {!!icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.mediumGray}
              style={styles.icon}
            />
          )}

          <Apptext
            style={styles.text}
            text={selectedItem ? selectedItem.label : placeholder!}
          />

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.mediumGray}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={isOpenModal} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setIsOpenModal(!isOpenModal)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setIsOpenModal(!isOpenModal);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    margin: 10,
  },
  text: {
    flex: 1,
  },
});
export default AppPicker;
