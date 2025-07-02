import React, { useEffect, useState } from "react";
import routes from "../navigation/routes";
import { Screen } from "../components/screen";

import Card from "../components/card";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { colors } from "../config/colors";
import { FeedNavigationProp } from "../navigation/feed-navigator";
import listingsApi from "../api/listings";
import { ListingsResponse } from "../api/model";
import Apptext from "../components/text";
import { Button } from "react-native";
import AppButton from "../components/button";

const ListingScreen = ({ navigation }: FeedNavigationProp) => {
  const [listings, setListings] = useState<ListingsResponse>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);
  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) {
      setHasError(true);
      return;
    }
    setHasError(false);
    setListings(response.data!);
  };

  return (
    <Screen style={styles.screen}>
      {hasError && (
        <>
          <Apptext text="Couldn't retrieve the listings." />
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
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
