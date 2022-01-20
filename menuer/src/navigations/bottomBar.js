import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import screens 
import Home from "../screens/home"
import Search from "../screens/search"
import AddNewMenu from "../screens/add_new_menu"
import MyMenues from "../screens/my_menues"
import Profile from "../screens/profile"

// import icons
import {BOTTOMBAR_HOME, BOTTOMBAR_SEARCH, BOTTOMBAR_PLUS, BOTTOMBAR_DOCS, BOTTOMBAR_PROFILE} from "../assets/images/index"

const Tab = createBottomTabNavigator();

function BottomBar() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
            options={TabOption("Home", BOTTOMBAR_HOME)}/>
        <Tab.Screen name="Search" component={Search} 
            options={TabOption("Search", BOTTOMBAR_SEARCH)}/>
        <Tab.Screen name="Add New Menu" component={AddNewMenu} 
            options={TabOption("New", BOTTOMBAR_PLUS)}/>
        <Tab.Screen name="My Menues" component={MyMenues} 
            options={TabOption("My Menues", BOTTOMBAR_DOCS)}/>
        <Tab.Screen name="Profile" component={Profile} 
            options={TabOption("Profile", BOTTOMBAR_PROFILE)}/>
    </Tab.Navigator>
  );
}

 

const TabOption = (TabHeader, TabIcon) => {
    return {
        tabBarLabel: "TabHeader",
        tabBarLabelStyle: {
            fontSize: 1
        },
        tabBarIcon: ({focused, size}) => (
            <Image
            source={TabIcon}
            style={ TabHeader == "New"? {width:40,height:40} : {width:30,height:30}}
            />
        ),
    }
}

export default BottomBar;