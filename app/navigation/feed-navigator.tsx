import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import ListingScreen from "../screens/listing-screen";
import ListingDetailsScreen from "../screens/listing-details-screen";

type FeedStackParamList = {
  Listings: undefined;
  "Listing Details": {
    item: {
      id: number;
      title: string;
      price: number;
      image: number;
    };
  };
};
export type FeedNavigationProp = NativeStackScreenProps<
  FeedStackParamList,
  "Listing Details"
>;

const Stack = createNativeStackNavigator<FeedStackParamList>();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "dodgerblue",
      },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen
      name="Listing Details"
      component={ListingDetailsScreen}
      options={{
        headerStyle: {
          backgroundColor: "tomato",
        },
        headerTintColor: "white",
        headerShown: false,
        animation:"slide_from_right"
      }}
    />
  </Stack.Navigator>
);
export default FeedNavigator;
