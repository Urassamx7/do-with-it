import React, { useState } from "react";
import { FlatList } from "react-native";
import { Screen } from "../components/screen";
import ListItem from "../components/lists/list-item";
import ListDeleteAction from "../components/lists/list-delete-action";
import ListItemSeparator from "../components/lists/list-item-separator";

const initialMessages = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur enimullam ad, suscipit tempora in dignissimos id eveniet, commodi cupiditatedicta. Eveniet dolorum consectetur et recusandae harum, hic ducimussimilique. Neque autem nesciunt accusantium blanditiis facere nobistemporibus, dicta quae expedita numquam debitis impedit suscipitconsequatur necessitatibus est reiciendis architecto.",
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
        onRefresh={() => {
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
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
