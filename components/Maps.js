import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = ({route}) => {
  const [restaurants, setRestaurants] = useState([]);
  const { restaurant } = route.params;

  

  return (
    <View style={styles.container}>
   
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: restaurant.cords [0],
            longitude: restaurant.cords[1],
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
     
            <Marker
              key={restaurant._id}
              coordinate={{
                latitude: restaurant.cords[0],
                longitude: restaurant.cords[1]
              }}
              title={restaurant.name}
            />
         
        </MapView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;