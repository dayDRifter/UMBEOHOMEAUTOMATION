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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation = props.navigation;

 
  return (
    <View style={styles.container}>
        
      {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}
      
      <StatusBar style="auto" />
      <Text style={styles.header}>
        Log In
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please Enter Your Account"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
      {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
         */}
           <CheckBox style={styles.CheckBox}
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
        <Text style={styles.forgot_button}>I Agree to privacy policy</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}
        
        onPress={() =>
          navigation.navigate('Connection')}>TESTING</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot_button}
        
        onPress={() =>
          navigation.navigate('Signup')}>TESTING 1</Text>
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
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems:"flex-start"
   
// width: 295,
// height: 58,
// left: 33,
// top: 171,

// backgroundColor: "#FFFFFF",
// borderRadius: 10
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
   color: '#00A0E3'
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
  CheckBox:{
         height:10.5,
         width:10.5,
         left:-30,
         top:1.75,
         position:'absolute',
         bottom:12.5,
  },

  loginText:{
    color:'#FFFFFF'
  },
  header:{
      position:'absolute',
      
      left:58,
      top:150,
      fontSize:28

      
  }

});