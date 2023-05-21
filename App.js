
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Drawer from './components/Drawer';
import RestoCards from './components/Restocards';
import RestaurantDetails from './components/RestaurantDetails';
import Map from './components/Maps';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Drawer" component={Drawer}   options={{ headerShown: false }} />
        <Stack.Screen name="RestoCards" component={RestoCards} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
        <Stack.Screen name="map" component={Map} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}





























//const Stack = createNativeStackNavigator();
// const BottomTab = createBottomTabNavigator();


//import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';
// import About from './components/About';
// import Home from './components/Home';
// import Contact from './components/Contact';


//import { StatusBar } from 'expo-status-bar';