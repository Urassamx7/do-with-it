import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/icon-component";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItem from "../components/lists/list-item";
import { Screen } from "../components/screen";
import { colors } from "../config/colors";
import ListItemSeparator from "../components/lists/list-item-separator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

type MaterialIcons = keyof typeof MaterialCommunityIcons.glyphMap;

const AccountScreen = () => {
  const image = "https://avatars.githubusercontent.com/u/128416567?v=4";
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Marvin Mussacate"
          subTitle="marvinmussacatedev@gmail.com"
          image={image}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name as MaterialIcons}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGray,
  },
});

export default AccountScreen;
