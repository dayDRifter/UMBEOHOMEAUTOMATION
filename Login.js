import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import AppLoading from 'expo-app-loading';

import {
  StyleSheet,
  Text,
  View,
  Image,                     
  TextInput,
  Button,                            
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { Colors } from "react-native-paper";
// import { CheckBox } from "react-native";
 import CheckBox from "@react-native-community/checkbox";
 import * as Font from 'expo-font';
 import { useFonts, Inter_600SemiBold,Inter_500Medium} from '@expo-google-fonts/inter';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation = props.navigation;

  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,Inter_500Medium,
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
  return (
    <View style={styles.container}>
    <View>
      <StatusBar style="auto" />
      <Text style={styles.header}>
      Log In
      </Text>
    </View>
    <View style={styles.inputView}>
    <TextInput
          style={styles.TextInput}
          placeholder="Please Enter Your Account"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
     
    </View>
    <View style={styles.nextiv}>

          <TextInput
                   style={styles.nextTI}
                   placeholder="Password"
                   placeholderTextColor="#003f5c"
                   secureTextEntry={true}
                   onChangeText={(password) => setPassword(password)}
                   
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
    <SafeAreaView     style={styles.loginBtn}
>
    <Button
        title="Log In"
        onPress={() => navigation.navigate('Connection')}
      />
    </SafeAreaView>
    <View>
         <TouchableOpacity>
         <Text style={styles.forgot_button}
         onPress={() =>
          navigation.navigate('Signup')}>Forgot Password?</Text>
   </TouchableOpacity>
       
    </View>
    </View>
 
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCCC",
   
  },

  nextiv:{
    position: 'absolute',
width: 295,
height: 58,
left: 33,
top: 244,

backgroundColor: "#FFFFFF",
borderRadius:10

  },
  nextTI:{
    position: 'absolute',
    width: 220,
    height: 19,
    left: 20,
    top:18,
    fontFamily: 'Inter_600Black',
  
  fontStyle:'normal',
    fontSize:12,
    lineHeight:15,
    
    color: "#858585",
  },
  checkline:{
    
    top:315,
    flexDirection:'row',
    
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
 
  agree: {
    height: 15,
    left:145,
   color: '#00A0E3',
   lineHeight:14.52,
   top:13
  },
 
  loginBtn: {
    // width: "70%",
    // borderRadius: 10,
    // height: 50,
    // alignItems: "center",
    justifyContent: "center",
    // marginTop: -30,
    // backgroundColor: "#00A0E3",
    // shadowOpacity:"#00000040",

    position: 'absolute',
width: 295,
height: 66,
left: 33,
top: 360,

// backgroundColor: '#00A0E3',
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 10px;
borderRadius:10,
  },
 

  loginText:{
    color:'#FFFFFF',
    fontFamily:'Inter_600SemiBold',
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
  check:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  forgot_button:{
    position: 'absolute',
width: 220,
height: 19,
left: 140,
top: 420,
fontFamily:'Inter_600SemiBold',

// font-style: normal;
// font-weight: 666;
// font-size: 13px;
// line-height: 16px;
// text-align: center;

color: "#00A0E3",
// font-variation-settings: 'slnt' 0;
  }

});