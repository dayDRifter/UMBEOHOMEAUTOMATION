import React, {useState, useEffect} from 'react';
import { Text, View , StyleSheet, Alert} from 'react-native';
import { Switch} from 'react-native-paper' ;
  
const ToggleSwitchExample = () =>{
    const [CONNECTED, setSwitchOn] = useState(false)
  
    return(
        <View style ={styles.container}>
        
            <Switch value={CONNECTED} onValueChange={() => {
                setSwitchOn(!CONNECTED)
                Alert.alert("CONNECTED : " + !CONNECTED)} }/>
        </View>
    )
}
  
export default ToggleSwitchExample ;
  
const styles = StyleSheet.create({
     container:{
         padding:0,
         flexDirection:'row',
         justifyContent:'space-around'
     }
})