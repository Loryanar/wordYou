import React from "react";
import { View, Text ,StyleSheet, Button,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Tabs({}) {
    const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
        
        
      
    <TouchableOpacity
            style={styles.button1}
            >
            <Text style={styles.buttonTextStyle} onPress={()=>navigation.navigate("Search")} >Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            >
            <Text style={styles.buttonTextStyle} onPress={()=>navigation.navigate("Perfil")} >User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            >
            <Text style={styles.buttonTextStyle} onPress={()=>navigation.navigate("Post")} >Post</Text>
          </TouchableOpacity>
      </View>

      
   
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0,
    backgroundColor: '#0787d7d',
    borderRadius: 30,
            
            elevation:0,
            display: "inline-block",
          
    
 
            

  },
  
  button1: {
    padding: 13,
    margin: 0 ,    
    float:"left",
    color:'black',
      width: "30%"
  
},
buttonTextStyle: {
  color:'black',
  paddingVertical: 10,
  fontSize: 16,
}
});

