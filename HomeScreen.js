
// import React from 'react';
// import { Modal, StyleSheet, Text, View, FlatList, Image,TouchableOpacity,SafeAreaView,Switch } from 'react-native';
// import {useState} from "react";
// //import { createAppContainer ,  createSwitchNavigator} from "react-navigation";
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';

// // import { Component } from 'react';
// import Button from 'react-native-button';
// import { TextInput } from 'react-native';
// import ToggleSwitchExample from './component/ToggleSwitch';
// import ModalExample from './component/Modal';
// import 'react-native-gesture-handler';


// const  Apidata = [{
//   device_name: "1234566",
//   relay_state: "1010"
// },
// {
// device_name: "7894566",
// relay_state:"1001"
// } 
// ]

// export default function HomeScreen(props)
// {
//   const navigation = props.navigation;

//   const [arr,setarr]= React.useState([]);
  
//   const callConvertor = () =>{
     
//       Apidata.map(i =>{
//         console.log(i.device_name);
//         console.log(i);
//         arr.push({
//           "device_id":i.device_name,
//           "new_name":i.device_name,
//           "relay_state":i.relay_state,
//         })
//       })
  
//       console.log('====================================');
  
//       setarr(arr);
//       console.log(arr);

//   }  
  
//   const [inputValue, setInputValue] = useState("");
//   const toggleModalVisibility = () => {
//     setModalVisible(!isModalVisible);
//   };
//   const renderItem = ({item})=>( 
  
  
//     <TouchableOpacity
    
//          onPress={() =>
//       navigation.navigate('SecondScreen')}
//     >
      
    
//   {/* 
//   <Button
//         title="Go to Profile"
//         color="#006600"
        
//       /> */}
//     <View 
//     ////style={styles.item}
//     >
//               <Text>{item.new_name}
              
//               {/* onPress={() =>
//             navigation.navigate('SecondScreen', {
//               paramKey: userName,
//             })} */}
  
  
//               </Text>
//               <TextInput 
//              /// style={styles.text}
//               >
  
                 
  
//               </TextInput>
              
//   <Text style={{padding:40,fontSize:25,flexDirection:'row'}}>
//         {item.new_name}
//       </Text>
           
//       <ToggleSwitchExample />
  
//       <ModalExample />
//       {/* <Navigator>
//       <Home/>
//     </Navigator> */}
    
//             </View>
           
//    </TouchableOpacity>
//   );
       
//   return (
        
//     <View 
//     style={styles.mainBody}
//     >
//            <Button
//           style={{fontSize: 25,backgroundColor:'blue',padding:10}}
//           // styleDisabled={{color: 'red'}}
//          onPress={callConvertor}
//           >
//           SCAN DEVICES
//         </Button>
        
    
//      <FlatList
//             data={arr}
//             style={{flex:1}}
//             keyExtractor={(item) => item.device_id}
//             renderItem={renderItem}
//                 />
               
         
//        </View>
       
//       );
       
    
//   } ;
//   const styles = StyleSheet.create({
//     mainBody: {
//       flex: 1,
//       justifyContent: 'center',
//       alignContent: 'center',
//     }
//   });