import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from './Screens/registerScreen';
import Login from './Screens/loginScreen';
import User from './Screens/userScreen';
import perfilUpdate from './Screens/Edits/editScreen'
import home from './Screens/homeScreen';
import RoomS from './Screens/roomScreen';


const Stack= createStackNavigator()

export default function Navigator(){
return(
<Stack.Navigator  
  
    initialRouteName="RoomS"
   >
      
      
      <Stack.Screen 
        name="Login"
        component={Login}
       
        />
        
        <Stack.Screen name="User"
        component={User}
       
      />
      <Stack.Screen name="UserUp"
        component={perfilUpdate}
       
      />
        <Stack.Screen name="Register"
        component={Register}
        
        />
         <Stack.Screen 
        name="Home"
        component={home}
       
        />
 <Stack.Screen name="RoomS"
        component={RoomS}
       
      />
       
    </Stack.Navigator>
    
)
}
