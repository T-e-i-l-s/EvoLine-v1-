
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

//var fs = require('react-native-fs');

const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();
var n = ""

export default function App({navigation}) {

  const wrtName = (e) =>{if(e.length > 1){
    db.collection("Evo1").doc("kvest").update({nick:e})
    n = e
  }}


  const toques = () => {
    navigation.navigate("que")
  }

  const [name,sname] = useState("-")
  const naming = (e) => {
    sname(e)
    //fs.writeFile('name.txt', name, function(error){
    // console.log("записано")
    //});
  }

  const strt = () => {
    wrtName(name)
    if (n.length > 1){
      toques()
    }
    //setTimeout(function(){
    //}, 1000);
  }
  return (
    
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={naming} placeholder={"Введите ваше имя"}/>
      <Text style={styles.text} onPress={strt}>Начать</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:22,
    padding:7,
    color:"#800000",
    backgroundColor:"white",
    margin:13,
    fontSize:30,
    borderRadius:10,
    fontFamily:"ubuntu-bold",
  },
  input: {
    backgroundColor:"white",
    width:"93%",
    borderRadius:30,
    padding:"7%" ,
    fontSize:26,
    paddingVertical:0,
    fontFamily:"ubuntu-light",
  },
});
