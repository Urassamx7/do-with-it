import {
  createNativeStackNavigator,
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
      images: {
        url: string;
        thumbnailUrl: string;
      }[];
    };
  };
};
export type FeedNavigationProp = NativeStackScreenProps<
  FeedStackParamList,
  "Listings"
>;
export type ListingDetailsScreenProps = NativeStackScreenProps<
  FeedStackParamList,
  "Listing Details"
>;

const Stack = createNativeStackNavigator<FeedStackParamList>();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="Listing Details" component={ListingDetailsScreen} />
  </Stack.Navigator>
);
export default FeedNavigator;
