import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>À propos de notre application</Text> */}
      <Image
        source={require('../assets/about.png')}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Notre application vous permet de rechercher des restaurants en fonction de votre ville, de votre zone et de vos préférences culinaires. Vous pouvez consulter les photos des restaurants et obtenir des itinéraires en utilisant Google Maps.
          </Text>
          
        </View>
      </View>
      <Text style={styles.note}>
            Note: Assurez-vous d'avoir Google Maps installé sur votre appareil pour bénéficier de la fonctionnalité d'itinéraire.
          </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  contentContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  textContainer: {
     marginBottom: 10,
     marginTop: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  note: {
   
   
    marginTop:'40%',
   
    fontSize: 14,
    fontStyle: 'italic',
    color: 'gray',
  },
});

export default About;