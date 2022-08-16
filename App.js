import React from 'react';
import { Modal,StyleSheet, Text, View, FlatList, Image,TouchableOpacity,SafeAreaView,Switch } from 'react-native';
import {useState} from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Button from 'react-native-button';
import { TextInput } from 'react-native';
import ToggleSwitchExample from './component/ToggleSwitch';
import ModalExample from './component/Modal';
import 'react-native-gesture-handler';
import SecondScreen from './SecondScreen';
import HomeScreen from './HomeScreen'
import Login from './Login';
import Connection from './Connection';
import Signup from './Signup';
import Main from './Main';
import Profile from './Screens/Profile';
import Scanner from './component/Scanner';
import Dashboard from './Dashboard';
const Stack = createStackNavigator();

  const LoginNavigation = ({navigation}) =>{
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    );
  }
  const ConnectionNavigation = ({navigation}) =>{
    return (
      <Stack.Navigator initialRouteName="Connection">
        <Stack.Screen
          name="Connection"
          component={Connection}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    );
  }
  const SignupNavigation = ({navigation}) =>{
    return (
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    );
  }


  const MainNavigation = ({navigation}) =>{
    return (
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    );
  }
  const ProfileNavigation = ({navigation}) =>{
    return (
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    );
  }
  const ScannerNavigation = ({navigation}) =>{
    return (
      <Stack.Navigator initialRouteName="Scanner">
        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    );
  }

  const DashboardNavigation = ({navigation}) =>{
    return (
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    );
  }

  
 
export default function App (props)  { 

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
       
         <Stack.Screen
          name="Login"
          component={LoginNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Connection"
          component={ConnectionNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Main"
          component={MainNavigation}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Profile"
          component={ProfileNavigation}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Scanner"
          component={ScannerNavigation}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="Dashboard"
          component={DashboardNavigation}
          options={{headerShown: false}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
  

}

