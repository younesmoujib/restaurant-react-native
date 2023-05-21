import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; // Supposons que vous utilisez Ionicons pour les icônes
import Home from './Restocards';
import About from './About';
import Contact from './Contact';
import { View ,StyleSheet,Text} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const DrawerNav = createDrawerNavigator();
const RestaurantDetails = ({ route }) => {
  // Access the restaurant data from the route params
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Text>{restaurant.name}</Text>
      <Text>{restaurant.adresse}</Text>
      {/* Display other restaurant details */}
    </View>
  );
};


export default function Drawer() {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen
        name='Home'
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <DrawerNav.Screen
        name='About'
        component={About}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='information-circle' size={size} color={color} />
          ),
        }}
      />
      <DrawerNav.Screen
        name='Contact'
        component={Contact}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='mail' size={size} color={color} />
          ),
        }}
      />


    </DrawerNav.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
  },
  restaurantCard: {
    backgroundColor: '#f1f1f1',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Add other styles as needed
});








// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';