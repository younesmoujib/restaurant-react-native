import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // Importation de FontAwesome

const RestaurantDetails = ({ route }) => {
  const navigation = useNavigation();
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.restaurantImage} source={{ uri: restaurant.image }} />
      <Text style={[styles.restaurantName, styles.centerText]}>{restaurant.name}</Text>
       <Text style={[styles.restaurantName, styles.centerText]}><Text style={{color:'red'}}>Adresse :</Text> {restaurant.adresse}</Text> 
      <TouchableOpacity onPress={() => navigation.navigate('map', { restaurant })}>
      <Image style={styles.icon} source={require('../assets/map.png')} />
        
      </TouchableOpacity>
      <Text style={styles.centerText1}>Voir position </Text>
      {/* Display other restaurant details */}
    </View>
  );
};

const styles = {
  container: {
    marginTop: 160,
  },
  restaurantImage: {
    width: '80%',
    height: 200,
    marginLeft: 40,
    borderRadius: 10, // Ajout du border radius à l'image
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon:{
    
    width: 60,
    height: 60,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom:-6,
    marginTop:20,
   

  },
  centerText: {
    
    textAlign: 'center',
  alignSelf: 'center',
  marginTop: 20,

  
  },
  centerText1: {
    
    textAlign: 'center',
  alignSelf: 'center',
  marginTop: 20,
  fontSize:11

  
  },
};

export default RestaurantDetails