import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View ,ScrollView} from 'react-native';

const firebase = require("firebase")
require("firebase/firestore")

const db = firebase.firestore();
//var ques = 2
var h = 1
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
  const tohome = () => {
    navigation.navigate("home")
  }

  const [q ,sq ]=        useState("Загрузка...")
  const [n1,sn1] =       useState("-")
  const [n2,sn2] =       useState("-")
  const [n3,sn3] =       useState("-")
  const [n4,sn4] =       useState("-")
  const [n5,sn5] =       useState("-")
  const [max,smax] =     useState(7)
  const [ques,sques] =   useState(2)
  const [teans,steans] = useState("-")
  const [score,sscore] = useState(2)
  const [name,setname] = useState("-")
 
  
  var cell = db.collection("Evo1").doc("kvest");
  cell.get().then((doc) => {
    var q = doc.data()
    smax(q.max)
    if (h == 1){
      h = 0
      sq(q.q1)
      sn1(q.a11)
      sn2(q.a12)
      sn3(q.a13)
      sn4(q.a14)
      sn5(q.a15)
      steans(q.an1)
      setname(q.nick)
    }
  })


  var cell = db.collection("Evo1").doc("kresult");
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

  
 
  

  const fin = (e) => {
    sq("Ожидайте")
    sn1("-")
    sn2("-")
    sn3("-")
    sn4("-")
    sn5("-")
    steans("")
    if (e == "Выйти"){
      wrtres()
      tohome()
    }
    
    if (e==teans && ques <= max){
      sscore(score + 1)
    }
    if (ques <= max){
      sques(ques +  1)
    }
    //ques = ques + 1
    cell = db.collection("Evo1").doc("kvest");
    cell.get().then((doc) => {
      var q = doc.data()
      if (ques >= max + 1){
        res = " " + name + ": " + (score - 1) + "/" + max
        sq("Тест завершен")
        setTimeout(() => {
          sn1("Ваш балл:")
          sn2(score - 1)
          sn3("Макс. балл:")
          sn4(max)
          sn5("Выйти")
        }, 400);
      }//else if(ques == 1){
       // sq(q.q1)
       // sn1(q.a11)
       // sn2(q.a12)
       // sn3(q.a13)
       // sn4(q.a14)
       // sn5(q.a15)
       // steans(q.an1)
      //}
      else if(ques == 2){
        sq(q.q2)
        sn1(q.a21)
        sn2(q.a22)
        sn3(q.a23)
        sn4(q.a24)
        sn5(q.a25)
        steans(q.an2)
      }else if(ques == 3){
        sq(q.q3)
        sn1(q.a31)
        sn2(q.a32)
        sn3(q.a33)
        sn4(q.a34)
        sn5(q.a35)
        steans(q.an3)
      }else if(ques == 4){
        sq(q.q4)
        sn1(q.a41)
        sn2(q.a42)
        sn3(q.a43)
        sn4(q.a44)
        sn5(q.a45)
        steans(q.an4)
      }else if(ques == 5){
        sq(q.q5)
        sn1(q.a51)
        sn2(q.a52)
        sn3(q.a53)
        sn4(q.a54)
        sn5(q.a55)
        steans(q.an5)
      }else if(ques == 6){
        sq(q.q6)
        sn1(q.a61)
        sn2(q.a62)
        sn3(q.a63)
        sn4(q.a64)
        sn5(q.a65)
        steans(q.an6)
      }else if(ques == 7){
        sq(q.q7)
        sn1(q.a71)
        sn2(q.a72)
        sn3(q.a73)
        sn4(q.a74)
        sn5(q.a75)
        steans(q.an7)
      }else if(ques == 8){
        sq(q.q8)
        sn1(q.a81)
        sn2(q.a82)
        sn3(q.a83)
        sn4(q.a84)
        sn5(q.a85)
        steans(q.an8)
      }else if(ques == 9){
        sq(q.q9)
        sn1(q.a91)
        sn2(q.a92)
        sn3(q.a93)
        sn4(q.a94)
        sn5(q.a95)
        steans(q.an9)
      }else if(ques == 10){
        sq(q.q10)
        sn1(q.a101)
        sn2(q.a102)
        sn3(q.a103)
        sn4(q.a104)
        sn5(q.a105)
        steans(q.an10)
      }
    });

  }

  const wrtres = () => {

    db.collection("Evo1").doc("kresult").update({r1:res})
    db.collection("Evo1").doc("kresult").update({r2:r1 })
    db.collection("Evo1").doc("kresult").update({r3:r2 })
    db.collection("Evo1").doc("kresult").update({r4:r3 })
    db.collection("Evo1").doc("kresult").update({r5:r4 })
    db.collection("Evo1").doc("kresult").update({r6:r5 })
    db.collection("Evo1").doc("kresult").update({r7:r6 })
    db.collection("Evo1").doc("kresult").update({r8:r7 })
    db.collection("Evo1").doc("kresult").update({r9:r8 })
    db.collection("Evo1").doc("kresult").update({r10:r9 })
    db.collection("Evo1").doc("kresult").update({r11:r10})
    db.collection("Evo1").doc("kresult").update({r12:r11})
    db.collection("Evo1").doc("kresult").update({r13:r12})
    db.collection("Evo1").doc("kresult").update({r14:r13})
    db.collection("Evo1").doc("kresult").update({r15:r14})
    db.collection("Evo1").doc("kresult").update({r16:r15})
    db.collection("Evo1").doc("kresult").update({r17:r16})
    db.collection("Evo1").doc("kresult").update({r18:r17})
    db.collection("Evo1").doc("kresult").update({r19:r18})
    db.collection("Evo1").doc("kresult").update({r20:r19})
    db.collection("Evo1").doc("kresult").update({r21:r20})
    db.collection("Evo1").doc("kresult").update({r22:r21})
    db.collection("Evo1").doc("kresult").update({r23:r22})
    db.collection("Evo1").doc("kresult").update({r24:r23})
    db.collection("Evo1").doc("kresult").update({r25:r24})
  }
  return (
    <SafeAreaView style={styles.background}>
        <Text style={styles.title}>
           {q}
        </Text>
        <Text  style={styles.warning}>У вас есть 1 попытка! При попытке повторного прохождения будут учитываться худшие результаты!</Text>
        <Text style={styles.subs} onPress={() => fin(n1)}>{n1}</Text>
        <Text style={styles.subs} onPress={() => fin(n2)}>{n2}</Text>
        <Text style={styles.subs} onPress={() => fin(n3)}>{n3}</Text>
        <Text style={styles.subs} onPress={() => fin(n4)}>{n4}</Text>
        <Text style={styles.subs} onPress={() => fin(n5)}>{n5}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  background:{
    backgroundColor:"#800000",
    flex:1,
    alignItems:"center",
  },
  title:{
    fontSize:27,
    textAlign:"center",
    backgroundColor:"white",
    color:"#800000",
    width:"93%",
    margin:7,
    marginTop:15,
    padding:10,
    borderRadius:20,
    justifyContentz:"center",
    textAlign:'center',
    fontFamily:"ubuntu-bold",
  },
  warning:{
    fontSize:17,
    textAlign:"center",
    color:"white",
    paddingBottom:9,
    fontFamily:"ubuntu-light",
  },
  subs:{
    width:"100%",
    fontSize:30,
    backgroundColor:"white",
    color:"#800000",
    borderColor:"#800000",
    borderWidth:2,
    padding:"4%",
    
    fontFamily:"ubuntu-light",
  },
});

