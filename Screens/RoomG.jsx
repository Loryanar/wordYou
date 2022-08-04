import React, {useState, useEffect} from 'react';

import {  View, Text, SafeAreaView, ScrollView, StyleSheet,Alert,Button } from 'react-native';
import * as url from '../text';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default function RoomG() {

  const [state,setState]= useState({
    conectados:'',
    

})  
const [flag,setFlag]= useState(true)  
const ChangeText=(name, value)=>{
   setState({...state, [name]: value})
}
   
   const navigation= useNavigation()
  
    const ws = new WebSocket('wss://ejemplosocketword.herokuapp.com/');
    ws.onopen = () => {
        console.log("holo")
        if(flag==true){
      ws.send(JSON.stringify({
                  type: 'conectado',
                  user: localStorage.getItem("user"),
                  codigo:localStorage.getItem("codigo"),
                  estado:0,
        })
  )
  setFlag(false);
  }
      
  
 interval

  
  const interval = setInterval(() => {
    conex()
  }, 40000);
 


 const conex=()=>{
    console.log("holio")
    ws.send(JSON.stringify({
              type: 'conectado',
              user: localStorage.getItem("user"),
              estado:1,
              codigo:localStorage.getItem("codigo"),
              
              
    })
)


}



  ws.onmessage= (data)=>{
    console.log(data)
  
    const packet = JSON.parse(data.data);
    console.log(packet)
  switch(packet.type){
    case "cantidad conectados":
      ChangeText("conectados",packet.cantJugadores)
      localStorage.setItem("cantidad", packet.cantJugadores);
      console.log(state.conectados)
      ;
    case "conectado":
      console.log(data);

  }
}



}
useEffect(() => {
 
  
    
    })
   
  return (
   <View>
<View>
  <Text>{state.conectados}</Text>
</View>

   <Button color='#7dcea0'
       title="Start Game" onPress={()=>navigation.navigate('Game')}></Button>
        <Button color='#7dcea0'
       title="Edit Room" onPress={()=>navigation.navigate('Room')}></Button>
   </View>
       );
  }


