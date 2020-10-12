import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState({
    latitude: 10.0,
    longitude: 65.9667,
  });

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) {
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      coords.latitude ?? setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
