import React from "react";
import { Screen } from "../components/screen";

import Card from "../components/card";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { colors } from "../config/colors";
import jacket from "./assets/jacket.jpg";
import couch from "./assets/couch.jpg";
import { FeedScreenNavigationProp } from "../navigation/feed-navigator";
const listings = [
  {
    id: 1,
    title: "Black Jacket for sale",
    price: 200,
    image: jacket,
  },
  {
    id: 2,
    title: "Black Couch for sale",
    price: 200,
    image: couch,
  },
];

const ListingScreen = ({ navigation }: FeedScreenNavigationProp) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("Listing Details", { item })}
          />
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGray,
  },
});

export default ListingScreen;
