import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Contact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleEnvoyer = () => {
    // Vérifier les données et envoyer le formulaire
    if (nom && email && message) {

      setPopupVisible(true);
    } else {
      // Afficher une alerte si des champs sont manquants
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
    }
  };

  const handleFacebook = () => {
    Linking.openURL('https://www.facebook.com'); 
  };

  const handleInstagram = () => {
    Linking.openURL('https://www.instagram.com'); 
  };

  const handleLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com');
  };

  return (
    <View style={styles.container}>
      

             <TextInput
        style={styles.input}
        placeholder="Nom"
        value={nom}
        onChangeText={text => setNom(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Message"
        multiline
        value={message}
        onChangeText={text => setMessage(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleEnvoyer}>
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>

      {messageVisible && (
        <View style={styles.successContainer}>
          <FontAwesome name="check-circle" size={32} color="green" />
          <Text style={styles.successText}>Votre message est envoyé avec succès</Text>
        </View>
      )}

      {/* ... */}
           {popupVisible && (
       <View style={styles.popup}>
         <Text style={styles.popupText}>Message envoyé avec succès!</Text>
       </View>
     )}


      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={handleFacebook}>
          <FontAwesome name="facebook" size={32} color="#3b5998" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={handleInstagram}>
          <FontAwesome name="instagram" size={32} color="#C13584" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={handleLinkedIn}>
          <FontAwesome name="linkedin" size={32} color="#0077B5" />
        </TouchableOpacity>
        
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 12,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  popup: {
    position: 'absolute',
    top: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  popupText: {
    color: '#fff',
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialButton: {
    marginHorizontal: 10,
  },
});
