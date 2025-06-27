import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import LoginScreen from "../screens/login-screen";
import WelcomeScreen from "../screens/welcome-screen";

type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;

};
export type AuthScreenNavigationProp = NativeStackScreenProps<
  AuthStackParamList,
  "Welcome"
>;

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
