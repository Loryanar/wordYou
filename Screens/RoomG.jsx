import React, {useState, useEffect} from 'react';

import {  View, Text, SafeAreaView, ScrollView, StyleSheet,Alert } from 'react-native';
import * as url from '../text';


export default function RoomG() {
   var flag;
  
    const ws = new WebSocket('wss://ejemplosocketword.herokuapp.com/');
    ws.onopen = () => {
        console.log("holo")
        ws.send(JSON.stringify({
                  type: 'conectado',
                  user: localStorage.getItem("user"),
                  codigo:localStorage.getItem("codigo")
        })
  )
 interval
  
  const interval = setInterval(() => {
    conex()
  }, 40000);

 const conex=()=>{
    console.log("holio")
    ws.send(JSON.stringify({
              type: 'conectado',
              user: localStorage.getItem("user"),
              codigo:localStorage.getItem("codigo")
              
    })
)
}

  



}
useEffect(() => {
 
  
    
    })
   
  return (
   <View></View>
       );
  }


