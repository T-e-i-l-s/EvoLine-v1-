
import { SafeAreaView } from 'react-native-safe-area-context';


import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";


const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();

var res = "-"


var r1  = "-"
var r2  = "-"
var r3  = "-"
var r4  = "-"
var r5  = "-"
var r6  = "-"
var r7  = "-"
var r8  = "-"
var r9  = "-"
var r10 = "-"
var r11 = "-"
var r12 = "-"
var r13 = "-"
var r14 = "-"
var r15 = "-"
var r16 = "-"
var r17 = "-"
var r18 = "-"
var r19 = "-"
var r20 = "-"
var r21 = "-"
var r22 = "-"
var r23 = "-"
var r24 = "-"
var r25 = "-"


export default function App({navigation}) {
    const [ans1,sans1] = useState("-")
    const [ans2,sans2] = useState("-")
    const [ans3,sans3] = useState("-")
    const [ans4,sans4] = useState("-")
    const [ans5,sans5] = useState("-")

    const a1 = (e) => {sans1(e)}
    const a2 = (e) => {sans2(e)}
    const a3 = (e) => {sans3(e)}
    const a4 = (e) => {sans4(e)}
    const a5 = (e) => {sans5(e)}


    const ToEnd = () => {
        navigation.navigate("blank2")
    }


    var cell = db.collection("Evo1").doc("analit");
    cell.get().then((doc) => {
      var q = doc.data()
      r1  = q.r1 
      r2  = q.r2 
      r3  = q.r3 
      r4  = q.r4 
      r5  = q.r5 
      r6  = q.r6 
      r7  = q.r7 
      r8  = q.r8 
      r9  = q.r9 
      r10 = q.r10
      r11 = q.r11
      r12 = q.r12
      r13 = q.r13
      r14 = q.r14
      r15 = q.r15
      r16 = q.r16
      r17 = q.r17
      r18 = q.r18
      r19 = q.r19
      r20 = q.r20
      r21 = q.r21
      r22 = q.r22
      r23 = q.r23
      r24 = q.r24
      r25 = q.r25
    })


    const send = () => {
        res = "Отзыв: " + ans1 + "///  Лишнее: " + ans2 + "///  Добавить: " + ans3 + "///  Частота использования: " + ans4 + "///  Оценка: " + ans5
        db.collection("Evo1").doc("analit").update({r1:res})
        db.collection("Evo1").doc("analit").update({r2:r1 })
        db.collection("Evo1").doc("analit").update({r3:r2 })
        db.collection("Evo1").doc("analit").update({r4:r3 })
        db.collection("Evo1").doc("analit").update({r5:r4 })
        db.collection("Evo1").doc("analit").update({r6:r5 })
        db.collection("Evo1").doc("analit").update({r7:r6 })
        db.collection("Evo1").doc("analit").update({r8:r7 })
        db.collection("Evo1").doc("analit").update({r9:r8 })
        db.collection("Evo1").doc("analit").update({r10:r9 })
        db.collection("Evo1").doc("analit").update({r11:r10})
        db.collection("Evo1").doc("analit").update({r12:r11})
        db.collection("Evo1").doc("analit").update({r13:r12})
        db.collection("Evo1").doc("analit").update({r14:r13})
        db.collection("Evo1").doc("analit").update({r15:r14})
        db.collection("Evo1").doc("analit").update({r16:r15})
        db.collection("Evo1").doc("analit").update({r17:r16})
        db.collection("Evo1").doc("analit").update({r18:r17})
        db.collection("Evo1").doc("analit").update({r19:r18})
        db.collection("Evo1").doc("analit").update({r20:r19})
        db.collection("Evo1").doc("analit").update({r21:r20})
        db.collection("Evo1").doc("analit").update({r22:r21})
        db.collection("Evo1").doc("analit").update({r23:r22})
        db.collection("Evo1").doc("analit").update({r24:r23})
        db.collection("Evo1").doc("analit").update({r25:r24})
        ToEnd()
    }

    return (
      <SafeAreaView style={styles.background}>

        <Text style={styles.title}>Пожалуйста,заполните эту анкету,она полностью анонимная,с ее помощью вы можете повлиять на наше приложение.</Text>

        <TextInput style={styles.input} onChangeText={a1} placeholder={"Как вам EvoLine?"}/>
        <TextInput style={styles.input} onChangeText={a2} placeholder={"Какие функции лишние?"}/>
        <TextInput style={styles.input} onChangeText={a3} placeholder={"Чего не хватает?"}/>
        <TextInput style={styles.input} onChangeText={a4} placeholder={"Как часто пользуетесь EvoLine?"}/>
        <TextInput style={styles.input} onChangeText={a5} placeholder={"Оцените EvoLine от 1 до 10"}/>

        <Text style={styles.text} onPress={send}>Отправить</Text>


      </SafeAreaView>
    );
}


  
const styles = StyleSheet.create({
    background: {
     backgroundColor:"#800000",
     flex:1,
     alignItems:"center"
   },
   warning:{
    color:"white",
    textAlign:"center",
    padding:10,
    marginTop:20
  },
  title:{
    color:"white",
    textAlign:"center",
    padding:10,
    marginTop:20,
    fontSize:25,
    fontFamily:"ubuntu-bold",
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
    padding:"5%" ,
    fontSize:20,
    paddingVertical:6,
    margin:6,
    fontFamily:"ubuntu-light",
  },
});
