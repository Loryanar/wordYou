import 'react-native-gesture-handler';
import React from 'react';
import {Text,Button,StyleSheet} from 'react-native'; 
import Navigator from './Navigator';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 




const Stack = createStackNavigator();
const App =() =>{

  return(   <NavigationContainer>
  <Navigator/>
  </NavigationContainer>
  );

}; 
const styles= StyleSheet.create ({
  container: {flex:1, justifyContent:"center", alignContent:"center", backgroundColor:"#292929" ,},
  tittle: {fontSize: 30}
})
export default App;