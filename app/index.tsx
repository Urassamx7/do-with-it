import { Button, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screen } from "./components/screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type RootStackParamList = {
  Tweets: undefined;
  "Tweet Details": { tweetId: string };
};
type TweetsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Tweets"
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Link = () => {
  const navigation = useNavigation<TweetsScreenNavigationProp>();

  return (
    <Button
      title="Click"
      onPress={() => navigation.push("Tweet Details", { tweetId: "1" })}
    />
  );
};

const Tweets = () => {
  return (
    <View>
      <Text>Tweets </Text>
      <Link />
    </View>
  );
};

const TweetDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList>>();

  return (
    <View>
      <Text>Tweet Details {route.params?.tweetId} </Text>
    </View>
  );
};
const Account = () => {
  return (
    <Screen>
      <Text>Account: Marvin Mussacate</Text>
    </Screen>
  );
};

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "dodgerblue",
      },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="Tweet Details"
      component={TweetDetails}
      options={{
        headerStyle: {
          backgroundColor: "tomato",
        },
        headerTintColor: "white",
        // headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      animation: "shift",
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "#eee",
      tabBarInactiveTintColor: "black",
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function Index() {
  return <TabNavigator />;
}
