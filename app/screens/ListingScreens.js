import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import AppText from "../components/Text";
import Button from "../components/Button";

function ListingScreens({ navigation }) {
  //temporary solution: array of objects
  // when we connect the app the backend, I am going to retrieve the listings
  // from the server

  // we should declare a state variable to store the listings that we get from the server.
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // now we should call our api the first time our component gets rendered. so we use the effect hook.
  useEffect(() => {
    loadListings();
  }, []);

  // Typical implementation for calling APIs, handling errors and showing activity indicators
  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true); // Always write error handling code first!

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Could not retrieve listings from server</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreens;
