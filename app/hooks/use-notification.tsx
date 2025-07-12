import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Alert, Platform } from "react-native";
import expoPushTokensApi from "../api/expo-push-tokens";
import navigation from "../navigation/root-navigation";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const useNotifications = (notificationListener?: any) => {
  useEffect(() => {
    registerForPushNotificationsAsync();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);
};

const registerForPushNotificationsAsync = async () => {
  let token;
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("myNotificationChannel", {
      name: "A channel is needed for the permissions prompt to appear",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      Alert.alert(
        "Permissão negada",
        "Não foi possível obter permissões para notificações push."
      );
      return;
    }

    try {
      token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log(error);
    }
  } else {
    Alert.alert(
      "Atenção",
      "Notificações push só funcionam em dispositivos físicos."
    );
  }

  return token;
};

export { useNotifications };
