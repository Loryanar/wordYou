
import { StyleSheet, View, Button, Text,ScrollView,FlatList,TouchableOpacity } from 'react-native';
import React ,{useState, useEffect} from 'react';
import { useNavigation } from "@react-navigation/native";
import { Card, Avatar, Image } from "react-native-elements";
import * as url from '../text';


export default function Room() {
    const [posts, setPosts] = useState([]);
    const [flag,setFlag] = useState(0)
   
    useEffect(()=> {
    
        cargar()
         })
         function cargar(){
          if (flag==0) {
             rooms()
              return setFlag(flag+1)
          }
      }
    
    const navigation= useNavigation()
       
      
        
       
    
        const rooms = async() => {
    
            try {
               await fetch(url.url+"rooms" ,{
          
                        method: 'GET',
                        headers: new Headers({
                            'authorization': localStorage.getItem("token"),
                        })
          
                    }).then(function (response) {
                   let data1=response.json()
                       
                        return data1
                                       }).then(data1=>{
                                        var  slic= data1.datosRoom
                                        localStorage.setItem("codigo",slic.codigoroom)
                                        
                                       setPosts(slic)
                                          
                                         console.log(slic)
                                         return slic
                       
                    })
            } catch (error) {
          
                console.error(error);    
          
            }
            
        }
    

        
 


    const renderItem = ({item, index}) => (
        localStorage.setItem("codigo",item.codigoroom),
        <TouchableOpacity
        style={styles.separar}
        >
           

            <View style={styles.textContainerRow}>
                <Text style={styles.itemTitle}>{item.codigoroom}</Text>
                <View>

                
          <Text>{item.autor}</Text>
                </View>
                
            </View>
        
        </TouchableOpacity>
    );



        return(       
            <ScrollView style={styles.container}>
              
    <Card>
    <Text style={styles.titulo}>
                        
                    </Text>
     <View >
                
                    
                    <View style={styles.button1}>              
      
        </View>
        </View>
      
    </Card>
    
    <FlatList
                data={posts}
                renderItem={renderItem}
                key={item => item.codigoroom}
            />         
                    <Button
    color='#7dcea0'
       title="Edit Room"
      onPress={()=>navigation.navigate('EditRoom')}
     />
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
        },itemTitle: {
            color: '#FFF',
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 10,
        },
        itemContent: {
            color: '#FFF',
            fontSize: 10,
            marginLeft: 10,
            marginTop: 5,
        },
    });
    
    