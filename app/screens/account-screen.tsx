import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/icon-component";
import ListItem from "../components/lists/list-item";
import ListItemSeparator from "../components/lists/list-item-separator";
import { Screen } from "../components/screen";
import { colors } from "../config/colors";
import { IconType } from "../utils/types";
import { AccountNavigationProp } from "../navigation/account-navigator";
import AuthContext from "../auth/auth-context";
import authStorage from "../auth/storage";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Account",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = ({ navigation }: AccountNavigationProp) => {
  const { user, setUser } = useContext(AuthContext);

  const image = "https://avatars.githubusercontent.com/u/128416567?v=4";

  const handleLogOut = () => {
    authStorage.removeToken();
    setUser(null);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title={user?.name!} subTitle={user?.email} image={image} />
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
                  name={item.icon.name as IconType}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
        onPress={handleLogOut}
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
