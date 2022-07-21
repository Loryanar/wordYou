import React, {useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button, Modal,} from 'react-native'; 
import axios from "axios";
import * as url from '../text'
import { useNavigation } from "@react-navigation/native";
import BcryptReactNative from 'bcrypt-react-native';

export default function Register(){

          const navigation=  useNavigation()
const [isModalVisible, setModalVisible] = useState(false);
const [codigo, setCodigo] = useState(false);
const [codigoH, setCodigoH] = useState();
const [state,setState]= useState({
             Username:'',
             Phone:'',
             Password:'', 
             cod:'',
             codigo:''

         })  
         const ChangeText=(name, value)=>{
            setState({...state, [name]: value})
         }
         const toggleModalVisibility = () => {
          setModalVisible(!isModalVisible);
      };
    const data ={
        "Username":state.Username, 
            "Telefono":state.cod+state.Phone,
            "Password":state.Password,
            "Codigo": state.codigo,
            "CodigoHash": codigoH
            
    }
    function reg(data){
       


        axios.post(url.url+'registro', data)
                .then(async (response) => {
                    console.log(response.data);
                    console.log('wiiu');
                    navigation.navigate('Home')
                    localStorage.setItem("token",response.data.token)
                   
                })
                .catch(error => {
                    
                    console.log("-------- error ------- "+error);
                    alert("result:"+error)
                });
        }
    
   function phone(data){
  
    try {
       fetch(url.url+"verificacion" ,{
 
               method: 'POST',
               headers: new Headers({
                'Content-Type': 'application/json',
               }),body: JSON.stringify(
                {
              "Telefono": data.Telefono,
               })
            
 
           }).then(function (response) {
            console.log(response)
         let data1= response.json()
              console.log(data1)
               return data1
               
                              }).then(data1=>{
               let data =data1.codeHash;
               console.log(data)
            
               if(data!=null){
                toggleModalVisibility()
               setCodigoH(data)
               setCodigo(true)

               }
               return data
           })
   } catch (error) {
 
       console.error(error);    
 
   }
   


  
}      
function hola(){
  if(codigo==true){ reg(data)
  toggleModalVisibility}
 
}

         return(
        


<ScrollView style={styles.container}>
      
<Modal animationType="slide" 
                   transparent visible={isModalVisible} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                        <TextInput placeholder="Ingrese el codigo" 
                        onChangeText={(value) => ChangeText("codigo", value) }
                                    />
  
                       <Button title="Verificar" onPress={hola} />
                        {/** This button is responsible to close the modal */}
                        <Button title="Close" onPress={toggleModalVisibility} />
                    </View>
                </View>
            </Modal>

      <View style={styles.inputGroup}>
        <TextInput placeholderTextColor= '#f4d03f'
          placeholder="Username"
           onChangeText={(value) => ChangeText("Username", value) }
        />
      </View>

  <View style={styles.inputGroup1}>
        <TextInput placeholderTextColor= '#f4d03f'
          placeholder="cod"
          onChangeText={(value) => ChangeText('cod',value) }
         
        />
      </View>

      <View style={styles.inputGroup2}>
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