import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import AccountScreen from "../screens/account-screen";
import MessagesScreen from "../screens/messages-screen";

type AccountStackParamList = {
  Account: undefined;
  Messages: undefined;
};
export type AccountNavigationProp = NativeStackScreenProps<
  AccountStackParamList,
  "Account"
>;

const Stack = createNativeStackNavigator<AccountStackParamList>();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "dodgerblue",
      },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);
export default AccountNavigator;
