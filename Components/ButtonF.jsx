import { StyleSheet, View, Button, Linking} from 'react-native';




export default function ButtonF({}) {
    
    const sms=async() =>{
await Linking.openURL("sms:?body=Hola te invito a jugar wordyou conmigo (link para descargar APK)Algo asi")
    }
  return (
    
    <Button
    color='#7dcea0'
       title="Invitar Amigo"
      onPress={sms}
     />
      
   
  );
};