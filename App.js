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

export default App;