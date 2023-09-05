import React from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";

export function BlackButton(props) {

    const {onPress,text} = props

  return (
    <TouchableOpacity style={{...styles.button, backgroundColor:'#0a0a0a'}} onPress={onPress}>
      <Text style={{...styles.buttonText, color:'#f1f1f1'}}>{text}</Text>
    </TouchableOpacity>
  );
}

export function WhiteButton(props) {

    const {onPress,text} = props

  return (
    <TouchableOpacity style={{...styles.button, backgroundColor:'#bababa'}} onPress={onPress}>
      <Text style={{...styles.buttonText, color:'#0a0a0a'}}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    button:{
        paddingVertical:15,
        marginVertical:10,
        alignSelf:'center',
        width:'90%',
        borderRadius:10,
    
    },
    buttonText:{
        textAlign:'center',


    }


})


