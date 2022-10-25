import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage, TextInput, Button} from 'react-native';
import  Navigation from './components/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';

import { color } from 'react-native-reanimated';




const AppStack = createNativeStackNavigator();

const App = () =>{
  const [isFirstLaunch, setFirstLaunch] = React.useState(true);
  const [isLoggedIn,setIsLoggedIn] = React.useState(false);
  const [homeTodayScore, setHomeTodayScore] = React.useState(0);

   if (isFirstLaunch == true){
return(
  <OnboardingScreen setFirstLaunch={setFirstLaunch}/>
 
);
  }else if(isLoggedIn){
    return <Navigation/>
  }else{
    return(<View>
      <TextInput style={styles.input}
      placeholderTextColor='#211F0F'
      placeholder='Phone Number'>
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      </TextInput> 
      <Button
      title='Send'
        style={styles.button}
        onPress={async()=>{
          console.log('Button was pressed')
          await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber,
          {
            method:'POST',
            headers:{
              'cpntent-type':'application/text'
            }
          }
          )
        }}
        />
    </View>)
  }
}
 export default App;

 const styles = StyleSheet.create({
  container:{
      flex:1, 
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: "#F7DC07"
  },
  input: {
    height: 40,
    marginTop:100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  margin:{
    marginTop:100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#211F0F",
    padding: 10,
    
  }    
})

