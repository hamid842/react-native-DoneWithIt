import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import expoPushTokentsApi from "../api/expoPushTokens";

export default useNotification = (notificaionListener) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notificaionListener) Notifications.addListener(notificaionListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokentsApi.register(token);
      console.log(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
