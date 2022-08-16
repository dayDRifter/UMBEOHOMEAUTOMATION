import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,                     
  TextInput,
  Button,                            
  TouchableOpacity
} from "react-native";
import { Colors } from "react-native-paper";
// import { CheckBox } from "react-native";
 import CheckBox from "@react-native-community/checkbox";
export default function Login(props) {


 
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
   

 
     
      <TouchableOpacity style={styles.loginBtn}
      
      onPress={() => navigation.navigate('Login')}
      >
      <Text style={styles.loginText}>Log In</Text>

 
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      


     
      
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCCC",
    alignItems: "center",
    justifyContent: "center",
  },
 


 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
 
  loginBtn: {
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30,
    backgroundColor: "#00A0E3",
    shadowOpacity:"#00000040",
  },


  loginText:{
    color:'#FFFFFF'
  },


});