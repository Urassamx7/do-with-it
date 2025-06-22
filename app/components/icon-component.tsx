import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IconProps {
  name: string;
  size?: number;
  backgroundColor: string;
  iconColor?: string;
}

const Icon = ({
  backgroundColor = colors.black,
  iconColor = colors.white,
  name,
  size = 40,
}: IconProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
};

export default Icon;
