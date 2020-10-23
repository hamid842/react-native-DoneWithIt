import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import Button from "../components/Button";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrive the listings.</AppText>
            <Button title={"Retry"} onPress={loadListings} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => {
            console.log(item.images[0].url);
            return (
              <Card
                title={item.title}
                subTitle={"$" + item.price}
                imageURL={item.images[0].url}
                onPress={() => navigation.navigate("ListingDetails", item)}
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            );
          }}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
