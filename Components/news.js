


import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();


export default function App() {
  
  const [ev,setEv] = useState("-")
  const [n1,setN1] = useState("-")
  const [n2,setN2] = useState("-")
  const [n3,setN3] = useState("-")
  const [n4,setN4] = useState("-")
  const [n5,setN5] = useState("-")

  var cell = db.collection("Evo1").doc("news");
  cell.get().then((doc) => {
    var q = doc.data()
    setEv(q.event);
    setN1(q.new1)
    setN2(q.new2)
    setN3(q.new3)
    setN4(q.new4)
    setN5(q.new5)
  })

  var unixnow = Date.now()/1000;
  var june = 1685566800; // - June 2023 00/00/00
  
  var ms = Math.round(june - unixnow);
  
  var min = Math.floor(ms/60);
  var hours = Math.floor(min/60)
  var days =  (Math.floor(hours/24)) + " дн.";
  min = min % 60 + " мин.";
  hours = hours % 24 + " ч.";

  return (
    <ScrollView>
      <View style={styles.background}>
        <View style = {styles.block} paddingBottom={20}>
        <Text style={styles.title}>Событие:</Text>
        <Text style={styles.text}>{ev}</Text>
        </View>
        <View style = {styles.block} paddingBottom={20}>
        <Text style={styles.title}>Осталось до лета 2023:</Text>
        <Text style={styles.time}>{days}</Text>
        <Text style={styles.time}>{hours}</Text>
        <Text style={styles.time}>{min}</Text>
        </View>
        <View style = {styles.block} marginBottom={400}>
        <Text style={styles.title}>Новости:</Text>
        <Text style={styles.text}>{n1}</Text>
        <Text style={styles.text}>{n2}</Text>
        <Text style={styles.text}>{n3}</Text>
        <Text style={styles.text}>{n4}</Text>
        <Text style={styles.text}>{n5}</Text>
        </View>
      </View>
    </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:"#800000",
    flex:1,
    alignItems:"center"
  },
  block:{
    textAlign:"center",
    backgroundColor:"white",
    width:"93%",
    marginTop:20,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    paddingBottom:30
  },
  title:{
    fontSize:37,
    padding:20,
    color:"#800000",
    textAlign:'center',
    fontFamily:"ubuntu-bold",
  },
  text:{
    fontSize:22,
    padding:7,
    color:"black",
    textAlign:'center',
    fontFamily:"ubuntu-light",
  },
  time:{
    fontSize:27,
    padding:5,
    color:"black",
    fontFamily:"ubuntu-light",
    
  },
  end:{
    backgroundColor:"#800000",
    height:"50%",
    width:"100%",
  },
  navbuts:{
    backgroundColor:"white",
    justifyContent:"flex-end",
    flexDirection:"row",
    width:"100%",
    height:"8%"
  }
});
