import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {
  Home,
  Profile,
  Explore,
} from '../Screens/index1';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createMaterialBottomTabNavigator();


function TabRoutes() {
  return (
    
      <Tab.Navigator 
      // screenOptions={{headerShown:false ,tabBarActiveBackgroundColor:"yellow",backgroundColor:"red"}}
      shifting={true}
      activeColor="blue"
      inactiveColor='red'
      barStyle={{backgroundColor:"gray"}}
    initialRouteName={navigationStrings.HOME}> 
        <Tab.Screen name={navigationStrings.PROFILE} component={Profile} options={{tabBarIcon: () =><AntDesign name='profile' size={20} color="black"/> }}/>
        <Tab.Screen options={{ title: 'My Home',tabBarIcon: () =><Ionicons name='home' size={20} color="black"/> }} name={navigationStrings.HOME} component={Home}/>
        <Tab.Screen name={navigationStrings.EXPLORE} component={Explore} options={{tabBarIcon: () =><MaterialIcons name='explore' size={20} color="black"/>}}/>
      </Tab.Navigator>
  
  );
}

export default TabRoutes;
