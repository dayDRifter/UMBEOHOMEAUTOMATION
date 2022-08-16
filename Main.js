import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';
import { RNCamera } from 'react-native-camera';

import React, { useState } from "react";
import { ListItem, Searchbar,Card } from "react-native-paper";
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,FlatList,ImageBackground} from "react-native";
import { Icon } from 'react-native-elements';

// import About from "./Screens/About";
// import Home from "./Screens/Home";
// import Setting from "./Screens/Settings";

import { Svg } from "react-native-svg";
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';


import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { createDrawerNavigator } from '@react-navigation/drawer';

import Vector from './assets/Vector.svg';
import Scanner from './component/Scanner';



// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//   },
//   {
//     id: 'gih555b456-541-sd6544-ghhbd',
//   },
//   {
//     id: 'bgugher-fff544-0eghei4',
//   },
//   {
//     id: 'kgueg444-jvbjhb-355fd-654dffd',
//   }
// ];

// const Items = ({ titles }) => (
//   <View style={styles.items}>
//     <Text style={styles.titles}>{titles}</Text>
//   </View>
// );
        
        const  Apidata = [{
          device_name: "1234566",
          relay_state: "1010",
            new_name: "Living Room" ,
            status: "Connected  ",
        },
        {
        device_name: "7894566",
        relay_state:"1001",
        new_name:"Kitchen",
        status:"Connected  ",
        } 
        ]
    
          
        
          
      
 const Drawer = createDrawerNavigator();
export default function Main(props) {

  const navigation = props.navigation;
  const [arr,setarr]= React.useState([]);


  const callConvertor = () =>{
     
    Apidata.map(i =>{
      console.log(i.device_name);
      console.log(i.relay_state);
      console.log(i.status);
      console.log(i);
      arr.push({
        "device_id":i.device_name,
        "new_name":i.device_name,
        "relay_state":i.relay_state,
        "status":i.status,
      })
    })

    console.log('====================================');

    setarr(arr);
    console.log(arr);

}  
const renderItem = ({item})=>( 
  
  <View>
  <TouchableOpacity
  
  style={styles.newn}>
    </TouchableOpacity>


    <Text>
  {item.status}
  
              </Text>
              <Text>
              {item.relay_state}


              </Text>

    </View>



)

  
let [ShowComment, setModelComment] = useState(false);
let [animateModal, setanimateModal] = useState(false);

  return (  
    <View>  
    <View style={styles.container}>
    <TouchableOpacity
        style={styles.touch}
        
        // onPress={() =>r
        //   navigation.navigate('Profile')}>
>
<Image source={require('./assets/philip.png')} resizeMode='contain' style={styles.image} />

      </TouchableOpacity>

      <Searchbar
    placeholder="Search"
    style={styles.sea}
  
  /> 
    </View>

<View style={styles.con}>
<FlatList
            data={arr}
            style={{flex:1}}
            keyExtractor={(item) => item.device_id}
            renderItem={renderItem}
            horizontal={true}
            
                />
                 <TouchableOpacity
      style={styles.to}
      onPress={callConvertor}
     
     >
          <Image source={require('./assets/vectorr.png')} resizeMode='contain' style={styles.image} />

{/* <Svg width={200} height={200} /> */}

      </TouchableOpacity>
</View>
     
       <View style={styles.neww}>
<Text style={styles.scan}>
  Scanning
</Text>
<TouchableOpacity style={styles.button}onPress={() =>
        navigation.navigate('Scanner')} >
<Image source={require('./assets/Scanner.png')} resizeMode='contain' style={styles.scannerimage} />
</TouchableOpacity>
       </View>
    {/* <View style={styles.api}>


    </View> */}
    <View style={styles.devices}>
    <Text style={{ fontSize: 23,marginLeft:17 }}>

      Add Devices From List

        </Text>
      
      <FlatList 
      data={Apidata}
            style={{flex:1}}
            keyExtractor={(item) => item.device_id}
            renderItem={renderItem}
            horizontal={true}
            

      />
    </View>
    <SwipeUpDownModal
  modalVisible={ShowComment}
  PressToanimate={animateModal}
  //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
  ContentModal={
    <View style={styles.containerContent}>
      <FlatList
        // data={data}
        renderItem={({item, index}) => (
          <item key={index} Data={item} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  }
  HeaderStyle={styles.headerContent}
  ContentModalStyle={styles.Modal}
  HeaderContent={
    <View style={styles.containerHeader}>
          <Button 
              Title={"Press Me"}
              onPress={() => {
                setanimateModal(true);
              }}
           />
    </View>
  }
  onClose={() => {
      setModelComment(false);
      setanimateModal(false);
  }}
/>


    </View>  

   
  )

  // return(

       
    
//   <Drawer.Navigator initialRouteName="Home"
//    >


//       <Drawer.Screen name="Home"
//       component={HomeNavigation}

//       />
//       <Drawer.Screen name="Setting" 
//                      component={SettingNavigation} />
//        <Drawer.Screen name="About" 
//                      component={AboutNavigation}
//        />
      
      
//     </Drawer.Navigator>

  

//  );
  
  
}
const styles = StyleSheet.create({

// serac:{
//   height:30,
//   borderRadius:20,
  
// },

// navbar:{

//   margin:100,
//   width:50
// }

container:{
  marginTop:20,
  // marginLeft:80,
  // // marginRight:80,
  flexDirection:'row'
  
},
con:{
  flexDirection:'row',
  marginTop:-55
},
touch:{

  borderWidth: 1,
  borderColor: 'rgba(0,0,0,0.2)',
  alignItems: 'center',
  justifyContent: 'center',
  width: 41.6,
  height: 41.6,
  backgroundColor: '#fff',
  borderRadius:100,
  marginLeft:15,
  marginTop:5,

  
  
},
to:{
   
  borderWidth: 1,
  borderColor: 'rgba(0,0,0,0.2)',
  alignItems: 'center',
  justifyContent: 'center',
  width: 80,
  height: 80,
  backgroundColor: '#fff',
  borderRadius:100,
  marginTop:72,
  marginRight:110
  
},

sea:{

  borderRadius:10,
  marginLeft:55,
  marginTop:10,
  height:27,
  width:177

},

image:{
  height:41,
  width:41
},
newn:{
     
  borderWidth: 1,
  borderColor: 'rgba(0,0,0,0.2)',
  alignItems: 'center',
  justifyContent: 'center',
  width: 80,
  height: 80,
  backgroundColor: '#fff',
  borderRadius:100,
  marginTop:70,
  

},
neww:{
  marginTop:40,
  backgroundColor:'#DDDDDD',
  flexDirection:'row'
},
scan:{
  width:137,
  height:30,
  fontSize:19,
  marginLeft:16,
  

},
scannerimage:{
  marginLeft:155,
  height:30,
  width:30
},
api:{
  backgroundColor:'#DDDDDD'
},
devices:{
  backgroundColor:'#DDDDDD',
  marginTop:100,
  height:400

},

containerHeader: {
  flex: 1,
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  backgroundColor: '#F1F1F1',
},
headerContent:{
  marginTop: 0,
},

Modal: {
  backgroundColor: '#005252',
  marginTop: 0,
}



})
