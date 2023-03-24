import React from "react";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        ImageComponent={<Icon name="email" />}
        title="My Title"
        
      />
    </Screen>
  );
}
