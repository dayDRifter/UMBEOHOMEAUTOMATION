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



export default function Main(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation = props.navigation;
  return(<View></View>);
}
