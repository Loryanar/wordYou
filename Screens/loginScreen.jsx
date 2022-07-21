import React ,{useState} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button,TouchableOpacity} from 'react-native'; 
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import * as url from '../text'

 
export default function Login({navigation}){
    const [state,setState]= useState({
        Username:'',
        
        Password:'' 

    })  
    const ChangeText=(name, value)=>{
       setState({...state, [name]: value})
    }
    const data ={
        "Username":state.Username, 
        "Password":state.Password
    }
    
    function log(data){
    
           

    axios.post(url.url+'log', data)
      .then(async (response) => {
      console.log(response.data);
      console.log('wiiu');
      navigation.navigate('Home')
       localStorage.setItem('token',response.data.token)
   
  
   
})
.catch(error => {
    
    console.log("-------- error ------- "+error);
    alert("result:"+error);
  
   
});


}
        
   
    
    return(
         
        <ScrollView style={styles.container}>
            
              <View style={styles.inputGroup}>
                <TextInput placeholderTextColor= '#f4d03f'
                  placeholder="Username"
                  onChangeText={(value) => ChangeText("Username", value)} 
                />
              </View>
              <View style={styles.inputGroup}>
                <TextInput  placeholderTextColor= '#f4d03f'
                  placeholder="Password"  onChangeText={(value) => ChangeText('Password',value) } secureTextEntry={true}
                />
              </View>
        
              <View >
                <Button color='#7dcea0' title="Login"  
                onPress={()=> log(data) }/>
              </View>

<View style={styles.cv}> 
              <TouchableOpacity onPress={() => navigation.navigate('Register') }>
            <Text style={styles.buton}>
                Sing up here
            </Text>
        </TouchableOpacity>
        </View>
            </ScrollView>
        
             );
         }
         const styles = StyleSheet.create({
            container: {
              flex: 1,
              padding: 35,
              backgroundColor: '#2e4053',
              
            },
            inputGroup: {
              flex: 1,
              padding: 0,
              marginBottom: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#48c9b0",
              
              
            },
            
            buton: {
              color: '#f4d03f'
                
            },
            cv:{
                alignItems: 'center',
                padding: 18,
            },
           
          });