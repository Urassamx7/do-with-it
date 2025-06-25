import Constants from "expo-constants";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  TextStyleAndroid,
  TextStyleIOS,
  View,
} from "react-native";

interface ScreenProps {
  children: React.ReactNode;
  style?: TextStyleIOS | TextStyleAndroid;
}

export const Screen = ({ children, style, ...rest }: ScreenProps) => {
  return (
    <SafeAreaView style={[styles.screen, style]} {...rest}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    flex: 1,
  },
  view: { flex: 1 },
});
