import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, View, Text, Image, Button, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const RestoCards = () => {
  const navigation = useNavigation();
  const [dropdown, setDropdown] = useState(null);
  const [selected, setSelected] = useState([]);
  const [cities, setCities] = useState([]);
  const [zones, setZones] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedZone, setSelectedZone] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState([]);
  const [specialityName, setSpecialityName] = useState(null);
  const [restaurantCards, setRestaurantCards] = useState([]);

  const handleSearchClique = useCallback(async () => {
    console.log(selectedSpeciality);
    try {
      const response = await axios.get(
        `https://resto-api-dun.vercel.app/api/restos/zone/${selectedZone}/specialites/${specialityName}`
      );
      setRestaurants(response.data);
      console.log(restaurants);
    } catch (error) {
      console.log(error);
      setRestaurants([]);
    }
  }, [selectedZone, specialityName]);

  useEffect(() => {
    // Get cities from the API
    axios
      .get('https://resto-api-dun.vercel.app/api/cities')
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Get zones based on the selected city
    if (selectedCity) {
      axios
        .get(`https://resto-api-dun.vercel.app/api/zones/city/${selectedCity}`)
        .then((response) => {
          setZones(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedCity]);

  useEffect(() => {
    // Get specialities
    axios
      .get('https://resto-api-dun.vercel.app/api/specialities')
      .then((response) => {
        setSpecialities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Update the restaurant cards when the "restaurants" state changes
    setRestaurantCards(
      restaurants.map((restaurant) => (
        <View key={restaurant._id} style={styles.restaurantCard}>
          <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', { restaurant })}>
            <Image style={styles.restaurantImage} source={{ uri: restaurant.image }} />
          </TouchableOpacity>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
        </View>
      ))
    );
  }, [restaurants, navigation]);

  useEffect(() => {
    // Update specialityName when selectedSpeciality changes
    setSpecialityName(selectedSpeciality.join('&'));
  }, [selectedSpeciality]);

  const _renderItem = useCallback((item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.name}</Text>
      </View>
    );
  }, []);

  const _renderItemsp = useCallback((item) => {
    const isSelected = selectedSpeciality.includes(item._id);
  
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.name}</Text>
        {isSelected ? (
          <Image style={styles.icon} source={require('../assets/moin.png')} />
        ) : (
          <Image style={styles.icon} source={require('../assets/add.png')} />
        )}
      </View>
    );
  }, [selectedSpeciality]);
  



  const memoizedCities = useMemo(() => cities, [cities]);
  const memoizedZones = useMemo(() => zones, [zones]);
  const memoizedSpecialities = useMemo(() => specialities, [specialities]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Dropdown
          style={styles.dropdown}
          containerStyle={styles.shadow}
          data={cities}
          search
          searchPlaceholder="Search"
          labelField="name"
          valueField="_id"
          label="Dropdown"
          placeholder="Choisir une ville"
          value={selectedCity}
          onChange={(item) => {
            setSelectedCity(item._id);
          }}
          renderLeftIcon={() => (
            <Image style={styles.icon} source={require('../assets/city.png')} />
          )}
          renderItem={(item) => _renderItem(item)}
          textError="Error"
          ren
        />

        <Dropdown
          style={styles.dropdown}
          containerStyle={styles.shadow}
          data={zones}
          search
          searchPlaceholder="Search"
          labelField="name"
          valueField="_id"
          label="Dropdown"
          placeholder="Choisir une zone"
          value={selectedZone}
          onChange={(item) => {
            setSelectedZone(item._id);
          }}
          renderLeftIcon={() => (
            <Image style={styles.icon} source={require('../assets/area.png')} />
          )}
          renderItem={(item) => _renderItem(item)}
          textError="Error"
        />

        <MultiSelect
          style={styles.dropdown}
          containerStyle={styles.shadow}
          data={specialities}
          labelField="name"
          valueField="_id"
          label="Multi Select"
          placeholder="Specialites"
          search
          searchPlaceholder="Search"
          value={selectedSpeciality}
          onChange={(item) => {
            setSelectedSpeciality(item);
          }}
          renderLeftIcon={() => (
            <Image style={styles.icon} source={require('../assets/speciality.png')} />
          )}
          renderItem={(item) => _renderItemsp(item)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearchClique}>
  <Image style={styles.icon} source={require('../assets/search.png')} />
  <Text style={styles.buttonText}>Chercher</Text>
</TouchableOpacity>
      </View>

      <View style={styles.restaucontainer}>
        {/* Display restaurant cards */}
        {restaurantCards}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 0,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 30,
  },
  dropdown: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',

    borderRadius: 20,
    marginTop: 20,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  button: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
    width: 150,
    height: 40,
    backgroundColor: '#2E86C1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaucontainer:{
    backgroundColor:'#fff'
  },
  restaurantCard: {
    backgroundColor: '#E4E4E4',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#474948',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 50,
    shadowRadius: 1.41,
    elevation: 10,
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
});

export default RestoCards;