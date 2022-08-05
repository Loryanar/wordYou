import React, {useState, useEffect} from 'react';

import {  View, Text, SafeAreaView, ScrollView, StyleSheet,Alert,Button } from 'react-native';
import * as url from '../text';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default function RoomG() {

const [flag,setFlag]= useState(true)  

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
 
  const interva2 = setInterval(() => {
    conexP(fa)
  }, 10000);
 

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
let fa= localStorage.getItem("var")

function  conexP(fas){
  if(fas=="true"){
conep(10)
localStorage.removeItem("var")
console.log("enviado ")
  }else if(fas=="false"){
    conep(-10)
    localStorage.removeItem("var")
    console.log("enviado -")
  }
 
 function conep(a){ console.log("holio")
  ws.send(JSON.stringify({
            type: 'puntos',
            user: localStorage.getItem("user"),
           puntos:a
            
            
  })
)
}


}



  ws.onmessage= (data)=>{
    console.log(data)
  
    const packet = JSON.parse(data.data);
    console.log(packet)
  switch(packet.type){
    case "cantidad conectados":
    
      localStorage.setItem("cantidad", packet.cantJugadores);
    
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
  <Text>{localStorage.getItem("cantidad")}</Text>
</View>

   <Button color='#7dcea0'
       title="Start Game" onPress={()=>navigation.navigate('Game')}></Button>
        <Button color='#7dcea0'
       title="Edit Room" onPress={()=>navigation.navigate('Room')}></Button>
   </View>
       );
  }


