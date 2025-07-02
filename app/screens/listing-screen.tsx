import React, { useEffect, useState } from "react";
import routes from "../navigation/routes";
import { Screen } from "../components/screen";

import Card from "../components/card";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { colors } from "../config/colors";
import { FeedNavigationProp } from "../navigation/feed-navigator";
import listingsApi, { ListingsResponse } from "../api/listings";

const ListingScreen = ({ navigation }: FeedNavigationProp) => {
  const [listings, setListings] = useState<ListingsResponse>([]);
  useEffect(() => {
    loadListings();
  }, []);
  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (response.ok) setListings(response.data!);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS, { item })
            }
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
