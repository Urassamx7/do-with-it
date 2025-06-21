import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/list-item";
import { Screen } from "../components/screen";
import ListItemSeparator from "../components/list-item-separator";
import ListDeleteAction from "../components/list-delete-action";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onPress = (item: {
    id: number;
    title: string;
    description: string;
    image: string;
  }) => {
    console.log("Tapped!\n", item);
  };

  const handleDelete = (message: {
    id: number;
    title: string;
    description: string;
    image: string;
  }) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
            onPress={() => onPress(item)}
            renderRightActions={() => (
              <ListDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={isRefreshing}
        onRefresh={() =>
          setMessages([
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
          ])
        }
      />
    </Screen>
  );
};
const styles = StyleSheet.create({});

export default MessagesScreen;
