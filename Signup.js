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
import { useFonts, Inter_600SemiBold,Inter_500Medium} from '@expo-google-fonts/inter';

import { Colors } from "react-native-paper";
// import { CheckBox } from "react-native";
 import CheckBox from "@react-native-community/checkbox";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation = props.navigation;
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,Inter_500Medium,
  });
 
  return (
    <View style={styles.container}>
      <View>
      <StatusBar style="auto" />
      <Text style={styles.header}>
        Sign Up
      </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email/Phone/Applied"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
     
      
      <View style={styles.checkline}>
              <CheckBox style={styles.CheckBox}
     disabled={false}
     value={toggleCheckBox}
     onValueChange={(newValue) => setToggleCheckBox(newValue)}
   />
   <TouchableOpacity>
         <Text style={styles.agree}>I Agree privacy policy</Text>
        
     </TouchableOpacity>
    </View>
   <View style={styles.btn}>
   <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Connection')}
      />
   </View>
      


     
      
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCCC",
   
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    position: 'absolute',
width: 295,
height: 58,
left: 33,
top: 171,
backgroundColor: "#FFFFFF",
borderRadius:10
  },
  TextInput: {
    // height: 50,
    // flex: 1,
    // padding: 10,
    // marginLeft: 20,
    top:18,
    left:20,
    height:19,
    width:220,
    color:"#858585",
    position:'absolute',
    fontFamily:'Inter_500Black',
    fontSize:12,
    lineHeight:15
   
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
  

    position: 'absolute',
left: 105,
right: 12.5,
top: 10,
bottom: 12.5,
height:10.5,
width:10.5,

Color: '#616161',
},

  loginText:{
    color:'#FFFFFF'
  },
  header:{
    position:'absolute',
    fontFamily:'Inter_600SemiBold',
width:159,
height:40,
    left:34,
    top:132,
    fontSize:35,
    lineHeight:34,
    fontStyle:"normal"


    
},
checkline:{
    
  top:250,
  
  flexDirection:'row',
  
},
 
agree: {
  height: 15,
  left:145,
 color: '#00A0E3',
 lineHeight:14.52,
 top:13
},
btn:{
  top:240,
  height:46,
  margin:30,
  borderRadius:20
}

});