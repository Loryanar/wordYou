import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from './Screens/registerScreen';
import Login from './Screens/loginScreen';
import User from './Screens/userScreen';
import UserUp from './Screens/Edits/editScreen'


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
        component={UserUp}
       
      />
        <Stack.Screen name="Register"
        component={Register}
        
        />

       
    </Stack.Navigator>
    
)
}
