import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import defaultStyles from "../config/styles";
import PickerItem from "./picker-item";
import { Screen } from "./screen";
import Apptext from "./text";
import { IconType } from "../utils/types";

interface AppTextInputProps extends TextInputProps {
  icon?: IconType
  items: {
    icon?: IconType
    backgroundColor?: string;
    label: string;
    value: number;
  }[];
  selectedItem: {
    label: string;
    value: number;
  };
  onSelectItem: React.Dispatch<
    React.SetStateAction<{
      label: string;
      value: number;
    }>
  >;
  width?: any;
  PickerItemComponent?: React.ComponentType<{
    item: {
      icon?: IconType
      backgroundColor?: string;
      label: string;
      value: number;
    };
    onPress: () => void;
  }>;
  numberOfColumns: number;
}

const AppPicker = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  numberOfColumns,
  width = "100%",
  PickerItemComponent = PickerItem,
}: AppTextInputProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsOpenModal(!isOpenModal)}>
        <View
          style={[
            styles.container,
            {
              width,
            },
          ]}
        >
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
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setIsOpenModal(!isOpenModal);
                  onSelectItem(item);
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
