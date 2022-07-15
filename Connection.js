import React from "react";
import  { useState } from "react";
import { Button, ImageBackground, StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

export default function Connection(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation = props.navigation;  
  return(
  <View style={styles.container}>
    <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
      {/* <Text style={styles.text}>Inside</Text> */}
      <TouchableOpacity style={styles.loginBtn}
      
      onPress={() =>
        navigation.navigate('Main')}  >
        <Text style={styles.loginText}>Connect</Text>
      </TouchableOpacity>
     
    </ImageBackground>

  </View>
  );
 
}
// const Connection = () => (
  
// );
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  loginBtn:{
    width: 207,
    borderRadius: 20,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    marginTop:580,
    marginLeft:80,
    backgroundColor: "#F0853D",
    shadowOpacity:"#00000040",
  },
  loginText:{
    color:"#FFFFFF",
    fontSize:20
  }
});

