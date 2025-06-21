import Constants from "expo-constants";
import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

export const Screen = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    flex: 1,
  },
});
