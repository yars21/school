import { View, Text, Image, StyleSheet  } from 'react-native'
import { useFonts } from 'expo-font';
import React from 'react'
import colors from '../assets/colors'
import { Ionicons } from '@expo/vector-icons';

export default function Login(){
  return (
    <View style={styles.container}>

      <View style={styles.backimgcont}>
        <Image source={require("../assets/image/programming-background-collage_23-2149901771.jpg")} style={styles.img} />
      </View>

      <View style={styles.welcome}>
        <Text>Wel Come to</Text>
        <Text style={styles.text}>Millenials</Text>

        <Text style={styles.text2}>Login / Signup</Text>

        <View style={styles.button}>
          <Ionicons name="logo-google" size={24} color="black" style={styles.icon}/>
          <Text style={{color: colors.black}}>Sign in with Google</Text>
        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backimgcont: {
    width: '100%',
    height: '50%',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#900C3F',
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.white,
    width: '100%',
  },
  text2: {
    marginTop: 90,
    fontSize: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  icon: {
    marginRight: 15, 
  },
});