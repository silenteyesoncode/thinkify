import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import * as Location from 'expo-location';



function LocationScreen() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let Cords = 'Waiting..';
  if (errorMsg) {
    Cords = errorMsg;
  } else if (location) {
    Cords = JSON.stringify(location);
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{Cords}</Text>
    </View>
  );
}

export default LocationScreen;
