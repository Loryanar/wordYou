import React, {useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button} from 'react-native'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { List } from '../App';
import axios from "axios";
import * as url from '../text'
import { useNavigation } from "@react-navigation/native";

export default function Register(){
          const navigation=  useNavigation()
  
const [state,setState]= useState({
             Username:'',
             Phone:'',
             Password:'' 

         })  
         const ChangeText=(name, value)=>{
            setState({...state, [name]: value})
         }

    const data ={
        "Username":state.Username, 
            "Telefono":state.Phone,
            "Password":state.Password
    }
    function reg(data){
       


        axios.post(url.url+'registro', data)
                .then(async (response) => {
                    console.log(response.data);
                    console.log('wiiu');
                    navigation.navigate('User')
                    localStorage.setItem("token",response.data.token)
                   
                })
                .catch(error => {
                    
                    console.log("-------- error ------- "+error);
                    alert("result:"+error)
                });
        }
    
         
         return(
        

<ScrollView style={styles.container}>
      
      <View style={styles.inputGroup}>
        <TextInput placeholderTextColor= '#f4d03f'
          placeholder="Username"
           onChangeText={(value) => ChangeText("Username", value) }
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput placeholderTextColor= '#f4d03f'
          placeholder="Phone"
          onChangeText={(value) => ChangeText('Phone',value) }
        />
      </View>

      
    
      <View style={styles.inputGroup}>
        <TextInput placeholderTextColor= '#f4d03f'
          placeholder="Password"
          onChangeText={(value) => ChangeText('Password',value) }
          secureTextEntry={true}
        />
      </View>

      <View >
        <Button color='#7dcea0' title="SIGN UP" onPress={()=> reg(data)} />
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
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
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