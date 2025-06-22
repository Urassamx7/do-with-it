import React from "react";
import { Image, View, StyleSheet, ImageSourcePropType } from "react-native";
import imgs from "./assets/jacket.jpg";
import Apptext from "../components/app-text";
import { colors } from "../config/colors";
import ListItem from "../components/list-item";

const ListingDetailsScreen = () => {
  const image = "https://avatars.githubusercontent.com/u/128416567?v=4";

  return (
    <View>
      <Image source={imgs} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Apptext text="Black jacket for sale" style={styles.title} />
        <Apptext text="$100" style={styles.price} />
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
