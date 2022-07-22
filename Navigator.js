import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from './Screens/registerScreen';
import Login from './Screens/loginScreen';
import User from './Screens/userScreen';
import PerfilUpdate from './Screens/Edits/editScreen'
import Home from './Screens/homeScreen';
import RoomS from './Screens/roomScreen';
import Room from './Screens/Room'
import EditRoom from './Screens/Edits/EditRoom'

const Stack= createStackNavigator()

export default function Navigator(){
return(
<Stack.Navigator  
  
    initialRouteName="Login"
   >
      
      
      <Stack.Screen 
        name="Login"
        component={Login}
       
        />
        
        <Stack.Screen name="User"
        component={User}
       
      />
      <Stack.Screen name="UserUp"
        component={PerfilUpdate}
       
      />
        <Stack.Screen name="Register"
        component={Register}
        
        />
         <Stack.Screen 
        name="Home"
        component={Home}
        />
 <Stack.Screen name="RoomS"
        component={RoomS}
       
      />
       <Stack.Screen name="Room"
        component={Room}
       
      />
       
       <Stack.Screen name="EditRoom"
        component={EditRoom}
       
      />
       
    </Stack.Navigator>
    
)
}
