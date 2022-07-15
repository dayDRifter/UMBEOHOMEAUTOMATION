import React from 'react';
import { Modal,StyleSheet, Text, View, FlatList, Image,TouchableOpacity,SafeAreaView,Switch } from 'react-native';
import {useState} from "react";
//import { createAppContainer ,  createSwitchNavigator} from "react-navigation";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

// import { Component } from 'react';
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
const Stack = createStackNavigator();
{/* <Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="SecondScreen" component={SecondScreen} />
</Stack.Navigator> */}

// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     SecondScreen: {
//       screen: SecondScreen,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );
// const AppContainer = createAppContainer(RootStack);

// const Second = (props) => {

  
  // const Home = (props) => {}
  // const HomeScreenNavigation = ({navigation}) =>{
  //   return (
  //     <Stack.Navigator initialRouteName="HomeScreen">
  //       <Stack.Screen
  //         name="HomeScreen"
  //         component={HomeScreen}
  //         options={{headerShown: false}}
  //       />
        
  //     </Stack.Navigator>
  //   );
  // }
  // const SecondScreenNavigation = ({navigation}) =>{
  //   return (
  //     <Stack.Navigator initialRouteName="SecondScreen">
  //       <Stack.Screen
  //         name="SecondScreen"
  //         component={SecondScreen}
  //         options={{headerShown: false}}
  //       />
        
  //     </Stack.Navigator>
  //   );
  // }
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

 
export default function App (props)  { 

// function Item({ item }) {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        {/* <Stack.Screen
          name="HomeScreen"
          component={HomeScreenNavigation}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SecondScreen"
          component={SecondScreenNavigation}
          options={{headerShown: false}}
        /> */}
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

      </Stack.Navigator>
    </NavigationContainer>
  );
  
//     }

}

