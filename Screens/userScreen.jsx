import React ,{useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button,TouchableOpacity} from 'react-native'; 
import { useNavigation } from "@react-navigation/native";
import { Card, Avatar, Image } from "react-native-elements";
import Tabs from '../Components/Tabs'



const Perfil = () => {
    useEffect(() => {
      cargar()
      })
const [flag,setFlag] = useState(true)
    const [state,setState]= useState({
        data:''

    })  
       const ChangeText=(name, value)=>{
       setState({...state, [name]: value})
    }

const navigation= useNavigation()
   
    function cargar(){
        if (flag==true) {
            infoPerfil()
            return setFlag(false)
        }
    }

    
   

    const infoPerfil = async() => {

        try {
           await fetch(url.url+"perfil" ,{
      
                    method: 'GET',
                    headers: new Headers({
                        'authorization': localStorage.getItem("token"),
                    })
      
                }).then(function (response) {
               let data1=response.json()
                   
                    return data1
                                   }).then(data1=>{
                    let data =data1.usuario;
                   ChangeText("data", data)
                    return data
                })
        } catch (error) {
      
            console.error(error);    
      
        }
        
    }

    return(       
        <ScrollView style={styles.container}>
            <View><Tabs/></View>
<Card>
<Text style={styles.titulo}>
                    {state.data.username}
                </Text>
 <View >
                <Text style={styles.infoPerfil}>
                  {state.data.nombre} {state.data.apellido}
                </Text>
                <Text style={styles.infoPerfil}>
                   
                </Text>
                
                <View style={styles.button1}>              
    <Button title="Editar Perfil" onPress={()=> navigation.navigate('UpPerfil')} />
    </View>
    </View>
  
</Card>

         
                 
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
   
    contentButton: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: "wrap",
        marginHorizontal: 5
    },
    button1: {
        color: '#839192',
        marginRight: 3,
        marginVertical: 1,
        width: "30%"
    },
    button2: {
        color: 'blue',
        marginLeft: 2,
        marginVertical: 1,
        width: "49%"
    },
   
    titulo:{
        fontSize: 20,
        fontWeight:'bold',
        padding: 5
    },
    infoPerfil:{
        paddingVertical:2,
        paddingHorizontal: 5
    },
    contentPerfil: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'blue'
    },
    infoPerfilbio: {
        borderWidth: 1,
        marginHorizontal: 5,
        marginVertical: 1
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    }
});

export default Perfil
