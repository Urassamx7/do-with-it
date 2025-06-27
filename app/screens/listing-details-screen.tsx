import React from "react";
import { Image, StyleSheet, View } from "react-native";
import ListItem from "../components/lists/list-item";
import Apptext from "../components/text";
import { colors } from "../config/colors";
import { ListingDetailsScreenProps } from "../navigation/feed-navigator";

const ListingDetailsScreen = ({ route }: ListingDetailsScreenProps) => {
  const listing = route.params;

  const image = "https://avatars.githubusercontent.com/u/128416567?v=4";

  return (
    <View>
      <Image source={listing.item.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Apptext text={listing.item.title} style={styles.title} />
        <Apptext text={`$${listing.item.price}`} style={styles.price} />
        <View style={styles.userContainer}>
          <ListItem
            image={image}
            title="Marvin Mussacate"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 400,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {},
});

export default ListingDetailsScreen;
