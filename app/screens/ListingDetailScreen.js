import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import AppText from "../components/AppText";
import ContactSellerForm from "../components/ContactSellerForm";
import { ListItem } from "../components/lists/index";
import colors from "../config/colors";

const ListingDetailScreen = ({ route }) => {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Mosh"
            subTitle="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 10,
  },
});
