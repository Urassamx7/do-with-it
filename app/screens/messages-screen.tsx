import React from "react";
import { FlatList } from "react-native";
import ListItem from "../components/list-item";
import { Screen } from "./screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: "https://avatars.githubusercontent.com/u/128416567?v=4",
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: "https://avatars.githubusercontent.com/u/128416567?v=4",
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: "https://avatars.githubusercontent.com/u/128416567?v=4",
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default MessagesScreen;
