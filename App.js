import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {

  componentDidMount() {
    
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAByUx0HrtCxjiSnrZtLx9bO3vqKNIROC8",
      authDomain: "one-time-password-41157.firebaseapp.com",
      databaseURL: "https://one-time-password-41157.firebaseio.com",
      projectId: "one-time-password-41157",
      storageBucket: "one-time-password-41157.appspot.com",
      messagingSenderId: "350051333397"
    };
    firebase.initializeApp(config);

  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
