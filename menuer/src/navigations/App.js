import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import screens 
import Home from "../screens/home"
import Search from "../screens/search"
import AddNewMenu from "../screens/add_new_menu"
import MyMenues from "../screens/my_menues"
import Profile from "../screens/profile"


import Login from "../screens/login"
import Register from "../screens/register"

// import Bottom Bar
import BottomBar from "./bottomBar"


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen
                name="Home"
                component={BottomBar}
                options={{headerBackVisible: false, headerShown: false}}
              />
          </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;