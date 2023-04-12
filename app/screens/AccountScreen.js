import React, { useContext } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import AppText from "../components/Text";
import Icon from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const menutItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.gold,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.title}>
          <AppText style={styles.text}>Account</AppText>
        </View>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/me.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menutItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={handleLogout}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
  text: {
    color: colors.black,
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    paddingLeft: 20,
  },
  title: {
    justifyContent: "center",
  },
});

export default AccountScreen;
