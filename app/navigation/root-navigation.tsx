import { createNavigationContainerRef } from "@react-navigation/native";

export type RootStackParamList = {
  Account: undefined;
  Messages: undefined;
  Listings: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

function navigate<RouteName extends keyof RootStackParamList>(
  ...args: undefined extends RootStackParamList[RouteName]
    ? [screen: RouteName, params?: RootStackParamList[RouteName]]
    : [screen: RouteName, params: RootStackParamList[RouteName]]
): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...(args as [any, any]));
  }
}

export default { navigate };
