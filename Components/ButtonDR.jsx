import { StyleSheet, View, Button} from 'react-native';
import * as url from '../text'
import { useNavigation } from "@react-navigation/native";


export default function ButtonDR({}) {
    const navigation= useNavigation()
    let code= localStorage.getItem("codigo")
    const del=async() =>{
        try {
            fetch(url.url+"room/"+code,{
      
                    method: 'DELETE',
                    headers: new Headers({
                        'authorization': localStorage.getItem("token"),
                    })
      
                }).then(function (response) {
              
                   
                    return response.json()
                                   }).then(data1=>{
                    console.log("Ola")
                    navigation.navigate("Home")
                    return data1
                })
        } catch (error) {
      
            console.error(error);    
      
        }
        
    
    }
  return (
    
    <Button
    color='#7dcea0'
       title="Delete Room"
      onPress={del}
     />
      
   
  );
};