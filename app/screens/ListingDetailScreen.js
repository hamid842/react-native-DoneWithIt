import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import ContactSellerForm from "../components/ContactSellerForm";
import { ListItem } from "../components/lists/index";
import colors from "../config/colors";

const ListingDetailScreen = ({ route }) => {
  const listing = route.params;
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <Image
          style={styles.image}
          uri={listing.images[0].url}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
        />
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
    </ScrollView>
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
