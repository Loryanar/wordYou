import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ButtonF from '../Components/ButtonF';
import { useNavigation } from "@react-navigation/native";

export default function Home() {

    const navigation= useNavigation()
  return (
    <View> 
        <Button
    color='#7dcea0'
       title="Crear Partida"
       onPress={()=>navigation.navigate("RoomS")}
      
     />
      <Button
    color='#7dcea0'
       title="Perfil"
       onPress={()=>navigation.navigate("UserUp")}
      
     />
    <ButtonF />
    </View>
    
  );
};

