import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,FlatList,ImageBackground} from "react-native";
import React, { useState } from "react";

import SwipeUpDownModal from 'react-native-swipe-modal-up-down';



const Modalsbottom = () =>{


  let [ShowComment, setShowModelComment] = useState(false);
  let [animateModal, setanimateModal] = useState(false);
return(
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
)
}
export default Modalsbottom ;

const styles = StyleSheet.create({
  containerContent: {flex: 1, marginTop: 40},
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
});




