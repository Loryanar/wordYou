import React, {useState, useEffect} from 'react';
import {Text, ImageBackground,View,StyleSheet, TextInput, ScrollView,Button,  Dimensions} from 'react-native'; 
import ButtonDR from '../../Components/ButtonDR';
import * as url from '../../text'
import { useNavigation } from "@react-navigation/native";

const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

export default function RoomS(){
    
    const navigation= useNavigation()
    const [state,setState]= useState({
        Timer:'',
        Rounds:'',
        Words:'', 
        Try:'',
        Code:localStorage.getItem("codigo"),
       

    })  
    const ChangeText=(name, value)=>{
       setState({...state, [name]: value})
    }
    

    const data ={
       'Timer':state.Timer,
        'Rounds':state.Rounds,
        'Words':state.Words, 
        'Try':state.Try,
        'Code':state.Code
       
    }
    console.log(data)

    const create = () =>{
        try{
    
          fetch(url.url+"room",{
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
                                        navigation.navigate('RoomG')
                       
                   })
           } catch (error) {
         
               console.error(error);    
         
           }
  
      
  } 



    const image = { uri: "https://i.gifer.com/7U5y.gif" };
    

     
         return(
        


<ScrollView >
<ImageBackground source={image} resizeMode="stretch" style={styles.image}>


      <View style={styles.inputGroup}>
        <TextInput style={styles.container} placeholderTextColor= '#f4d03f'
          placeholder="Time"
           onChangeText={(value) => ChangeText("Timer", value) }
        />
      </View>

  <View style={styles.inputGroup}>
        <TextInput  style={styles.container} placeholderTextColor= '#f4d03f'
          placeholder="Rounds"
          onChangeText={(value) => ChangeText('Rounds',value) }
         
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput  style={styles.container} placeholderTextColor= '#f4d03f'
          placeholder="Words"
          onChangeText={(value) => ChangeText('Words',value) }
        />
      </View>



    
    
      <View style={styles.inputGroup}>
        <TextInput style={styles.container}  placeholderTextColor= '#f4d03f'
          placeholder="Try"
          onChangeText={(value) => ChangeText('Try',value) }
        />
      </View>
<View style={styles.inputGroup}>
        <TextInput  style={styles.container} placeholderTextColor= '#f4d03f'
          placeholder={state.Code}
          onChangeText={(value) => ChangeText('Code',value) }
        />
      </View>
      <View >
        <Button style={styles.buton} color='#7dcea0' title="Edit Room" onPress={()=> create()} />
      </View>
      <ButtonDR/>
</ImageBackground>
    </ScrollView>
     );
 }
 const styles = StyleSheet.create({
    image: {
      
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
       textAlign:'center'
    },
    inputGroup: {
     
      padding: 0,
      marginBottom: 15,
     backgroundColor:"#2e4053",
      borderRadius:30,
      width:200,
      height:50,
    },
     
   
    buton: {
     
      padding: 0,
      marginBottom: 15,

      borderRadius:30,
      width:200,
      height:50,
    },
    cv:{
        alignItems: 'center',
        padding: 18,
    },
    button:{
color:'#7dcea0'
    }
  });