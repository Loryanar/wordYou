import React, {useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button, Modal,} from 'react-native'; 
import axios from "axios";
import * as url from '../text'
import { useNavigation } from "@react-navigation/native";


export default function RoomS(){
         
     
         return(
        


<ScrollView style={styles.container}>
      


      <View style={styles.inputGroup}>
        <TextInput placeholderTextColor= '#f4d03f'
          placeholder="Time"
           onChangeText={(value) => ChangeText("Username", value) }
        />
      </View>

  <View style={styles.inputGroup1}>
        <TextInput placeholderTextColor= '#f4d03f'
          placeholder="Rondas"
          onChangeText={(value) => ChangeText('cod',value) }
         
        />
      </View>

      <View style={styles.inputGroup2}>
        <TextInput placeholderTextColor= '#f4d03f'
          placeholder="Cantidad"
          onChangeText={(value) => ChangeText('Phone',value) }
        />
      </View>

    
    
      <View style={styles.inputGroup}>
        <TextInput placeholderTextColor= '#f4d03f'
          placeholder="Try"
          onChangeText={(value) => ChangeText('Password',value) }
          secureTextEntry={true}
        />
      </View>

      <View >
        <Button color='#7dcea0' title="SIGN UP" onPress={()=> phone(data)} />
      </View>

    </ScrollView>
     );
 }
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
      backgroundColor: '#2e4053',
      color:"white"
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#48c9b0",
    },
     inputGroup1: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#48c9b0",
      width:40,
      
      
        flexDirection: 'row',
        flexWrap: "wrap",
       
      
      
    },
    inputGroup2: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#48c9b0",
      width:120,
      
      
        flexDirection: 'row',
        flexWrap: "wrap",
       
        
        
    },
   
    buton: {
      ba: '#48c9b0',
        
    },
    cv:{
        alignItems: 'center',
        padding: 18,
    },
    button:{
color:'#7dcea0'
    }
  });