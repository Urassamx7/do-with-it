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
import AppButton from "../components/button";
import ActivityIndicator from "../components/activity-indicator";
import useApi from "../hooks/use-api";

const ListingScreen = ({ navigation }: FeedNavigationProp) => {
  const getListingsApi = useApi<ListingsResponse>(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.isLoading} />
      <Screen style={styles.screen}>
        {getListingsApi.hasError && (
          <>
            <Apptext text="Couldn't retrieve the listings." />
            <AppButton title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() =>
                navigation.navigate(routes.LISTING_DETAILS, { item })
              }
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGray,
  },
});

export default ListingScreen;
