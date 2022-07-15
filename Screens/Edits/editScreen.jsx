import React, {useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button} from 'react-native'; 
import * as url from '../../text'
import { useNavigation } from "@react-navigation/native";
import Tabs from '../../Components/Tabs';

const logout = () => {

    try {
       fetch(url.url+"log" ,{
  
                method: 'GET',
                headers: new Headers({
                    'authorization': localStorage.getItem("token"),
                }),body: JSON.stringify(
                  {
                "Username":state.Username, 
                
                "Password":state.Password
                 })
              })
  
            .then(function (response) {
  
                console.log(response);
                if (response.status == 200) {
                 localStorage.removeItem("token")
                 console.log(response.json());
                 navigation.navigate("Login")
                   
                }

                return null
  
            })
    } catch (error) {
  
        console.error(error);    
  
    }
    
}

const perfilUpdate = ( )=>{
    const navigation= useNavigation()
    const [state,setState]= useState({
        Username:'',
       Telefono:'',
        NPassword:'' ,
        OPassword:'',

    })  
    const ChangeText=(name, value)=>{
       setState({...state, [name]: value})
    }

const data ={
       "Username":state.Username, 
       "Telefono":state.Telefono,
       "oldPassword":state.OPassword,
       "newPassword":state.NPassword
}

const update = () =>{
      try{
  
        fetch(url.url+"perfil",{
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem("token")
               }),
            body: JSON.stringify(
              data)
            }).then(function (response) {
                let data1=response.json()
                     console.log(data1)
                     return data1
                                    }).then(data1=>{
                     if(data1.estadoUsername==1){
                        localStorage.setItem("token",data1.newToken)
                     }  if(data1.estadoUsername==0){
                        alert("El usuario ya existe")
                     }
                    navigation.navigate("User")
                     return data
                 })
         } catch (error) {
       
             console.error(error);    
       
         }

    
} 
function del() {
    
        try {
            fetch(url.url+"perfil",{
      
                    method: 'DELETE',
                    headers: new Headers({
                        'authorization': localStorage.getItem("token"),
                    })
      
                }).then(function (response) {
              
                   
                    return response.json()
                                   }).then(data1=>{
                    console.log("Ola")
                    navigation.navigate("Login")
                    return data1
                })
        } catch (error) {
      
            console.error(error);    
      
        }
        
    }

   
    
         
    return(<ScrollView style={styles.container}>
      
      <View style={styles.inputGroup}>
        <TextInput  placeholderTextColor= '#f4d03f'
          placeholder="Username"
          
          onChangeText={(value) => ChangeText('Username',value) }
        />
      </View>

    
      <View style={styles.inputGroup}>
                <TextInput  placeholderTextColor= '#f4d03f'
                  placeholder="Phone"  onChangeText={(value) => ChangeText('Phone',value) } secureTextEntry={true}
                />
              </View>
        
     

      <View style={styles.inputGroup}>
                <TextInput  placeholderTextColor= '#f4d03f'
                  placeholder="OldPassword"  onChangeText={(value) => ChangeText('OPassword',value) } secureTextEntry={true}
                />
              </View>
        
        
              <View style={styles.inputGroup}>
                <TextInput  placeholderTextColor= '#f4d03f'
                  placeholder="NewPassword"  onChangeText={(value) => ChangeText('NPassword',value) } secureTextEntry={true}
                />
              </View>

      <View style={styles.contentButton}>
        <Button   color='#7dcea0' title="Saving" onPress={()=> update()} />
      </View>
      <View>
                <View style={styles.contentButton}>
                    <Button  color='#7dcea0' title="Log out"  onPress={() => logout()}/>
                </View>
                <View style={styles.contentButton}>
                    <Button  color='#7dcea0' title="Delete User"  onPress={() => del()}/>
                </View>
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
        
        
      },    contentButton: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: "wrap",
        marginHorizontal: 5,
        marginBottom: 10,
        alignItems: 'center'
    },
  
  });
 export default perfilUpdate;